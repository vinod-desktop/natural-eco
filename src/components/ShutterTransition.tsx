"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Sprout } from "lucide-react";

type Stage = "idle" | "covering" | "covered" | "revealing";

/** Top -> bottom slide that fully covers the current page. */
const COVER_MS = 450;
/** Minimum time held at 100% coverage once the new route has mounted. */
const HOLD_MS = 250;
/** Bottom -> top slide that reveals the new page. */
const REVEAL_MS = 450;
/** Safety net so a slow/failed navigation can never strand the overlay. */
const NAV_TIMEOUT_MS = 2500;

export default function ShutterTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [stage, setStage] = useState<Stage>("idle");

  const pendingUrlRef = useRef<string | null>(null);

  // Step 1: a nav link was clicked -> start covering.
  useEffect(() => {
    const handleShutterEvent = (e: Event) => {
      // Ignore re-triggers while a transition is already playing.
      if (stage !== "idle") return;

      const targetUrl = (e as CustomEvent<{ url?: string }>).detail?.url;
      if (!targetUrl || targetUrl === pathname) return;

      pendingUrlRef.current = targetUrl;
      setStage("covering");
    };

    window.addEventListener("trigger-shutter", handleShutterEvent);
    return () => window.removeEventListener("trigger-shutter", handleShutterEvent);
  }, [stage, pathname]);

  // Step 2: once the layer has finished sliding down, the screen is 100%
  // covered — only then is it safe to change the route.
  useEffect(() => {
    if (stage !== "covering") return;

    const timer = setTimeout(() => {
      if (pendingUrlRef.current) {
        router.push(pendingUrlRef.current);
      }
      setStage("covered");
    }, COVER_MS);

    return () => clearTimeout(timer);
  }, [stage, router]);

  // Step 3: stay fully covered until the new route has actually mounted, then
  // hold a beat. This re-runs when `pathname` lands on the target.
  useEffect(() => {
    if (stage !== "covered") return;

    const target = pendingUrlRef.current;
    const arrived = !target || pathname === target;

    const timer = setTimeout(
      () => {
        pendingUrlRef.current = null;
        setStage("revealing");
      },
      arrived ? HOLD_MS : NAV_TIMEOUT_MS
    );

    return () => clearTimeout(timer);
  }, [stage, pathname]);

  // Step 4: the layer slides bottom -> top, revealing the new page.
  useEffect(() => {
    if (stage !== "revealing") return;

    const timer = setTimeout(() => setStage("idle"), REVEAL_MS);
    return () => clearTimeout(timer);
  }, [stage]);

  // The layer stays mounted (parked off-screen above the viewport) so that the
  // browser has a painted starting frame to transition *from*. Unmounting it
  // while idle is what made the cover phase snap instead of slide.
  const isCovering = stage === "covering" || stage === "covered";

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/*
        Natural Eco Shutter Sequence:
        1. User clicks a nav link.
        2. Layer slides from top (-100%) to 0%, completely covering the page.
        3. Only after 100% coverage does the route change underneath.
        4. Layer slides from 0% back to -100%, revealing the new page.
      */}
      <div
        className="w-full h-full bg-gradient-to-b from-[#042834] via-[#084C61] to-[#1B5E20] border-b-4 border-[#E65100] shadow-2xl flex flex-col items-center justify-center will-change-transform transition-transform ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{
          transform: isCovering ? "translateY(0%)" : "translateY(-100%)",
          transitionDuration: `${stage === "revealing" ? REVEAL_MS : COVER_MS}ms`,
        }}
      >
        {/* Centered site logo — fades in as the layer descends. */}
        <div
          className={`transition-all duration-300 ease-out transform ${
            isCovering ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-2xl px-10 py-6 rounded-3xl shadow-2xl border-2 border-white/90 flex flex-col items-center gap-2.5">
            <div className="relative h-16 w-60">
              <Image
                src="/assets/logo.png"
                alt="Charotar Soap Factory Eco Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#2E7D32] uppercase tracking-wider pt-1 border-t border-[#E8DFD5] w-full justify-center">
              <Sprout className="w-4 h-4 text-[#E65100]" /> 100% Botanical &amp; Phosphate-Free &bull; Since 1970
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

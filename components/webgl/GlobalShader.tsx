"use client";

import { usePathname } from "next/navigation";
import WaterShader from "@/components/webgl/WaterShader";

/**
 * Global fixed shader background.
 * tide (blue water) on home + services + results + contact.
 * undertow (red vortex with blue threads) on about, blog, service-areas, legal.
 */
const TIDE = /^\/$|^\/services|^\/results|^\/contact/;

export default function GlobalShader() {
  const pathname = usePathname() || "/";
  const variant = TIDE.test(pathname) ? "tide" : "undertow";
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <WaterShader key={variant} variant={variant} className="!absolute" />
    </div>
  );
}

import { Home, Droplets, ArrowUpFromLine, CarFront, SprayCan, Fence, type LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  home: Home,
  droplets: Droplets,
  roof: ArrowUpFromLine,
  car: CarFront,
  spray: SprayCan,
  porch: Fence,
};

export default function ServiceIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const Icon = map[name] ?? Droplets;
  return <Icon className={className} aria-hidden="true" />;
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 pt-16 text-center">
      <p className="font-display text-7xl font-extrabold text-electric/40">404</p>
      <h1 className="mt-4 font-hero text-3xl font-extrabold text-white">This page is dirt-free. It also doesn&rsquo;t exist.</h1>
      <p className="mt-3 text-mist">The link may be old or mistyped. Let&rsquo;s get you back to something clean.</p>
      <Link href="/" className="mt-8 rounded-lg bg-electric/90 px-7 py-3.5 font-bold text-ink transition-colors hover:bg-white">
        Back to home
      </Link>
    </section>
  );
}

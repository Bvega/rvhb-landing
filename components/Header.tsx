import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container-default flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-white mr-2">R</span>
          <span>RVHB</span>
        </Link>
        <nav role="navigation" aria-label="Primary" className="flex items-center gap-3 text-sm">
          <Link href="#how" className="hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">How it works</Link>
          <Link href="#benefits" className="hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">Benefits</Link>
          <Link href="#testimonials" className="hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">Testimonials</Link>
          <a href="#cta" className="rounded-2xl bg-blue-900 px-4 py-2 text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}

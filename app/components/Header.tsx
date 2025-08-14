"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-surface/70 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-tight text-primary">LimoLux</div>
        <nav className="hidden md:flex gap-8 text-base font-medium text-gray-300">
          <Link href="#" className="hover:text-white transition">Home</Link>
          <Link href="#services" className="hover:text-white transition">Services</Link>
          <Link href="#fleet" className="hover:text-white transition">Fleet</Link>
          <Link href="#booking" className="hover:text-white transition">Booking</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </nav>
        <Link href="#booking" className="ml-4 px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-black/30 hover:brightness-110 transition hidden md:inline-block">Book Now</Link>
        <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary text-white" aria-label="Open menu">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </header>
  );
}

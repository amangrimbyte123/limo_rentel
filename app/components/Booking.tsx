import Image from "next/image";

const services = [
  "Airport Transfers",
  "Party Bus Rentals",
  "Corporate Transportation",
  "Special Occasions",
];

export default function Booking({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative py-20 md:py-28 w-full bg-gradient-to-br from-black/90 to-[#1a1a1a]/90 overflow-hidden ${className}`}
      id="booking"
    >
      {/* Background Image with vignette overlay to match Hero */}
      <Image
        src="/book_section1.jpg"
        alt="Luxury Limo Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Book Your
            <span className="ml-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">Ride</span>
          </h2>
          <p className="mt-3 text-white/80 text-lg md:text-xl">Luxury, comfort, and style—reserve in under a minute.</p>
        </div>

        {/* Glassmorphism Form Card */}
        <form className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 md:p-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
            />
            <select
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
              defaultValue=""
            >
              <option value="" disabled className="text-black">Select Service</option>
              {services.map((service) => (
                <option key={service} value={service} className="text-black">{service}</option>
              ))}
            </select>
            <input
              type="date"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition [color-scheme:dark]"
            />
            <input
              type="text"
              placeholder="Pickup Location"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
            />
            <input
              type="text"
              placeholder="Drop-off Location"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-xl border-2 border-[color:var(--primary)] hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/40"
            >
              Request Booking
            </button>
            <span className="text-white/70 text-sm">Instant confirmation. No hidden fees.</span>
          </div>
        </form>
      </div>
    </section>
  );
}

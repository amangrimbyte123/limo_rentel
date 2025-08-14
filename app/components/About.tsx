import Image from "next/image";
import { FiShield, FiClock, FiStar } from "react-icons/fi";

export default function About({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative py-20 md:py-28 w-full bg-[url('/about_section.jpg')] bg-cover bg-center overflow-hidden ${className}`}
      id="about"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 relative h-[420px]">
            <div className="absolute -top-3 -left-3 z-20 rounded-full px-5 py-2 bg-white text-[#bfa800] font-semibold border-2 border-[#bfa800] shadow">
              15+ Years of Excellence
            </div>
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-[color:var(--primary)] shadow-2xl bg-foreground/5">
              <Image
                src="/feet/black-chrysler-limousine.jpg"
                alt="LimoLux Signature Fleet"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-36 rounded-xl overflow-hidden border-4 border-[color:var(--primary)] shadow-xl bg-foreground/10">
              <Image
                src="/fleet3.jpg"
                alt="Executive Interior"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="md:col-span-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              About
              <span className="ml-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">LimoLux</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              Houston’s premier luxury transportation partner. Professional chauffeurs, a pristine fleet, and a white-glove experience from pickup to drop-off.
            </p>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-1 rounded-full p-3 bg-foreground/10 border border-[color:var(--primary)] text-[color:var(--primary)]">
                  <FiShield size={20} />
                </span>
                <div>
                  <div className="font-semibold text-white">Professional & Vetted Chauffeurs</div>
                  <p className="text-white/80">Trained, courteous, and focused on your safety and comfort.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 rounded-full p-3 bg-foreground/10 border border-[color:var(--primary)] text-[color:var(--primary)]">
                  <FiStar size={20} />
                </span>
                <div>
                  <div className="font-semibold text-white">Luxury Fleet, Impeccably Maintained</div>
                  <p className="text-white/80">From executive sedans to party buses—cleaned and detailed before every ride.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 rounded-full p-3 bg-foreground/10 border border-[color:var(--primary)] text-[color:var(--primary)]">
                  <FiClock size={20} />
                </span>
                <div>
                  <div className="font-semibold text-white">On-Time, Every Time</div>
                  <p className="text-white/80">24/7 availability with real-time tracking and reliable scheduling.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="backdrop-blur bg-foreground/5 border border-foreground/20 rounded-xl p-4">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">15+</div>
                <div className="text-white/80 text-sm">Years</div>
              </div>
              <div className="backdrop-blur bg-foreground/5 border border-foreground/20 rounded-xl p-4">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">1,000+</div>
                <div className="text-white/80 text-sm">Happy Clients</div>
              </div>
              <div className="backdrop-blur bg-foreground/5 border border-foreground/20 rounded-xl p-4">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">4.9★</div>
                <div className="text-white/80 text-sm">Avg. Rating</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#fleet"
                className="relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-[var(--primary)] text-black font-bold text-lg shadow-xl border-2 border-[color:var(--primary)] hover:bg-[var(--primary-light)] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/40"
              >
                Explore Fleet
              </a>
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground/10 text-white font-semibold border-2 border-[color:var(--primary)] hover:bg-foreground/20 transition-all duration-200"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

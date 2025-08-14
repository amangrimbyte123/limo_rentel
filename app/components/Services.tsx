'use client';

import Image from "next/image";

const services = [
  {
    title: "Airport Travel",
    image: "/fleet1.jpg",
    description:
      "Elite Limousines of Houston specializes in meeting all your airport needs. Our chauffeurs are equipped with two-way radios and cellular phones to be updated with any weather, traffic, or flight information, allowing our staff to take the necessary precautionary action to ensure that you arrive safe, relaxed, and on time.",
  },
  {
    title: "Weddings",
    image: "/fleet3.jpg",
    description:
      "We treat our brides, grooms and wedding parties in a graceful manner. Your perfect day needs the perfect stretch limousine to get you to the church on time and in style! Choose from the latest models, from SUV to the traditional classic style Lincoln Stretch.",
  },
  {
    title: "Corporate Travel",
    image: "/fleet2.jpg",
    description:
      "Professional, discreet, and reliable service for business executives and teams. Arrive at your meetings and events in comfort and style, with amenities to help you stay productive on the go.",
  },
  {
    title: "Special Events",
    image: "/fleet4.jpg",
    description:
      "Make your special occasions unforgettable with our luxury fleet. Perfect for proms, parties, and celebrations, our limos offer a VIP experience for you and your guests.",
  },
];

export default function Services({ className = "" }: { className?: string }) {
  return (
    <section className={`py-16 bg-gradient-to-br from-black/90 to-[#1a1a1a]/90 text-white ${className}`} id="services">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--primary)] drop-shadow-lg">HOUSTON LIMO SERVICES</h2>
        <div className="flex flex-col gap-1">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 w-full flex items-center justify-center">
                <div className="relative w-full h-64 md:h-80 rounded-2xl shadow-2xl overflow-hidden border-4 border-[var(--primary)] bg-black/30">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full flex flex-col justify-center">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 mb-4">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-[var(--primary)] drop-shadow">{service.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed text-white/90">{service.description}</p>
                  <button className="relative inline-block px-8 py-3 rounded-full bg-transparent text-[color:var(--primary)] font-semibold text-lg shadow-xl border-2 border-[color:var(--primary)] overflow-hidden button-shine hover:bg-[color:var(--primary)] hover:text-primary-foreground hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/40 w-fit">
                    <span className="relative z-10">LEARN MORE</span>
                    <span className="shine" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .button-shine {
          position: relative;
          overflow: hidden;
        }
        .button-shine .shine {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%);
          transform: skewX(-20deg);
          animation: shine-move 2.2s infinite cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes shine-move {
          0% { left: -75%; }
          100% { left: 125%; }
        }
      `}</style>
    </section>
  );
}

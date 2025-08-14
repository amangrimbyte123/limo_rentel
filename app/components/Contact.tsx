export default function Contact({ className = "" }: { className?: string }) {
  return (
    <section className={`py-20 bg-surface ${className}`} id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 luxury-badge mb-4">
            <span className="rating-text">Available 24/7</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Contact Us</h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-primary/80" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="inline-block h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">📞</span>
              <div>
                <div className="text-sm uppercase tracking-wide text-gray-400">Phone</div>
                <a href="tel:+18325551234" className="text-lg font-semibold text-white hover:text-primary transition">(832) 555-1234</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-block h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">✉️</span>
              <div>
                <div className="text-sm uppercase tracking-wide text-gray-400">Email</div>
                <a href="mailto:info@limolux.com" className="text-lg font-semibold text-white hover:text-primary transition">info@limolux.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-block h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">📍</span>
              <div>
                <div className="text-sm uppercase tracking-wide text-gray-400">Address</div>
                <div className="text-lg font-semibold text-white">123 Main St, Houston, TX 77002</div>
              </div>
            </div>
            <div className="w-full h-44 rounded-2xl border border-white/10 bg-gradient-to-br from-black/20 to-white/5 flex items-center justify-center text-gray-400">
              [Map Placeholder]
            </div>
          </div>
          <form className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur p-6 md:p-8 flex flex-col gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <input
              type="text"
              placeholder="Full name"
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary/60 transition"
            />
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary/60 transition"
            />
            <textarea
              placeholder="How can we help you?"
              rows={5}
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary/60 transition"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-black/30 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-primary/40 transition"
            >
              Send Message
            </button>
            <p className="text-xs text-gray-400 text-center">We typically respond within 10 minutes.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

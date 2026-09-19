export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <p className="text-gold mb-2 text-sm font-medium">Contact us</p>
      <h1 className="font-display mb-4 text-3xl md:text-5xl">We&apos;re here for you</h1>
      <p className="text-muted mb-12 max-w-md">
        Have a question, want to book an event or just want to say hi? Drop us a message and
        we&apos;ll get back to you soon.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
          alt="Inside Mokka"
          className="h-72 w-full rounded-lg object-cover md:h-full"
        />

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="border-ink/15 placeholder:text-muted focus:border-gold w-full rounded border bg-white px-4 py-3 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your email"
            className="border-ink/15 placeholder:text-muted focus:border-gold w-full rounded border bg-white px-4 py-3 focus:outline-none"
          />
          <select className="border-ink/15 text-muted focus:border-gold w-full rounded border bg-white px-4 py-3 focus:outline-none">
            <option>Subject</option>
            <option>General question</option>
            <option>Book an event</option>
            <option>Feedback</option>
            <option>Careers</option>
          </select>
          <textarea
            placeholder="Message"
            rows={5}
            className="border-ink/15 placeholder:text-muted focus:border-gold w-full rounded border bg-white px-4 py-3 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-gold text-ink hover:bg-goldlight w-full rounded-full px-6 py-3 font-medium transition md:w-fit"
          >
            Send message
          </button>
        </form>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="bg-ink text-cream rounded-lg p-8">
          <p className="text-goldlight mb-2 text-sm">Visit us</p>
          <h3 className="font-display mb-4 text-2xl">Come say hello!</h3>
          <p className="text-cream/80 mb-1 text-sm">ul. Kawiorniana 12, 31-123 Kraków, Poland</p>
          <p className="text-cream/80 mb-6 text-sm">
            Mon – Fri: 7:00 – 20:00 · Sat – Sun: 8:00 – 21:00
          </p>
          <a
            href="#"
            className="bg-gold text-ink hover:bg-goldlight inline-block rounded-full px-5 py-2.5 text-sm transition"
          >
            Get directions
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=900&auto=format&fit=crop"
          className="h-full min-h-[220px] w-full rounded-lg object-cover"
          alt="Map area"
        />
      </div>
    </section>
  );
}

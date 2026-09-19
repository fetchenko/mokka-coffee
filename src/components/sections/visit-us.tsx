import { sections } from "@/config/navigation";

export default function VisitUs() {
  return (
    <section
      id={sections.visitUs}
      className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24"
    >
      <div className="bg-ink text-cream rounded-lg p-8">
        <p className="text-goldlight mb-2 text-sm">Visit us</p>
        <h3 className="font-display mb-4 text-2xl">We&apos;d love to see you!</h3>
        <p className="text-cream/80 mb-1 text-sm">ul. Kawiorniana 12, 31-123 Kraków, Poland</p>
        <p className="text-cream/80 mb-6 text-sm">
          Mon – Fri: 7:00 – 20:00 · Sat – Sun: 8:00 – 21:00
        </p>
        <a
          href="contact.html"
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
    </section>
  );
}

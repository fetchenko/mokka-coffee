export default function Testimonialls() {
  return (
    <section className="bg-[#EFEAE2]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-gold mb-2 text-sm font-medium">What people say</p>
        <h2 className="font-display mb-8 text-3xl md:text-4xl">Our guests love us</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <blockquote className="bg-cream rounded-lg p-6">
            <p className="text-gold mb-3">★★★★★</p>
            <p className="mb-4">The best coffee in town! Cozy place and amazing vibes.</p>
            <p className="text-muted text-sm">Anna K.</p>
          </blockquote>
          <blockquote className="bg-cream rounded-lg p-6">
            <p className="text-gold mb-3">★★★★★</p>
            <p className="mb-4">I come here every morning, and delicious pastries.</p>
            <p className="text-muted text-sm">Magda L.</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

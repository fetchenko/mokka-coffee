export default function MenuPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <p className="text-gold mb-2 text-sm font-medium">Menu preview</p>
      <h2 className="font-display mb-8 text-3xl md:text-4xl">Something for everyone</h2>
      <div className="grid items-start gap-10 md:grid-cols-2">
        <ul className="divide-ink/10 divide-y text-sm">
          <li className="flex justify-between py-3">
            <span>Espresso</span>
            <span className="text-muted">9 PLN</span>
          </li>
          <li className="flex justify-between py-3">
            <span>Americano</span>
            <span className="text-muted">10 PLN</span>
          </li>
          <li className="flex justify-between py-3">
            <span>Latte</span>
            <span className="text-muted">12 PLN</span>
          </li>
          <li className="flex justify-between py-3">
            <span>Mocha</span>
            <span className="text-muted">13 PLN</span>
          </li>
          <li className="flex justify-between py-3">
            <span>Caramel Latte</span>
            <span className="text-muted">13 PLN</span>
          </li>
          <li className="flex justify-between py-3">
            <span>Cold Brew</span>
            <span className="text-muted">14 PLN</span>
          </li>
        </ul>
        <img
          src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop"
          className="h-64 w-full rounded-lg object-cover"
          alt="Pastry and coffee"
        />
      </div>
      <a href="menu.html" className="text-gold mt-8 inline-block text-sm hover:underline">
        View full menu →
      </a>
    </section>
  );
}

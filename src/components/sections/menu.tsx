export default function Menu() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <p className="text-gold mb-2 text-sm font-medium">Our menu</p>
      <h1 className="font-display mb-4 text-3xl md:text-5xl">Something for everyone</h1>
      <p className="text-muted mb-12 max-w-md">
        Carefully selected beans, unique recipes and a lot of love in every cup.
      </p>

      <div className="space-y-14">
        <div id="coffee">
          <h2 className="text-gold mb-4 text-xs font-semibold tracking-wide">COFFEE</h2>
          <ul className="divide-ink/10 divide-y">
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Espresso</p>
                <p className="text-muted text-sm">Rich and bold</p>
              </div>
              <span className="text-gold">9 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Americano</p>
                <p className="text-muted text-sm">Simple and classNameic</p>
              </div>
              <span className="text-gold">10 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Latte</p>
                <p className="text-muted text-sm">Smooth and milky</p>
              </div>
              <span className="text-gold">12 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Cappuccino</p>
                <p className="text-muted text-sm">classNameic and aromatic</p>
              </div>
              <span className="text-gold">12 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Flat White</p>
                <p className="text-muted text-sm">Smooth and balanced</p>
              </div>
              <span className="text-gold">12 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Mocha</p>
                <p className="text-muted text-sm">Chocolatey and sweet</p>
              </div>
              <span className="text-gold">13 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Caramel Latte</p>
                <p className="text-muted text-sm">With homemade caramel</p>
              </div>
              <span className="text-gold">13 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Cold Brew</p>
                <p className="text-muted text-sm">Refreshing and smooth</p>
              </div>
              <span className="text-gold">14 PLN</span>
            </li>
          </ul>
        </div>

        <div id="non-coffee">
          <h2 className="text-gold mb-4 text-xs font-semibold tracking-wide">NON-COFFEE</h2>
          <ul className="divide-ink/10 divide-y">
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Matcha Latte</p>
                <p className="text-muted text-sm">Green and energizing</p>
              </div>
              <span className="text-gold">14 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Hot Chocolate</p>
                <p className="text-muted text-sm">Rich and creamy</p>
              </div>
              <span className="text-gold">12 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Chai Latte</p>
                <p className="text-muted text-sm">Spiced and warm</p>
              </div>
              <span className="text-gold">12 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Lemonade</p>
                <p className="text-muted text-sm">Fresh and fruity</p>
              </div>
              <span className="text-gold">10 PLN</span>
            </li>
          </ul>
        </div>

        <div id="pastries">
          <h2 className="text-gold mb-4 text-xs font-semibold tracking-wide">PASTRIES</h2>
          <ul className="divide-ink/10 divide-y">
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Cinnamon Roll</p>
                <p className="text-muted text-sm">Soft and fragrant</p>
              </div>
              <span className="text-gold">9 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Croissant</p>
                <p className="text-muted text-sm">Buttery and flaky</p>
              </div>
              <span className="text-gold">8 PLN</span>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Cheesecake</p>
                <p className="text-muted text-sm">Creamy and delicious</p>
              </div>
              <span className="text-gold">12 PLN</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-ink text-cream mt-16 flex flex-col gap-4 rounded-lg p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-goldlight mb-1 text-sm">Have questions?</p>
          <h3 className="font-display text-xl">Feel free to contact us</h3>
        </div>
        <a
          href="contact.html"
          className="bg-gold text-ink hover:bg-goldlight inline-block w-fit rounded-full px-6 py-3 text-sm transition"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}

import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header>
      <div>
        <Link href="/" aria-label="Mokka Coffee home">
          <span>MOKKA</span>
          <span>Specialty Coffee</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/#visit-us">
          Visit Us
        </Link>
      </div>
    </header>
  );
}
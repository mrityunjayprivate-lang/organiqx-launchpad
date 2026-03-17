import { Instagram, Twitter, Facebook, Leaf } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#philosophy" },
  { label: "Contact", href: "#cta" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <a href="#hero">
          <img src={orgLogo} alt="ORGANIQX" className="h-8 w-auto brightness-0 invert" />
        </a>

        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-gold transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-gold transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-gold transition-colors">
            <Facebook size={20} />
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-8 pt-6 border-t border-border text-center">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} ORGANIQX. All rights reserved. Premium healthy snacks.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

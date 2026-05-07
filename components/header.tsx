"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "الرئيسية", href: "#" },
  { label: "الفئات", href: "#categories" },
  { label: "كيف نعمل", href: "#how-it-works" },
  { label: "التغطية", href: "#coverage" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <nav className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="size-10 rounded-xl bg-gradient-to-br from-cyan to-magenta flex items-center justify-center">
              <span className="text-background font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold gradient-text">Beylens</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              تسجيل الدخول
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
              ابدأ مجاناً
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glass rounded-2xl mt-2 p-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-border" />
              <Button variant="ghost" className="justify-start text-muted-foreground">
                تسجيل الدخول
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                ابدأ مجاناً
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

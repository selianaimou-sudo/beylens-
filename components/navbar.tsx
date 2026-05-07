"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "المميزات" },
    { href: "#prices", label: "الأسعار" },
    { href: "#how-it-works", label: "كيف يعمل" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
              <span className="text-lg font-bold text-background">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Beylens</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105">
              ابدأ الآن
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-lg p-2 text-foreground hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="mt-2 w-full rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-foreground/90">
              ابدأ الآن
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

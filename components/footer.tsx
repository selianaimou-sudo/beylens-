"use client";

import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  product: {
    title: "المنتج",
    links: [
      { label: "مقارنة الأسعار", href: "#" },
      { label: "الفئات", href: "#" },
      { label: "درجة الثقة", href: "#" },
      { label: "التطبيق", href: "#" },
    ],
  },
  company: {
    title: "الشركة",
    links: [
      { label: "من نحن", href: "#" },
      { label: "وظائف", href: "#" },
      { label: "المدونة", href: "#" },
      { label: "تواصل معنا", href: "#" },
    ],
  },
  legal: {
    title: "قانوني",
    links: [
      { label: "سياسة الخصوصية", href: "#" },
      { label: "الشروط والأحكام", href: "#" },
      { label: "الكوكيز", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="size-10 rounded-xl bg-gradient-to-br from-cyan to-magenta flex items-center justify-center">
                <span className="text-background font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold gradient-text">Beylens</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              منصة مقارنة الأسعار الأكثر تطوراً في أوروبا. نوفر عليك الوقت والمال بذكاء اصطناعي.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="size-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Beylens. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>صنع بـ ❤️ في أوروبا</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

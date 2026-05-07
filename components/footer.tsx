export function Footer() {
  const footerLinks = {
    company: {
      title: "الشركة",
      links: [
        { label: "من نحن", href: "#" },
        { label: "المدونة", href: "#" },
        { label: "الوظائف", href: "#" },
        { label: "تواصل معنا", href: "#" },
      ],
    },
    support: {
      title: "الدعم",
      links: [
        { label: "مركز المساعدة", href: "#" },
        { label: "الأسئلة الشائعة", href: "#" },
        { label: "سياسة الخصوصية", href: "#" },
        { label: "شروط الاستخدام", href: "#" },
      ],
    },
    countries: {
      title: "الدول",
      links: [
        { label: "ألمانيا", href: "#" },
        { label: "فرنسا", href: "#" },
        { label: "هولندا", href: "#" },
        { label: "إسبانيا", href: "#" },
      ],
    },
  };

  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                <span className="text-lg font-bold text-background">B</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Beylens</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              منصة مقارنة الأسعار الذكية المدعومة بالذكاء الاصطناعي. نساعدك في
              العثور على أفضل الأسعار عبر أوروبا.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {["twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Beylens. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

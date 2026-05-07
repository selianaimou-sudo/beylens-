import { Brain, TrendingDown, Globe, Bell, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "ذكاء اصطناعي متقدم",
    description:
      "خوارزميات متطورة تحلل ملايين المنتجات وتجد لك أفضل الصفقات في ثوانٍ",
  },
  {
    icon: TrendingDown,
    title: "تتبع الأسعار",
    description:
      "راقب تغيرات الأسعار واحصل على تنبيهات عندما ينخفض سعر المنتج الذي تريده",
  },
  {
    icon: Globe,
    title: "تغطية أوروبية شاملة",
    description:
      "نقارن الأسعار عبر 27 دولة أوروبية ومئات المتاجر الإلكترونية",
  },
  {
    icon: Bell,
    title: "تنبيهات ذكية",
    description:
      "احصل على إشعارات فورية عند توفر أفضل سعر للمنتجات في قائمة رغباتك",
  },
  {
    icon: Shield,
    title: "متاجر موثوقة",
    description:
      "نعمل فقط مع المتاجر الموثوقة والمعتمدة لضمان تجربة تسوق آمنة",
  },
  {
    icon: Zap,
    title: "سرعة فائقة",
    description:
      "نتائج بحث فورية مع مقارنة في الوقت الحقيقي لضمان حصولك على أحدث الأسعار",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            لماذا <span className="gradient-text">Beylens</span>؟
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            نجمع بين قوة الذكاء الاصطناعي وشبكة واسعة من المتاجر لنقدم لك تجربة
            مقارنة أسعار لا مثيل لها
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-foreground/20 hover:bg-card/80"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

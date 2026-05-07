import { Search, Brain, ShoppingCart } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "ابحث عن منتجك",
    description:
      "أدخل اسم المنتج الذي تبحث عنه في شريط البحث الذكي وسنجد لك جميع الخيارات المتاحة",
  },
  {
    icon: Brain,
    step: "02",
    title: "الذكاء الاصطناعي يقارن",
    description:
      "تحلل خوارزمياتنا المتقدمة آلاف المتاجر في جميع أنحاء أوروبا للعثور على أفضل الأسعار",
  },
  {
    icon: ShoppingCart,
    step: "03",
    title: "اشترِ بأفضل سعر",
    description:
      "اختر العرض الأفضل وانتقل مباشرة للمتجر لإتمام عملية الشراء بكل سهولة",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            كيف يعمل <span className="gradient-text">Beylens</span>؟
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            ثلاث خطوات بسيطة للعثور على أفضل الأسعار في أوروبا
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-24 right-0 left-0 hidden h-0.5 bg-gradient-to-l from-border via-foreground/20 to-border lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((item, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number Circle */}
                <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-muted transition-all group-hover:bg-foreground/10" />
                  <div className="absolute inset-2 rounded-full bg-card border border-border transition-all group-hover:border-foreground/20" />
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-foreground">
                    <item.icon className="h-6 w-6 text-background" />
                  </div>
                </div>

                {/* Step Badge */}
                <div className="mb-4 inline-flex items-center rounded-full border border-border bg-card px-3 py-1">
                  <span className="text-sm font-medium text-muted-foreground">
                    الخطوة {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Lock, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "مقارنة فورية",
    description: "نبحث في آلاف المتاجر في ثوانٍ معدودة",
  },
  {
    icon: Lock,
    title: "بدون رسوم خفية",
    description: "خدمتنا مجانية 100% للمستخدمين",
  },
  {
    icon: HeartHandshake,
    title: "نكسب من المتاجر",
    description: "عمولة صغيرة من المتجر عند الشراء",
  },
  {
    icon: CheckCircle2,
    title: "سعرك لا يتغير",
    description: "تدفع نفس السعر أو أقل دائماً",
  },
];

export function ServiceFee() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Card className="glass border-border overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">كيف نعمل </span>
                  <span className="gradient-text">ونربح؟</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  خدمة Beylens مجانية تماماً للمستخدمين. نحصل على عمولة صغيرة من المتاجر الشريكة عندما تشتري من خلالنا، لكن هذا لا يؤثر على السعر الذي تدفعه - بل قد يكون أقل بفضل عروضنا الحصرية.
                </p>
                
                <div className="glass rounded-xl p-6 glow-magenta">
                  <p className="text-foreground font-semibold mb-2">لماذا نحن شفافون؟</p>
                  <p className="text-muted-foreground text-sm">
                    نؤمن بأن الثقة تُبنى بالشفافية. لذلك نخبرك بالضبط كيف نربح المال، ونضمن أن مصلحتك دائماً في المقام الأول.
                  </p>
                </div>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={index}
                      className="glass rounded-xl p-5 transition-all duration-300 hover:scale-105"
                    >
                      <div className="size-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-3">
                        <Icon className="size-5 text-cyan" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

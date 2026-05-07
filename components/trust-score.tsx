"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, MessageSquare, Truck, CreditCard, RotateCcw } from "lucide-react";

const trustFactors = [
  {
    icon: Clock,
    title: "سرعة الشحن",
    description: "متوسط وقت التوصيل",
    weight: 20,
  },
  {
    icon: MessageSquare,
    title: "تقييمات العملاء",
    description: "آراء المشترين السابقين",
    weight: 25,
  },
  {
    icon: Truck,
    title: "موثوقية التوصيل",
    description: "نسبة الطلبات المكتملة",
    weight: 20,
  },
  {
    icon: CreditCard,
    title: "أمان الدفع",
    description: "طرق دفع آمنة ومتعددة",
    weight: 15,
  },
  {
    icon: RotateCcw,
    title: "سياسة الإرجاع",
    description: "سهولة الاسترجاع",
    weight: 10,
  },
  {
    icon: Shield,
    title: "ضمان المنتج",
    description: "فترة الضمان المقدمة",
    weight: 10,
  },
];

export function TrustScore() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Shield className="text-magenta" />
            <span className="text-sm text-muted-foreground">نظام التقييم الذكي</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">درجة الثقة </span>
            <span className="gradient-text">Beylens Trust Score</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نحلل كل بائع باستخدام الذكاء الاصطناعي لنعطيك درجة ثقة دقيقة تساعدك في اتخاذ قرار الشراء
          </p>
        </div>

        {/* Main trust score card */}
        <Card className="glass border-border mb-8 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Score visualization */}
              <div className="text-center">
                <div className="relative inline-block">
                  {/* Circular progress background */}
                  <svg className="size-48" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      className="text-muted"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray="565"
                      strokeDashoffset="57"
                      transform="rotate(-90 100 100)"
                      className="animate-pulse-glow"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="oklch(0.75 0.18 200)" />
                        <stop offset="50%" stopColor="oklch(0.70 0.20 320)" />
                        <stop offset="100%" stopColor="oklch(0.80 0.15 85)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Score in center */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold gradient-text">98</span>
                    <span className="text-muted-foreground text-sm">من 100</span>
                  </div>
                </div>
                <p className="mt-4 text-foreground font-semibold">متجر موثوق جداً</p>
                <Badge className="mt-2 bg-cyan/10 text-cyan border-cyan/20">
                  تم التحقق
                </Badge>
              </div>

              {/* Trust factors */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-foreground mb-2">عوامل التقييم</h3>
                {trustFactors.map((factor, index) => {
                  const Icon = factor.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="size-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <Icon className="size-5 text-cyan" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-foreground">{factor.title}</span>
                          <span className="text-xs text-muted-foreground">{factor.weight}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-cyan to-magenta transition-all duration-500"
                            style={{ width: `${85 + Math.random() * 15}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { score: "90+", label: "موثوق جداً", color: "cyan" },
            { score: "70-89", label: "موثوق", color: "gold" },
            { score: "50-69", label: "متوسط", color: "magenta" },
            { score: "<50", label: "احذر", color: "destructive" },
          ].map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
            >
              <p className={`text-2xl font-bold mb-1 ${
                item.color === "cyan" ? "text-cyan" :
                item.color === "gold" ? "text-gold" :
                item.color === "magenta" ? "text-magenta" :
                "text-destructive"
              }`}>{item.score}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

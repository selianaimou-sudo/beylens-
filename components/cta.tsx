"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-magenta/10 to-gold/10 animate-gradient" />
        <div className="absolute top-0 left-1/4 size-96 rounded-full bg-cyan/20 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-magenta/20 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Sparkles className="text-gold" />
          <span className="text-sm text-muted-foreground">ابدأ التوفير اليوم</span>
        </div>

        {/* Main headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-foreground">جاهز لتوفير</span>
          <br />
          <span className="gradient-text">المال والوقت؟</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          انضم لأكثر من 500,000 مستخدم يوفرون المال يومياً مع Beylens. المقارنة مجانية، التوفير حقيقي.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan to-primary text-primary-foreground hover:opacity-90 px-8 py-6 text-lg rounded-xl glow-cyan transition-all duration-300 hover:scale-105"
          >
            ابدأ المقارنة
            <ArrowLeft data-icon="inline-end" className="mr-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-6 text-lg rounded-xl border-border hover:bg-muted/50 transition-all duration-300"
          >
            تعرف على المزيد
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-cyan" />
            <span>مجاني 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-magenta" />
            <span>بدون تسجيل</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-gold" />
            <span>نتائج فورية</span>
          </div>
        </div>
      </div>
    </section>
  );
}

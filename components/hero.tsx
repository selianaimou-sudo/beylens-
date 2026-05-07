"use client";

import { Button } from "@/components/ui/button";
import { Search, Sparkles, TrendingDown, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 size-96 rounded-full bg-cyan/20 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 size-80 rounded-full bg-magenta/20 blur-[100px] animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 size-64 rounded-full bg-gold/10 blur-[80px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.75 0.18 200) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 200) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Sparkles className="text-cyan" />
          <span className="text-sm text-muted-foreground">مدعوم بالذكاء الاصطناعي</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Beylens</span>
          <br />
          <span className="text-foreground">قارن الأسعار بذكاء</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          منصة مقارنة الأسعار الأكثر تطوراً في أوروبا. نجد لك أفضل الأسعار للإلكترونيات، الموضة، المكياج، السفر، التأمين وأكثر من ذلك بكثير.
        </p>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative glass rounded-2xl p-2 glow-cyan">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="ابحث عن أي منتج أو خدمة..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground px-4 py-4 text-lg"
                dir="rtl"
              />
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8">
                <Search data-icon="inline-start" />
                ابحث
              </Button>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-xl bg-cyan/10 flex items-center justify-center">
              <TrendingDown className="text-cyan" />
            </div>
            <div className="text-start">
              <p className="text-2xl font-bold text-foreground">+50%</p>
              <p className="text-sm text-muted-foreground">توفير متوسط</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-xl bg-magenta/10 flex items-center justify-center">
              <Shield className="text-magenta" />
            </div>
            <div className="text-start">
              <p className="text-2xl font-bold text-foreground">+10K</p>
              <p className="text-sm text-muted-foreground">متجر موثوق</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-xl bg-gold/10 flex items-center justify-center">
              <Sparkles className="text-gold" />
            </div>
            <div className="text-start">
              <p className="text-2xl font-bold text-foreground">AI</p>
              <p className="text-sm text-muted-foreground">تحليل ذكي</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Search, Sparkles, ArrowLeft } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-white/3 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full border border-white/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
          <Sparkles className="h-4 w-4 text-foreground" />
          <span className="text-sm text-muted-foreground">
            مدعوم بالذكاء الاصطناعي
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-in animation-delay-200 mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">اعثر على</span>
          <span className="block gradient-text">أفضل الأسعار في أوروبا</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in animation-delay-400 mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          منصة مقارنة الأسعار الذكية التي تساعدك في العثور على أرخص المنتجات عبر
          آلاف المتاجر الأوروبية باستخدام قوة الذكاء الاصطناعي
        </p>

        {/* Search Bar */}
        <div className="animate-fade-in-up animation-delay-600 mx-auto max-w-2xl">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-center rounded-xl border border-border bg-card p-2">
              <Search className="mr-4 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث عن منتج... (مثال: iPhone 15 Pro)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button className="flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105">
                <span>بحث</span>
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground">بحث شائع:</span>
            {["iPhone 15", "MacBook Pro", "PlayStation 5", "Samsung TV"].map(
              (term) => (
                <button
                  key={term}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
                >
                  {term}
                </button>
              )
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up animation-delay-600 mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "+500K", label: "منتج" },
            { value: "+2000", label: "متجر" },
            { value: "27", label: "دولة أوروبية" },
            { value: "24/7", label: "تحديث الأسعار" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-foreground sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Badge } from "@/components/ui/badge";
import { Globe, MapPin } from "lucide-react";

const countries = [
  { name: "ألمانيا", code: "DE", stores: 2840 },
  { name: "فرنسا", code: "FR", stores: 2156 },
  { name: "إسبانيا", code: "ES", stores: 1823 },
  { name: "إيطاليا", code: "IT", stores: 1654 },
  { name: "هولندا", code: "NL", stores: 987 },
  { name: "بلجيكا", code: "BE", stores: 756 },
  { name: "النمسا", code: "AT", stores: 634 },
  { name: "بولندا", code: "PL", stores: 1243 },
];

export function EuropeSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-cyan/5 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Globe className="text-cyan" />
            <span className="text-sm text-muted-foreground">تغطية أوروبية شاملة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">نقارن الأسعار عبر </span>
            <span className="gradient-text">كل أوروبا</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نغطي أكثر من 10,000 متجر في 25 دولة أوروبية لنجد لك أفضل الأسعار أينما كنت
          </p>
        </div>

        {/* Stats banner */}
        <div className="glass rounded-2xl p-8 mb-12 glow-cyan">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">25+</p>
              <p className="text-muted-foreground">دولة أوروبية</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">10K+</p>
              <p className="text-muted-foreground">متجر معتمد</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">5M+</p>
              <p className="text-muted-foreground">منتج متاح</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">24/7</p>
              <p className="text-muted-foreground">تحديث الأسعار</p>
            </div>
          </div>
        </div>

        {/* Countries grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {countries.map((country, index) => (
            <div
              key={index}
              className="glass rounded-xl p-5 transition-all duration-300 hover:scale-105 hover:border-primary/50 group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-lg bg-muted flex items-center justify-center text-lg font-bold text-foreground">
                  {country.code}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{country.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-cyan" />
                <span className="text-sm text-muted-foreground">
                  {country.stores.toLocaleString()} متجر
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View all badge */}
        <div className="text-center mt-8">
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 transition-colors">
            +17 دولة أخرى
          </Badge>
        </div>
      </div>
    </section>
  );
}

"use client";

import { 
  Smartphone, 
  Shirt, 
  Sparkles, 
  Watch, 
  SprayCan, 
  Home, 
  Plane, 
  Shield, 
  Wifi, 
  Play 
} from "lucide-react";

const categories = [
  {
    icon: Smartphone,
    title: "إلكترونيات",
    description: "هواتف، لابتوبات، أجهزة",
    iconClass: "text-cyan",
    bgClass: "bg-cyan/10",
    gradientClass: "from-cyan/20 to-cyan/5",
    glowClass: "glow-cyan",
  },
  {
    icon: Shirt,
    title: "موضة",
    description: "ملابس، أحذية، حقائب",
    iconClass: "text-magenta",
    bgClass: "bg-magenta/10",
    gradientClass: "from-magenta/20 to-magenta/5",
    glowClass: "glow-magenta",
  },
  {
    icon: Sparkles,
    title: "مكياج",
    description: "مستحضرات تجميل، عناية",
    iconClass: "text-gold",
    bgClass: "bg-gold/10",
    gradientClass: "from-gold/20 to-gold/5",
    glowClass: "glow-gold",
  },
  {
    icon: Watch,
    title: "إكسسوارات",
    description: "ساعات، مجوهرات، نظارات",
    iconClass: "text-cyan",
    bgClass: "bg-cyan/10",
    gradientClass: "from-cyan/20 to-cyan/5",
    glowClass: "glow-cyan",
  },
  {
    icon: SprayCan,
    title: "عطور",
    description: "عطور فاخرة، بودي ميست",
    iconClass: "text-magenta",
    bgClass: "bg-magenta/10",
    gradientClass: "from-magenta/20 to-magenta/5",
    glowClass: "glow-magenta",
  },
  {
    icon: Home,
    title: "منزل",
    description: "أثاث، ديكور، أجهزة منزلية",
    iconClass: "text-gold",
    bgClass: "bg-gold/10",
    gradientClass: "from-gold/20 to-gold/5",
    glowClass: "glow-gold",
  },
  {
    icon: Plane,
    title: "سفر",
    description: "طيران، فنادق، رحلات",
    iconClass: "text-cyan",
    bgClass: "bg-cyan/10",
    gradientClass: "from-cyan/20 to-cyan/5",
    glowClass: "glow-cyan",
  },
  {
    icon: Shield,
    title: "تأمين",
    description: "صحي، سيارات، سفر",
    iconClass: "text-magenta",
    bgClass: "bg-magenta/10",
    gradientClass: "from-magenta/20 to-magenta/5",
    glowClass: "glow-magenta",
  },
  {
    icon: Wifi,
    title: "إنترنت",
    description: "باقات، اتصالات، خطوط",
    iconClass: "text-gold",
    bgClass: "bg-gold/10",
    gradientClass: "from-gold/20 to-gold/5",
    glowClass: "glow-gold",
  },
  {
    icon: Play,
    title: "اشتراكات رقمية",
    description: "ستريمنج، ألعاب، برامج",
    iconClass: "text-cyan",
    bgClass: "bg-cyan/10",
    gradientClass: "from-cyan/20 to-cyan/5",
    glowClass: "glow-cyan",
  },
];

export function Categories() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">كل ما تحتاجه</span>
            <span className="text-foreground"> في مكان واحد</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقارن الأسعار عبر أكثر من 10 فئات مختلفة لنوفر عليك الوقت والمال
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div
                key={index}
                className={`group relative glass rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:${category.glowClass}`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`size-14 rounded-xl ${category.bgClass} flex items-center justify-center mb-4 transition-all duration-300`}>
                    <Icon className={category.iconClass} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

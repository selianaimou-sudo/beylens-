"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink, TrendingDown, CheckCircle2 } from "lucide-react";

const priceResults = [
  {
    id: 1,
    product: "iPhone 15 Pro Max 256GB",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&h=200&fit=crop",
    seller: "TechStore DE",
    price: 1199,
    originalPrice: 1449,
    discount: 17,
    rating: 4.8,
    reviews: 2847,
    trustScore: 98,
    delivery: "توصيل مجاني",
    isBest: true,
    country: "ألمانيا",
  },
  {
    id: 2,
    product: "iPhone 15 Pro Max 256GB",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&h=200&fit=crop",
    seller: "ElectroShop FR",
    price: 1229,
    originalPrice: 1449,
    discount: 15,
    rating: 4.6,
    reviews: 1923,
    trustScore: 95,
    delivery: "€9.99 توصيل",
    isBest: false,
    country: "فرنسا",
  },
  {
    id: 3,
    product: "iPhone 15 Pro Max 256GB",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&h=200&fit=crop",
    seller: "MobilePro NL",
    price: 1259,
    originalPrice: 1449,
    discount: 13,
    rating: 4.5,
    reviews: 1456,
    trustScore: 92,
    delivery: "€14.99 توصيل",
    isBest: false,
    country: "هولندا",
  },
  {
    id: 4,
    product: "iPhone 15 Pro Max 256GB",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&h=200&fit=crop",
    seller: "GadgetWorld ES",
    price: 1289,
    originalPrice: 1449,
    discount: 11,
    rating: 4.4,
    reviews: 987,
    trustScore: 89,
    delivery: "€19.99 توصيل",
    isBest: false,
    country: "إسبانيا",
  },
];

export function PriceComparison() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-cyan/10 text-cyan border-cyan/20">
            نتائج البحث بالذكاء الاصطناعي
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">مقارنة الأسعار من </span>
            <span className="gradient-text">أفضل المتاجر</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            نعرض لك الأسعار من الأرخص إلى الأعلى مع تقييم موثوقية كل بائع
          </p>
        </div>

        {/* AI Analysis banner */}
        <div className="glass rounded-2xl p-4 mb-8 flex items-center gap-4 glow-cyan">
          <div className="size-12 rounded-xl bg-cyan/20 flex items-center justify-center shrink-0">
            <TrendingDown className="text-cyan" />
          </div>
          <div>
            <p className="font-semibold text-foreground">تحليل الذكاء الاصطناعي</p>
            <p className="text-sm text-muted-foreground">
              وفر حتى <span className="text-cyan font-bold">€250</span> عند الشراء من TechStore DE مقارنة بأغلى سعر
            </p>
          </div>
        </div>

        {/* Price cards */}
        <div className="flex flex-col gap-4">
          {priceResults.map((result, index) => (
            <Card 
              key={result.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                result.isBest 
                  ? "border-cyan/50 glow-cyan bg-cyan/5" 
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {result.isBest && (
                <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan to-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-br-xl">
                  أفضل سعر
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  {/* Rank number */}
                  <div className="hidden md:flex size-12 rounded-full bg-muted items-center justify-center text-2xl font-bold text-muted-foreground shrink-0">
                    {index + 1}
                  </div>

                  {/* Product image */}
                  <div className="size-20 rounded-xl bg-secondary/50 overflow-hidden shrink-0">
                    <img 
                      src={result.image} 
                      alt={result.product}
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Product info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">{result.seller}</h3>
                      <Badge variant="outline" className="text-xs">
                        {result.country}
                      </Badge>
                    </div>
                    
                    {/* Rating and trust */}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="size-4 text-gold fill-gold" />
                        <span className="text-foreground font-medium">{result.rating}</span>
                        <span className="text-muted-foreground">({result.reviews.toLocaleString()})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="size-4 text-cyan" />
                        <span className="text-muted-foreground">موثوقية</span>
                        <span className="text-cyan font-medium">{result.trustScore}%</span>
                      </div>
                      <span className="text-muted-foreground">{result.delivery}</span>
                    </div>
                  </div>

                  {/* Price and action */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground line-through text-sm">€{result.originalPrice}</span>
                      <Badge variant="secondary" className="bg-magenta/10 text-magenta border-magenta/20">
                        -{result.discount}%
                      </Badge>
                    </div>
                    <p className="text-3xl font-bold text-foreground">€{result.price}</p>
                    <Button 
                      className={`${
                        result.isBest 
                          ? "bg-cyan text-background hover:bg-cyan/90" 
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      <ExternalLink data-icon="inline-start" />
                      اذهب للمتجر
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ExternalLink, TrendingDown, Star, Check } from "lucide-react";

const products = [
  {
    name: "iPhone 15 Pro Max 256GB",
    image: "📱",
    prices: [
      { store: "Amazon.de", price: "€1,199", country: "ألمانيا", best: true },
      { store: "MediaMarkt", price: "€1,249", country: "ألمانيا" },
      { store: "Fnac.fr", price: "€1,279", country: "فرنسا" },
    ],
    savings: "€80",
    rating: 4.8,
  },
  {
    name: "MacBook Air M3 13-inch",
    image: "💻",
    prices: [
      { store: "Apple.nl", price: "€1,099", country: "هولندا", best: true },
      { store: "Coolblue", price: "€1,149", country: "هولندا" },
      { store: "Saturn.de", price: "€1,179", country: "ألمانيا" },
    ],
    savings: "€80",
    rating: 4.9,
  },
  {
    name: "Sony PlayStation 5",
    image: "🎮",
    prices: [
      { store: "Bol.com", price: "€449", country: "هولندا", best: true },
      { store: "Game.es", price: "€469", country: "إسبانيا" },
      { store: "Micromania", price: "€499", country: "فرنسا" },
    ],
    savings: "€50",
    rating: 4.7,
  },
];

export function PriceCards() {
  return (
    <section id="prices" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 mb-6">
            <TrendingDown className="h-4 w-4 text-green-500" />
            <span className="text-sm text-muted-foreground">
              أفضل الأسعار اليوم
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            مقارنة <span className="gradient-text">أسعار مباشرة</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            شاهد كيف يساعدك الذكاء الاصطناعي في العثور على أفضل الأسعار عبر أوروبا
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-foreground/20"
            >
              {/* Card Header */}
              <div className="p-6 pb-4 border-b border-border">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted text-3xl">
                      {product.image}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg leading-tight">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="text-sm text-muted-foreground">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price List */}
              <div className="p-6 pt-4">
                <div className="space-y-3">
                  {product.prices.map((price, priceIndex) => (
                    <div
                      key={priceIndex}
                      className={`flex items-center justify-between rounded-xl p-3 transition-colors ${
                        price.best
                          ? "bg-green-500/10 border border-green-500/20"
                          : "bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {price.best && (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                            <Check className="h-3 w-3 text-background" />
                          </div>
                        )}
                        <div>
                          <div className="font-medium text-foreground">
                            {price.store}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {price.country}
                          </div>
                        </div>
                      </div>
                      <div className="text-left">
                        <div
                          className={`font-bold ${
                            price.best ? "text-green-500" : "text-foreground"
                          }`}
                        >
                          {price.price}
                        </div>
                        {price.best && (
                          <div className="text-xs text-green-500">
                            أفضل سعر
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Savings Badge */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-muted p-4">
                  <span className="text-sm text-muted-foreground">
                    التوفير المحتمل
                  </span>
                  <span className="text-lg font-bold text-green-500">
                    {product.savings}
                  </span>
                </div>

                {/* CTA Button */}
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-3 font-medium text-background transition-all hover:bg-foreground/90">
                  <span>اذهب للمتجر</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

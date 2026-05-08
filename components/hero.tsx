"use client";

import { useEffect, useState } from "react";

const dict: any = {
  en: { search: "Search", placeholder: "Search any product...", price: "Product price", fee: "Beylens fee", total: "Total shown", details: "Details", unlock: "Pay fee & unlock seller link", close: "Close", store: "Store" },
  fr: { search: "Rechercher", placeholder: "Rechercher un produit...", price: "Prix du produit", fee: "Frais Beylens", total: "Prix affiché", details: "Détails", unlock: "Payer les frais et ouvrir le lien", close: "Fermer", store: "Magasin" },
  de: { search: "Suchen", placeholder: "Produkt suchen...", price: "Produktpreis", fee: "Beylens-Gebühr", total: "Angezeigter Preis", details: "Details", unlock: "Gebühr zahlen und Link öffnen", close: "Schließen", store: "Shop" },
  ar: { search: "ابحث", placeholder: "ابحث عن أي منتج...", price: "سعر المنتج", fee: "عمولة Beylens", total: "السعر المعروض", details: "التفاصيل", unlock: "ادفع العمولة وافتح الرابط", close: "إغلاق", store: "المتجر" },
};

function getFee(price: number) {
  if (!price || price < 3) return 0.5;
  if (price <= 50) return 1.5;
  if (price <= 500) return 2.99;
  if (price <= 1000) return 4.99;
  return 6.99;
}

function countryFromLang(lang: string) {
  if (lang === "fr") return "fr";
  if (lang === "de") return "de";
  if (lang === "es") return "es";
  if (lang === "it") return "it";
  if (lang === "nl") return "nl";
  return "de";
}

export function Hero() {
  const [lang, setLang] = useState("en");
  const [country, setCountry] = useState("de");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const l = navigator.language.slice(0, 2);
    const chosen = dict[l] ? l : "en";
    setLang(chosen);
    setCountry(countryFromLang(chosen));
  }, []);

  const t = dict[lang];

  async function search() {
    if (!query.trim()) return;
    setLoading(true);
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&gl=${country}&hl=${lang}`);
    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  }

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-center mb-4">Beylens AI</h1>
        <p className="text-center text-gray-400 mb-8">
          Europe AI price comparison — cheapest to highest.
        </p>

        <div className="bg-zinc-900 p-4 rounded-3xl mb-8">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            className="w-full p-4 rounded-2xl bg-white text-black mb-3"
          />

          <button onClick={search} className="w-full bg-cyan-400 text-black p-4 rounded-2xl font-bold">
            {loading ? "..." : t.search}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {results.map((item, i) => {
            const real = item.extracted_price || 0;
            const fee = getFee(real);
            const total = real ? real + fee : 0;

            return (
              <div key={i} className="bg-zinc-900 rounded-3xl p-4 border border-zinc-700">
                {item.thumbnail && (
                  <img src={item.thumbnail} className="w-full h-56 object-contain bg-white rounded-2xl mb-4" />
                )}

                <h2 className="font-bold text-lg mb-3">{item.title}</h2>

                <div className="bg-black border border-cyan-400 rounded-2xl p-4 text-center mb-3">
                  <p className="text-gray-400">{t.total}</p>
                  <p className="text-3xl font-black text-cyan-400">
                    {real ? `€${total.toFixed(2)}` : item.price || "N/A"}
                  </p>
                  <p className="text-sm text-gray-400">
                    {t.price}: {item.price || "N/A"} + {t.fee}: €{fee.toFixed(2)}
                  </p>
                </div>

                <p className="text-gray-400">{t.store}: {item.source || "Unknown"}</p>

                <button onClick={() => setSelected(item)} className="w-full mt-4 bg-cyan-400 text-black p-3 rounded-2xl font-bold">
                  {t.details}
                </button>
              </div>
            );
          })}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black/90 z-50 p-4 overflow-auto">
            <div className="max-w-lg mx-auto bg-zinc-900 rounded-3xl p-5 border border-cyan-400">
              <button onClick={() => setSelected(null)} className="text-red-400 mb-4">{t.close}</button>

              {selected.thumbnail && (
                <img src={selected.thumbnail} className="w-full h-64 object-contain bg-white rounded-2xl mb-4" />
              )}

              <h2 className="text-2xl font-bold mb-3">{selected.title}</h2>

              <p>{t.store}: {selected.source || "Unknown"}</p>
              <p>{t.price}: {selected.price || "N/A"}</p>
              <p>{t.fee}: €{getFee(selected.extracted_price || 0).toFixed(2)}</p>

              <button className="w-full mt-5 bg-cyan-400 text-black p-4 rounded-2xl font-black">
                {t.unlock}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

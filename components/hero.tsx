"use client";

import { useEffect, useState } from "react";

const translations: any = {
  en: {
    title: "Best Opportunity",
    region: "Region: Global 🌍",
    placeholder: "Search for any product...",
    button: "Search Best Price",
    searching: "Searching global markets...",
    available: "Global stock available",
    details: "View Details",
    original: "Original Price",
    total: "Your Price",
    fee: "Beylens Fee",
    message: "Good news! Beylens fee is shown clearly before unlocking the deal.",
    unlock: "Unlock Deal",
  },
  de: {
    title: "Best Opportunity",
    region: "Region: Deutschland 🇩🇪",
    placeholder: "Produkt suchen...",
    button: "Besten Preis suchen",
    searching: "Suche auf europäischen Märkten...",
    available: "Verfügbar",
    details: "Details anzeigen",
    original: "Originalpreis",
    total: "Dein Preis",
    fee: "Beylens Gebühr",
    message: "Die Beylens-Gebühr wird vor dem Freischalten klar angezeigt.",
    unlock: "Deal freischalten",
  },
  fr: {
    title: "Best Opportunity",
    region: "Région: France 🇫🇷",
    placeholder: "Rechercher un produit...",
    button: "Chercher le meilleur prix",
    searching: "Recherche sur les marchés européens...",
    available: "Disponible",
    details: "Voir les détails",
    original: "Prix original",
    total: "Votre prix",
    fee: "Frais Beylens",
    message: "Les frais Beylens sont clairement affichés avant le déblocage.",
    unlock: "Débloquer l’offre",
  },
  ar: {
    title: "Best Opportunity",
    region: "المنطقة: حسب لغة المتصفح 🌍",
    placeholder: "ابحث عن أي منتج...",
    button: "ابحث عن أفضل سعر",
    searching: "جاري البحث في الأسواق...",
    available: "متوفر",
    details: "عرض التفاصيل",
    original: "السعر الأصلي",
    total: "السعر المعروض",
    fee: "عمولة Beylens",
    message: "عمولة Beylens تظهر بوضوح قبل فتح العرض.",
    unlock: "فتح العرض",
  },
};

function getFee(price: number) {
  if (price >= 1000) return 6.99;
  if (price >= 500) return 4.99;
  if (price >= 50) return 2.99;
  if (price >= 3) return 1.5;
  return 0.5;
}

export function Hero() {
  const [lang, setLang] = useState("en");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<any | null>(null);

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    setLang(translations[browserLang] ? browserLang : "en");
  }, []);

  const t = translations[lang];

  const searchProduct = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResults([]);

    const gl =
      lang === "de" ? "de" :
      lang === "fr" ? "fr" :
      lang === "it" ? "it" :
      lang === "es" ? "es" :
      "de";

    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&gl=${gl}&hl=${lang}`);
    const data = await res.json();

    const sorted = (data.results || []).sort(
      (a: any, b: any) => (a.extracted_price || 9999999) - (b.extracted_price || 9999999)
    );

    setResults(sorted);
    setLoading(false);
  };

  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-gray-100 text-gray-800">
      <header className="p-5 bg-blue-600 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t.title}</h1>
        <div className="text-sm">{t.region}</div>
      </header>

      <section className="max-w-4xl mx-auto mt-10 p-5">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            className="w-full p-3 border rounded mb-4 text-black"
          />

          <button
            onClick={searchProduct}
            className="w-full bg-green-500 text-white font-bold py-3 rounded hover:bg-green-600"
          >
            {loading ? t.searching : t.button}
          </button>
        </div>

        <div className="mt-10 grid gap-6">
          {results.slice(0, 12).map((item, index) => {
            const original = item.extracted_price || 0;
            const fee = getFee(original);
            const total = original ? original + fee : 0;

            return (
              <div key={index} className="bg-white p-5 rounded shadow flex gap-4 items-center">
                {item.thumbnail && (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-24 h-24 object-contain"
                  />
                )}

                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.source || t.available}</p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">
                    {original ? `€${total.toFixed(2)}` : item.price || "N/A"}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.price} + €{fee.toFixed(2)}
                  </p>

                  <button
                    onClick={() => setSelected(item)}
                    className="bg-orange-500 text-white px-4 py-2 rounded mt-2"
                  >
                    {t.details}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white text-gray-800 rounded-xl p-6 max-w-md w-full">
            <button onClick={() => setSelected(null)} className="text-red-500 mb-4">
              X
            </button>

            {selected.thumbnail && (
              <img src={selected.thumbnail} className="w-full h-56 object-contain mb-4" />
            )}

            <h2 className="text-xl font-bold mb-3">{selected.title}</h2>

            <p>{t.original}: {selected.price || "N/A"}</p>
            <p>{t.fee}: €{getFee(selected.extracted_price || 0).toFixed(2)}</p>

            <p className="text-2xl font-bold text-blue-600 mt-3">
              {t.total}: €
              {selected.extracted_price
                ? (selected.extracted_price + getFee(selected.extracted_price)).toFixed(2)
                : "N/A"}
            </p>

            <p className="text-sm text-gray-600 mt-4">{t.message}</p>

            <button className="w-full bg-green-500 text-white font-bold py-3 rounded mt-5">
              {t.unlock}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

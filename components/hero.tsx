"use client";

import { useEffect, useState } from "react";

const countries = {
  de: { name: "Germany", lang: "de", currency: "€" },
  fr: { name: "France", lang: "fr", currency: "€" },
  it: { name: "Italy", lang: "it", currency: "€" },
  es: { name: "Spain", lang: "es", currency: "€" },
  nl: { name: "Netherlands", lang: "nl", currency: "€" },
  be: { name: "Belgium", lang: "fr", currency: "€" },
  at: { name: "Austria", lang: "de", currency: "€" },
  pt: { name: "Portugal", lang: "pt", currency: "€" },
  se: { name: "Sweden", lang: "sv", currency: "kr" },
  pl: { name: "Poland", lang: "pl", currency: "zł" },
  gb: { name: "United Kingdom", lang: "en", currency: "£" },
};

const text: any = {
  en: {
    title: "Beylens AI",
    subtitle: "Compare real online prices across Europe.",
    placeholder: "Search any product...",
    button: "Search Europe",
    searching: "Searching...",
    store: "Store",
    country: "Country",
    realPrice: "Real price",
    fee: "Beylens fee",
    total: "Estimated total",
    details: "Tap to view details",
    unlock: "Unlock Deal",
    close: "Close",
  },
  fr: {
    title: "Beylens AI",
    subtitle: "Comparez les vrais prix en Europe.",
    placeholder: "Rechercher un produit...",
    button: "Rechercher",
    searching: "Recherche...",
    store: "Magasin",
    country: "Pays",
    realPrice: "Prix réel",
    fee: "Frais Beylens",
    total: "Total",
    details: "Voir les détails",
    unlock: "Débloquer",
    close: "Fermer",
  },
  de: {
    title: "Beylens AI",
    subtitle: "Vergleiche echte Preise in Europa.",
    placeholder: "Produkt suchen...",
    button: "Europa durchsuchen",
    searching: "Suche läuft...",
    store: "Shop",
    country: "Land",
    realPrice: "Echter Preis",
    fee: "Beylens Gebühr",
    total: "Gesamtpreis",
    details: "Details ansehen",
    unlock: "Angebot öffnen",
    close: "Schließen",
  },
  ar: {
    title: "Beylens AI",
    subtitle: "قارن الأسعار الحقيقية في أوروبا",
    placeholder: "ابحث عن أي منتج...",
    button: "ابحث",
    searching: "جاري البحث...",
    store: "المتجر",
    country: "الدولة",
    realPrice: "السعر الحقيقي",
    fee: "عمولة Beylens",
    total: "السعر النهائي",
    details: "اضغط للتفاصيل",
    unlock: "فتح العرض",
    close: "إغلاق",
  },
};

export function Hero() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const browserLang =
    typeof navigator !== "undefined"
      ? navigator.language.slice(0, 2)
      : "en";

  const currentLang = text[browserLang]
    ? browserLang
    : "en";

  const t = text[currentLang];

  const countryCode =
    browserLang === "fr"
      ? "fr"
      : browserLang === "de"
      ? "de"
      : browserLang === "it"
      ? "it"
      : browserLang === "es"
      ? "es"
      : browserLang === "ar"
      ? "de"
      : "de";

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);

    const res = await fetch(
      `/api/search?q=${encodeURIComponent(
        query
      )}&gl=${countryCode}&hl=${currentLang}`
    );

    const data = await res.json();

    setResults(data.results || []);
    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-black text-white px-4 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
            {t.title}
          </h1>

          <p className="text-gray-300 text-xl">
            {t.subtitle}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            className="flex-1 h-16 rounded-3xl bg-white text-black px-6 text-xl outline-none"
          />

          <button
            onClick={handleSearch}
            className="h-16 px-10 rounded-3xl bg-cyan-400 text-black font-black text-xl"
          >
            {loading ? t.searching : t.button}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {results.map((item, index) => {
            const extracted =
              item.extracted_price || 0;

            const fee =
              extracted > 0
                ? (extracted * 0.12).toFixed(2)
                : "0";

            const total =
              extracted > 0
                ? (extracted + Number(fee)).toFixed(2)
                : "0";

            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
              >
                {item.thumbnail && (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-72 object-contain bg-white"
                  />
                )}

                <div className="p-5">
                  <h2 className="text-2xl font-bold mb-4 line-clamp-2">
                    {item.title}
                  </h2>

                  <div className="space-y-3">
                    <div className="bg-cyan-500 rounded-2xl p-4 text-black">
                      <p className="text-sm opacity-70">
                        {t.realPrice}
                      </p>

                      <p className="text-3xl font-black">
                        {item.price || "N/A"}
                      </p>
                    </div>

                    <div className="bg-fuchsia-500 rounded-2xl p-4">
                      <p className="text-sm opacity-80">
                        {t.fee}
                      </p>

                      <p className="text-2xl font-black">
                        +{fee}
                      </p>
                    </div>

                    <div className="bg-white text-black rounded-2xl p-4">
                      <p className="text-sm opacity-70">
                        {t.total}
                      </p>

                      <p className="text-4xl font-black">
                        {total}
                      </p>
                    </div>

                    <div className="text-gray-400 text-sm">
                      {t.store}: {item.source || "Unknown"}
                    </div>

                    <div className="text-gray-500 text-sm">
                      {t.country}:{" "}
                      {
                        countries[
                          countryCode as keyof typeof countries
                        ]?.name
                      }
                    </div>

                    <button
                      onClick={() => setSelected(item)}
                      className="w-full mt-3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black py-4 rounded-2xl font-black text-lg"
                    >
                      {t.details}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-900 max-w-xl w-full rounded-3xl p-6 border border-white/10">
              <img
                src={selected.thumbnail}
                alt={selected.title}
                className="w-full h-72 object-contain bg-white rounded-2xl mb-5"
              />

              <h2 className="text-3xl font-black mb-4">
                {selected.title}
              </h2>

              <div className="space-y-3 mb-6">
                <div className="bg-cyan-500 text-black p-4 rounded-2xl">
                  <p className="text-sm">
                    {t.realPrice}
                  </p>

                  <p className="text-3xl font-black">
                    {selected.price}
                  </p>
                </div>

                <div className="bg-fuchsia-500 p-4 rounded-2xl">
                  <p className="text-sm">
                    {t.fee}
                  </p>

                  <p className="text-2xl font-black">
                    +
                    {(
                      (selected.extracted_price || 0) *
                      0.12
                    ).toFixed(2)}
                  </p>
                </div>
              </div>

              <button
                className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black py-4 rounded-2xl font-black text-xl"
              >
                {t.unlock}
              </button>

              <button
                onClick={() => setSelected(null)}
                className="w-full mt-3 border border-white/20 py-4 rounded-2xl"
              >
                {t.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

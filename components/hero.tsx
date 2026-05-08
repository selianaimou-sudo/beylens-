"use client";

import { useState } from "react";

export function Hero() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  };

  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-5xl font-bold mb-6">Beylens AI</h1>
      <p className="mb-8 text-gray-300">قارن الأسعار بذكاء من الإنترنت</p>

      <div className="flex gap-2 justify-center mb-8">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="اكتب اسم المنتج..."
          className="px-4 py-3 rounded-xl text-black w-full max-w-md"
        />
        <button onClick={handleSearch} className="bg-cyan-500 px-6 py-3 rounded-xl text-black font-bold">
          ابحث
        </button>
      </div>

      {loading && <p>جاري البحث...</p>}

      <div className="grid gap-4 mt-8">
        {results.slice(0, 10).map((item, index) => (
          <div key={index} className="bg-white/10 rounded-2xl p-4 text-right border border-white/10">
            {item.thumbnail && (
              <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-contain rounded-xl mb-3 bg-white" />
            )}
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-cyan-400 text-xl font-bold">{item.price || "السعر غير متوفر"}</p>
            <p className="text-gray-400">{item.source || "متجر غير معروف"}</p>
            {item.product_link && (
              <a href={item.product_link} target="_blank" className="inline-block mt-3 bg-cyan-500 text-black px-4 py-2 rounded-xl">
                مشاهدة العرض
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

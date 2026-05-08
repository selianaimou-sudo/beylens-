"use client";

import { useState } from "react";

export function Hero() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const calculateFee = (priceText: string) => {
    const price = parseFloat(
      priceText?.replace(/[^\d.,]/g, "").replace(",", ".")
    );

    if (isNaN(price)) return "Service fee calculated at checkout";

    if (price >= 1000) return "Beylens Fee: €5.99";
    if (price >= 100) return "Beylens Fee: €2.99";
    if (price >= 10) return "Beylens Fee: €1.50";

    return "Beylens Fee: €0.50";
  };

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);

    const res = await fetch(
      `/api/search?q=${encodeURIComponent(query)}`
    );

    const data = await res.json();

    setResults(data.results || []);

    setLoading(false);
  };

  return (
    <section className="py-20 px-4 text-center min-h-screen bg-black text-white">
      <h1 className="text-5xl font-bold mb-6">
        Beylens AI
      </h1>

      <p className="mb-8 text-gray-300">
        Compare prices intelligently from the internet
      </p>

      <div className="flex flex-col md:flex-row gap-3 justify-center mb-8 max-w-2xl mx-auto">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search any product, brand or service..."
          className="px-4 py-4 rounded-2xl bg-white text-black w-full text-lg border-2 border-cyan-400"
        />

        <button
          onClick={handleSearch}
          className="bg-cyan-500 px-6 py-4 rounded-2xl text-black font-bold text-lg"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {loading && (
        <p className="text-cyan-400 text-xl">
          Finding the best prices...
        </p>
      )}

      <div className="grid gap-6 mt-10 max-w-5xl mx-auto">
        {results.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-3xl p-5 text-left border border-zinc-700 shadow-xl"
          >
            {item.thumbnail && (
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-56 object-contain rounded-2xl mb-4 bg-white"
              />
            )}

            <h3 className="font-bold text-xl mb-3">
              {item.title}
            </h3>

            <p className="text-cyan-400 text-2xl font-bold mb-2">
              {item.price || "Price unavailable"}
            </p>

            <p className="text-yellow-300 font-semibold mb-2">
              {calculateFee(item.price)}
            </p>

            <p className="text-gray-400 mb-4">
              Store: {item.source || "Unknown Store"}
            </p>

            <button
              className="inline-block mt-2 bg-cyan-500 text-black px-5 py-3 rounded-2xl font-bold w-full"
            >
              Unlock Deal
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

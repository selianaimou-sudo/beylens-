"use client";

import { useState } from "react";

export function Hero() {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();

    alert(JSON.stringify(data.results.slice(0, 3), null, 2));
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Beylens AI Search
        </h1>

        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="ابحث عن منتج"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-3 rounded-xl text-black w-full max-w-md"
          />

          <button
            onClick={handleSearch}
            className="bg-cyan-500 px-6 py-3 rounded-xl"
          >
            ابحث
          </button>
        </div>
      </div>
    </section>
  );
}

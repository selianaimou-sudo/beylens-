import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const q = searchParams.get("q") || "iphone";
  const gl = searchParams.get("gl") || "de";
  const hl = searchParams.get("hl") || "en";

  const res = await fetch(
    `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(q)}&gl=${gl}&hl=${hl}&api_key=${process.env.SERPAPI_API_KEY}`
  );

  const data = await res.json();

  const results = (data.shopping_results || []).sort(
    (a: any, b: any) =>
      (a.extracted_price || 9999999) - (b.extracted_price || 9999999)
  );

  return NextResponse.json({ results });
}

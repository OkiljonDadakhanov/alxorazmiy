import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://khimio.uz";
  const pages = [
    "/",
    "/about",
    "/media",
    "/imio2023",
    "/imio2024",
    "/results",
    "/uzbekistan",
    "/regulations",
    "/programme",
    "/press",
    "/organization",
    "/problems",
    "/partnership",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) => `<url><loc>${baseUrl}${page}</loc></url>`).join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}

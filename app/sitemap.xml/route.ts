// app/sitemap.xml/route.ts
import { langs, sharedLayouts } from "@/data/utils";
import { deploymentURL } from "@/lib/seo.config";

export async function GET() {
  const baseUrl = deploymentURL;

  const staticRoutes = ["", "/language", "/layout"];

  const languageRoutes = langs.map((lang) => `/language/${lang.toLowerCase()}`);
  const layoutRoutes = sharedLayouts.map(
    (layout) => `/layout/${layout.toLowerCase()}`
  );

  const allRoutes = [...staticRoutes, ...languageRoutes, ...layoutRoutes];

  const sitemapEntries = allRoutes.map((path) => {
    const url = `${baseUrl}${path}`;
    const lastMod = new Date().toISOString();
    return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

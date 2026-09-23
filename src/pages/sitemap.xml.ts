import type { APIRoute } from 'astro';
import { products } from '../data/products';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ? site.href.replace(/\/$/, '') : 'https://arttools.pro';

  const staticPages = [
    { url: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
    { url: `${baseUrl}/catalogo`, priority: '0.9', changefreq: 'weekly' },
  ];

  const productPages = products.map((pen) => ({
    url: `${baseUrl}/produto/${pen.slug || pen.id.toLowerCase()}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...productPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

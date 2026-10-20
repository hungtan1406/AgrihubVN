import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { SITE_URL } from '@/lib/seo';
import { getAllProductSlugs } from '@/lib/wordpress';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about-us', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/distribution-partners', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/oem-odm', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/supply-chain', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/quality-certifications', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/global-presence', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const productSlugs = await getAllProductSlugs();
  const productRoutes = productSlugs.map((slug) => ({
    path: `/products/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const routes = [...staticRoutes, ...productRoutes];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((lang) => {
      const entryUrl = `${SITE_URL}/${lang}${route.path}`;
      sitemapEntries.push({
        url: entryUrl,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            vi: `${SITE_URL}/vi${route.path}`,
            en: `${SITE_URL}/en${route.path}`,
            zh: `${SITE_URL}/zh${route.path}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}

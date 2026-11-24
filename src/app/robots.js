import { site } from "@/data/site";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/favoritos"] },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

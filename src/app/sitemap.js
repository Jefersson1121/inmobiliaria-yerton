import { getAllProperties } from "@/lib/properties";
import { site } from "@/data/site";

export default function sitemap() {
  const pages = ["", "/propiedades", "/servicios", "/nosotros", "/publica-tu-inmueble", "/medellin", "/contacto"].map(
    (path) => ({ url: `${site.url}${path}`, changeFrequency: "weekly", priority: path === "" ? 1 : 0.7 })
  );
  const props = getAllProperties().map((p) => ({
    url: `${site.url}/propiedades/${p.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));
  return [...pages, ...props];
}

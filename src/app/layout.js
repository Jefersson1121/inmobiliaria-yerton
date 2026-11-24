import "@fontsource-variable/inter";
import "@fontsource-variable/playfair-display";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { FavoritesProvider } from "@/components/layout/FavoritesProvider";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Casas y apartamentos en Quibdó`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "inmobiliaria Quibdó",
    "casas en venta Quibdó",
    "apartamentos en arriendo Quibdó",
    "lotes Quibdó",
    "inmuebles Chocó",
    "Yerton L.M.",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/images/brand/logo.png", width: 1014, height: 1024, alt: site.name }],
  },
};

export const viewport = { themeColor: "#1b2f6b" };

export default function RootLayout({ children }) {
  return (
    <html lang="es-CO">
      <body>
        <FavoritesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </FavoritesProvider>
      </body>
    </html>
  );
}

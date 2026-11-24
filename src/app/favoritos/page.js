import PageHero from "@/components/ui/PageHero";
import FavoritesList from "@/components/properties/FavoritesList";
import { getAllProperties } from "@/lib/properties";

export const metadata = { title: "Mis favoritos", robots: { index: false } };

export default function FavoritesPage() {
  return (
    <>
      <PageHero title="Mis favoritos" text="Las propiedades que guardaste en este dispositivo." crumbs={[{ label: "Favoritos" }]} />
      <section className="section">
        <div className="container">
          <FavoritesList properties={getAllProperties()} />
        </div>
      </section>
    </>
  );
}

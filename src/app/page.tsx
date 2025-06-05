import FeaturedCategories from "@/components/FeaturedCategories";
import OurProducts from "@/components/OurProducts";


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Featured Section */}
      <section className="w-11/12 lg:container mx-auto mt-24">
        <FeaturedCategories />
      </section>

      {/* Our Product Section */}
      <section className="w-11/12 lg:container mx-auto my-24">
        <OurProducts />
      </section>
    </main>
  );
}

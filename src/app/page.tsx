import FeaturedCategories from "@/components/FeaturedCategories";


export default function Home() {
  return (
    <main>
      {/* Featured Section */}
      <section className="w-11/12 lg:container mx-auto mt-24 min-h-screen">
        <FeaturedCategories />
      </section>
    </main>
  );
}

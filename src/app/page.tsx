import OurProducts from "@/components/OurProducts";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Our Product Section */}
      <section className="w-11/12 lg:container mx-auto my-24">
        <OurProducts />
      </section>
    </main>
  );
}

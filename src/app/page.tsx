import OurProducts from "@/components/OurProducts";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Services Section */}
      <section className="w-11/12 mx-auto my-24">
        <ServicesSection />
      </section>

      {/* Our Product Section */}
      <section className="w-11/12 lg:container mx-auto my-24">
        <OurProducts />
      </section>
    </main>
  );
}

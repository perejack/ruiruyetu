
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";

import WhyRMFSection from "@/components/WhyRMFSection";
import BestMabatiSection from "@/components/BestMabatiSection";
import ProductsSection from "@/components/ProductsSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { productData } from "@/data/productData"; // Import product data
import ProductCard from "@/components/ProductCard"; // Import shared ProductCard
import { useNavigate } from "react-router-dom"; // For navigation
import { useEffect, useState } from "react"; // For managing random products

// Define Product type (can be moved to a shared types file later)
interface ProductPriceVariant {
  name: string;
  price: string;
}
interface Product {
  slug: string;
  title: string;
  imageSrc: string;
  description: string;
  sale?: boolean;
  priceVariants?: ProductPriceVariant[];
  features?: string[];
  availableColors?: string;
}

const Index = () => {
  const navigate = useNavigate();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Shuffle productData and pick the first 4
    const shuffled = [...productData].sort(() => 0.5 - Math.random());
    setRelatedProducts(shuffled.slice(0, 4));
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BestMabatiSection />
        <WhyRMFSection />
        <ProductsSection />

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="py-12 md:py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-maisha-navy text-center mb-10">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {relatedProducts.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    onClick={() => navigate(`/products/${product.slug}`)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;

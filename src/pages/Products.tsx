
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
// Badge is now imported by the shared ProductCard if needed
import { productData } from "@/data/productData";
import ProductCard from "@/components/ProductCard"; // Import the shared component

const Products = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProducts = searchQuery 
    ? productData.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : productData;

  const handleProductClick = (slug: string) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-48 md:h-72">
          <img 
            src="/images/products-hero/products-hero-background.jpg" 
            alt="Ruiru Mabati Rolling Mills Factory" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Ruiru MABATI PRODUCTS</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/" className="text-maisha-navy hover:underline">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link to="/products" className="text-maisha-navy hover:underline">Products</Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-maisha-navy mb-4">Ruiru Mabati Products</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Our high quality, KEBS standard roofing sheets are durable, functional and strong with a 
              wide variety to meet every customer need whether on-demand or custom.
            </p>
          </div>

          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-3 pl-10 border rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                onClick={() => handleProductClick(product.slug)} 
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Products;

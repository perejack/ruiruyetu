import { Link, useNavigate } from "react-router-dom";
import { productData } from "@/data/productData";
import ProductCard from "@/components/ProductCard";

const ProductsSection = () => {
  const navigate = useNavigate();
  const productsToDisplay = productData.slice(0, 9);

  return (
    <section className="py-16 bg-maisha-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">OUR PRODUCTS</h2>
        <p className="text-white text-center max-w-3xl mx-auto mb-12">
          Discover our range of high-quality, KEBS-standard roofing sheets. Durable, functional, and strong, 
          with a wide variety to meet every customer need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productsToDisplay.map((product) => (
            <ProductCard 
              key={product.slug}
              product={product} 
              onClick={() => navigate(`/products/${product.slug}`)} 
            />
          ))}
        </div>
        {productData.length > 9 && (
            <div className="text-center mt-12">
                <Link
                    to="/products"
                    className="inline-block bg-white text-maisha-navy font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300"
                >
                    View All Products
                </Link>
            </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;

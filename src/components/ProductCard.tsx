// src/components/ProductCard.tsx
import { Link } from "react-router-dom"; 
import { ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Card 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow h-full flex flex-col" 
      onClick={onClick}
    >
      <div className="relative h-64">
        {product.sale && (
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="destructive" className="bg-red-600 text-white font-medium">
              SALE!
            </Badge>
          </div>
        )}
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="outline" className="bg-yellow-400 text-black font-medium text-xs px-2 py-1 rounded-sm">
            LIMITED OFFER
          </Badge>
        </div>
        <img 
          src={product.imageSrc} 
          alt={product.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-5 flex flex-col flex-grow"> 
        <h3 className="text-xl font-bold text-maisha-navy uppercase mb-2">{product.title}</h3>
        <p className="text-gray-700 line-clamp-2 mb-4 text-sm">{product.description}</p>
        
        <div className="mt-auto"> 
          {product.priceVariants && product.priceVariants.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Starting from</p>
                  <p className="text-lg font-bold text-maisha-navy">{product.priceVariants[0]?.price}</p> 
                  <div className="mt-2 flex items-center text-xs text-green-600 font-medium">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-1"></span>
                    Free Delivery
                  </div>
                </div>
                <button 
                  className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors duration-300 text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    onClick(); 
                  }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Order Now 
                </button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

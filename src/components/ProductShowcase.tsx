import { ArrowRight, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Import product images
import boxProfileImg from "@/assets/box-profile.jpg";
import versatileImg from "@/assets/versatile.jpg";
import romantileImg from "@/assets/romantile.jpg";
import corrugatedImg from "@/assets/corrugated-iron-sheet.jpg";
import aluZincImg from "@/assets/alu-zinc-mabati.jpg";
import ruiruTileImg from "@/assets/ruiru-tile.jpg";

const products = [
  {
    id: "box-profile",
    name: "BOX PROFILE",
    price: 470,
    image: boxProfileImg,
    badges: ["SALE!", "LIMITED OFFER"],
    description: "Durable box profile sheets for modern construction"
  },
  {
    id: "versatile",
    name: "VERSATILE",
    price: 555,
    image: versatileImg,
    badges: ["SALE!", "LIMITED OFFER", "VERSATILE"],
    description: "Premium versatile roofing solution"
  },
  {
    id: "romantile",
    name: "ROMANTILE",
    price: 550,
    image: romantileImg,
    badges: ["SALE!", "LIMITED OFFER"],
    description: "Classic Roman tile design for elegant homes"
  },
  {
    id: "corrugated-iron-sheet",
    name: "CORRUGATED IRON SHEET",
    price: 390,
    image: corrugatedImg,
    badges: ["LIMITED OFFER"],
    description: "Traditional corrugated sheets for reliable roofing"
  },
  {
    id: "ruiru-alu-zinc-mabati",
    name: "RUIRU ALU-ZINC MABATI",
    price: 390,
    image: aluZincImg,
    badges: ["LIMITED OFFER"],
    description: "Premium aluminum-zinc coated mabati"
  },
  {
    id: "ruiru-tile",
    name: "RUIRU TILE",
    price: 485,
    image: ruiruTileImg,
    badges: ["SALE!", "LIMITED OFFER"],
    description: "High-quality tile roofing solution"
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-xl text-foreground mb-4">
            Our Premium Products
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our extensive range of high-quality roofing materials, 
            each designed to provide lasting protection and aesthetic appeal for your home.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group hover-lift">
              <div className="bg-card rounded-xl overflow-hidden shadow-premium border border-border hover:shadow-xl transition-all duration-300">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.badges.map((badge, index) => (
                      <Badge 
                        key={index}
                        variant={badge === "SALE!" ? "destructive" : "secondary"}
                        className="text-xs font-bold"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Free Delivery Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium">
                      <Truck className="h-3 w-3" />
                      <span>Free Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="heading-sm text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                    </div>
                    <div className="text-right">
                      <div className="heading-sm text-primary">
                        KSh {product.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">/ meter</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.9)</span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Link to={`/product/${product.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <Link to={`/product/${product.id}`} className="flex-1">
                      <Button variant="hero" className="w-full">
                        Buy Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="heading-md text-foreground mb-4">
              Need Help Choosing?
            </h3>
            <p className="body-md text-muted-foreground mb-6">
              Our roofing experts are ready to help you find the perfect solution for your project.
            </p>
            <Button variant="accent" size="lg" className="group">
              Get Expert Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
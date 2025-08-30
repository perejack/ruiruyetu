import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Shield, Truck, Clock, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Import product images
import boxProfileImg from "@/assets/box-profile.jpg";
import versatileImg from "@/assets/versatile.jpg";
import romantileImg from "@/assets/romantile.jpg";
import corrugatedImg from "@/assets/corrugated-iron-sheet.jpg";
import aluZincImg from "@/assets/alu-zinc-mabati.jpg";
import ruiruTileImg from "@/assets/ruiru-tile.jpg";

const productData = {
  "box-profile": {
    name: "BOX PROFILE",
    price: 470,
    image: boxProfileImg,
    badges: ["SALE!", "LIMITED OFFER"],
    description: "Premium box profile roofing sheets designed for modern construction projects. Featuring enhanced durability and weather resistance.",
    specifications: {
      "Material": "Galvanized Steel",
      "Thickness": "0.4mm - 0.7mm",
      "Width": "1000mm",
      "Length": "Up to 6m",
      "Color Options": "15+ Colors Available",
      "Warranty": "15 Years"
    },
    features: [
      "Superior weather resistance",
      "Easy installation system",
      "Lightweight yet strong",
      "Multiple color options",
      "Corrosion resistant coating",
      "Fire resistant material"
    ]
  },
  "versatile": {
    name: "VERSATILE",
    price: 555,
    image: versatileImg,
    badges: ["SALE!", "LIMITED OFFER", "VERSATILE"],
    description: "Versatile premium roofing solution that combines durability with aesthetic appeal. Perfect for residential and commercial applications.",
    specifications: {
      "Material": "Aluminum-Zinc Alloy",
      "Thickness": "0.5mm - 0.8mm",
      "Width": "1200mm",
      "Length": "Up to 8m",
      "Color Options": "20+ Colors Available",
      "Warranty": "20 Years"
    },
    features: [
      "Premium aluminum-zinc coating",
      "Exceptional durability",
      "Versatile design options",
      "Low maintenance required",
      "Energy efficient",
      "Weather resistant"
    ]
  },
  "romantile": {
    name: "ROMANTILE",
    price: 550,
    image: romantileImg,
    badges: ["SALE!", "LIMITED OFFER"],
    description: "Classic Roman tile design that brings elegance and traditional charm to modern homes while providing excellent weather protection.",
    specifications: {
      "Material": "Pre-painted Steel",
      "Thickness": "0.45mm - 0.6mm",
      "Width": "1140mm",
      "Length": "Up to 7m",
      "Color Options": "12+ Colors Available",
      "Warranty": "18 Years"
    },
    features: [
      "Classic Roman tile appearance",
      "Premium finish quality",
      "Excellent water drainage",
      "UV resistant coating",
      "Long-lasting colors",
      "Professional installation"
    ]
  },
  "corrugated-iron-sheet": {
    name: "CORRUGATED IRON SHEET",
    price: 390,
    image: corrugatedImg,
    badges: ["LIMITED OFFER"],
    description: "Traditional corrugated iron sheets offering reliable and cost-effective roofing solutions for various construction needs.",
    specifications: {
      "Material": "Galvanized Iron",
      "Thickness": "0.3mm - 0.6mm",
      "Width": "850mm",
      "Length": "Up to 6m",
      "Color Options": "8+ Colors Available",
      "Warranty": "12 Years"
    },
    features: [
      "Cost-effective solution",
      "Traditional corrugated design",
      "Easy to handle and install",
      "Good strength-to-weight ratio",
      "Suitable for various applications",
      "Proven durability"
    ]
  },
  "ruiru-alu-zinc-mabati": {
    name: "RUIRU ALU-ZINC MABATI",
    price: 390,
    image: aluZincImg,
    badges: ["LIMITED OFFER"],
    description: "Premium aluminum-zinc coated mabati offering superior corrosion resistance and longevity for demanding environments.",
    specifications: {
      "Material": "55% Aluminum-Zinc Alloy",
      "Thickness": "0.4mm - 0.8mm",
      "Width": "1000mm",
      "Length": "Up to 8m",
      "Color Options": "18+ Colors Available",
      "Warranty": "25 Years"
    },
    features: [
      "Superior corrosion resistance",
      "55% aluminum-zinc coating",
      "Extended lifespan",
      "Coastal area suitable",
      "Heat reflective properties",
      "Premium quality finish"
    ]
  },
  "ruiru-tile": {
    name: "RUIRU TILE",
    price: 485,
    image: ruiruTileImg,
    badges: ["SALE!", "LIMITED OFFER"],
    description: "High-quality tile roofing solution combining aesthetic appeal with functional excellence for modern construction projects.",
    specifications: {
      "Material": "Stone-coated Steel",
      "Thickness": "0.5mm",
      "Width": "1335mm",
      "Length": "Up to 6m",
      "Color Options": "16+ Colors Available",
      "Warranty": "20 Years"
    },
    features: [
      "Stone-coated finish",
      "Tile-like appearance",
      "Excellent insulation",
      "Noise reduction properties",
      "Fade resistant colors",
      "Professional installation"
    ]
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productData[productId as keyof typeof productData];

  const whatsappNumber = "+254751974764";
  
  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering ${product.name}. Can you provide more details about pricing and delivery?`;
    const phoneNumber = whatsappNumber.replace(/\D/g, ''); // Remove all non-digits
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${whatsappNumber}`;
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg text-foreground mb-4">Product Not Found</h1>
          <Link to="/">
            <Button variant="hero">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingWhatsApp />
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-premium">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                {product.badges.map((badge, index) => (
                  <Badge 
                    key={index}
                    variant={badge === "SALE!" ? "destructive" : "secondary"}
                    className="text-sm font-bold"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Free Delivery Badge */}
              <div className="absolute top-6 right-6">
                <div className="flex items-center space-x-2 bg-success text-success-foreground px-3 py-2 rounded-full text-sm font-medium">
                  <Truck className="h-4 w-4" />
                  <span>Free Delivery</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Quality Assured</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Free Delivery</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Fast Installation</div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="heading-xl text-foreground mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-muted-foreground">(4.9) • 450+ Reviews</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-4 mb-6">
                <div className="text-4xl font-bold text-primary">
                  KSh {product.price.toLocaleString()}
                </div>
                <div className="text-lg text-muted-foreground">/ meter</div>
              </div>

              <p className="body-lg text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="heading-sm text-foreground mb-4">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground text-sm">{key}:</span>
                    <span className="text-foreground text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="heading-sm text-foreground mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Section */}
            <div className="bg-gradient-card p-6 rounded-xl border">
              <h3 className="heading-sm text-foreground mb-4">Ready to Order?</h3>
              <p className="text-muted-foreground mb-6">
                Get a free quote or place your order directly through WhatsApp. 
                Our team will assist you with sizing, delivery, and installation.
              </p>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleWhatsAppOrder}
                  variant="whatsapp" 
                  size="lg" 
                  className="w-full"
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  Order via WhatsApp: {whatsappNumber}
                </Button>
                
                <Button 
                  onClick={handlePhoneCall}
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  Call for Immediate Assistance
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-muted-foreground">
                💬 Usually responds within 5 minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
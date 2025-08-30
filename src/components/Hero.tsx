import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-house.jpg";

const Hero = () => {
  const features = [
    { icon: Shield, text: "Quality Guaranteed" },
    { icon: Truck, text: "Free Delivery" },
    { icon: Award, text: "15+ Years Experience" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium roofing showcase" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Main heading */}
          <h1 className="heading-display text-white mb-6 leading-tight">
            Premium
            <span className="block text-accent"> Roofing Solutions</span>
            for Kenya
          </h1>

          {/* Subheading */}
          <p className="body-lg text-white/90 mb-8 max-w-2xl">
            Transform your home with Kenya's finest mabati roofing products. 
            From versatile tiles to corrugated sheets, we deliver quality that lasts generations.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap gap-6 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-3 rounded-lg">
                <feature.icon className="h-5 w-5 text-accent" />
                <span className="text-accent font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button variant="accent" size="xl" className="group">
              Shop Products
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="xl">
              Get Free Quote
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
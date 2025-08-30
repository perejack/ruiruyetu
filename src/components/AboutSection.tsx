import { CheckCircle, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-us.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality testing to ensure long-lasting performance."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced professionals provide expert advice and installation services."
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "15+ years of excellence in Kenya's roofing industry with thousands of satisfied customers."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize your satisfaction and build lasting relationships with every project."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="heading-xl text-foreground mb-6">
                About Ruiru Mabati
              </h2>
              <div className="space-y-4 text-muted-foreground body-md">
                <p>
                  For over 15 years, Ruiru Mabati has been Kenya's trusted partner in premium roofing solutions. 
                  We specialize in high-quality mabati, box profiles, versatile tiles, and corrugated iron sheets 
                  that protect homes and businesses across the country.
                </p>
                <p>
                  Our commitment to excellence has made us the preferred choice for thousands of customers 
                  who demand durability, style, and value. From residential homes to commercial projects, 
                  we deliver roofing solutions that stand the test of time.
                </p>
                <p>
                  With free delivery across Ruiru and beyond, professional installation services, and 
                  comprehensive warranties, we make quality roofing accessible to everyone.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
              <Button variant="outline" size="lg">
                View Our Projects
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-last">
            <div className="relative rounded-xl overflow-hidden shadow-premium">
              <img 
                src={aboutImage} 
                alt="Ruiru Mabati team at work"
                className="w-full h-full object-cover"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
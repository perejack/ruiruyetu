import { Shield, Truck, Clock, Headphones, Award, MapPin } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All our products come with comprehensive warranties and quality assurance.",
      highlight: "15-Year Warranty"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Enjoy free delivery across Ruiru and surrounding areas for all orders.",
      highlight: "Within 24 Hours"
    },
    {
      icon: Clock,
      title: "Fast Installation",
      description: "Professional installation services with minimal disruption to your routine.",
      highlight: "Same Week Service"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your roofing needs and questions.",
      highlight: "Always Available"
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Industry-certified products meeting international quality standards.",
      highlight: "ISO Certified"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep understanding of Kenya's climate and roofing requirements.",
      highlight: "15+ Years Local"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-xl text-foreground mb-4">
            Why Choose Ruiru Mabati?
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            With over 15 years of experience and thousands of satisfied customers, 
            we've built our reputation on quality, reliability, and exceptional service.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group hover-lift">
              <div className="bg-card rounded-xl p-8 border border-border shadow-md hover:shadow-premium transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="heading-sm text-foreground mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 body-md">
                  {reason.description}
                </p>

                {/* Highlight */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  {reason.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="heading-md text-foreground mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="body-md text-muted-foreground mb-6">
              Join thousands of satisfied customers who trust Ruiru Mabati for their roofing needs. 
              Get started with a free consultation today.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import React from 'react';
import qualityGuaranteeImage from '../assets/quality_guarantee.jpg';

const WhyRMFSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Placeholder image – replace src later */}
        <div className="w-full md:w-1/2">
          <img
            src={qualityGuaranteeImage}
            alt="Quality guarantee"
            className="w-full h-auto rounded shadow-lg object-cover"
          />
        </div>

        {/* Text content */}
        <div className="w-full md:w-1/2 text-maisha-navy">
          <p className="uppercase text-sm tracking-widest mb-2">[ Why Ruiru ]</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality guarantee</h2>
          <p className="leading-relaxed mb-6 text-gray-700">
            Our products have 15&nbsp;years warranty and are KEBS certified. We offer a wide variety of profiles and colours
            to choose from. Visit our showroom in Ruiru Town Kenya or order online through this website: call us on
            +254 751 974 764 and enjoy our free delivery service to your doorstep in just 72&nbsp;hours. Ruiru Mabati Factory…
            <em> Mali safi kwa bei poa.</em>
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyRMFSection;

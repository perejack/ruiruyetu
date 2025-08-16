import React, { useState } from 'react';

const tabs = [
  { key: 'history', label: 'History', content: (
      <p className="leading-relaxed text-gray-700">
        Ruiru Mabati Factory is one of the leading manufacturers of roofing products in Kenya. With over 10&nbsp;years’
        experience, we offer the best quality mabati at the most affordable prices. Our state-of-the-art manufacturing
        facility produces high-quality, long-lasting, and beautiful roofing solutions including Box Profile, Europe Tile,
        Jenga Tile, Corrugated S-Profile, and more in a wide variety of colours. Our mabati withstand local weather
        conditions, making them ideal for residential and commercial purposes.
      </p>
    ) },
  { key: 'csr', label: 'Our CSR', content: (
      <p className="leading-relaxed text-gray-700">
        We are committed to giving back to the community through various CSR initiatives such as building classrooms,
        supporting local charities, and engaging in environmental conservation projects.
      </p>
    ) },
  { key: 'awards', label: 'Awards', content: (
      <p className="leading-relaxed text-gray-700">
        Over the years, Ruiru Mabati Factory has been recognized with multiple awards for product innovation, quality, and
        outstanding customer service, cementing our reputation as a trusted industry leader.
      </p>
    ) },
];

const BestMabatiSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-maisha-navy mb-10">Best Mabati</h2>

        {/* Tabs */}
        <div className="flex space-x-2 justify-center mb-6 border-b-2 border-blue-600 pb-2 w-full md:w-auto mx-auto">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm md:text-base font-semibold uppercase transition-colors rounded-t ${
                activeTab === tab.key ? 'bg-blue-600 text-white' : 'bg-gray-200 text-maisha-navy hover:bg-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
            {/* Active tab content */}
            <div>{tabs.find(t => t.key === activeTab)?.content}</div>
          </div>
      </div>
    </section>
  );
};

export default BestMabatiSection;

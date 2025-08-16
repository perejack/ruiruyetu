
import { Link } from "react-router-dom";
import heroRedImg from '@/assets/herored.png';

const Hero = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <img 
        src={heroRedImg} 
        alt="High Quality Box Profile" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          High Quality Mabati by Ruiru
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-2xl mb-6">
          Discover durable, beautiful, and reliable roofing solutions from Ruiru Mabati—trusted for homes and businesses across Kenya.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            to="/contact" 
            className="bg-white text-gray-900 font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition"
          >
            Contact Now
          </Link>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            View Product Houses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

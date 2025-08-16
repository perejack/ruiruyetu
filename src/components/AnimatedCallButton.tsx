import { Phone } from 'lucide-react';

interface AnimatedCallButtonProps {
  phoneNumber: string;
  displayText?: string; // Optional: if you want different text than "Call Us: {phoneNumber}"
  className?: string;   // Optional: for additional custom styling
}

const AnimatedCallButton = ({
  phoneNumber,
  displayText,
  className = '',
}: AnimatedCallButtonProps) => {
  const telLink = `tel:${phoneNumber.replace(/\s+/g, '')}`; // Removes spaces for the tel: link
  
  // Default text will be "Call Us: {phoneNumber}" if displayText is not provided
  const textToShow = displayText || `Call Us: ${phoneNumber}`;

  return (
    <a
      href={telLink}
      className={`
        group relative inline-flex items-center justify-center px-4 py-2 
        font-semibold text-white 
        bg-blue-600 rounded-md 
        hover:bg-blue-700 transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
        shadow-md hover:shadow-lg
        ${className}
      `}
      title={`Call ${phoneNumber}`} // Tooltip for accessibility
    >
      <Phone 
        className="w-5 h-5 mr-2 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12" 
      />
      <span className="text-sm">
        {textToShow}
      </span>
    </a>
  );
};

export default AnimatedCallButton;

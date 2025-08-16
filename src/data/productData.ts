
import versatileImg from '@/assets/versatile.png';
import boxProfileImg from '@/assets/BOX PROFILE.jpg';
import romantileImg from '@/assets/romantile.jpg';
import corrugatedImg from '@/assets/Corrugated.jpg';
import ordinaryNonColouredImg from '@/assets/ordinarynoncoloured.jpg';
import orientileImg from '@/assets/Orientile.jpeg';
import rejectOrdinaryImg from '@/assets/ordinary reject.jpg';
import roofingAccessoriesImg from '@/assets/roofingaccesories.jpg';

export type ProductVariant = {
  name: string;
  price: string;
};

export const productData = [
  {
    title: "VERSATILE",
    slug: "versatile",
    description: "High-quality versatile roofing sheets, suitable for various architectural styles. Offers a modern and aesthetic appeal.",
    features: [
      "Durable and long-lasting",
      "Available in multiple gauges",
      "Weather resistant",
      "Modern aesthetic",
    ],
    priceVariants: [
      { name: "Versatile gauge 28", price: "KSh 650 / meter" },
      { name: "Versatile gauge 30", price: "KSh 555 / meter" }
    ],
    availableColors: "Multiple colors available",
    imageSrc: versatileImg,
    sale: false
  },
  {
    title: "BOX PROFILE",
    slug: "box-profile",
    description: "Economical and strong box profile sheets, ideal for roofing and cladding in residential and commercial buildings.",
    features: [
      "Economical choice",
      "Strong and rigid profile",
      "Suitable for roofing and cladding",
      "Available in different gauges",
    ],
    priceVariants: [
      { name: "Box profile gauge 28", price: "KSh 530 / meter" },
      { name: "Box profile gauge 30", price: "KSh 470 / meter" }
    ],
    availableColors: "Multiple colors available",
    imageSrc: boxProfileImg,
    sale: false
  },
  {
    title: "ROMANTILE",
    slug: "romantile",
    description: "Elegant Romantile roofing sheets that mimic the classic look of Roman clay tiles, offering beauty without the heavy weight.",
    features: [
      "Classic clay tile appearance",
      "Lightweight yet durable",
      "Enhances building aesthetics",
      "Available in different gauges",
    ],
    priceVariants: [
      { name: "Romantile gauge 28", price: "KSh 640 / meter" },
      { name: "Romantile gauge 30", price: "KSh 550 / meter" }
    ],
    availableColors: "Multiple colors available",
    imageSrc: romantileImg,
    sale: false
  },
  {
    title: "CORRUGATED IRON SHEET",
    slug: "corrugated-iron-sheet",
    description: "Traditional and cost-effective corrugated iron sheets, widely used for various roofing and cladding applications.",
    features: [
      "Cost-effective solution",
      "Widely used and versatile",
      "Easy to install",
      "Available in colored options",
    ],
    priceVariants: [
      { name: "Corrugated iron sheet gauge 28", price: "KSh 440 / meter" },
      { name: "Corrugated iron sheet gauge 30", price: "KSh 390 / meter" }
    ],
    availableColors: "Multiple colors available",
    imageSrc: corrugatedImg,
    sale: false
  },
  {
    title: "ORDINARY NON-COLOURED",
    slug: "ordinary-non-coloured",
    description: "Standard non-coloured (galvanized) roofing sheets, offering a basic and durable roofing solution at an affordable price.",
    features: [
      "Most affordable option",
      "Durable galvanized steel",
      "Basic and functional",
      "Suitable for various utility purposes",
    ],
    priceVariants: [
      { name: "Ordinary non coloured gauge 30", price: "KSh 300 / meter" },
      { name: "Ordinary non colored gauge 28", price: "KSh 350 / meter" }
    ],
    availableColors: "", // Explicitly no colors
    imageSrc: ordinaryNonColouredImg,
    sale: false
  },
  {
    title: "ORIENTILE MABATI",
    slug: "orientile-mabati",
    description: "Premium Orientile mabati sheets with a distinctive design, offering a unique and stylish roofing solution.",
    features: [
      "Unique and stylish design",
      "Premium roofing profile",
      "Enhances property value",
      "Durable and weather-resistant",
    ],
    priceVariants: [
      { name: "Orientile mabati gauge 28", price: "KSh 720 / meter" },
      { name: "Orientile mabati gauge 30", price: "KSh 655 / meter" }
    ],
    availableColors: "Multiple colors available",
    imageSrc: orientileImg,
    sale: false
  }
  ,
  {
    title: "REJECT BOX PROFILE",
    slug: "reject-box-profile",
    description: "Affordable reject grade box profile sheets, gauge 30.",
    features: [
      "Budget-friendly",
      "Gauge 30",
      "Suitable for temporary structures",
      "Lightweight",
    ],
    priceVariants: [
      { name: "Reject mabati gauge 30 box profile", price: "KSh 230 / meter" }
    ],
    availableColors: "", // No colour options
    imageSrc: boxProfileImg,
    sale: false
  },
  {
    title: "REJECT ORDINARY",
    slug: "reject-ordinary",
    description: "Affordable reject grade ordinary corrugated sheets, gauge 30.",
    features: [
      "Budget-friendly",
      "Gauge 30",
      "Ideal for utility structures",
      "Lightweight",
    ],
    priceVariants: [
      { name: "Reject mabati gauge 30 ordinary", price: "KSh 170 / meter" }
    ],
    availableColors: "", // No colour options
    imageSrc: rejectOrdinaryImg,
    sale: false
  }
  ,
  {
    title: "ROOFING ACCESSORIES",
    slug: "roofing-accessories",
    description: "Essential roofing accessories including roofing nails, ridges, and valleys to complete your roofing installation.",
    features: [
      "High-quality accessories",
      "Durable and reliable",
      "Compatible with all Ruiru Mabati sheets",
      "Competitive pricing"
    ],
    priceVariants: [
      { name: "Roofing nails (per kg)", price: "KSh 150" },
      { name: "Ridge (each)", price: "KSh 540" },
      { name: "Valley (each)", price: "KSh 450" }
    ],
    availableColors: "Galvanized finish",
    imageSrc: roofingAccessoriesImg,
    sale: false
  }
];

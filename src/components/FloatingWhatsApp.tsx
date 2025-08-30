import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const whatsappNumber = "+254751974764";
  const defaultMessage = "Hi! I'm interested in your roofing products. Can you help me?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  if (isMinimized) {
    return (
      <div className="floating-whatsapp">
        <Button
          onClick={() => setIsMinimized(false)}
          variant="whatsapp"
          size="icon-lg"
          className="rounded-full shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="floating-whatsapp">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          variant="whatsapp"
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl group"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Talk to Us
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-destructive rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">!</span>
          </div>
        </Button>
      ) : (
        <div className="glass-card rounded-xl p-6 max-w-sm shadow-xl border border-border-strong">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Ruiru Mabati</h4>
                <p className="text-xs text-muted-foreground">Usually replies instantly</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button
                onClick={() => setIsMinimized(true)}
                variant="ghost"
                size="icon-sm"
              >
                <span className="text-lg">−</span>
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon-sm"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Message */}
          <div className="bg-secondary/50 rounded-lg p-3 mb-4">
            <p className="text-sm text-foreground">
              👋 Hi there! Need help with roofing solutions? We're here to assist you with:
            </p>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1">
              <li>• Product selection & pricing</li>
              <li>• Free quotes & consultation</li>
              <li>• Installation services</li>
              <li>• Technical support</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <Button 
              onClick={handleWhatsAppClick}
              variant="whatsapp" 
              className="w-full"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Chat on WhatsApp
            </Button>
            <div className="text-center">
              <a 
                href={`tel:${whatsappNumber}`}
                className="text-xs text-primary hover:underline"
              >
                Or call us: {whatsappNumber}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsApp;
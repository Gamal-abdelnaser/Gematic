import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const whatsappNumber = "201127994121";

  const handleSubscribe = () => {
    const message = 'السلام عليكم';
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={() => handleSubscribe()}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 max-sm:w-10 max-sm:h-10 rounded-full bg-[hsl(142_70%_49%)] text-[hsl(0_0%_100%)] shadow-lg hover:scale-110 transition-transform flex items-center justify-center animate-pulse-glow"
      aria-label="تواصل عبر واتساب"
    >
      {/* <MessageCircle className="w-7 h-7" /> */}
      <FaWhatsapp size={30}  />
    </button>
  );
};

export default WhatsAppFloat;

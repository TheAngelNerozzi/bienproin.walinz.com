import { Home, MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const phoneNumber = "14424474116";
    const message = "Hola! Me gustaría recibir más información sobre sus servicios inmobiliarios.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWaLinzClick = () => {
    window.open("https://walinz.com", "_blank");
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-brand p-2 rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bienproin</h3>
                <p className="text-sm text-gray-300">Inmobiliaria</p>
              </div>
            </div>
            <p className="text-gray-300">
              Años conectando familias con sus hogares perfectos 
              en el estado Aragua, Venezuela.
            </p>
            <div className="flex space-x-3">
              <button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-orange">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Venta de Propiedades</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Alquiler de Inmuebles</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Asesoría Inmobiliaria</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Gestión de Propiedades</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Evaluación de Inmuebles</a></li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-blue">Zonas que Cubrimos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Base Aragua</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Los Cabos</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Centro de Maracay</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Las Delicias</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Zona Industrial</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-orange">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>+1 442 447 4116</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Maracay, Edo Aragua</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Bienproin Inmobiliaria. Todos los derechos reservados.
          </p>
          
          {/* Powered by WaLinz */}
          <button
            onClick={handleWaLinzClick}
            className="text-xs text-gray-500 hover:text-brand-orange transition-colors cursor-pointer bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 border-none"
          >
            Powered By WaLinz App
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-slow"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};
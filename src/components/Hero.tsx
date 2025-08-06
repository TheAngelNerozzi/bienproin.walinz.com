import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, TrendingUp } from "lucide-react";

export const Hero = () => {
  const scrollToProperties = () => {
    document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-brand opacity-5"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-brand-orange/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-brand-blue/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-brand-orange/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Encuentra tu
            <span className="text-transparent bg-gradient-brand bg-clip-text"> hogar ideal </span>
            en Maracay
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Especialistas en venta y alquiler de propiedades en el estado Aragua. 
            Con años conectando familias con sus hogares perfectos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToProperties}
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg shadow-brand transition-all duration-300 hover:-translate-y-1"
            >
              <Search className="w-5 h-5 mr-2" />
              Ver Propiedades
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => {
                const phoneNumber = "14424474116";
                const message = "Hola! Me gustaría recibir información sobre sus propiedades disponibles.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              Contactar Asesor
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Disponible 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
              <span>Asesoría Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
              <span>Financiamiento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
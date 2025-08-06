import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Menu, Home, MapPin, Phone } from "lucide-react";
import { Property } from "./PropertyCard";

interface HeaderProps {
  cartItems: Property[];
  onRemoveFromCart: (propertyId: string) => void;
  onClearCart: () => void;
}

export const Header = ({ cartItems, onRemoveFromCart, onClearCart }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    const properties = cartItems.map(item => 
      `• ${item.title} - $${item.price.toLocaleString()}`
    ).join('\n');

    const message = `¡Hola! Me interesan las siguientes propiedades:\n\n${properties}\n\nTotal: $${totalAmount.toLocaleString()}\n\n¿Podrían contactarme para más información?`;
    
    const phoneNumber = "14424474116"; // Replace with actual WhatsApp Business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClearCart();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-brand p-2 rounded-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Bienproin</h1>
              <p className="text-xs text-gray-600">Inmobiliaria</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-brand-orange transition-colors">
              Inicio
            </a>
            <a href="#propiedades" className="text-gray-600 hover:text-brand-orange transition-colors">
              Propiedades
            </a>
            <a href="#zonas" className="text-gray-600 hover:text-brand-orange transition-colors">
              Zonas
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-brand-orange transition-colors">
              Contacto
            </a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="w-4 h-4" />
                  {cartItems.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-brand-orange text-white w-5 h-5 flex items-center justify-center text-xs">
                      {cartItems.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Carrito de Propiedades</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">
                      No hay propiedades en el carrito
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-start p-3 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{item.title}</h4>
                            <p className="text-brand-orange font-bold">
                              ${item.price.toLocaleString()}
                              {item.type === "rent" && "/mes"}
                            </p>
                          </div>
                          <Button
                            onClick={() => onRemoveFromCart(item.id)}
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700"
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-bold">Total:</span>
                          <span className="font-bold text-lg text-brand-orange">
                            ${totalAmount.toLocaleString()} USD
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <Button
                            onClick={handleWhatsAppOrder}
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                          >
                            Consultar por WhatsApp
                          </Button>
                          <Button
                            onClick={onClearCart}
                            variant="outline"
                            className="w-full"
                          >
                            Limpiar Carrito
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menú</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 space-y-4">
                  <a href="#inicio" className="block text-gray-600 hover:text-brand-orange transition-colors py-2">
                    Inicio
                  </a>
                  <a href="#propiedades" className="block text-gray-600 hover:text-brand-orange transition-colors py-2">
                    Propiedades
                  </a>
                  <a href="#zonas" className="block text-gray-600 hover:text-brand-orange transition-colors py-2">
                    Zonas
                  </a>
                  <a href="#contacto" className="block text-gray-600 hover:text-brand-orange transition-colors py-2">
                    Contacto
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
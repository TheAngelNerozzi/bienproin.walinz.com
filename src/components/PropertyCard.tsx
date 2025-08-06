import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Car, Home, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export interface Property {
  id: string;
  title: string;
  price: number;
  type: "sale" | "rent";
  location: string;
  zone: string;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  description: string;
  features: string[];
  image: string;
}

interface PropertyCardProps {
  property: Property;
  onAddToCart: (property: Property) => void;
}

export const PropertyCard = ({ property, onAddToCart }: PropertyCardProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(property);
    setIsAdded(true);
    
    // Generate notification based on property description
    const notification = generatePropertyNotification(property);
    toast({
      title: "Propiedad agregada al carrito",
      description: notification,
      duration: 5000,
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  const generatePropertyNotification = (property: Property): string => {
    switch (property.id) {
      case "1":
        return "Apartamento en Residencia San Gabriel 2 - 123m² con 2 hab, planta eléctrica, vigilancia 24/7 y ubicación estratégica cerca del C.C. Unicentro. $105,000";
      case "2":
        return "Departamento a estrenar en Los Cabos - 60m² con 2 hab, cocina equipada, 3 aires acondicionados y planta eléctrica en áreas comunes. $52,500";
      case "3":
        return "Apartamento amoblado en Residencias Papagayo - 85m² con 3 hab, 2 baños, piscina, vigilancia 24/7 y áreas comunes. $450/mes";
      default:
        return property.description;
    }
  };

  const formatPrice = (price: number, type: string) => {
    if (type === "rent") {
      return `$${price.toLocaleString()}/mes`;
    }
    return `$${price.toLocaleString()}`;
  };

  const openWhatsApp = () => {
    const message = `Hola! Me interesa la propiedad: ${property.title} - ${formatPrice(property.price, property.type)}. ¿Podrías darme más información?`;
    const phoneNumber = "584125555555"; // Replace with actual WhatsApp Business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="group hover:shadow-brand transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge 
            variant={property.type === "sale" ? "default" : "secondary"}
            className="absolute top-3 left-3 bg-brand-orange text-white"
          >
            {property.type === "sale" ? "Venta" : "Alquiler"}
          </Badge>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
            <span className="text-lg font-bold text-brand-orange">
              {formatPrice(property.price, property.type)}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2 text-gray-800 line-clamp-2">
          {property.title}
        </CardTitle>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1 text-brand-blue" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Home className="w-4 h-4 mr-1" />
            <span>{property.area}m²</span>
          </div>
          {property.bedrooms && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
          )}
          {property.parking && (
            <div className="flex items-center">
              <Car className="w-4 h-4 mr-1" />
              <span>{property.parking}</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {property.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          onClick={handleAddToCart}
          disabled={isAdded}
          className="flex-1 bg-brand-orange hover:bg-brand-orange/90 text-white"
        >
          {isAdded ? "✓ Agregado" : "Agregar al Carrito"}
        </Button>
        
        <Button
          onClick={openWhatsApp}
          variant="outline"
          size="icon"
          className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
        >
          <MessageCircle className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
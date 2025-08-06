import { useState } from "react";
import { PropertyCard, Property } from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Filter } from "lucide-react";
import apartment1 from '@/assets/apartment-1.jpg';
import apartment2 from '@/assets/apartment-2.jpg';
import apartment3 from '@/assets/apartment-3.jpg';

interface PropertyGridProps {
  onAddToCart: (property: Property) => void;
}

export const PropertyGrid = ({ onAddToCart }: PropertyGridProps) => {
  const [selectedZone, setSelectedZone] = useState("todas");

  // Sample properties data based on your requirements
  const properties: Property[] = [
    {
      id: "1",
      title: "Apartamento en Residencia San Gabriel 2",
      price: 105000,
      type: "sale",
      location: "Urb Base Aragua, Maracay, Edo Aragua",
      zone: "base-aragua",
      area: 123,
      bedrooms: 2,
      bathrooms: 2.5,
      parking: 2,
      description: "Majestuoso departamento con ubicación estratégica a solo pasos del C.C. Unicentro. Planta eléctrica 100%, vigilancia 24/7 y conectado a pozo.",
      features: ["Planta eléctrica 100%", "2 habitaciones con baño", "Balcón", "Cocina moderna", "Vigilancia 24/7", "2 estacionamientos"],
      image: apartment1
    },
    {
      id: "2", 
      title: "Departamento a Estrenar en Los Cabos",
      price: 52500,
      type: "sale",
      location: "Urbanización Los Cabos, Maracay, Edo Aragua",
      zone: "los-cabos",
      area: 60,
      bedrooms: 2,
      bathrooms: 1.5,
      parking: 1,
      description: "Departamento ubicado en residencias Luna, completamente equipado con 3 aires acondicionados y terraza con parrillera en áreas comunes.",
      features: ["Cocina termoformada equipada", "3 aires acondicionados", "Lavadora y secadora", "Planta eléctrica áreas comunes", "Terraza con parrillera"],
      image: apartment2
    },
    {
      id: "3",
      title: "Apartamento Amoblado en Residencias Papagayo", 
      price: 450,
      type: "rent",
      location: "Urb Base Aragua, Maracay, Edo Aragua",
      zone: "base-aragua",
      area: 85,
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      description: "Acogedor apartamento completamente amoblado, ideal para familias. Incluye piscina, parque infantil y áreas comunes.",
      features: ["Completamente amoblado", "Piscina", "Parque infantil", "Vigilancia 24/7", "Áreas comunes", "Listo para mudarse"],
      image: apartment3
    }
  ];

  const zones = [
    { id: "todas", name: "Todas las Zonas", count: properties.length },
    { id: "base-aragua", name: "Base Aragua", count: properties.filter(p => p.zone === "base-aragua").length },
    { id: "los-cabos", name: "Los Cabos", count: properties.filter(p => p.zone === "los-cabos").length }
  ];

  const filteredProperties = selectedZone === "todas" 
    ? properties 
    : properties.filter(property => property.zone === selectedZone);

  return (
    <section id="propiedades" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Propiedades <span className="text-brand-orange">Disponibles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestro catálogo de propiedades cuidadosamente seleccionadas 
            en las mejores zonas de Maracay
          </p>
        </div>

        {/* Zone Filter */}
        <div className="mb-8">
          <Tabs value={selectedZone} onValueChange={setSelectedZone} className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                {zones.map((zone) => (
                  <TabsTrigger 
                    key={zone.id} 
                    value={zone.id}
                    className="data-[state=active]:bg-brand-orange data-[state=active]:text-white"
                  >
                    <div className="text-center">
                      <div className="font-medium">{zone.name}</div>
                      <div className="text-xs opacity-70">({zone.count})</div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {zones.map((zone) => (
              <TabsContent key={zone.id} value={zone.id}>
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="w-5 h-5 text-brand-blue mr-2" />
                  <span className="text-gray-600">
                    {zone.name === "Todas las Zonas" 
                      ? `Mostrando ${filteredProperties.length} propiedades en todas las zonas`
                      : `${filteredProperties.length} propiedades en ${zone.name}`
                    }
                  </span>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              No hay propiedades en esta zona
            </h3>
            <p className="text-gray-500">
              Intenta seleccionar otra zona o contacta con nosotros para propiedades exclusivas
            </p>
            <Button 
              onClick={() => setSelectedZone("todas")}
              variant="outline" 
              className="mt-4"
            >
              Ver todas las propiedades
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-white rounded-lg p-8 shadow-elegant">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-gray-600 mb-6">
            Tenemos acceso a propiedades exclusivas que no aparecen en nuestro catálogo público. 
            Contáctanos y te ayudaremos a encontrar tu hogar ideal.
          </p>
          <Button 
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3"
            onClick={() => {
              const phoneNumber = "14424474116";
              const message = "Hola! No encuentro la propiedad que busco en su catálogo. ¿Tienen propiedades exclusivas disponibles?";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, "_blank");
            }}
          >
            Consultar Propiedades Exclusivas
          </Button>
        </div>
      </div>
    </section>
  );
};

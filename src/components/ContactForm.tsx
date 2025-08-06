import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Error",
        description: "Por favor completa al menos tu nombre y teléfono",
        variant: "destructive"
      });
      return;
    }

    // Send message via WhatsApp
    const message = `Nuevo contacto desde la web:
    
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Email: ${formData.email || "No proporcionado"}

Mensaje:
${formData.message || "Sin mensaje adicional"}`;

    const phoneNumber = "14424474116";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
    
    toast({
      title: "¡Gracias por contactarnos!",
      description: "Te hemos redirigido a WhatsApp para completar tu consulta",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-brand-orange">Contáctanos</span> Hoy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a encontrar 
            la propiedad perfecta para ti y tu familia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-brand-orange">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-brand-orange/10 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600">+14424474116</p>
                  </div>
                </div>



                <div className="flex items-center space-x-3">
                  <div className="bg-brand-orange/10 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-gray-600">Maracay, Estado Aragua, Venezuela</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-brand-blue/10 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p className="text-gray-600">Lun - Vie: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sáb: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-brand-blue">Nuestros Servicios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    <span>Venta de propiedades</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                    <span>Alquiler de inmuebles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    <span>Asesoría inmobiliaria</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                    <span>Gestión de propiedades</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    <span>Evaluación de inmuebles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-brand-orange">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 442 447 4116"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email (Opcional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje (Opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué tipo de propiedad buscas..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-3"
                >
                  Enviar Consulta por WhatsApp
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Al enviar este formulario, serás redirigido a WhatsApp para completar tu consulta
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
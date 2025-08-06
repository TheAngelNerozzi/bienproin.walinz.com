import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PropertyGrid } from "@/components/PropertyGrid";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Property } from "@/components/PropertyCard";

const Index = () => {
  const [cartItems, setCartItems] = useState<Property[]>([]);

  const handleAddToCart = (property: Property) => {
    // Check if property is already in cart
    const existingItem = cartItems.find(item => item.id === property.id);
    if (existingItem) {
      return; // Don't add duplicate
    }
    
    setCartItems(prev => [...prev, property]);
  };

  const handleRemoveFromCart = (propertyId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== propertyId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
      <Hero />
      <PropertyGrid onAddToCart={handleAddToCart} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

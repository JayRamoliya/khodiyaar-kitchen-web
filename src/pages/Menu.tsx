import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      category: "Starters",
      items: [
        { name: "Khaman Dhokla", description: "Steamed savory cake with mustard tempering", price: 40 },
        { name: "Patra", description: "Colocasia leaves rolls with spices", price: 50 },
        { name: "Samosa", description: "Crispy pastry filled with spiced potatoes", price: 20 },
        { name: "Sev Khamani", description: "Crumbled dhokla with chutneys", price: 45 },
      ],
    },
    {
      category: "Main Course",
      items: [
        { name: "Gujarati Thali", description: "Complete meal with vegetables, dal, rice, roti, and more", price: 150 },
        { name: "Undhiyu", description: "Mixed vegetables with spices and muthiya", price: 120 },
        { name: "Sev Tameta", description: "Tomato curry with sev garnish", price: 80 },
        { name: "Dal Dhokli", description: "Wheat flour dumplings in spiced lentil soup", price: 90 },
      ],
    },
    {
      category: "Breads",
      items: [
        { name: "Rotli", description: "Traditional soft wheat flatbread", price: 10 },
        { name: "Thepla", description: "Spiced flatbread with fenugreek", price: 15 },
        { name: "Puri", description: "Deep-fried fluffy bread", price: 20 },
      ],
    },
    {
      category: "Sweets",
      items: [
        { name: "Shrikhand", description: "Sweetened strained yogurt with saffron", price: 60 },
        { name: "Basundi", description: "Thickened sweetened milk dessert", price: 70 },
        { name: "Mohanthal", description: "Gram flour fudge with nuts", price: 80 },
        { name: "Jalebi", description: "Crispy spiral sweet soaked in syrup", price: 40 },
      ],
    },
    {
      category: "Beverages",
      items: [
        { name: "Chaas", description: "Spiced buttermilk", price: 25 },
        { name: "Masala Tea", description: "Traditional Indian spiced tea", price: 20 },
        { name: "Lemon Soda", description: "Refreshing lemon drink", price: 30 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Authentic Menu
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore the Rich Flavors of Gujarat
          </p>
          <Badge variant="secondary" className="gap-2">
            <Leaf className="h-4 w-4" />
            100% Vegetarian
          </Badge>
        </div>

        <div className="space-y-12">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h2 className="text-3xl font-bold mb-6 text-center">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => (
                  <Card key={itemIdx} className="p-6 hover:shadow-warm transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-primary font-bold">₹{item.price}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/919876543210?text=I'd like to place an order from the menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="shadow-warm">
              Order via WhatsApp
            </Button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;

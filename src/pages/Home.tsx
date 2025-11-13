import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChefHat, Heart, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Hotel Khodiyaar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Taste the True Flavors of Gujarat
            </p>
            <p className="text-lg text-foreground">
              Where Every Meal Feels Like Home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu">
                <Button size="lg" className="shadow-warm">
                  View Menu
                </Button>
              </Link>
              <a
                href="https://wa.me/916353716421?text=I'd like to place an order"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary">
                  Order Now
                </Button>
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="/image2.jpg"
              alt="Authentic Gujarati Thali"
              className="rounded-2xl shadow-warm w-full"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Hotel Khodiyaar, we serve authentic Gujarati meals prepared with love, 
            purity, and time-honored recipes. Experience the warmth of Gujarati 
            hospitality in every bite. Our mission is to serve food that reminds you 
            of home – simple, fresh, and full of flavor.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center space-y-4 hover:shadow-warm transition-all">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <ChefHat className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Authentic Recipes</h3>
            <p className="text-muted-foreground">
              Traditional Gujarati recipes passed down through generations
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 hover:shadow-warm transition-all">
            <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">Made with Love</h3>
            <p className="text-muted-foreground">
              Every dish prepared with care and fresh ingredients
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 hover:shadow-warm transition-all">
            <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Pure Vegetarian</h3>
            <p className="text-muted-foreground">
              100% vegetarian meals in the true Gujarati tradition
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

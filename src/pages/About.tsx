import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import restaurantImage from "@/assets/restaurant-interior.jpg";
import { Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Story
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Serving Gujarati Happiness Since Day One
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed">
              Hotel Khodiyaar was founded with a simple yet profound mission: to bring 
              the essence of homemade Gujarati food to every visitor's plate. Our journey 
              began with a deep love for traditional recipes and a commitment to preserving 
              the authentic flavors of Gujarat.
            </p>
            <p className="text-lg leading-relaxed">
              Every dish at our restaurant is prepared with fresh ingredients and traditional 
              spices, carefully selected to ensure the highest quality. We believe in the 
              power of good food to bring people together and create lasting memories.
            </p>
            <p className="text-lg leading-relaxed font-semibold text-primary">
              "Our mission is to serve food that reminds you of home – simple, fresh, and 
              full of flavor."
            </p>
          </div>
          <div className="animate-fade-in">
            <img
              src={restaurantImage}
              alt="Restaurant Interior"
              className="rounded-2xl shadow-warm w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center space-y-4 hover:shadow-warm transition-all">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Quality First</h3>
            <p className="text-muted-foreground">
              We never compromise on the quality of our ingredients or the authenticity 
              of our recipes.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-4 hover:shadow-warm transition-all">
            <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold">Made with Love</h3>
            <p className="text-muted-foreground">
              Every meal is prepared with care, dedication, and the warmth of Gujarati 
              hospitality.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-4 hover:shadow-warm transition-all">
            <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">Family Legacy</h3>
            <p className="text-muted-foreground">
              Our recipes have been passed down through generations, keeping tradition alive.
            </p>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 text-center space-y-4 shadow-soft">
          <h2 className="text-3xl font-bold">Why Choose Hotel Khodiyaar?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are more than just a restaurant – we are a celebration of Gujarati culture 
            and cuisine. From the moment you step in, you'll feel the warmth of our 
            hospitality. Whether you're craving a hearty thali or a quick snack, every 
            dish is crafted to perfection with traditional methods and the finest ingredients.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

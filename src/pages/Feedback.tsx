import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const feedbackSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  rating: z.number().min(1, "Please select a rating").max(5),
  comment: z.string().trim().min(1, "Comment is required").max(500, "Comment must be less than 500 characters"),
});

const Feedback = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", rating: 0, comment: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      feedbackSchema.parse(formData);
      setErrors({});
      
      toast({
        title: "Thank You!",
        description: "Your feedback helps us serve you better.",
      });
      
      setFormData({ name: "", rating: 0, comment: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  const testimonials = [
    {
      name: "Priya Patel",
      rating: 5,
      comment: "Absolutely authentic Gujarati food! The thali reminded me of my grandmother's cooking. Highly recommended!",
    },
    {
      name: "Rajesh Shah",
      rating: 5,
      comment: "Best dhokla in town! Fresh, soft, and perfectly spiced. The staff is very friendly too.",
    },
    {
      name: "Anjali Mehta",
      rating: 4,
      comment: "Great ambiance and delicious food. The undhiyu was exceptional. Will definitely visit again!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Feedback
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your Experience Matters to Us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label>Rating *</Label>
                <div className="flex gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= formData.rating
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {errors.rating && <p className="text-sm text-destructive mt-1">{errors.rating}</p>}
              </div>

              <div>
                <Label htmlFor="comment">Your Feedback *</Label>
                <Textarea
                  id="comment"
                  rows={4}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className={errors.comment ? "border-destructive" : ""}
                  placeholder="Tell us about your experience..."
                />
                {errors.comment && <p className="text-sm text-destructive mt-1">{errors.comment}</p>}
              </div>

              <Button type="submit" className="w-full">
                Submit Feedback
              </Button>
            </form>
          </Card>

          <div>
            <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
            <div className="space-y-4">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="p-6 shadow-soft hover:shadow-warm transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.comment}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Feedback;

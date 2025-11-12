import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  message: z.string().trim().min(1, "Message is required").max(500, "Message must be less than 500 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      const whatsappMessage = encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, "_blank");
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
      });
      
      setFormData({ name: "", phone: "", message: "" });
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

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Visit Us or Contact Us Anytime
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 space-y-6 shadow-soft">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
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
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 flex items-start space-x-4 shadow-soft hover:shadow-warm transition-all">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Address</h3>
                <p className="text-muted-foreground">
                  Near Bus Stand<br />
                  Rajkot, Gujarat - 360001
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start space-x-4 shadow-soft hover:shadow-warm transition-all">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">
                  +91 98765 43210
                </a>
              </div>
            </Card>

            <Card className="p-6 flex items-start space-x-4 shadow-soft hover:shadow-warm transition-all">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a href="mailto:info@hotelkhodiyaar.com" className="text-muted-foreground hover:text-primary">
                  info@hotelkhodiyaar.com
                </a>
              </div>
            </Card>

            <Card className="p-6 flex items-start space-x-4 shadow-soft hover:shadow-warm transition-all">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                <p className="text-muted-foreground">8:00 AM - 11:00 PM</p>
                <p className="text-sm text-muted-foreground">All Days of the Week</p>
              </div>
            </Card>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full gap-2" variant="secondary">
                <MessageCircle className="h-5 w-5" />
                Order via WhatsApp
              </Button>
            </a>
          </div>
        </div>

        <Card className="p-4 shadow-soft overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d70.8022!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzE0LjAiTiA3MMKwNDgnMDcuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Khodiyaar Location"
          />
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Gallery = () => {
  const images = [
    { src: '/public/image1.jpg', caption: "Authentic Gujarati Thali", alt: "Complete Gujarati Thali" },
    { src: '/public/image2.jpg', caption: "Freshly Made Dhokla", alt: "Khaman Dhokla" },
    { src: '/public/image1.jpg', caption: "Traditional Undhiyu", alt: "Undhiyu Mixed Vegetables" },
    { src: '/public/image2.jpg', caption: "Sweet Crispy Jalebi", alt: "Jalebi Dessert" },
    { src: '/public/image1.jpg', caption: "Homemade Thepla", alt: "Thepla Flatbread" },
    { src: '/public/image2.jpg', caption: "Our Dining Area", alt: "Restaurant Interior" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A Visual Taste of Hotel Khodiyaar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div 
                  className="group relative overflow-hidden rounded-xl cursor-pointer animate-fade-in shadow-soft hover:shadow-warm transition-all"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-semibold">{image.caption}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-lg font-semibold mt-4">{image.caption}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;

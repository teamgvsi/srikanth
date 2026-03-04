import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Calendar, MapPin, Mail, ArrowRight } from "lucide-react";
import heroImg from "@assets/image1_1772623105289.png";

export function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-32 overflow-hidden bg-gradient-to-br from-[#F6EFEA] via-[#F1E4DA] to-[#EED8C7]">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-40 hero-glow"></div>
      
      {/* Dots pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz48L3N2Zz4=')] -z-10 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-4">
              <h1 className="font-serif text-6xl sm:text-7xl md:text-[84px] font-bold leading-[1] text-foreground tracking-tight">
                Srikanth Raheja
              </h1>
              
              <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground">
                Entrepreneur | <span className="text-primary">Brand Strategist</span> | Marketing Leader
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium text-foreground leading-tight max-w-2xl">
                Founder & CEO building scalable brands through <br className="hidden md:block" />
                Strategy, Creative Operations & Data-Driven Marketing.
              </p>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Srikanth Raheja is an entrepreneur and marketing strategist specializing in brand growth, digital marketing, and scalable creative operations. As the Founder & CEO of Bee Echoo, he helps businesses build powerful brands, optimize content production, and achieve measurable market impact through integrated marketing strategies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollTo('#about')}
                className="rounded-full bg-secondary hover:bg-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-7 text-lg font-medium"
              >
                View My Work &rarr;
              </Button>
              
              <ContactModal>
                <Button 
                  variant="outline"
                  className="rounded-full bg-white/20 border-foreground/10 hover:bg-white text-foreground transition-all duration-300 px-10 py-7 text-lg font-medium flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" /> Book a Meeting
                </Button>
              </ContactModal>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-lg mx-auto group">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
              <img 
                src={heroImg} 
                alt="Srikanth Raheja" 
                className="w-full h-auto object-contain z-10 relative drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] rounded-[20px]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="absolute bottom-8 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl hidden lg:block"
      >
        <div className="bg-white/55 backdrop-blur-xl rounded-[20px] p-8 flex items-center justify-between shadow-2xl border border-white/40 shadow-black/5">
          <div className="flex items-center space-x-12">
            <div>
              <p className="font-serif text-xl font-bold text-foreground mb-3">Professional Journey</p>
              <div className="flex items-center gap-8">
                <div className="flex items-center space-x-2 text-muted-foreground group">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:hi@srikanthraheja.com" className="text-base font-medium group-hover:text-primary transition-colors">hi@srikanthraheja.com</a>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-base font-medium">Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-12">
            <div>
              <p className="font-serif text-xl font-bold text-foreground mb-3">Let's Work Together</p>
              <div className="flex items-center gap-6">
                <span className="text-base font-medium text-muted-foreground">Hyderabad, India</span>
                <div className="flex gap-4">
                  {/* Icons would go here */}
                </div>
              </div>
            </div>
            <ContactModal>
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 transition-all duration-300 px-10 py-6 text-base font-bold">
                Get In Touch &rarr;
              </Button>
            </ContactModal>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

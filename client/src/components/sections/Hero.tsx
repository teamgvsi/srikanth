import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Calendar, MapPin, Mail, ArrowRight } from "lucide-react";
import heroImg from "@assets/WhatsApp_Image_2026-03-04_at_4.41.16_PM_1772622708175.jpeg";

export function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-32 overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-60 bg-gradient-to-br from-[#F7F3EF] via-white to-orange-50/30"></div>
      
      {/* Dots pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz48L3N2Zz4=')] -z-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.1] text-foreground">
                Srikanth Raheja
              </h1>
              
              <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground">
                Entrepreneur | <span className="text-primary">Brand Strategist</span> | <span className="text-primary">Marketing Leader</span>
              </h2>
            </div>

            <p className="text-xl md:text-2xl font-medium text-foreground leading-tight max-w-2xl">
              Founder & CEO building scalable brands through <br className="hidden md:block" />
              Strategy, Creative Operations & Data-Driven Marketing.
            </p>
            
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              Srikanth Raheja is an entrepreneur and marketing strategist specializing in brand growth, digital marketing, and scalable creative operations. As the Founder & CEO of Bee Echoo, he helps businesses build powerful brands, optimize content production, and achieve measurable market impact through integrated marketing strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollTo('#about')}
                className="rounded-full bg-[#1C1C1C] hover:bg-[#1C1C1C]/90 text-white shadow-lg transition-all duration-300 px-8 py-6 text-base"
              >
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <ContactModal>
                <Button 
                  variant="outline"
                  className="rounded-full bg-[#F7F3EF]/50 border-[#1C1C1C]/10 hover:bg-white text-foreground transition-all duration-300 px-8 py-6 text-base flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book a Meeting
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
            <div className="relative w-full max-w-lg mx-auto">
              <img 
                src={heroImg} 
                alt="Srikanth Raheja" 
                className="w-full h-auto object-contain z-10 relative drop-shadow-2xl"
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
        <div className="glass-panel rounded-3xl p-8 flex items-center justify-between shadow-2xl shadow-primary/5 border border-white/60">
          <div className="flex items-center space-x-12">
            <div>
              <p className="font-serif text-xl font-bold text-foreground">Professional Journey</p>
              <div className="flex items-center gap-6 mt-2">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">hi@skrikanthraheja.com</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-12">
            <div>
              <p className="font-serif text-lg font-bold text-foreground">Let's Work Together</p>
              <div className="flex items-center gap-4 mt-1 text-muted-foreground">
                <span className="text-sm font-medium">Hyderabad, India</span>
                <div className="flex gap-3">
                  {/* Social icons would go here */}
                </div>
              </div>
            </div>
            <ContactModal>
              <Button className="rounded-full bg-[#F39C45] hover:bg-[#F39C45]/90 text-white shadow-lg transition-all duration-300 px-8">
                Get In Touch &rarr;
              </Button>
            </ContactModal>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

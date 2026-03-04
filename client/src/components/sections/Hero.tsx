import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Calendar, MapPin, Mail, ArrowRight } from "lucide-react";
import heroImg from "@assets/image1_1772621993034.png";

export function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-32 overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-full h-full hero-glow -z-10 opacity-60"></div>
      
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
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for New Opportunities
              </motion.div>
              
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] text-foreground">
                Srikanth Raheja
              </h1>
              
              <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground">
                Entrepreneur | <span className="text-primary">Brand Strategist</span> | <span className="text-primary">Marketing Leader</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Founder & CEO building scalable brands through Strategy, Creative Operations & Data-Driven Marketing.
            </p>
            
            <p className="text-base text-muted-foreground max-w-xl">
              Srikanth Raheja is an entrepreneur and marketing strategist specializing in brand growth, operational excellence, and forging high-impact partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollTo('#about')}
                className="rounded-full bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 px-8 py-6 text-base"
              >
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <ContactModal>
                <Button 
                  variant="outline"
                  className="rounded-full bg-white/50 border-border/80 hover:bg-white hover:border-primary/30 text-foreground shadow-sm hover:shadow-md transition-all duration-300 px-8 py-6 text-base"
                >
                  <Calendar className="mr-2 w-4 h-4 text-primary" /> Book a Meeting
                </Button>
              </ContactModal>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative hidden md:block"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              {/* Image Decoration / Shadow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] translate-x-4 translate-y-4 -z-10 blur-xl"></div>
              
              <img 
                src={heroImg} 
                alt="Srikanth Raheja" 
                className="w-full h-full object-cover object-top rounded-[2rem] shadow-2xl shadow-black/10 border border-white/50"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Glass Card - Overlapping section below */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="absolute bottom-8 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl hidden lg:block"
      >
        <div className="glass-panel rounded-3xl p-6 flex items-center justify-between shadow-2xl shadow-primary/5 border border-white/60">
          <div className="flex items-center space-x-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Status</p>
              <p className="font-medium text-foreground">Professional Journey</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:hi@srikanthraheja.com" className="text-sm font-medium hover:text-primary transition-colors">
                hi@srikanthraheja.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Hyderabad, India</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="font-serif text-lg font-medium">Let's Work Together</span>
            <ContactModal>
              <Button className="rounded-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
                Get In Touch &rarr;
              </Button>
            </ContactModal>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

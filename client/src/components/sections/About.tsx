import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { ArrowRight, Download } from "lucide-react";
import aboutImg from "@assets/f4335518-4758-42d4-bb1e-8fefbd9313f6_1772621997548.jpg";

export function About() {
  return (
    <section id="about" className="py-24 bg-white/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-border shadow-sm text-sm font-medium text-primary mb-2">
              About Me
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Driving Growth Through Strategic Vision
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                With a deep understanding of market dynamics and consumer behavior, I've spent my career building brands from the ground up. At Bee Echoo and ARA Incorp, my focus has been on operational excellence and scalable strategies.
              </p>
              <p>
                I believe in the intersection of data-driven insights and compelling creative narratives. Whether it's leading a cross-functional product design team or orchestrating a national marketing campaign, my goal is always measurable impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button 
                className="rounded-full bg-secondary text-white hover:bg-secondary/90 px-6 py-5 text-base"
              >
                View Portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <ContactModal>
                <Button 
                  variant="outline"
                  className="rounded-full bg-transparent border-border hover:bg-white px-6 py-5 text-base"
                >
                  <Download className="mr-2 w-4 h-4 text-primary" /> Download Resume
                </Button>
              </ContactModal>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 border-8 border-white group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={aboutImg} 
                alt="About Srikanth Raheja" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 glass-panel p-5 rounded-2xl hidden md:block">
              <p className="font-serif text-3xl font-bold text-primary">10+</p>
              <p className="text-sm font-medium text-foreground">Years Experience</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

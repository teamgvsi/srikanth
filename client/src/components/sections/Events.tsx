import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import eventImg from "@assets/image3_1772622008717.jpeg";

export function Events() {
  return (
    <section id="events" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-border shadow-sm text-sm font-medium text-primary mb-4">
              Insights & Speaking
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Event Highlights
            </h2>
          </div>
          <a href="#" className="inline-flex items-center text-primary font-medium hover:text-orange-600 transition-colors mt-4 md:mt-0 group">
            View All Events <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-xl border border-border/50">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 sm:h-80 lg:h-full min-h-[300px] rounded-2xl overflow-hidden"
          >
            <img 
              src={eventImg} 
              alt="Speaking at CIE IIIT Hyderabad" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium opacity-80 mb-1">Recent Appearance</p>
              <p className="font-serif text-xl font-medium">Panel Discussion, 2023</p>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-4 sm:p-8"
          >
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
              CIE IIIT Hyderabad Founder Conversation
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Engaged in a deep-dive panel discussion on scaling modern tech startups in volatile markets. Shared insights on building resilient teams and aligning product design with aggressive marketing strategies.
              </p>
              <p>
                The conversation highlighted the necessity of a founder's adaptability and the critical role of data in steering creative decisions.
              </p>
            </div>
            
             
          </motion.div>

        </div>
      </div>
    </section>
  );
}

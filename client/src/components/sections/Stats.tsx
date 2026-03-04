import { motion } from "framer-motion";
import { Rocket, Target, Megaphone, Handshake } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: "8+ Years",
    label: "Industry Experience",
    delay: 0.1
  },
  {
    icon: Target,
    value: "30+ Projects",
    label: "Successfully Delivered",
    delay: 0.2
  },
  {
    icon: Megaphone,
    value: "100+",
    label: "Campaigns Managed",
    delay: 0.3
  },
  {
    icon: Handshake,
    value: "15+",
    label: "Strategic Partnerships",
    delay: 0.4
  }
];

export function Stats() {
  return (
    <section id="impact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Impact & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Numbers that tell the story of dedicated strategy, execution, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-black/5 border border-border/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <stat.icon className="w-7 h-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const timeline = [
  {
    role: "Founder & CEO",
    company: "Bee Echoo",
    period: "2020 - Present",
    description: "Spearheaded creative operations, leading a multi-disciplinary team to deliver scalable brand strategies and data-driven marketing solutions for diverse enterprise clients."
  },
  {
    role: "Founder & CEO",
    company: "ARA Incorp",
    period: "2018 - 2020",
    description: "Established a product design agency focusing on visual UI leadership. Grew the client base by 150% through strategic partnerships and innovative design frameworks."
  },
  {
    role: "Visual UI / Product Design Leadership",
    company: "Various Agencies",
    period: "2015 - 2018",
    description: "Led product design initiatives, mentoring junior designers and establishing UI/UX standards that improved user retention across multiple digital products."
  }
];

export function Journey() {
  return (
    <section id="journey" className="py-24 bg-white/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white border border-border shadow-sm text-sm font-medium text-primary mb-4">
            Experience
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Professional Journey
          </h2>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 space-y-12 pb-8">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute w-6 h-6 bg-white border-4 border-primary rounded-full -left-[13px] top-1 shadow-md"></div>
              
              <div className="glass-panel p-6 md:p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <span className="inline-block text-xs font-bold text-primary tracking-wider uppercase mb-2">
                  {item.period}
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                  {item.role}
                </h3>
                <h4 className="text-lg font-medium text-foreground/70 mb-4">
                  {item.company}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

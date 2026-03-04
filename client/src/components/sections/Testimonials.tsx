import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sai Chaitanya Kokku",
    role: "Director, Draper Startup House Hyderabad",
    content: "Srikanth's strategic approach to brand building is unparalleled. He doesn't just look at marketing; he looks at the entire business ecosystem to drive growth.",
  },
  {
    id: 2,
    name: "Sheetal Patil",
    role: "CEO, Cream Stone Ice Cream Concepts",
    content: "Working with Srikanth was a transformative experience for our brand. His insights into consumer behavior and digital strategy helped us scale effectively.",
  },
  {
    id: 3,
    name: "Mark Johnson",
    role: "Founder, TechScale Innovations",
    content: "Srikanth Raheja is a rare talent who combines creative vision with data-driven execution. His ability to optimize creative operations is a game-changer.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Marketing Director, Global Retail Group",
    content: "The level of professionalism and strategic depth Srikanth brings to the table is exceptional. He truly understands what it takes to build a scalable brand.",
  },
  {
    id: 5,
    name: "David Chen",
    role: "CEO, NextGen Ventures",
    content: "Srikanth's moderation during our panel was insightful. He has a deep understanding of the startup journey and the critical decisions founders face.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#F7F3EF]/50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What Leaders Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-full"
            >
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
              <p className="text-xl md:text-2xl font-serif italic text-foreground/90 leading-relaxed mb-8">
                "{testimonials[index].content}"
              </p>
              <div>
                <h4 className="font-bold text-lg text-foreground">{testimonials[index].name}</h4>
                <p className="text-primary font-medium">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

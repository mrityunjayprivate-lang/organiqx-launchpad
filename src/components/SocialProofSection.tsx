import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Finally a snack that actually fuels my workouts.",
    author: "Arjun K.",
    role: "Fitness Enthusiast",
  },
  {
    text: "Perfect snack for my office desk.",
    author: "Priya M.",
    role: "Marketing Professional",
  },
  {
    text: "Tastes amazing and keeps me full longer.",
    author: "Rohit S.",
    role: "Marathon Runner",
  },
];

const SocialProofSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground">
            Loved by <span className="text-gradient-gold">Health Enthusiasts</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="bg-gradient-card rounded-xl border border-border p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-body text-foreground text-base italic mb-4">"{review.text}"</p>
              <div>
                <p className="font-heading text-sm font-bold text-foreground">{review.author}</p>
                <p className="font-body text-xs text-muted-foreground">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

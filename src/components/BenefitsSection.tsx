import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Leaf, Heart } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Energy Boosting",
    description: "Natural healthy fats and complex nutrients deliver long-lasting energy without sugar crashes.",
  },
  {
    icon: Shield,
    title: "Antioxidant Rich",
    description: "Powerful berries support recovery, immunity, and cellular health.",
  },
  {
    icon: Leaf,
    title: "Clean Nutrition",
    description: "No preservatives. No artificial ingredients. Just pure ingredients from nature.",
  },
  {
    icon: Heart,
    title: "Daily Wellness",
    description: "Designed to become a daily nutrition habit for a stronger body and sharper mind.",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="section-padding bg-gradient-dark">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">
            Nutrition Benefits
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground">
            More Than a Snack — <span className="text-gradient-gold">It's Fuel</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-card rounded-xl border border-border p-6 text-center hover:border-gold/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-gold" size={28} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

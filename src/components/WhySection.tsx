import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ShieldCheck, Target, Briefcase } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Premium Ingredients",
    text: "We source high-quality nuts, berries, and superfoods.",
  },
  {
    icon: ShieldCheck,
    title: "No Preservatives",
    text: "Pure ingredients without chemical additives.",
  },
  {
    icon: Target,
    title: "Performance Focused",
    text: "Snacks designed for energy, stamina, and recovery.",
  },
  {
    icon: Briefcase,
    title: "Convenient Nutrition",
    text: "Perfect for work, gym, travel, or daily routine.",
  },
];

const WhySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="section-padding">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">
            Why Us
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground">
            Why Choose <span className="text-gradient-gold">ORGANIQX?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start bg-gradient-card rounded-xl border border-border p-6 hover:border-gold/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <reason.icon className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{reason.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{reason.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

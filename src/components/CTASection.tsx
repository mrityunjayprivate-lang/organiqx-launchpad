import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="section-padding">
      <div className="container mx-auto max-w-3xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-gradient-card rounded-2xl border border-gold/20 p-10 md:p-16 animate-pulse-glow"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground mb-4">
            Upgrade Your <span className="text-gradient-gold">Snacking</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg mb-8">
            Choose snacks that work for your body, not against it.
          </p>
          <a
            href="#products"
            className="inline-block font-heading text-sm font-bold bg-gold text-gold-foreground px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Shop ORGANIQX
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

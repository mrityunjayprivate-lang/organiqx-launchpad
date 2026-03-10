import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PhilosophySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="section-padding bg-gradient-dark">
      <div className="container mx-auto max-w-4xl text-center" ref={ref}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block"
        >
          Our Philosophy
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl md:text-5xl font-black text-foreground mb-8"
        >
          Born From the Need for
          <br />
          <span className="text-gradient-gold">Better Snacking</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-muted-foreground text-base md:text-lg leading-relaxed space-y-4"
        >
          <p>
            In a world full of processed snacks and empty calories, ORGANIQX was created for people who demand better fuel for their body.
          </p>
          <p>
            We believe snacks should do more than just satisfy cravings. They should energize, nourish, and support performance.
          </p>
          <p>
            That's why every ORGANIQX blend is carefully crafted with premium nuts, seeds, berries, and superfoods sourced from nature.
          </p>
          <div className="flex flex-col items-center gap-1 pt-4 text-foreground font-heading font-bold text-lg">
            <span>Clean ingredients.</span>
            <span>Powerful nutrition.</span>
            <span className="text-gradient-gold">Uncompromised taste.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;

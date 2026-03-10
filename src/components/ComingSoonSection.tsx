import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const upcoming = [
  "Protein trail blends",
  "Superfood snack mixes",
  "Energy nut clusters",
  "Functional nutrition snacks",
];

const ComingSoonSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">
            Coming Soon
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground mb-4">
            More Clean Snacks <span className="text-gradient-gold">Coming Soon</span>
          </h2>
          <p className="font-body text-muted-foreground mb-10">
            ORGANIQX is expanding to bring you a new generation of healthy snacks designed for modern lifestyles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {upcoming.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-gradient-card rounded-xl border border-border border-dashed p-5 flex items-center gap-3"
            >
              <Sparkles size={18} className="text-gold shrink-0" />
              <span className="font-heading text-sm font-semibold text-foreground">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="font-heading text-sm font-bold text-gold mt-8"
        >
          Stay tuned.
        </motion.p>
      </div>
    </section>
  );
};

export default ComingSoonSection;

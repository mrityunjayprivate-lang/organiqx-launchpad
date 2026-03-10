import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ingredients = ["Almonds", "Cashews", "Seeds", "Dried Berries", "Superfoods"];

const IngredientsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container mx-auto max-w-4xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-leaf mb-4 block">
            Clean Label
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground mb-8">
            Nothing Artificial. <span className="text-gradient-gold">Nothing Hidden.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {ingredients.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="font-heading text-sm font-bold bg-secondary text-foreground px-6 py-3 rounded-full border border-border"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="font-body text-muted-foreground text-base leading-relaxed space-y-2"
        >
          <p>
            Every ORGANIQX pack contains clean, carefully selected ingredients that your body understands and benefits from.
          </p>
          <div className="flex flex-col items-center gap-1 pt-3 text-foreground font-heading font-semibold text-sm">
            <span>No artificial flavors.</span>
            <span>No preservatives.</span>
            <span className="text-gradient-gold">No nonsense.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IngredientsSection;

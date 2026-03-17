import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import trailMixImg from "@/assets/trail-mix-product.png";
import berryMixImg from "@/assets/berry-mix-product.png";

const products = [
  {
    name: "Nature's Trail Mix",
    image: trailMixImg,
    description:
      "A powerful combination of nuts, seeds, berries, and superfoods designed to deliver energy, healthy fats, and sustained fuel throughout the day.",
    perfectFor: ["Gym goers", "Professionals", "Travelers", "Athletes"],
  },
  {
    name: "Berries Fusion",
    image: berryMixImg,
    description:
      "A vibrant blend of antioxidant-rich berries that supports immunity, recovery, and daily vitality.",
    perfectFor: ["Midday energy", "Healthy desserts", "Smoothie toppings"],
  },
];

const ProductShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">
            Our Products
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground">
            Crafted for <span className="text-gradient-gold">Performance</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gradient-card rounded-2xl overflow-hidden border border-border hover:border-gold/30 transition-colors group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="font-heading text-xs font-bold tracking-wider uppercase text-gold mb-2">
                  Perfect for:
                </p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {product.perfectFor.map((item) => (
                    <li
                      key={item}
                      className="text-xs font-body bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <button className="font-heading text-xs font-bold bg-gold text-gold-foreground px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                    Buy Now
                  </button>
                  <button className="font-heading text-xs font-bold border border-foreground/20 text-foreground px-5 py-2.5 rounded-lg hover:bg-foreground/5 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-ingredients.png";

const badges = [
  "No Preservatives",
  "Vegan Friendly",
  "Rich in Antioxidants",
  "Energy Boosting",
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium trail mix ingredients floating on dark background"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container mx-auto relative z-10 section-padding">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-sm font-bold tracking-[0.3em] uppercase text-gold mb-6"
          >
            Clean Crunch. Pure Power.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 text-foreground"
          >
            Fuel Your Body
            <br />
            <span className="text-gradient-gold">The Clean Way</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            ORGANIQX delivers premium trail mixes and berry blends made for energy, focus, and daily performance.
            No preservatives. No shortcuts. Just powerful nutrition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#products"
              className="font-heading text-sm font-bold bg-gold text-gold-foreground px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Products
            </a>
            <a
              href="#cta"
              className="font-heading text-sm font-bold border border-foreground/30 text-foreground px-8 py-3.5 rounded-lg hover:bg-foreground/10 transition-colors"
            >
              Shop Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {badges.map((badge) => (
              <span key={badge} className="flex items-center gap-2 text-sm font-body text-leaf font-medium">
                <CheckCircle size={16} />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

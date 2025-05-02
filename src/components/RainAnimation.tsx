
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const RainDrop = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ y: -20, x: Math.random() * window.innerWidth }}
      animate={{ y: window.innerHeight + 20 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
      className="absolute w-px h-10 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"
    />
  );
};

const RainAnimation = () => {
  const [drops, setDrops] = useState<number[]>([]);

  useEffect(() => {
    setDrops(Array.from({ length: 100 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {drops.map((_, i) => (
        <RainDrop key={i} delay={Math.random() * 2} />
      ))}
    </div>
  );
};

export default RainAnimation;

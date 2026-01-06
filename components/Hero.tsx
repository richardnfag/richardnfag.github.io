"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import HeroTitle from "./HeroTitle";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto px-6 pt-32 pb-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="flex flex-col items-start text-left"
      >
        <HeroTitle />

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-zinc-600 max-w-3xl mb-12 leading-relaxed"
        >
          Especialista em transformar sistemas complexos em operações
          resilientes. Possuo forte experiência em desenhar arquiteturas
          distribuídas, seguras e orientadas a dados.
        </motion.p>

        {/*<motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
          <button className="bg-[#5667B1]/80 hover:bg-[#6374B8] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg shadow-[#5667B1]/20 cursor-pointer">
            Ver Arquitetura de Projetos
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="glass-button text-zinc-700 px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:text-zinc-900 cursor-pointer">
            <Calendar className="w-4 h-4" />
            Agendar reunião
          </button>
        </motion.div>*/}
      </motion.div>
    </section>
  );
}

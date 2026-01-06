'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// As palavras que vão rotacionar
const words = ["performance", "robustez", "escala"];

export default function HeroTitle() {
    const [index, setIndex] = useState(0);

    // Lógica de rotação a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 text-zinc-900 leading-[1.1] tracking-tight"
        >
            Arquitetura de Soluções <br />

            {/* Container flex para alinhar o texto estático com o dinâmico */}
            <span className="text-zinc-500 flex flex-wrap gap-x-3">
                <span>de alta</span>

                {/* Container relativo para a animação não quebrar o layout */}
                <span className="relative flex w-full md:w-auto h-[1.1em] overflow-hidden">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={index} // A chave é crucial para o Framer saber que mudou
                            initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }} // Entra de baixo
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} // Fica no centro
                            exit={{ y: "-100%", opacity: 0, filter: "blur(10px)" }} // Sai por cima
                            transition={{
                                y: { type: "spring", stiffness: 100, damping: 20 },
                                opacity: { duration: 0.5 },
                                filter: { duration: 0.5 }
                            }}
                            className="block absolute md:static"
                        >
                            {words[index]}
                        </motion.span>
                    </AnimatePresence>
                </span>
            </span>
        </motion.h1>
    );
}

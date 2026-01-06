"use client";

import { motion } from "framer-motion";

export function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
                <div className="font-bold text-lg text-zinc-900 tracking-tight">
                    Richard Fagundes
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#expertise" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Expertise</a>
                    <a href="#cases" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Casos de Estudo</a>
                    <a href="#timeline" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Trajetória</a>
                </nav>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#5667B1]/10 border border-[#5667B1]/20">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5667B1] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#5667B1]"></span>
                        </span>
                        <span className="text-[10px] font-mono text-[#5667B1] font-medium tracking-wide uppercase">All systems go!</span>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}

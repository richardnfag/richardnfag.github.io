"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";

import { Timeline } from "@/components/Timeline";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0EEE9]   overflow-hidden relative selection:bg-[#5667B1]/30 selection:text-[#5667B1]">
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-100 pointer-events-none"></div>
      <div className="fixed inset-0 z-0 bg-[#B6A0B7]/50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 font-sans">
        <Header />
        <Hero />
        <BentoGrid />

        <Timeline />
        <Footer />
      </div>
    </main>
  );
}

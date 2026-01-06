"use client";

import { Github, Linkedin, Mail, Check, Copy } from "lucide-react";
import { useState } from "react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/*<div className="space-y-6">
          <h4 className="text-zinc-900 font-bold tracking-tight">
            Richard Fagundes
          </h4>
          <div className="space-y-2 text-sm text-zinc-500">
            <p>MBA em Arquitetura de Soluções (FIAP)</p>
            <p>Análise e Desenvolvimento de Sistemas (UNILINS)</p>
          </div>
        </div>*/}
        {/*
        <div className="space-y-6">
          <h5 className="text-zinc-500 font-bold uppercase text-xs tracking-wider">
            Certificações de Elite
          </h5>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded bg-zinc-100 border border-zinc-200 text-xs text-zinc-600 font-mono">
              Engenheiro de ML (Santander)
            </span>
            <span className="px-3 py-1 rounded bg-zinc-100 border border-zinc-200 text-xs text-zinc-600 font-mono">
              IBM Z Xplore / Mainframe
            </span>
          </div>
        </div>*/}

        <div className="space-y-6">
          <h5 className="text-zinc-500 font-bold uppercase text-xs tracking-wider">
            Conectar
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SocialLink
              label="GitHub"
              value="richardnfag"
              copyValue="https://github.com/richardnfag"
              href="https://github.com/richardnfag"
              icon={Github}
            />
            <SocialLink
              label="LinkedIn"
              value="richardnfag"
              copyValue="https://linkedin.com/in/richardnfag"
              href="https://linkedin.com/in/richardnfag"
              icon={Linkedin}
            />
            <SocialLink
              label="Email"
              value="contato@richardfagundes.com"
              copyValue="contato@richardfagundes.com"
              href="mailto:contato@richardfagundes.com"
              icon={Mail}
            />
            <SocialLink
              label="WhatsApp"
              value="+55 14 99645-9969"
              copyValue="+5514996459969"
              href="https://api.whatsapp.com/send?phone=5514996459969"
              icon={WhatsappIcon}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-black/5 text-center md:text-left text-xs text-zinc-500">
        © 2026 Richard Fagundes. All rights reserved. System Operational.
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  label: string;
  value: string;
  copyValue: string;
  href: string;
  icon: any;
}

function SocialLink({
  label,
  value,
  copyValue,
  href,
  icon: Icon,
}: SocialLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(copyValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200/50 hover:border-zinc-300 transition-all group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 flex-1 min-w-0"
      >
        <div className="p-2 rounded-lg bg-white border border-zinc-100 text-zinc-600 group-hover:text-[#5667B1] group-hover:border-[#5667B1]/20 transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-medium text-zinc-500">{label}</span>
          <span className="text-sm font-semibold text-zinc-900 truncate">
            {value}
          </span>
        </div>
      </a>
      <button
        onClick={handleCopy}
        className="p-2 rounded-lg hover:bg-zinc-200/50 text-zinc-400 hover:text-zinc-600 transition-colors"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

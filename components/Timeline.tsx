"use client";

import { motion } from "framer-motion";

export function Timeline() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto" id="timeline">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">Trajetória</h2>
        <p className="text-zinc-600">
          Evolução contínua em engenharia de software e arquitetura.
        </p>
      </div>

      <div className="relative border-l border-zinc-300 ml-3 md:ml-6 space-y-12">
        <TimelineItem
          year="2024 - 2026"
          role="Software Engineer"
          company="55PBX"
          description="Referência técnica em conteinerização e observabilidade para sistemas críticos de telefonia. Liderança na sustentação de aplicações de alta escala e disseminação de conhecimentos sobre Kubernetes e OpenSearch."
          current={true}
        />
        <TimelineItem
          year="2023 - 2023"
          role="Software Engineer"
          company="B2ML Sistemas"
          description="Atuação no desenvolvimento backend para integração de sistemas de pagamentos e gestão de infraestrutura em nuvem (AWS)."
          current={false}
        />
        <TimelineItem
          year="2022 - 2023"
          role="MBA em Arquitetura de Soluções"
          company="FIAP"
          description="Especialização acadêmica focada em padrões arquiteturais modernos, design de soluções corporativas e estratégias de integração de sistemas."
          current={false}
        />
        <TimelineItem
          year="2021 - 2022"
          role="DevOps Engineer"
          company="Instruct"
          description="Automação de infraestrutura, gestão de Data Centers e cultura DevOps com Ansible e Kubernetes."
          current={false}
        />
        <TimelineItem
          year="2018 - 2019"
          role="Estágio na Pró-reitoria de Pesquisa"
          company="UNILINS"
          description="Suporte aos professores e alunos, organização de eventos, desenvolvimento e manutenção de sistemas internos."
          current={false}
        />
        <TimelineItem
          year="2018"
          role="Professor Voluntário"
          company="UNILINS"
          description="Criação e ministração de curso de desenvolvimento Web com Go (Golang)."
          current={false}
        />
        <TimelineItem
          year="2015 - 2019"
          role="Tecnologia em Análise e Desenvolvimento de Sistemas"
          company="UNILINS"
          description="Formação superior com performance de Melhor Aluno da turma."
          current={false}
        />
      </div>
    </section>
  );
}

function TimelineItem({
  year,
  role,
  company,
  description,
  current,
}: {
  year: string;
  role: string;
  company: string;
  description: string;
  current: boolean;
}) {
  return (
    <div className="relative pl-8 md:pl-12 group">
      <div
        className={`absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full border-2 ${current ? "bg-[#5667B1] border-[#5667B1] shadow-[0_0_10px_rgba(86,103,177,0.5)]" : "bg-white border-zinc-400 group-hover:border-[#5667B1] transition-colors"}`}
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
        <span
          className={`text-sm font-mono ${current ? "text-[#5667B1]" : "text-zinc-500"}`}
        >
          {year}
        </span>
        <h3 className="text-lg font-bold text-zinc-900">
          {role} <span className="text-zinc-500 font-normal">@ {company}</span>
        </h3>
      </div>

      <p className="text-zinc-600 text-sm max-w-2xl leading-relaxed">
        {description}
      </p>
    </div>
  );
}

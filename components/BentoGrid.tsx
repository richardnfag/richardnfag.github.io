"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Globe,
  Cloud,
  Database,
  Activity,
  GitMerge,
  Users,
  Cpu,
  Blocks,
  Brain,
  Eye,
} from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="expertise">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">Expertise</h2>
        <p className="text-zinc-600 max-w-2xl">
          O arsenal técnico e estratégico unificado para resolver problemas
          complexos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Cpu className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="text-[#5667B1] w-6 h-6" />
            <h3 className="text-lg font-bold text-zinc-900">Backend</h3>
          </div>
          <p className="text-zinc-600 text-sm mb-6">
            Construção de serviços de alta performance e baixa latência
            utilizando padrões DDD e SOLID para código escalável.
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag label="Python" />
            <Tag label="Golang" />
            <Tag label="Rust" />
            <Tag label="TypeScript" />
            <Tag label="Node.JS" />
            <Tag label="Django" />
            <Tag label="Rest API" />
            <Tag label="GraphQL" />
            <Tag label="Multithreading" />
            <Tag label="Multiprocessing" />
            <Tag label="gRPC" />
            <Tag label="WebSocket" />
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Cloud className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="text-[#5667B1] w-6 h-6" />
            <h3 className="text-lg font-bold text-zinc-900">Infra & Cloud</h3>
          </div>
          <p className="text-zinc-600 text-sm mb-6">
            Automação de infraestrutura e orquestração de containers via GitOps
            para garantir ambientes reprodutíveis e seguros.
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag label="IaC" />
            <Tag label="CI/CD" />
            <Tag label="Kubernetes" />
            <Tag label="Docker" />
            <Tag label="Terraform" />
            <Tag label="ArgoCD" />
            <Tag label="AWS" />
            <Tag label="GCP" />
            <Tag label="Azure" />
            <Tag label="Linux" />
            <Tag label="Windows Server" />
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Activity className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-[#5667B1] w-6 h-6" />
            <h3 className="text-lg font-bold text-zinc-900">System Design</h3>
          </div>
          <p className="text-zinc-600 text-sm mb-6">
            Desenho de arquiteturas distribuídas resilientes e estratégias de
            migração de legados monolíticos para microsserviços.
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag label="Microservices" />
            <Tag label="Event-Driven Architecture" />
            <Tag label="Performance" />
            <Tag label="Escalabilidade" />
            <Tag label="Confiabilidade" />
            <Tag label="Consistencia" />
            <Tag label="Segurança" />
            <Tag label="Otimização de Custos" />
            <Tag label="Arquitetura" />
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Blocks className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <Blocks className="text-[#5667B1] w-6 h-6" />
            <h3 className="text-lg font-bold text-zinc-900">
              Data Engineering
            </h3>
          </div>
          <p className="text-zinc-600 text-sm mb-6">
            Implementação de pipelines de Big Data e métodos de persistência
            otimizados para alto volume de processamento.
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag label="RabbitMQ" />
            <Tag label="Apache Kafka" />
            <Tag label="Apache Spark" />
            <Tag label="SQL" />
            <Tag label="NoSQL" />
            <Tag label="MongoDB" />
            <Tag label="PostgreSQL" />
            <Tag label="ETL Pipelines" />
            <Tag label="Data Warehouse" />
            <Tag label="Data Lake" />
            <Tag label="Data Lakehouse" />
            <Tag label="Data Pipeline" />
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Brain className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <Brain className="text-[#5667B1] w-6 h-6" />
            <h3 className="text-lg font-bold text-zinc-900">
              Inteligência Artificial Aplicada
            </h3>
          </div>
          <p className="text-zinc-600 text-sm mb-6">
            Integração de modelos preditivos e algoritmos inteligentes em
            ambientes produtivos para gerar valor de negócio a partir dos dados.
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag label="Machine Learning" />
            <Tag label="Deep Learning" />
            <Tag label="Natural Language Processing" />
            <Tag label="Computer Vision" />
            <Tag label="Model Deployment" />
            <Tag label="Reinforcement Learning" />
            <Tag label="Generative AI" />
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Eye className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <Eye className="text-[#5667B1] w-6 h-6" />
            <h3 className="text-lg font-bold text-zinc-900">
              SRE & Observabilidade
            </h3>
          </div>
          <p className="text-zinc-600 text-sm mb-6">
            Implementação de cultura de confiabilidade com visibilidade total do
            sistema (logs, métricas e traces) para antecipar gargalos e garantir
            uptime
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag label="Prometheus" />
            <Tag label="Grafana" />
            <Tag label="Loki" />
            <Tag label="Tempo" />
            <Tag label="OpenSearch" />
            <Tag label="ElasticSearch" />
            <Tag label="Kibana" />
            <Tag label="Logstash" />
            <Tag label="Zabbix" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-8 rounded-3xl flex flex-col justify-between hover:bg-white/60 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-zinc-900">
                Arquitetura de Sistemas Distribuídos
              </h3>
              <GitMerge className="text-[#5667B1] w-6 h-6" />
            </div>
            <p className="text-zinc-600 leading-relaxed">
              Desenho de ecossistemas de software resilientes e desacoplados,
              focados em escalabilidade horizontal e tolerância a falhas.
            </p>
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl flex flex-col justify-between hover:bg-white/60 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-zinc-900">
                Tech Enablement & Mentoria
              </h3>
              <Users className="text-[#5667B1] w-6 h-6" />
            </div>
            <p className="text-zinc-600 leading-relaxed">
              Atuação como multiplicador de conhecimento para acelerar a
              evolução de desenvolvedores e garantir o alinhamento técnico em
              times ágeis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechItem({ label }: { label: string }) {
  return (
    <div className="glass-chip flex items-center gap-3 p-3 rounded-lg">
      <div className="w-1.5 h-1.5 rounded-full bg-[#5667B1]" />
      <span className="font-mono text-sm text-zinc-700">{label}</span>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="glass-chip px-3 py-1 rounded-full text-xs font-mono text-[#5667B1]">
      {label}
    </span>
  );
}

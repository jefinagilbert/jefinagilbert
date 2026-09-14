"use client";

import React, { useState } from "react";
import { 
  Server, 
  Database, 
  Zap, 
  Smartphone, 
  Layers, 
  Activity, 
  Cpu, 
  ArrowRight, 
  Code, 
  CheckCircle,
  GitPullRequest
} from "lucide-react";

export default function ArchitectureShowcase() {
  const [activePipeline, setActivePipeline] = useState<"streaming" | "caching" | "cicd">("streaming");
  const [selectedNode, setSelectedNode] = useState<string>("kafka");

  const pipelines = {
    streaming: {
      title: "Real-Time Event Streaming Pipeline",
      subtitle: "Apache Kafka + WebSockets + Node.js + React Native",
      metric: "Sub-50ms Event Delivery • Zero Message Loss",
      nodes: [
        {
          id: "client",
          name: "React Native Client",
          role: "Cross-Platform UI",
          tech: "React Native, WebSockets",
          desc: "Maintains bidirectional socket channel for real-time telemetry streaming and diagnostic device control.",
          latency: "< 15ms"
        },
        {
          id: "gateway",
          name: "API Gateway / Node.js",
          role: "Ingestion & Validation",
          tech: "Node.js, Express, Socket.IO",
          desc: "Handles payload authorization, schema validation, and routes telemetry into the messaging queue.",
          latency: "< 20ms"
        },
        {
          id: "kafka",
          name: "Apache Kafka Broker",
          role: "Event Stream Partitioning",
          tech: "Kafka Topics & Partitions",
          desc: "Decouples data producer from consumers, ensuring reliable distributed stream processing and fault-tolerant log retention.",
          latency: "< 10ms"
        },
        {
          id: "persistence",
          name: "PostgreSQL & Redis Cache",
          role: "State & Persistence",
          tech: "PostgreSQL ACID + Redis",
          desc: "Asynchronously commits persistent transaction logs while caching active session states in Redis memory.",
          latency: "< 5ms"
        }
      ],
      codeSnippet: `// Event Producer: Kafka Socket Streaming Bridge
import { Kafka } from 'kafkajs';
import { Server } from 'socket.io';

const kafka = new Kafka({ clientId: 'marlow-telemetry', brokers: ['kafka:9092'] });
const producer = kafka.producer();

io.on('connection', (socket) => {
  socket.on('device:telemetry', async (payload) => {
    // Publish to partitioned topic asynchronously
    await producer.send({
      topic: 'vessel-telemetry-stream',
      messages: [{ key: payload.vesselId, value: JSON.stringify(payload) }]
    });
    socket.emit('ack:event', { status: 'streamed', timestamp: Date.now() });
  });
});`
    },
    caching: {
      title: "High-Throughput Cache-Aside Architecture",
      subtitle: "Redis Memory Layer + ACID PostgreSQL Schemas",
      metric: "40% Database Load Cut • <50ms Query Latency",
      nodes: [
        {
          id: "client",
          name: "Client Application",
          role: "Front-End Consumer",
          tech: "React Native / Next.js",
          desc: "Requests fleet diagnostic or patient monitoring metrics over secure REST / GraphQL endpoints.",
          latency: "< 30ms"
        },
        {
          id: "cache",
          name: "Redis In-Memory Cache",
          role: "High-Speed Cache Hit",
          tech: "Redis Cluster, LRU Policy",
          desc: "Intercepts incoming requests. Delivers 85%+ cache-hit responses under 5ms, avoiding expensive disk I/O.",
          latency: "< 5ms"
        },
        {
          id: "database",
          name: "PostgreSQL ACID Cluster",
          role: "Normalized Persistence",
          tech: "PostgreSQL 16, B-Tree Indexes",
          desc: "Normalized transactional schema enforcing data integrity with automated index optimization.",
          latency: "< 45ms"
        }
      ],
      codeSnippet: `// Cache-Aside Pattern with Automatic Invalidation
async function getVesselTelemetry(vesselId: string) {
  const cacheKey = \`vessel:\${vesselId}:latest\`;
  const cached = await redis.get(cacheKey);
  
  if (cached) {
    return JSON.parse(cached); // Sub-5ms response
  }

  // Optimized query with indexed columns
  const record = await db.query(
    'SELECT * FROM vessel_telemetry WHERE vessel_id = $1 ORDER BY recorded_at DESC LIMIT 1',
    [vesselId]
  );

  await redis.setex(cacheKey, 300, JSON.stringify(record.rows[0]));
  return record.rows[0];
}`
    },
    cicd: {
      title: "Automated Monorepo CI/CD & Quality Gates",
      subtitle: "Docker + GitHub Actions + Bitrise + SonarQube",
      metric: "60% Faster Release Time • Zero-Downtime Deployments",
      nodes: [
        {
          id: "git",
          name: "Git Monorepo",
          role: "Unified Codebase",
          tech: "Turborepo / Yarn Workspaces",
          desc: "Houses client React Native app and Node.js backend microservices in a single maintainable repository.",
          latency: "Instant"
        },
        {
          id: "sonar",
          name: "SonarQube & Linter",
          role: "Quality & Security Gates",
          tech: "SonarQube, ESLint, TypeScript",
          desc: "Analyzes pull requests for code smells, vulnerabilities, and enforces test coverage thresholds before merge.",
          latency: "Automated"
        },
        {
          id: "docker",
          name: "Bitrise & Docker Pipeline",
          role: "Containerization & Release",
          tech: "Bitrise, GitHub Actions, Docker",
          desc: "Builds optimized multi-stage Docker images and deploys zero-downtime rolling updates to production.",
          latency: "< 4 mins"
        }
      ],
      codeSnippet: `# Multi-Stage Docker & GitHub Actions Pipeline
name: Production CI/CD Gate
on:
  push:
    branches: [ main ]
jobs:
  quality-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: SonarQube Code Quality Scan
        uses: sonarsource/sonarqube-scan-action@v2
      - name: Build & Publish Docker Containers
        run: |
          docker build -t marlow/backend-service:latest -f Dockerfile .
          docker push marlow/backend-service:latest`
    }
  };

  const current = pipelines[activePipeline];

  return (
    <section id="architecture" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>INTERACTIVE SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I Architect Scalable Systems
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            Explore live interactive representations of distributed pipelines built in production
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => { setActivePipeline("streaming"); setSelectedNode("kafka"); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activePipeline === "streaming"
                ? "bg-emerald-500 text-dark-900 font-semibold shadow-lg shadow-emerald-500/20"
                : "bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white border border-white/5"
            }`}
          >
            Kafka & Socket Streaming
          </button>
          <button
            onClick={() => { setActivePipeline("caching"); setSelectedNode("cache"); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activePipeline === "caching"
                ? "bg-cyan-500 text-dark-900 font-semibold shadow-lg shadow-cyan-500/20"
                : "bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white border border-white/5"
            }`}
          >
            Redis & PostgreSQL Cache-Aside
          </button>
          <button
            onClick={() => { setActivePipeline("cicd"); setSelectedNode("docker"); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activePipeline === "cicd"
                ? "bg-blue-500 text-dark-900 font-semibold shadow-lg shadow-blue-500/20"
                : "bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white border border-white/5"
            }`}
          >
            Monorepo & CI/CD Gates
          </button>
        </div>

        {/* Pipeline Visual Container */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-8">
          
          {/* Headline & Metric */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white">{current.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">{current.subtitle}</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <Zap className="w-3.5 h-3.5" />
              <span>{current.metric}</span>
            </div>
          </div>

          {/* Node Flow Visualizer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {current.nodes.map((node, index) => {
              const isSelected = selectedNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-dark-750 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 scale-[1.02]"
                      : "bg-dark-800/80 border border-white/10 hover:border-emerald-500/40 hover:bg-dark-750"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-dark-900 text-emerald-400 border border-white/10">
                      Step {index + 1}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {node.latency}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">{node.name}</h4>
                  <p className="text-xs text-gray-400 mb-2">{node.role}</p>
                  <p className="text-[11px] text-gray-300 leading-relaxed line-clamp-3">
                    {node.desc}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span>{node.tech.split(',')[0]}</span>
                    <span className="text-emerald-400 font-bold">&rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Code Inspection Drawer */}
          <div className="mt-6 rounded-2xl bg-dark-900 border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 bg-dark-850 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-gray-300">implementation-preview.ts</span>
              </div>
              <span className="text-[11px] font-mono text-gray-400">Production Code Pattern</span>
            </div>
            <div className="p-4 font-mono text-xs text-gray-300 overflow-x-auto leading-relaxed">
              <pre className="text-emerald-300">
                <code>{current.codeSnippet}</code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Server, 
  Smartphone, 
  Database, 
  Award,
  Download,
  Mail
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-850/50 border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENGINEERING BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            Bridging resilient backend infrastructures with responsive mobile interfaces
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Core Summary & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-emerald-400" />
                <span>Professional Profile</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {portfolioData.about.summary}
              </p>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Key Technical Capabilities
                </h4>
                <div className="space-y-2.5">
                  {portfolioData.about.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:jefinagilbert@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-dark-900 font-semibold text-sm transition-all duration-200 shadow-md shadow-emerald-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Jefin</span>
              </a>
              <a
                href="tel:6383916053"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-gray-200 border border-white/10 text-sm transition-all"
              >
                <span>+91 6383916053</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Architectural Focus Areas */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">High-Throughput Databases & Caching</h4>
                  <p className="text-xs text-gray-400">PostgreSQL • Redis • Index Tuning</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Designed ACID-compliant schemas and optimized indexing strategies paired with high-performance Redis cache layers, delivering consistent sub-50ms query responses.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">Event-Driven Streaming & Sockets</h4>
                  <p className="text-xs text-gray-400">Apache Kafka • WebSockets • IoT Protocols</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Engineered real-time telemetry streaming pipelines for maritime applications and portable diagnostic hardware, decreasing dropped connections by over 30%.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">Seamless Cross-Platform Mobile</h4>
                  <p className="text-xs text-gray-400">React Native • React.js • Design Systems</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Delivered intuitive, performant React Native applications, maintaining shared component design systems published via private artifact registries.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

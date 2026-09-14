"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Terminal, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  Database,
  Download
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import confetti from "canvas-confetti";

interface HeroProps {
  onOpenTerminal: () => void;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(portfolioData.codeSnippet);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="gradient-text">{portfolioData.name}</span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-gray-200">
              {portfolioData.titleExtended}
            </p>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Software Engineer with 3+ years of experience bridging high-throughput <span className="text-emerald-400 font-medium">Node.js</span> & <span className="text-cyan-400 font-medium">PostgreSQL</span> architectures with fluid <span className="text-blue-400 font-medium">React Native</span> cross-platform interfaces.
            </p>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#experience"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-dark-900 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:scale-[1.02]"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 text-gray-200 border border-white/10 hover:border-emerald-500/50 text-sm font-mono transition-all duration-200 hover:scale-[1.02]"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Launch CLI (&gt;_)</span>
              </button>

              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-white border border-white/10 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-cyan-400 border border-white/10 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Impact Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              {portfolioData.about.quickStats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-dark-800/60 border border-white/5 text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Terminal Card */}
          <div className="lg:col-span-5">
            <div className="gradient-border-card shadow-2xl shadow-emerald-500/10 overflow-hidden">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-dark-850 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-gray-400">developer-profile.ts</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-dark-700 hover:bg-dark-600 text-gray-300 text-[11px] font-mono transition-colors"
                    title="Copy snippet"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-gray-300 bg-dark-900/90">
                <pre className="text-emerald-300/90">
                  <code>{portfolioData.codeSnippet}</code>
                </pre>
              </div>

              {/* Quick Status Bar */}
              <div className="px-4 py-2 bg-dark-850 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Node.js v20 • TypeScript • Kafka • React Native</span>
                </div>
                <span>UTF-8</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

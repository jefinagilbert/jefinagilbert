"use client";

import React from "react";
import { portfolioData, AchievementItem } from "@/data/portfolioData";
import { 
  Trophy, 
  FileCheck, 
  Zap, 
  Award, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";

export default function Achievements() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FileCheck": return <FileCheck className="w-6 h-6 text-emerald-400" />;
      case "Trophy": return <Trophy className="w-6 h-6 text-amber-400" />;
      case "Zap": return <Zap className="w-6 h-6 text-cyan-400" />;
      default: return <Award className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>MILESTONES & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Key Achievements
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            Peer-reviewed research publication, hackathon awards, and production system optimizations
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioData.achievements.map((item: AchievementItem, index: number) => (
            <div 
              key={index}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-dark-800 border border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-gray-400 mb-3">
                  {item.issuer}
                </p>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Impact</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

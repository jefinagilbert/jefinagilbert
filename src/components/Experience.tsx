"use client";

import React, { useState } from "react";
import { portfolioData, ExperienceItem } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-dark-850/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PROGRESSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            3+ years delivering resilient backend services and high-performance cross-platform software
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {portfolioData.experiences.map((exp: ExperienceItem, index: number) => {
            const isExpanded = expandedIndex === index;

            return (
              <div 
                key={index}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? "border-emerald-500/50 shadow-xl shadow-emerald-500/5 bg-dark-800" 
                    : "border-white/10 hover:border-white/20 bg-dark-800/60"
                }`}
              >
                {/* Card Header (Clickable) */}
                <div 
                  onClick={() => toggleExpand(index)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.company}
                      </h3>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-emerald-400 font-mono">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 text-xs text-gray-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{exp.location}</span>
                    </div>
                    <button 
                      className="p-1 rounded-full bg-dark-700 text-gray-300 hover:text-white transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/10 space-y-4 animate-fadeIn">
                    
                    {/* Bullet Accomplishments */}
                    <div className="space-y-3">
                      {exp.description.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                          <span className="text-sm text-gray-300 leading-relaxed">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center">
                      <span className="text-xs font-mono text-gray-400 mr-2">Tech:</span>
                      {exp.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-900 text-emerald-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

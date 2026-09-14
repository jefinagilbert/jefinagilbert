"use client";

import React from "react";
import { portfolioData, EducationItem } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  BookOpen 
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-dark-850/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            Master's and Bachelor's degrees in Computer Applications & Computer Science
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.education.map((edu: EducationItem, index: number) => (
            <div 
              key={index}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-emerald-400 mb-4">
                  {edu.institution}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-gray-400">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Computer Science & Application Engineering</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

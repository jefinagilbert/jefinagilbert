"use client";

import React from "react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { 
  FolderGit2, 
  ExternalLink, 
  Zap, 
  Layers, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-dark-850/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRODUCTION & RESEARCH PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Systems & Work
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            Architectural solutions engineered for scale, resilience, and real-time operations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioData.projects.map((project: ProjectItem, index: number) => (
            <div 
              key={index}
              className="glass-panel rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              <div>
                {/* Top Category & Metric Bar */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-emerald-400" />
                    <span>{project.metrics}</span>
                  </span>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                
                <p className="text-xs font-mono text-cyan-400 mt-1 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-900 text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 text-xs font-mono">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{project.architectureType}</span>
                  </span>

                  <a
                    href={portfolioData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

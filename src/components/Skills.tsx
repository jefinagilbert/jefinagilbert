"use client";

import React, { useState } from "react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";
import { 
  Code2, 
  Server, 
  Database, 
  Activity, 
  Cpu, 
  Smartphone, 
  Sparkles,
  Search
} from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = ["All", ...portfolioData.skillsCategories.map(c => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Backend & System Design": return <Server className="w-5 h-5 text-emerald-400" />;
      case "Databases & Caching": return <Database className="w-5 h-5 text-cyan-400" />;
      case "Event-Driven & Messaging": return <Activity className="w-5 h-5 text-purple-400" />;
      case "DevOps & Cloud Automation": return <Cpu className="w-5 h-5 text-blue-400" />;
      case "Frontend & Mobile": return <Smartphone className="w-5 h-5 text-amber-400" />;
      default: return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories = portfolioData.skillsCategories
    .filter(cat => selectedCategory === "All" || cat.category === selectedCategory)
    .map(cat => ({
      ...cat,
      skills: cat.skills.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Core Technologies
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            Modern tools and architectures applied across high-performance full-stack systems
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-500 text-dark-900 font-semibold shadow-md shadow-emerald-500/20"
                    : "bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-dark-800 border border-white/10">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{cat.category}</h3>
                    <p className="text-[11px] text-gray-400">{cat.description}</p>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="mt-5 space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className={`font-medium ${skill.highlight ? "text-emerald-300 font-semibold" : "text-gray-300"}`}>
                          {skill.name}
                          {skill.highlight && <span className="ml-1.5 text-[10px] text-emerald-400">★</span>}
                        </span>
                        <span className="text-gray-400 text-[11px]">{skill.level}%</span>
                      </div>
                      
                      {/* Skill Meter Bar */}
                      <div className="w-full h-1.5 rounded-full bg-dark-900 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>{cat.skills.length} competencies</span>
                <span className="text-emerald-400">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

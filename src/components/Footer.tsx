"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  ArrowUp, 
  Mail, 
  Heart, 
  Terminal, 
  Code2 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

interface FooterProps {
  onOpenTerminal: () => void;
}

export default function Footer({ onOpenTerminal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-dark-900 border-t border-white/10 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
              JA
            </div>
            <div>
              <p className="text-white font-semibold">{portfolioData.name}</p>
              <p className="text-[11px] text-gray-500 font-mono">
                Software Engineer • {portfolioData.location}
              </p>
            </div>
          </div>

          {/* Socials & CLI Quick Launcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="px-3 py-1.5 rounded-lg bg-dark-800 hover:bg-dark-700 text-emerald-400 border border-emerald-500/20 text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI Mode</span>
            </button>

            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-white border border-white/5 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-cyan-400 border border-white/5 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.email}`}
              className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-emerald-400 border border-white/5 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top & Tech credit */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-gray-500 font-mono">
              Designed with Next.js & Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-emerald-400 border border-white/10 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-gray-500 font-mono">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved. Open-source under MIT on GitHub (<a href={portfolioData.repoUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">jefinagilbert</a>).
        </div>
      </div>
    </footer>
  );
}

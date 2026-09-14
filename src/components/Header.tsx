"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Terminal, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ChevronRight
} from "lucide-react";

interface HeaderProps {
  onOpenTerminal: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Header({ onOpenTerminal, isDarkMode, onToggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "architecture", "experience", "skills", "projects", "achievements", "education", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Architecture", href: "#architecture" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-nav py-3 shadow-lg shadow-black/10" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 group cursor-pointer text-decoration-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-blue-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-base gradient-text">JA</span>
            </div>
          </div>
          <div>
            <span className="font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              {portfolioData.name}
            </span>
            <span className="hidden sm:block text-[11px] text-gray-400 font-mono">
              software_engineer.ts
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full glass-panel">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500/20 text-emerald-400 font-semibold shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* CLI Terminal Launcher Button */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-dark-800 hover:bg-dark-700 text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200 shadow-sm"
            title="Open Interactive CLI Terminal"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>&gt;_ CLI</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-dark-800/80 hover:bg-dark-700 text-gray-300 hover:text-emerald-400 border border-white/10 transition-colors"
            aria-label="Toggle Theme"
            title="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* Contact CTA */}
          <a
            href="mailto:jefinagilbert@gmail.com"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-500 hover:bg-emerald-600 text-dark-900 font-semibold transition-all duration-200 shadow-md shadow-emerald-500/20 hover:scale-[1.02]"
          >
            <span>Hire Me</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-dark-800 text-emerald-400 border border-emerald-500/30 text-xs font-mono"
            title="Open Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-dark-800 text-gray-300 border border-white/10"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-dark-800 text-gray-300 border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-nav border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a
              href="mailto:jefinagilbert@gmail.com"
              className="w-full text-center py-2 px-4 rounded-lg bg-emerald-500 text-dark-900 font-semibold text-sm shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ArchitectureShowcase from "@/components/ArchitectureShowcase";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TerminalModal from "@/components/TerminalModal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  return (
    <div className="relative min-h-screen bg-dark-900 text-gray-100 flex flex-col">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <Header 
        onOpenTerminal={() => setTerminalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <About />
        <ArchitectureShowcase />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />
    </div>
  );
}

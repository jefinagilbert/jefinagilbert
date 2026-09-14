"use client";

import React, { useState, useRef, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Terminal, X, CornerDownLeft, Sparkles, Copy, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-gray-300">
          <p className="text-emerald-400 font-bold">
            Welcome to Jefin Agilbert's Interactive CLI Terminal [v1.0.0]
          </p>
          <p className="text-xs text-gray-400">
            Type <span className="text-cyan-400 font-mono">help</span> to view available commands or click quick actions below.
          </p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    let output: React.ReactNode;

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1.5 text-xs">
            <p className="text-emerald-400 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-gray-300 font-mono">
              <div><span className="text-cyan-400">skills</span> - View technical stack</div>
              <div><span className="text-cyan-400">experience</span> - Career history</div>
              <div><span className="text-cyan-400">projects</span> - Production work</div>
              <div><span className="text-cyan-400">achievements</span> - IEEE paper & awards</div>
              <div><span className="text-cyan-400">education</span> - Degrees & colleges</div>
              <div><span className="text-cyan-400">contact</span> - Email & socials</div>
              <div><span className="text-cyan-400">whoami</span> - Visitor identity</div>
              <div><span className="text-cyan-400">sudo hire</span> - Direct hire CTA</div>
              <div><span className="text-cyan-400">clear</span> - Clear screen</div>
              <div><span className="text-cyan-400">exit</span> - Close terminal</div>
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-emerald-400 font-semibold">Technical Stack:</p>
            {portfolioData.skillsCategories.map((cat, i) => (
              <div key={i}>
                <span className="text-cyan-400 font-bold">{cat.category}: </span>
                <span className="text-gray-300">{cat.skills.map(s => s.name).join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-3 text-xs">
            <p className="text-emerald-400 font-semibold">Career History:</p>
            {portfolioData.experiences.map((exp, i) => (
              <div key={i} className="space-y-1 border-l-2 border-emerald-500/40 pl-3">
                <p className="text-white font-bold">{exp.role} @ <span className="text-emerald-400">{exp.company}</span> ({exp.period})</p>
                <p className="text-gray-400">{exp.description[0]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-emerald-400 font-semibold">Featured Projects:</p>
            {portfolioData.projects.map((proj, i) => (
              <div key={i} className="space-y-0.5">
                <p className="text-cyan-400 font-bold">{proj.title} <span className="text-gray-400 text-[11px]">({proj.metrics})</span></p>
                <p className="text-gray-300">{proj.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "achievements":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-amber-400 font-semibold">Milestones & Achievements:</p>
            {portfolioData.achievements.map((ach, i) => (
              <div key={i}>
                <p className="text-white font-bold">🏆 {ach.title} <span className="text-gray-400">({ach.issuer})</span></p>
                <p className="text-gray-300">{ach.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-blue-400 font-semibold">Education:</p>
            {portfolioData.education.map((edu, i) => (
              <div key={i}>
                <p className="text-white font-bold">{edu.degree}</p>
                <p className="text-gray-400">{edu.institution} • {edu.period}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-emerald-400 font-semibold">Contact Details:</p>
            <p>Email: <a href="mailto:jefinagilbert@gmail.com" className="text-cyan-400 underline">jefinagilbert@gmail.com</a></p>
            <p>Phone: <span className="text-gray-300">+91 6383916053</span></p>
            <p>LinkedIn: <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{portfolioData.linkedin}</a></p>
            <p>GitHub: <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{portfolioData.github}</a></p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <p className="text-xs text-gray-300">
            You are a valued visitor/recruiter exploring Jefin Agilbert's portfolio terminal session.
          </p>
        );
        break;

      case "sudo hire":
      case "hire":
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
        output = (
          <div className="space-y-2 text-xs bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30">
            <p className="text-emerald-400 font-bold text-sm">🎉 Congratulations! High-impact engineering collaboration initiated.</p>
            <p className="text-gray-300">Please send a direct email to <a href="mailto:jefinagilbert@gmail.com" className="text-emerald-300 underline font-bold">jefinagilbert@gmail.com</a> or connect on LinkedIn.</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
      case "quit":
        onClose();
        return;

      default:
        output = (
          <p className="text-xs text-red-400">
            Command not recognized: "{cmdText}". Type <span className="text-cyan-400">help</span> for a list of available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdText, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      handleCommand(input);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-3xl h-[520px] bg-dark-900 border border-emerald-500/30 rounded-2xl shadow-2xl shadow-emerald-500/20 flex flex-col overflow-hidden">
        
        {/* Titlebar */}
        <div className="px-4 py-3 bg-dark-850 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5 ml-3 text-xs font-mono text-gray-300">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>jefin@agilbert-macbook: ~ (zsh)</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-dark-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Command Suggestions */}
        <div className="px-4 py-2 bg-dark-800/80 border-b border-white/5 flex flex-wrap gap-1.5 text-[11px] font-mono">
          <span className="text-gray-400 py-0.5">Quick:</span>
          {["help", "skills", "experience", "projects", "achievements", "contact", "sudo hire", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-dark-700 hover:bg-emerald-500 hover:text-dark-900 text-gray-300 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs cursor-text"
        >
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-cyan-400 font-medium">~</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-emerald-400 font-bold">➜</span>
            <span className="text-cyan-400 font-medium">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0"
              placeholder="Type a command (e.g. 'help', 'skills', 'experience')..."
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-dark-850 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
          <span>Press Enter ↵ to execute</span>
          <span>Type 'exit' or click ✕ to close</span>
        </div>

      </div>
    </div>
  );
}

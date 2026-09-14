"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  MapPin 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });

    window.location.href = `mailto:jefinagilbert@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
  };

  return (
    <section id="contact" className="py-20 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            Open for software engineering opportunities, system architecture consultations, and technical collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">Direct Email</p>
                    <a 
                      href={`mailto:${portfolioData.email}`} 
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      {portfolioData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(portfolioData.email, "email")}
                  className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">Mobile Phone</p>
                    <a 
                      href={`tel:${portfolioData.phone.replace(/[^0-9+]/g, '')}`} 
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      {portfolioData.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(portfolioData.phone, "phone")}
                  className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & Profiles */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono">Location</p>
                  <p className="text-sm font-semibold text-white">{portfolioData.location}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex gap-3">
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 border border-white/10 flex items-center justify-center gap-2 text-xs font-medium text-gray-200 hover:text-cyan-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 border border-white/10 flex items-center justify-center gap-2 text-xs font-medium text-gray-200 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 animate-fadeIn">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-400">Message Prepared!</h4>
                  <p className="text-xs text-gray-300">
                    Your email client should launch with the message draft. If not, feel free to write directly to <span className="text-emerald-300 font-mono">jefinagilbert@gmail.com</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-4 py-1.5 rounded-lg bg-emerald-500 text-dark-900 text-xs font-bold"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-300 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Connor"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-gray-300 font-medium">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-300 font-medium">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineering Role / Project Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-300 font-medium">Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Jefin, we'd like to discuss a software engineering opportunity at..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-dark-900 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

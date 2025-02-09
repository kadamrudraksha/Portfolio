import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto relative text-center">
        
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-40 -z-10" />

        {/* Name - Responsive */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse">
          Rudraksha Kadam
        </h1>

        {/* Role with animation */}
        <p className="text-lg sm:text-xl text-gray-400 mt-4 animate-fade-in-up">
          Electronics & Telecommunication Engineering Student
        </p>

        {/* Short Bio */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
          Passionate about <strong>full-stack development</strong> and crafting innovative tech solutions that push boundaries.
        </p>

        {/* Social Links - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-8">
          {[
            { href: "https://github.com/kadamrudraksha", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/rudraksha-kadam-6398b3218/", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:rudrakshakadam04@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-105"
              aria-label={label}
            >
              <Icon size={28} className="text-gray-300 group-hover:text-indigo-400 transition-colors" />
            </a>
          ))}
        </div>

        {/* Resume View Button (Responsive) */}
        <div className="mt-6">
          <a
            href="/Rudraksha_Kadam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg"
          >
            <FileText size={20} className="mr-2" />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

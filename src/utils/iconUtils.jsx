import React from "react";

export const getIcon = (iconName, className = "w-5 h-5") => {
  if (!iconName) return null;

  const raw = String(iconName).toLowerCase().trim();
  const clean = raw.replace(/[^a-z0-9]/g, ""); // Strip spaces, dots, dashes, prefixing

  // ==========================================
  // 1. LANGUAGES
  // ==========================================

  // JAVA (Supports "Java", "SiOpenjdk", "openjdk", "java")
  if (
    clean === "java" ||
    clean.includes("openjdk") ||
    (clean.includes("java") && !clean.includes("script"))
  ) {
    return (
      <span className="px-1 py-0.5 rounded bg-[#ED8B00] text-white font-black text-[9px] leading-none flex items-center justify-center font-mono shrink-0">
        JAVA
      </span>
    );
  }

  // PYTHON (Supports "Python", "SiPython")
  if (clean.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M11.87 2c-3.1 0-3.5 1.35-3.5 2.82v1.54h7.07v1.03H5.8c-1.63 0-2.8.98-2.8 2.82v4.88c0 1.63.98 2.8 2.8 2.8h1.64v-2.05c0-1.63.98-2.8 2.8-2.8h4.9c1.63 0 2.8-.98 2.8-2.8V5.32c0-1.63-.98-3.32-6.07-3.32zm-1.84 1.54a.77.77 0 110 1.54.77.77 0 010-1.54z"
          fill="#3776AB"
        />
        <path
          d="M12.13 22c3.1 0 3.5-1.35 3.5-2.82v-1.54H8.56v-1.03h9.64c1.63 0 2.8-.98 2.8-2.82V8.91c0-1.63-.98-2.8-2.8-2.8h-1.64v2.05c0 1.63-.98 2.8-2.8 2.8h-4.9c-1.63 0-2.8.98-2.8 2.8v4.92c0 1.63.98 3.32 6.07 3.32zm1.84-1.54a.77.77 0 110-1.54.77.77 0 010 1.54z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // JAVASCRIPT (Supports "JavaScript", "SiJavascript", "js")
  if (clean.includes("javascript") || clean === "js") {
    return (
      <span className="px-1 py-0.5 rounded bg-[#F7DF1E] text-black font-black text-[10px] leading-none flex items-center justify-center font-mono shrink-0">
        JS
      </span>
    );
  }

  // SQL (Supports "SQL", "SiMysql", "mysql")
  if (clean.includes("sql") || clean.includes("mysql")) {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="#4479A1" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    );
  }

  // ==========================================
  // 2. FRONTEND FRAMEWORKS
  // ==========================================
  if (clean.includes("react")) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }

  if (clean.includes("html")) {
    return (
      <svg className={className} viewBox="0 0 512 512">
        <path fill="#E34F26" d="M71 460L30 0h452l-41 460L256 512z"/>
        <path fill="#EF652A" d="M256 472l149-41 35-391H256z"/>
        <path fill="#ECECEC" d="M256 208h-80l-5-56h170l5-56H111l16 168h129zM256 354l-67-18-4-48h-56l7 88 120 33z"/>
        <path fill="#FFF" d="M256 208v-56h85l-5 56zm0 146v-59l67-18 9-99h56l-15 168z"/>
      </svg>
    );
  }

  if (clean.includes("css") && !clean.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 512 512">
        <path fill="#1572B6" d="M71 460L30 0h452l-41 460L256 512z"/>
        <path fill="#33A9DC" d="M256 472l149-41 35-391H256z"/>
        <path fill="#ECECEC" d="M256 208H121l-5-56h280l5-56H111l16 168h129zM256 354l-67-18-4-48h-56l7 88 120 33z"/>
        <path fill="#FFF" d="M256 208v-56h134l-5 56zm0 146v-59l67-18 9-99h56l-15 168z"/>
      </svg>
    );
  }

  if (clean.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path fill="#06B6D4" d="M12 6c-3.3 0-5.4 1.7-6.3 5 1.3-1.7 2.8-2.1 4.5-1.3 1 1 2.3 2.3 4.5 2.3 3.3 0 5.4-1.7 6.3-5-1.3 1.7-2.8 2.1-4.5 1.3-1-1-2.3-2.3-4.5-2.3zm-6.3 6c-3.3 0-5.4 1.7-6.3 5 1.3-1.7 2.8-2.1 4.5-1.3 1 1 2.3 2.3 4.5 2.3 3.3 0 5.4-1.7 6.3-5-1.3 1.7-2.8 2.1-4.5 1.3-1-1-2.3-2.3-4.5-2.3z"/>
      </svg>
    );
  }

  // ==========================================
  // 3. BACKEND & DATABASE
  // ==========================================
  if (clean.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path fill="#339933" d="M64 10l50 28.9v57.8L64 125.5 14 96.7V38.9L64 10zm-6 35v11.8c0 1 .8 1.8 1.8 1.8h8.4c1 0 1.8-.8 1.8-1.8V45c0-1-.8-1.8-1.8-1.8h-8.4c-1 0-1.8.8-1.8 1.8z" />
      </svg>
    );
  }

  if (clean.includes("express")) {
    return (
      <span className={`${className} font-extrabold text-text-primary border border-border-medium rounded-xs px-1 text-[10px] flex items-center justify-center font-mono shrink-0`}>
        EX
      </span>
    );
  }

  if (clean.includes("api") || clean.includes("rest")) {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="#8B5CF6" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }

  if (clean.includes("mongo") || clean.includes("mongoose")) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path fill="#47A248" d="M64 12c-1.8 13.7-21.2 32.7-21.2 55 0 20.3 12.8 35.5 21.2 49 8.4-13.5 21.2-28.7 21.2-49 0-22.3-19.4-41.3-21.2-55z"/>
      </svg>
    );
  }

  // ==========================================
  // 4. TOOLS & PLATFORMS
  // ==========================================
  if (clean === "git" || (clean.includes("git") && !clean.includes("hub"))) {
    return (
      <span className="px-1 py-0.5 rounded bg-[#F05032] text-white font-black text-[9px] leading-none flex items-center justify-center font-mono shrink-0">
        GIT
      </span>
    );
  }

  if (clean.includes("postman")) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path fill="#FF6C37" d="M64 12C35.3 12 12 35.3 12 64s23.3 52 52 52 52-23.3 52-52S92.7 12 64 12zm22 41.5l-20.3 8.3 10 10.1L86 53.5z" />
      </svg>
    );
  }

  if (clean.includes("vercel")) {
    return (
      <svg className={className} viewBox="0 0 512 512" fill="currentColor">
        <path d="M256 48L496 464H16L256 48z" />
      </svg>
    );
  }

  if (clean.includes("render")) {
    return (
      <span className={`${className} font-black text-[#46E3B7] text-sm flex items-center justify-center font-mono shrink-0`}>
        R
      </span>
    );
  }

  // ==========================================
  // 5. CONTACT & UI ICONS
  // ==========================================
  if (clean === "email" || clean === "mail") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }

  if (clean === "phone") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    );
  }

  if (clean === "location") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }

  if (clean === "college" || clean === "education") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    );
  }

  if (clean === "download") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    );
  }

  if (clean === "github") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  if (clean === "linkedin") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    );
  }

  if (clean === "sun") {
    return (
      <svg className={`${className} text-amber-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }

  if (clean === "moon") {
    return (
      <svg className={`${className} text-purple-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    );
  }

  // ==========================================
  // 6. ABOUT SECTION FEATURE CARDS
  // ==========================================
  if (clean === "fullstack" || clean.includes("layers")) {
    return (
      <svg className={`${className} text-brand-secondary`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    );
  }

  if (clean === "backendai" || clean === "cpu") {
    return (
      <svg className={`${className} text-brand-secondary`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    );
  }

  if (clean.includes("problemsolving") || clean.includes("academic")) {
    return (
      <svg className={`${className} text-brand-secondary`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    );
  }

  return null;
};
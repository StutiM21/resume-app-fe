"use client";

import { Eye } from "lucide-react";

export default function HeroTemplates() {
  return (
    <div className="relative w-full h-[420px] flex items-center justify-center overflow-visible">

      {/* LEFT CARD */}
      <div
        className="
          absolute
          w-[240px] h-[340px]
          -translate-x-[140px]
          rotate-[-8deg]
          z-10
          md:-translate-x-[180px]
        "
      >
        <TemplateCard color="bg-blue-600" />
      </div>

      {/* CENTER CARD */}
      <div className="relative w-[280px] h-[380px] z-20">
        <TemplateCard color="bg-purple-600" />
      </div>

      {/* RIGHT CARD */}
      <div
        className="
          absolute
          w-[240px] h-[340px]
          translate-x-[140px]
          rotate-[8deg]
          z-10
          md:translate-x-[180px]
        "
      >
        <TemplateCard color="bg-slate-800" />
      </div>
    </div>
  );
}

function TemplateCard({ color }: { color: string }) {
  return (
    <div className="relative w-full h-full rounded-2xl bg-white shadow-xl overflow-hidden group">
      
      {/* Header */}
      <div className={`h-16 ${color}`} />

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="h-3 w-28 bg-gray-300 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 rounded" />
        <div className="h-3 w-4/6 bg-gray-200 rounded" />
        <div className="h-3 w-3/6 bg-gray-200 rounded" />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white">
        <Eye size={26} />
        <span className="text-sm mt-2">Click to preview</span>
      </div>
    </div>
  );
}

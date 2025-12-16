"use client";

import { Eye } from "lucide-react";

export default function HeroTemplates() {
  return (
    <div className="relative w-full h-[420px] flex items-center justify-center">
      
      {/* LEFT (tilted) */}
      <div className="absolute left-6 top-16 w-[220px] rotate-[-8deg] z-10">
        <TemplateCard color="bg-blue-600" />
      </div>

      {/* CENTER (main) */}
      <div className="absolute z-20 w-[260px]">
        <TemplateCard color="bg-purple-600" />
      </div>

      {/* RIGHT (tilted) */}
      <div className="absolute right-6 top-20 w-[220px] rotate-[8deg] z-10">
        <TemplateCard color="bg-slate-800" />
      </div>
    </div>
  );
}

function TemplateCard({ color }: { color: string }) {
  return (
    <div className="relative h-[420px] rounded-2xl bg-white shadow-xl overflow-hidden group">

      <div className={`h-14 ${color}`} />

      <div className="p-4 space-y-2">
        <div className="h-3 w-24 bg-gray-300 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 rounded" />
        <div className="h-3 w-4/6 bg-gray-200 rounded" />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white">
        <Eye size={26} />
        <span className="text-sm mt-2">Click to preview</span>
      </div>
    </div>
  );
}

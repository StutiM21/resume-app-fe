"use client";

export default function ChooseTemplateCard() {
  return (
    <div className="rounded-xl bg-white border hover:border-purple-500 transition shadow-sm h-[420px]">

      
      {/* Header */}
      <div className="h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl" />

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="h-3 w-28 bg-gray-300 rounded" />
        <div className="h-2 w-full bg-gray-200 rounded" />
        <div className="h-2 w-11/12 bg-gray-200 rounded" />
        <div className="h-2 w-10/12 bg-gray-200 rounded" />
      </div>

    </div>
  );
}

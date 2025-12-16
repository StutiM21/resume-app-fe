// components/ChooseTemplateCard.tsx
import { Eye, Check } from "lucide-react";

interface Props {
  title: string;
  tag: string;
  description: string;
  color: string;
  selected?: boolean;
  previewOnly?: boolean;
}

export default function ChooseTemplateCard({
  title,
  tag,
  description,
  color,
  selected,
  previewOnly,
}: Props) {
  return (
    <div className="group">
      {/* CARD */}
      <div className="relative rounded-2xl border bg-white shadow-md overflow-hidden min-h-[420px]">
        {/* Header */}
        <div className={`h-24 ${color} relative`}>
          {selected && (
            <div className="absolute top-3 right-3 bg-green-500 text-white p-1 rounded-full">
              <Check size={16} />
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-8 space-y-4">
          <div className="h-3 w-32 bg-gray-300 rounded" />
          <div className="h-3 w-full bg-gray-200 rounded" />
          <div className="h-3 w-11/12 bg-gray-200 rounded" />
          <div className="h-3 w-10/12 bg-gray-200 rounded" />
          <div className="h-3 w-9/12 bg-gray-200 rounded" />
          <div className="h-3 w-8/12 bg-gray-200 rounded" />
        </div>

        {/* Hover Overlay */}
        {previewOnly && (
  <div className="absolute inset-0 bg-black/60 opacity-0 
                  group-hover:opacity-100 transition-opacity
                  flex flex-col items-center justify-center text-white">
    <Eye size={28} />
    <span className="text-sm mt-2">Click to preview</span>
  </div>
)}

      </div>

      {/* Text below */}
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {tag}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}

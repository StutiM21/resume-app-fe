// components/ChooseTemplate.tsx
import ChooseTemplateCard from "./ChooseTemplateCard";

const templates = [
  {
    id: 1,
    title: "Minimalist",
    tag: "Professional",
    description: "Simple and clean layout that lets your experience shine",
    color: "bg-emerald-600",
  },
  {
    id: 2,
    title: "Dynamic",
    tag: "Creative",
    description: "Eye-catching design for marketing and creative professionals",
    color: "bg-orange-600",
  },
  {
    id: 3,
    title: "Modern Dark",
    tag: "Creative",
    description: "Bold dark theme for modern portfolios",
    color: "bg-indigo-900",
  },
  {
    id: 4,
    title: "Modern Professional",
    tag: "Professional",
    description: "Clean and modern design perfect for tech and corporate roles",
    color: "bg-blue-600",
  },
  {
    id: 5,
    title: "Creative Designer",
    tag: "Creative",
    description: "Stand out with a bold, creative layout for design positions",
    color: "bg-purple-600",
  },
  {
    id: 6,
    title: "Executive Classic",
    tag: "Executive",
    description: "Traditional and elegant design for senior-level positions",
    color: "bg-slate-800",
  },
];

export default function ChooseTemplate() {
  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Choose Your Perfect Template
        </h2>

        <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
          Select from our professionally designed templates. Each one is fully
          customizable and optimized for ATS systems.
        </p>

        {/* ✅ GRID (THIS IS THE IMPORTANT PART) */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            lg:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {templates.map((template) => (
            <ChooseTemplateCard
              key={template.id}
              {...template}
              previewOnly
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium">
            Start with Dynamic
          </button>
        </div>
      </div>
    </section>
  );
}

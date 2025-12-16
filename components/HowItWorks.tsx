// components/HowItWorks.tsx
import { Upload, Wand2, Download } from "lucide-react";

const steps = [
  {
    step: "Step 01",
    title: "Import Your Info",
    desc: "Upload your existing resume or enter your information manually. Our AI will parse and organize everything.",
    icon: Upload,
  },
  {
    step: "Step 02",
    title: "AI Enhancement",
    desc: "Our AI analyzes your content and job descriptions to suggest improvements and optimize keywords.",
    icon: Wand2,
  },
  {
    step: "Step 03",
    title: "Download & Apply",
    desc: "Choose your favorite template, customize the design, and download your polished resume instantly.",
    icon: Download,
  },
];

export default function HowItWorks() {
  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-xl font-bold mb-4">
          Your Perfect Resume in 3 Simple Steps
        </h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
          From start to finish in just minutes. No design skills required.
        </p>

        {/* Steps */}
        <div className="relative grid gap-10 md:grid-cols-3">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-[70%] h-px bg-blue-200" />

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white border rounded-2xl p-8 text-left shadow-sm"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center mb-6">
                <item.icon size={26} />
              </div>

              <span className="text-sm text-blue-600 font-medium">
                {item.step}
              </span>

              <h3 className="text-lg font-semibold mt-2 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

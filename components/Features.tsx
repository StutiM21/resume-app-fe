// components/Features.tsx
import {
  Brain,
  FileText,
  Zap,
  LayoutTemplate,
  Download,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    desc: "Let our AI write compelling bullet points and descriptions based on your experience and target role.",
  },
  {
    icon: FileText,
    title: "ATS-Optimized",
    desc: "Beat applicant tracking systems with resumes designed to pass automated screening.",
  },
  {
    icon: Zap,
    title: "Instant Customization",
    desc: "Tailor your resume for each job application in seconds with AI-powered suggestions.",
  },
  {
    icon: LayoutTemplate,
    title: "Professional Templates",
    desc: "Choose from dozens of industry-specific templates designed by career experts.",
  },
  {
    icon: Download,
    title: "Multiple Formats",
    desc: "Export your resume as PDF, Word, or plain text — whatever the employer requires.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    desc: "Your data is encrypted and secure. We never share your information with third parties.",
  },
];

export default function Features() {
  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything You Need to Stand Out
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-14">
          Powerful features designed to help you create the perfect resume and
          land more interviews.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border p-8 text-left hover:shadow-lg transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-5">
                <item.icon size={24} />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

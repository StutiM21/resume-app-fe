// components/FinalCTA.tsx
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="px-6 py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Ready to Land Your Dream Job?
        </h2>

        <p className="text-lg text-white/90 mb-10">
          Join over <span className="font-semibold">500,000 professionals</span>{" "}
          who have already created winning resumes with ResumeAI.
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            Start Building Your Resume
            <ArrowRight size={18} />
          </button>

          <button className="border border-white/60 px-8 py-3 rounded-xl hover:bg-white/10 transition">
            View Pricing
          </button>
        </div>

        <p className="text-sm text-white/80">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
}

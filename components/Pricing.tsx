// components/Pricing.tsx
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    desc: "Perfect for trying out ResumeAI",
    cta: "Get Started",
    highlighted: false,
    features: [
      "1 resume",
      "Basic templates",
      "PDF export",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$19",
    period: "/per month",
    desc: "Most popular for active job seekers",
    cta: "Start Free Trial",
    highlighted: true,
    features: [
      "Unlimited resumes",
      "All premium templates",
      "AI content generation",
      "ATS optimization",
      "Multiple export formats",
      "Priority support",
      "Custom domains",
    ],
  },
  {
    name: "Lifetime",
    price: "$99",
    period: "/one-time",
    desc: "Pay once, use forever",
    cta: "Buy Lifetime Access",
    highlighted: false,
    features: [
      "Everything in Professional",
      "Lifetime access",
      "All future updates",
      "Premium support",
      "No recurring fees",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="px-8 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day
            money-back guarantee.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border p-8
                ${plan.highlighted
                  ? "border-blue-600 ring-2 ring-blue-200"
                  : "hover:shadow-lg transition"}
              `}
            >
              {/* Most popular badge */}
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-1 rounded-full">
                  ✨ Most Popular
                </span>
              )}

              {/* Header */}
              <h3 className="text-xl font-semibold mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.desc}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-medium mb-8
                  ${plan.highlighted
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"}
                `}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="text-green-500" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

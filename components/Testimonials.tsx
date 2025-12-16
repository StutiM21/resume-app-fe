// components/Testimonials.tsx
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    text: "ResumeAI helped me land my dream job at Google. The AI suggestions were spot-on and saved me hours of editing.",
    image: "/user1.jpg",
  },
  {
    name: "Marcus Rodriguez",
    role: "Marketing Manager at HubSpot",
    text: "The ATS optimization feature is incredible. I started getting 3x more interview callbacks after switching to ResumeAI.",
    image: "/user2.jpg",
  },
  {
    name: "Emily Thompson",
    role: "Product Designer at Figma",
    text: "Beautiful templates and intelligent suggestions. This tool understands what recruiters are looking for. Highly recommend!",
    image: "/user3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="px-8 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Job Seekers Worldwide
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers
            with ResumeAI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

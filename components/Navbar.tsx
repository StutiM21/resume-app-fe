// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold text-gray-900">
          <span className="text-2xl">📄</span>
          <span>ResumeAI</span>
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li className="hover:text-gray-900 cursor-pointer">Features</li>
          <li className="hover:text-gray-900 cursor-pointer">How it Works</li>
          <li className="hover:text-gray-900 cursor-pointer">Testimonials</li>
          <li className="hover:text-gray-900 cursor-pointer">Pricing</li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-gray-600 font-medium hover:text-gray-900"
          >
            Sign In
          </Link>

          <button className="px-5 py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

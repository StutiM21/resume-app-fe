// components/Footer.tsx
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 px-8 pt-20 pb-10">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            📄 ResumeAI
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Build professional, ATS-optimized resumes in minutes with the power
            of AI. Your dream job is just a resume away.
          </p>

          <div className="flex gap-4">
            <a className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
              <Twitter size={18} />
            </a>
            <a className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
              <Linkedin size={18} />
            </a>
            <a className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
              <Github size={18} />
            </a>
            <a className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-medium mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Templates</li>
            <li>Pricing</li>
            <li>Examples</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press Kit</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-medium mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Guidelines</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 mt-16 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>© 2025 ResumeAI. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
  );
}

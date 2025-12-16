import HeroTemplates from "@/components/HeroTemplates";

export default function Hero() {
  return (
    <section className="px-6 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
  {/* Badge */}
  <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-6">
    ⚡ AI-Powered Resume Creation
  </span>
<h1 className="text-xl md:text-xl font-extrabold text-gray-900 md:whitespace-nowrap">
  Land Your Dream Job with AI-Crafted Resumes
 
</h1>

<p className="mt-5 text-lg text-gray-600 max-w-xl">
  Create ATS-friendly, professionally designed resumes in minutes.
  Our AI analyzes job descriptions and optimizes your resume for
  maximum impact.
</p>
  {/* Feature list */}
  <ul className="mt-6 space-y-3">
    <li className="flex items-center gap-3 text-gray-700">
      <span className="text-green-500">✔</span>
      AI-powered content suggestions
    </li>
    <li className="flex items-center gap-3 text-gray-700">
      <span className="text-green-500">✔</span>
      ATS-optimized templates
    </li>
    <li className="flex items-center gap-3 text-gray-700">
      <span className="text-green-500">✔</span>
      One-click customization for any job
    </li>
  </ul>

  {/* Buttons */}
  <div className="mt-8 flex items-center gap-4">
    <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition">
      Create Your Resume →
    </button>

    <button className="px-6 py-3 font-medium text-gray-700 border rounded-lg hover:bg-gray-50 transition">
      View Examples
    </button>
  </div>

  {/* Stats */}
  <div className="mt-10 flex items-center gap-10 text-sm text-gray-600">
    <div>
      <p className="font-semibold text-gray-900">500K+</p>
      <p>Resumes Created</p>
    </div>
    <div>
      <p className="font-semibold text-gray-900">4.9/5</p>
      <p>User Rating</p>
    </div>
    <div>
      <p className="font-semibold text-gray-900">85%</p>
      <p>Success Rate</p>
    </div>
  </div>
</div>


        {/* RIGHT STACKED TEMPLATES */}
        <HeroTemplates />
      </div>
    </section>
  );
}

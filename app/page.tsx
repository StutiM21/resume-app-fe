// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ChooseTemplate from "@/components/ChooseTemplate";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
	  <ChooseTemplate />
	  <Testimonials />
	  <Pricing />
	  <FinalCTA />
	  <Footer />
    </main>
  );
}

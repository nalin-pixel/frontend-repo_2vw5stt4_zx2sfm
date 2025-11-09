import Hero from './components/Hero';
import Features from './components/Features';
import ValueProps from './components/ValueProps';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <Hero />
      <Features />
      <ValueProps />
      <CTA />
      <footer className="bg-[#F5F7FA] py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#6B7280]">© {new Date().getFullYear()} Aultech. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="text-[#0C2B3D] hover:text-[#007FFF]">Platform</a>
            <a href="#contact" className="text-[#0C2B3D] hover:text-[#007FFF]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

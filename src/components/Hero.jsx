import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[84vh] overflow-hidden bg-[#0C2B3D] text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient + vignette to improve text contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0C2B3D]/70 via-[#0C2B3D]/40 to-[#0C2B3D]/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
            <ShieldCheck className="h-4 w-4 text-teal-300" />
            <span className="text-teal-200">Control, compliance, and visibility</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            From chaotic paperwork to a single, intelligent control layer
          </h1>

          <p className="mt-6 text-lg text-white/85">
            Aultech turns messy, paper‑ and email‑based processes into clean, auditable digital workflows. Built for construction teams on Microsoft 365.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md bg-[#007FFF] px-5 py-3 font-medium text-white shadow hover:bg-[#0070F3] transition-colors"
            >
              Explore the platform
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 font-medium text-white hover:bg-white/20 transition-colors"
            >
              Book a demo
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-white/80">
            <div>
              <div className="text-2xl font-semibold text-teal-200">100% Traceable</div>
              <div>Every document, every email, every diary—auditable.</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-teal-200">Time‑bar safe</div>
              <div>Surface delays early and secure your claims.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

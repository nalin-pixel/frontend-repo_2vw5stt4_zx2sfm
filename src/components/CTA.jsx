import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-[#0C2B3D] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Ready to secure your next claim?</h3>
              <p className="mt-1 text-white/80">See how Aultech reduces time‑bar risk and brings control to your projects.</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-[#007FFF] px-5 py-3 font-medium text-white shadow hover:bg-[#0070F3] transition-colors"
            >
              Book a demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

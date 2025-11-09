import { CheckCircle2, Clock3, FileWarning, BarChart3 } from 'lucide-react';

const items = [
  {
    title: 'Auditability by default',
    desc: 'Every action is time‑stamped with source and author tracked. Compliance for SANRAL, JBCC and more.',
    icon: CheckCircle2
  },
  {
    title: 'Time‑bar risk reduction',
    desc: 'Missed a weather claim? Avoid R100k/day losses with proactive alerts and deadline tracking.',
    icon: Clock3
  },
  {
    title: 'Real workflows, not buzzwords',
    desc: 'Daily diary → email thread → claim notice. See exactly what moved the project and why.',
    icon: FileWarning
  },
  {
    title: 'ROI you can show',
    desc: 'Secure claims, avoid penalties, and surface risk. Dashboards for KPIs and performance.',
    icon: BarChart3
  }
];

export default function ValueProps() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0C2B3D]">Control and clarity for construction teams</h2>
            <p className="mt-4 text-[#111827]/80">Built for civil and building contractors, subcontractors and suppliers who need traceability across projects.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {items.map(({ title, desc, icon: Icon }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-1 text-[#007FFF]"><Icon className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-semibold text-[#0C2B3D]">{title}</h3>
                    <p className="text-sm text-[#111827]/80">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] p-6 bg-[#F5F7FA]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-[#6B7280]">Example</div>
                <div className="mt-1 font-semibold text-[#0C2B3D]">Late notice on delay</div>
              </div>
              <span className="rounded-full bg-[#67D9DD]/30 px-3 py-1 text-xs text-[#0C2B3D]">Time‑bar risk</span>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-md bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
                <div className="font-medium text-[#0C2B3D]">Email thread</div>
                <p className="text-[#111827]/80">Variation instruction sent Friday 16:45, no response logged. Scout tags as high‑risk.</p>
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
                <div className="font-medium text-[#0C2B3D]">Diary extract</div>
                <p className="text-[#111827]/80">Weather stoppage noted Sat–Mon. Bob suggests claim notice draft referencing Clause 3.1.</p>
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
                <div className="font-medium text-[#0C2B3D]">Action</div>
                <p className="text-[#111827]/80">Send notice by 16:00 today to protect claim. Attach diary and email references.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

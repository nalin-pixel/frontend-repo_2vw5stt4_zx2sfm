import { FileSpreadsheet, MailSearch, Bot, Share2 } from 'lucide-react';

const features = [
  {
    icon: FileSpreadsheet,
    title: 'Doc‑Con (Document Control)',
    desc: 'Daily diaries, site instructions, RFIs, delays, transmittals — all versioned with audit trails and compliance built‑in.'
  },
  {
    icon: MailSearch,
    title: 'Scout / Sauron (Email Analytics)',
    desc: 'Monitors project mailboxes, summarises threads, tags risks, and turns emails into actionable tasks.'
  },
  {
    icon: Bot,
    title: 'Bob — AI Assistant',
    desc: 'Answers questions on contracts, drafts notices, explains clauses, and pulls data from SharePoint and email.'
  },
  {
    icon: Share2,
    title: 'Microsoft 365 Native',
    desc: 'Works where your team already lives — SharePoint, Exchange, and Power Platform integrated from the ground up.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-[#F5F7FA] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0C2B3D]">One platform. Four pillars.</h2>
          <p className="mt-3 text-[#111827]/80">From site to boardroom — give site agents, QSs, engineers, and directors a shared source of truth.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-[#E5E7EB] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-[#67D9DD]/20 p-2 text-[#007FFF]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-[#0C2B3D]">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-[#111827]/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import RegulationList from "@/components/regulation-list";
import Reveal from "@/components/ui/reveal";
import { regulations } from "@/data/regulations";
import PageHeader from "@/components/ui/page-header";
import { Download, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageHeader title="Regulations" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Reveal>
          <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="p-5 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#E0F2FE] text-[#1E3A8A] ring-1 ring-[#1E3A8A]/10">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h2
                    className="text-lg sm:text-xl font-semibold text-[#0F172A] leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Regulations on the Organization and Conduct of the
                    International Al-Khwarizmi Mathematics and Informatics Olympiad
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    The official rules below govern the organization,
                    participation, evaluation, and awarding of the International
                    Olympiad. They are approved by the Ministry of Preschool and
                    School Education of the Republic of Uzbekistan.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 sm:pl-16">
                <a
                  href="/regulations1.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#1E3A8A]/30 hover:bg-slate-50"
                >
                  <Download className="h-4 w-4" />
                  Regulations (English)
                </a>
                <a
                  href="/regulations2.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#1E3A8A]/30 hover:bg-slate-50"
                >
                  <Download className="h-4 w-4" />
                  Regulations (Uzbek)
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <RegulationList regulations={regulations} />
      </div>
    </main>
  );
}

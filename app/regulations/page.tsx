import RegulationList from "@/components/regulation-list";
import Reveal from "@/components/ui/reveal";
import { regulations } from "@/data/regulations";
import PageHeader from "@/components/ui/page-header";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageHeader title="Regulations" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <Reveal>
          <div className="flex flex-wrap justify-end gap-3 mb-8">
            <a
              href="/files/regulations-en.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              <Download className="h-4 w-4" />
              Regulations (English)
            </a>
            <a
              href="/files/regulations-uz.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              <Download className="h-4 w-4" />
              Regulations (Uzbek)
            </a>
          </div>
          <RegulationList regulations={regulations} />
        </Reveal>
      </div>
    </main>
  );
}


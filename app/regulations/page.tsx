import RegulationList from "@/components/regulation-list";
import Reveal from "@/components/ui/reveal";
import { regulations } from "@/data/regulations";
import PageHeader from "@/components/ui/page-header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageHeader title="Regulations" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <Reveal>
          <RegulationList regulations={regulations} />
        </Reveal>
      </div>
    </main>
  );
}


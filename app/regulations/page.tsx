import RegulationList from "@/components/regulations-list";
import { regulations } from "./regulation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240]">
      <RegulationList regulations={regulations} />
    </main>
  );
}

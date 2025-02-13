import RegulationList from "@/components/regulation-list"
import { regulations } from "@/data/regulations"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Olympiad Regulations</h1>
        <RegulationList regulations={regulations} />
      </div>
    </main>
  )
}


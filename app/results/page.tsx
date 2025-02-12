import PageHeader from "@/components/ui/page-header";
import ResultsContent from "@/components/results-content";

const Results: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-between bg-gray-100 text-gray-800">
      <PageHeader title="Olympiad Results" />
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-8">
        <ResultsContent />
      </main>
    </section>
  );
};

export default Results;

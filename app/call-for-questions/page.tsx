"use client";

import {
  FileText,
  Download,
  ExternalLink,
  Shield,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Lock,
  Scale,
  Ban,
  Lightbulb,
  ScrollText,
} from "lucide-react";
import Link from "next/link";

export default function CallForQuestionsPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 via-transparent to-[#C9A84C]/5"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#C9A84C]/10 rounded-2xl rotate-12 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#C9A84C]/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-[#C9A84C]/10 rounded-3xl -rotate-6 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-[#C9A84C]/20 text-sm font-medium text-[#C9A84C] mb-6">
            <ScrollText className="w-4 h-4" />
            <span>Open Submission</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">
            <span className="block text-white mb-2">Call for</span>
            <span className="block bg-gradient-to-r from-[#C9A84C] via-[#D4B85A] to-[#C9A84C] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Submit your original Mathematics and Informatics tasks for the
            <span className="font-semibold text-[#C9A84C]"> 4th Al-Khwarizmi KhIMIOs 2026</span>
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScV0XWG6jknWKLDgpx44dtpSYYuQBbiMMxG21OBwSTB20j0qw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-300 bg-gradient-to-r from-[#B8952F] via-[#C9A84C] to-[#D4B85A] text-[#040C1B] hover:shadow-[0_0_32px_rgba(201,168,76,0.25)] active:scale-[0.98]"
          >
            Submit Your Questions
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Task Submission & Confidentiality Policy
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The Al-Khwarizmi International Olympiad (KhIMIOs) Scientific Committee aims
              to maintain the highest standards of academic integrity and cultural representation.
            </p>
          </div>

          {/* Download Policy Files */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="/KHIMIO - 2026 policy.pdf"
              download
              className="inline-flex items-center gap-3 px-6 py-3 bg-red-50 border border-red-100 rounded-xl hover:bg-red-100 transition-colors"
            >
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-900">Policy Document (PDF)</p>
                <p className="text-sm text-slate-500">KhIMIOs 2026 Policy</p>
              </div>
            </a>
            <a
              href="/policy.docx"
              download
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 transition-colors"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-900">Policy Document (Word)</p>
                <p className="text-sm text-slate-500">KhIMIOs 2026 Policy</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Originality */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Originality and Intellectual Integrity
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "Unpublished Work", desc: "All submissions must be original and must not have been used in any other competition (national or international), published in books, or shared on online platforms (e.g., Codeforces, AoPS)." },
                  { title: "Plagiarism & Variations", desc: "Tasks that are \"well-known\" or slight modifications of existing problems will be disqualified." },
                  { title: "Simultaneous Submission", desc: "Authors are prohibited from submitting the same task to other Olympiads until a formal decision (acceptance or rejection) is issued by the KhIMIOs SC." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cultural Context */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Cultural Context and Narrative
                </h3>
              </div>
              <p className="text-slate-600 mb-4">
                KhIMIOs seeks to promote the rich scientific and historical heritage of Uzbekistan.
              </p>
              <ul className="space-y-3">
                {[
                  "Authors are strongly encouraged to frame their tasks using historical figures (e.g., Al-Khwarizmi, Beruni, Mirzo Ulugbek), historical sites (e.g., Registan, Ichan Kala), or national folklore (e.g., Alpomish, Silk Road caravans).",
                  "Narratives must be historically respectful and culturally appropriate.",
                  "While the \"story\" should be national, the underlying mathematical or algorithmic challenge must remain rigorous and solvable.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Confidentiality */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Strict Confidentiality
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "From the moment of submission until the end of KhIMIOs 2026, the author must not discuss or share the task with anyone, including potential contestants or coaches.",
                  "If a task is selected for the \"Shortlist\" but not used in the final competition, the SC may request to keep it confidential for the next year's edition.",
                  "If an author realizes their task has been leaked or solved publicly after submission, they must notify the SC within 24 hours.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IP Rights */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Intellectual Property and Usage Rights
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "By submitting, the author grants the KhIMIOs Organizing Committee a perpetual, royalty-free, irrevocable license to use, modify, translate, and distribute the task.",
                  "Authors of selected tasks will receive official credit in the KhIMIOs materials unless they explicitly request anonymity.",
                  "Post-competition, tasks will be released under the Creative Commons Attribution 4.0 (CC-BY 4.0) license.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Requirements */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Technical Requirements
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-violet-50 rounded-xl p-5">
                  <h4 className="font-bold text-slate-900 mb-3">Mathematics</h4>
                  <p className="text-slate-700 text-sm">
                    Submissions must include a complete, step-by-step proof. Sketches or
                    &quot;answer-only&quot; submissions will be ignored.
                  </p>
                </div>
                <div className="bg-violet-50 rounded-xl p-5">
                  <h4 className="font-bold text-slate-900 mb-3">Informatics</h4>
                  <p className="text-slate-700 text-sm">
                    Submissions must include a model solution in C++, a description of the
                    algorithm, and suggested time/memory limits.
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm mt-4">
                The SC reserves the right to simplify or refine the task statement, change
                constraints, or adjust the &quot;story&quot; to ensure balance and fairness.
              </p>
            </div>

            {/* Conflict of Interest */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Conflict of Interest
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Authors must disclose if they are currently training a team or individual student participating in KhIMIOs.",
                  "Authors must not have immediate family members participating in the specific track (Math/Informatics) they are submitting for.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Penalties */}
            <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Ban className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Disqualification and Penalties
                </h3>
              </div>
              <p className="text-slate-600 mb-4">
                Violation of any policy (especially confidentiality or plagiarism) will result in:
              </p>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-slate-700 text-sm">Immediate removal of the task from the pool.</li>
                <li className="text-slate-700 text-sm">Permanent blacklisting of the author from future KhIMIOs calls.</li>
                <li className="text-slate-700 text-sm">Formal notification to the author&apos;s national organization or employer regarding the breach of ethics.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a192f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Submit Your Questions?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Help shape the 4th Al-Khwarizmi International Mathematics and Informatics Olympiad
            by contributing your original tasks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScV0XWG6jknWKLDgpx44dtpSYYuQBbiMMxG21OBwSTB20j0qw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-300 bg-gradient-to-r from-[#B8952F] via-[#C9A84C] to-[#D4B85A] text-[#040C1B] hover:shadow-[0_0_32px_rgba(201,168,76,0.25)] active:scale-[0.98]"
            >
              Submit Questions
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/regulations"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-base text-[#C9A84C] border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 transition-all duration-300"
            >
              View Regulations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

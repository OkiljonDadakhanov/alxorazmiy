"use client"

import type { RegulationChapter } from "@/data/regulations"
import Reveal from "@/components/ui/reveal"
import {
  BookOpen,
  Target,
  ClipboardList,
  Scale,
  Eye,
  Trophy,
  Gavel,
} from "lucide-react"
import type { ReactNode } from "react"

interface RegulationListProps {
  regulations: RegulationChapter[]
}

const chapterIcons: Record<string, ReactNode> = {
  "general-provisions": <BookOpen className="h-5 w-5" />,
  "objectives-and-tasks": <Target className="h-5 w-5" />,
  procedure: <ClipboardList className="h-5 w-5" />,
  "jury-panel": <Scale className="h-5 w-5" />,
  observers: <Eye className="h-5 w-5" />,
  awarding: <Trophy className="h-5 w-5" />,
  "final-provisions": <Gavel className="h-5 w-5" />,
}

export default function RegulationList({ regulations }: RegulationListProps) {
  return (
    <div className="space-y-6">
      {regulations.map((chapter, idx) => (
        <Reveal key={chapter.id} delay={idx * 0.05}>
          <section
            id={chapter.id}
            className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm shadow-sm transition-shadow hover:shadow-md"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#1E3A8A] via-[#C9A227] to-[#1E3A8A]"
            />
            <header className="flex items-center gap-4 border-b border-slate-100 px-6 pb-4 pt-6 sm:px-8">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#E0F2FE] text-[#1E3A8A] ring-1 ring-[#1E3A8A]/10">
                {chapterIcons[chapter.id] ?? <BookOpen className="h-5 w-5" />}
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
                  Chapter {chapter.number}
                </p>
                <h2
                  className="mt-0.5 text-lg font-semibold text-[#0F172A] sm:text-xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {chapter.title}
                </h2>
              </div>
            </header>
            <ol className="space-y-5 px-6 py-6 sm:px-8">
              {chapter.items.map((item) => (
                <li key={item.number} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-none select-none items-center justify-center rounded-full bg-[#1E3A8A]/5 text-xs font-semibold text-[#1E3A8A] ring-1 ring-[#1E3A8A]/15 tabular-nums">
                    {item.number}
                  </span>
                  <div className="flex-1 text-[15px] leading-relaxed text-slate-700">
                    <p>{item.text}</p>
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="mt-3 space-y-2 pl-1">
                        {item.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2.5">
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#C9A227]"
                            />
                            <span className="flex-1">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>
      ))}
    </div>
  )
}

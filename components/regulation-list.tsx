"use client"

import { useState } from "react"
import type { Regulation } from "@/data/regulations"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface RegulationListProps {
  regulations: Regulation[]
}

export default function RegulationList({ regulations }: RegulationListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {regulations.map((regulation) => (
        <Card key={regulation.id} className="bg-white/10 text-white border-none">
          <CardHeader
            className="cursor-pointer flex flex-row items-center justify-between"
            onClick={() => toggleExpand(regulation.id)}
          >
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="text-2xl">{regulation.icon}</span>
              {regulation.title}
            </CardTitle>
            {expandedId === regulation.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </CardHeader>
          {expandedId === regulation.id && (
            <CardContent>
              {Array.isArray(regulation.content) ? (
                <ul className="list-disc pl-5 space-y-2">
                  {regulation.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{regulation.content}</p>
              )}
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}


"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface OrganizationMember {
  id: string
  name: string
  location: string
  imageUrl: string
  isLeader?: boolean
}

interface OrganizationCardProps {
  member: OrganizationMember
}

export function OrganizationCard({ member }: OrganizationCardProps) {
  if (!member) {
    return null // Or you could return a placeholder card
  }

  return (
    <Card className={`overflow-hidden transition-shadow hover:shadow-lg ${member.isLeader ? "md:col-span-3" : ""}`}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className={`relative overflow-hidden rounded-full ${member.isLeader ? "h-48 w-48" : "h-32 w-32"}`}>
            <Image
              src={member.imageUrl || "/placeholder.svg"}
              alt={member.name || "Organization member"}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">{member.name || "Unknown"}</h3>
            <p className="text-sm text-gray-500">{member.location || "Unknown location"}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


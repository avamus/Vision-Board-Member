"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function TeamGoalsVision() {
  const [titleText, setTitleText] = useState("Team Goals & Vision")
  const [goalsTitle, setGoalsTitle] = useState("Our Goals:")
  const [visionTitle, setVisionTitle] = useState("Our Vision:")
  const [goals, setGoals] = useState(
    "1. Increase market share by 15%\n2. Launch 2 innovative products\n3. Achieve 99% customer satisfaction",
  )
  const [vision, setVision] = useState(
    "To become the industry leader in innovative solutions, setting new standards for excellence and customer satisfaction.",
  )

  return (
    <Card className="shadow-md rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <span className="text-2xl font-bold text-[#5b06be]">{titleText}</span>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4 text-lg text-[#fbb350]">{goalsTitle}</h3>
          <p className="text-base whitespace-pre-line">{goals}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg text-[#fbb350]">{visionTitle}</h3>
          <p className="text-base">{vision}</p>
        </div>
      </CardContent>
    </Card>
  )
}


"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { format, differenceInDays } from "date-fns"
import Image from "next/image"

export function ProgressWinsSection() {
  const [titleText] = useState("Progress & Wins")
  const [progressTitleText] = useState("Team Progress:")
  const [victoriesTitleText] = useState("Recent Victories:")
  const [deadline] = useState<Date | null>(new Date("2025-12-31"))
  const [wins] = useState([
    "Secured 3 major client contracts",
    "Launched innovative product feature",
    "Achieved 98% customer satisfaction rate",
  ])

  return (
    <Card className="shadow-md rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <span className="text-2xl font-bold text-[#5b06be]">{titleText}</span>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4 text-lg text-[#fbb350]">{progressTitleText}</h3>
          <div className="space-y-4">
            <div className="space-y-4">
              {deadline ? (
                <>
                  <p className="text-sm font-medium">Deadline: {format(deadline, "MM/dd/yyyy")}</p>
                  <div className="overflow-hidden h-2 text-xs flex rounded-full bg-[#fbb350]/20">
                    <div
                      style={{
                        width: `${Math.max(0, Math.min(100, (1 - differenceInDays(deadline, new Date()) / 30) * 100))}%`,
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#fbb350] rounded-full"
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500">
                    {differenceInDays(deadline, new Date()) > 0
                      ? `${differenceInDays(deadline, new Date())} days left`
                      : "Deadline passed"}
                  </p>
                </>
              ) : (
                <p className="text-sm">No deadline set</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg text-[#fbb350]">{victoriesTitleText}</h3>
          <ul className="space-y-4">
            {wins.map((win, index) => (
              <li key={index} className="flex items-center">
                <Image
                  src="https://res.cloudinary.com/drkudvyog/image/upload/v1737477323/Trophy_icon_duha_rdwgow.png"
                  alt="Trophy Icon"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <span className="text-base">{win}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}


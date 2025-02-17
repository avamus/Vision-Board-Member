import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function ChallengeCard() {
  return (
    <Card className="shadow-md rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <span className="text-2xl font-bold text-[#5b06be]">Current Challenge</span>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4 text-lg text-[#fbb350]">What we're fighting against:</h3>
          <p className="text-base">Market saturation and fierce competition</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg text-[#fbb350]">Why it matters:</h3>
          <p className="text-base">
            Overcoming this challenge will set us apart and secure our position as industry leaders.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}


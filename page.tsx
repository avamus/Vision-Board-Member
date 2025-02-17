"use client"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { VisionDashboard } from '@/components/ui/vision-dashboard'

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className="min-h-screen bg-white">
        <div className="max-w-[1400px] mx-auto">
          <VisionDashboard />
        </div>
      </main>
    </DndProvider>
  )
}

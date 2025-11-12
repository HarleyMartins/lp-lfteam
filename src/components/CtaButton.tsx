"use client"

import { useState } from "react"
import LeadModal from "@/components/LeadModal"

export default function CTAButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-block bg-[#0084ff] text-white font-bold px-10 py-4 rounded-xl text-lg shadow-[0_0_25px_#1b87ec] hover:scale-105 transition-transform"
      >
        Quero fazer parte do LF Team
      </button>

      <LeadModal open={open} onOpenChange={setOpen} />
    </>
  )
}

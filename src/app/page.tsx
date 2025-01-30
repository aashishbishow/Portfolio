"use client";

import { Calendar } from "@/components/ui/calendar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import React from "react";


export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HoverCard>
          <HoverCardTrigger>Click me!</HoverCardTrigger>
            <HoverCardContent>
              Hello, Visitor👋
            </HoverCardContent>
        </HoverCard>
        <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
      </main>
    </div>
  );
}

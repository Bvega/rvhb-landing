"use client";
import { useState } from "react";

const QA = [
  { q: "What does it cost?", a: "There is no cost to you. Hotels compensate our services when you book." },
  { q: "How fast can I see options?", a: "Often within a few business days, depending on dates, city, and scale." },
  { q: "Can you help internationally?", a: "Yes. We support both domestic and international room blocks." },
  { q: "Minimum room block?", a: "Flexible. We’ll advise based on destination and season." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="container-default py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
      <div className="mt-6 divide-y rounded-2xl border">
        {QA.map((x, i) => {
          const expanded = open === i;
          return (
            <details key={i} open={expanded} className="group p-4">
              <summary
                onClick={(e) => { e.preventDefault(); setOpen(expanded ? null : i); }}
                className="flex cursor-pointer items-center justify-between list-none"
              >
                <span className="font-medium">{x.q}</span>
                <span aria-hidden className="ml-3">{expanded ? "−" : "+"}</span>
              </summary>
              <div className="mt-2 text-gray-700">{x.a}</div>
            </details>
          );
        })}
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";

const KEY = "rvhb_cookie_consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const v = window.localStorage.getItem(KEY);
    if (!v) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-2xl border bg-white p-4 shadow-lg w-[calc(100%-2rem)] max-w-2xl">
      <p className="text-sm">
        We use minimal cookies for analytics and performance.{" "}
        <a href="/privacy" className="underline">Learn more</a>.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => { window.localStorage.setItem(KEY, "accepted"); setShow(false); }}
          aria-label="Accept cookies" className="rounded-2xl bg-blue-900 px-4 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
        >
          Accept
        </button>
        <button
          onClick={() => setShow(false)}
          aria-label="Dismiss cookie banner" className="rounded-2xl border px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

type Props = { message: string | null; onFin: () => void };

export default function Toast({ message, onFin }: Props) {
  useEffect(() => {
    if (!message) return;
    const id = setTimeout(onFin, 2600);
    return () => clearTimeout(id);
  }, [message, onFin]);

  if (!message) return null;

  return (
    <div
      role="status"
      className="fixed bottom-20 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-sapin px-5 py-3 text-sm font-bold text-neige shadow-xl md:bottom-6"
    >
      {message}
    </div>
  );
}
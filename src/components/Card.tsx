// Card.tsx
import React from "react";
export function Card({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg ${className}`}>{children}</div>;
}

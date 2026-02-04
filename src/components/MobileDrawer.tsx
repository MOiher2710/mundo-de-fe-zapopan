"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button aria-label="Abrir menú" onClick={() => setOpen(true)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15">
        <span>≡</span>
      </button>
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-80 bg-cyan-400 text-black p-6">
            <button aria-label="Cerrar" onClick={() => setOpen(false)} className="ml-auto block rounded-md border border-black/20 px-3 py-1">✕</button>
            <nav className="mt-6 space-y-3 text-lg font-semibold">
              <Link href="/about" onClick={() => setOpen(false)}>Acerca de</Link>
              <Link href="/events" onClick={() => setOpen(false)}>Eventos</Link>
              <Link href="/ministries" onClick={() => setOpen(false)}>Ministerios</Link>
              <Link href="/online" onClick={() => setOpen(false)}>En línea</Link>
              <Link href="/visit" onClick={() => setOpen(false)}>Visítanos</Link>
              <Link href="/give" onClick={() => setOpen(false)} className="inline-block rounded-xl bg-black px-4 py-2 text-white">Dar</Link>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

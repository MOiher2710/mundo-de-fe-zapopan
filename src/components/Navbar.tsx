import Link from "next/link";
import MobileDrawer from "@/components/MobileDrawer";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-black/70 to-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/brand/logo-mfz-light.svg" alt="MFZ" className="h-8" />
          <span className="hidden sm:block font-semibold">Mundo de Fe Zapopan</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about">Acerca de</Link>
          <Link href="/events">Eventos</Link>
          <Link href="/ministries">Ministerios</Link>
          <Link href="/online">En línea</Link>
          <Link href="/visit">Visítanos</Link>
          <Link href="/give" className="rounded-xl bg-cyan-400 px-4 py-2 font-semibold text-black">Dar</Link>
        </nav>
        <MobileDrawer />
      </div>
    </header>
  );
}

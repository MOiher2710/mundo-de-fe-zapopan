import { site } from "@/content/site";

export default function VisitPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">Planear mi visita</h1>
      <p className="mt-3 text-white/80">Te esperamos este domingo. Somos una iglesia para toda la familia.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 p-5">
          <h2 className="font-semibold">Horarios</h2>
          <ul className="mt-2 text-white/70">
            {site.schedules.inPerson.map((h) => (<li key={h}>{h}</li>))}
            <li>En línea: {site.schedules.online.join(", ")}</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 p-5">
          <h2 className="font-semibold">Dirección</h2>
          <p className="mt-2 text-white/70">{site.address}</p>
          <a className="mt-3 inline-block rounded-xl bg-cyan-400 px-4 py-2 text-black" href="https://maps.google.com" target="_blank">
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

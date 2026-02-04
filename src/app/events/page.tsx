import { events } from "@/content/events";

export default function EventsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Eventos</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {events.map((e) => (
          <article key={e.id} className="overflow-hidden rounded-2xl border border-white/10">
            {e.cover && <img src={e.cover} alt={e.title} className="h-64 w-full object-cover" />}
            <div className="p-5">
              <p className="text-cyan-400 font-semibold">{e.date}{e.time && ` · ${e.time}`}</p>
              <h2 className="mt-1 text-xl font-bold">{e.title}</h2>
              {e.cta && <a className="mt-3 inline-block rounded-xl bg-cyan-400 px-4 py-2 text-black" href={e.cta.href}>{e.cta.label}</a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

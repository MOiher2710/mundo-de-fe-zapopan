import { ministries } from "@/content/ministries";

export default function MinistriesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Ministerios</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {ministries.map((m) => (
          <article key={m.slug} className="overflow-hidden rounded-2xl border border-white/10">
            {m.cover && <img src={m.cover} alt={m.name} className="h-48 w-full object-cover" />}
            <div className="p-5">
              <h2 className="text-lg font-semibold">{m.name}</h2>
              <p className="mt-1 text-white/70">{m.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

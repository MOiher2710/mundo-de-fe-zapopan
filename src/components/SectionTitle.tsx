// SectionTitle.tsx
export default function SectionTitle({ over, title, sub }: { over?: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-10">
      {over && <p className="uppercase tracking-widest text-cyan-400/80 text-sm">{over}</p>}
      <h2 className="mt-1 text-3xl md:text-4xl font-bold">{title}</h2>
      {sub && <p className="mt-2 text-white/70 max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

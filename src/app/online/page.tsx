export default function OnlinePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">En línea</h1>
      <p className="mt-3 text-white/80">Conéctate a nuestras transmisiones.</p>
      <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
        {/* Reemplaza el src con tu transmisión real de YouTube/Facebook */}
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Stream"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

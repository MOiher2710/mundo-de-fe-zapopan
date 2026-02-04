export default function HeroVideo() {
  return (
    <section className="relative h-[86vh] min-h-[520px] w-full overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover" src="/media/hero.mp4" poster="/media/hero-poster.jpg" autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-6 text-center">
        <div>
          <img src="/brand/logo-mfz-light.svg" alt="Mundo de Fe Zapopan" className="mx-auto mb-6 h-14" />
          <h1 className="text-3xl md:text-5xl font-extrabold">Bienvenido a Mundo de Fe Zapopan</h1>
          <p className="mt-3 text-white/85">Domingos <span className="font-semibold">9:00 & 11:00</span> · En línea <span className="font-semibold">11:00</span></p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="/visit" className="rounded-2xl bg-white px-5 py-3 font-semibold text-gray-900 shadow-md">Visítanos</a>
            <a href="/online" className="rounded-2xl border border-white/70 px-5 py-3 font-semibold text-white">Únete en línea</a>
            <a href="/give" className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-black">Dar</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import HeroVideo from "@/components/HeroVideo";
import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/Card";

export default function HomePage() {
  return (
    <div>
      <HeroVideo />

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <SectionTitle over="Acerca de" title="Jesús es nuestro mensaje" sub="Somos una iglesia que ama a Dios y a las personas. Queremos que cada persona conozca a Jesús, crezca en comunidad y viva con propósito." />
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6"><h3 className="text-lg font-semibold">Conoce a Jesús</h3><p className="mt-2 text-white/70">Primeros pasos en la fe y bautismos.</p></Card>
          <Card className="p-6"><h3 className="text-lg font-semibold">Crece en comunidad</h3><p className="mt-2 text-white/70">Grupos y discipulado para todas las edades.</p></Card>
          <Card className="p-6"><h3 className="text-lg font-semibold">Sirve con tus dones</h3><p className="mt-2 text-white/70">Sé parte del equipo de voluntariado.</p></Card>
        </div>
      </section>
    </div>
  );
}

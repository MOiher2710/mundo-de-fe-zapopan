export default function GivePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Dar</h1>
      <p className="mt-3 text-white/80">
        Gracias por tu generosidad. Aquí integraremos tu plataforma de donaciones (Stripe, PayPal, Conecta, etc.).
      </p>
      <div className="mt-6 rounded-2xl border border-white/10 p-6 text-white/70">
        Embed de donaciones va aquí.
      </div>
    </div>
  );
}

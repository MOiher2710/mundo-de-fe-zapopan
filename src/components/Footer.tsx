export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-white/70">© {new Date().getFullYear()} Mundo de Fe Zapopan</p>
      </div>
    </footer>
  );
}

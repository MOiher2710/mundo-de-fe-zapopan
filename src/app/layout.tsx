import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mundo de Fe Zapopan",
  description: "Iglesia cristiana en Zapopan — servicios dominicales, ministerios y transmisiones en línea.",
  openGraph: { title: "Mundo de Fe Zapopan", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="bg-black text-white">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

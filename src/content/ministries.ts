export type Ministry = { slug: string; name: string; blurb: string; cover?: string };

export const ministries: Ministry[] = [
  { slug: "kids",  name: "Kingdom Kids", blurb: "Guiamos a los niños a conocer a Jesús con actividades creativas.", cover: "/images/Campamento1.jpg" },
  { slug: "youth", name: "Jóvenes",      blurb: "Conexión, discipulado y propósito para nuevas generaciones.", cover: "/images/FotoJubenil1.jpg" },
  { slug: "serve", name: "Voluntariado",  blurb: "Hay un lugar para tus dones: producción, bienvenida y más." },
];

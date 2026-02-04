export type Event = {
  id: string; title: string; date: string; time?: string;
  cover?: string; cta?: { label: string; href: string };
};

export const events: Event[] = [
  { id: "noche-mexicana", title: "Gran Noche Mexicana", date: "13 Sep", time: "7:30 PM", cover: "/images/EventoMexican.jpg", cta: { label: "¡Regístrate!", href: "#" } },
  { id: "invitado-especial", title: "Invitado Especial Ps. Alfonso González", date: "Miércoles 16 Jul", time: "7:30 PM", cover: "/images/Eventospastores.jpg" },
];

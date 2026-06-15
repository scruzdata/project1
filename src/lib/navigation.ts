export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Inicio",   href: "/" },
  { label: "Cruceros",   href: "/cruise-lines" },
  { label: "Rutas",      href: "/itineraries" },
  { label: "Destinos",   href: "/destinations" },
  { label: "Mapa",       href: "/map" },
  { label: "Calendario", href: "/calendar" },
];

export const secondaryNav: NavItem[] = [
  // { label: "Favoritos",  href: "/favorites" },
  { label: "Calendario", href: "/calendar" },
];

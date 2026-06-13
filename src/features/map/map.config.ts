export const ITINERARY_COLORS: Record<string, string> = {
  "greek-islands": "#d4af37",
  "western-mediterranean": "#10b981",
  "iberia-morocco": "#f97316",
};

export const MAP_DEFAULTS = {
  center: [38.5, 10.0] as [number, number],
  zoom: 5,
  minZoom: 4,
  maxZoom: 12,
};

export const TILE_LAYER = {
  url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  urlDark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

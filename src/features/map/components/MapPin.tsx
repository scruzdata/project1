import L from "leaflet";

export function createCityIcon(isHighlighted: boolean): L.DivIcon {
  const size = isHighlighted ? 14 : 8;
  const style = isHighlighted
    ? `width:${size}px;height:${size}px;border-radius:50%;background:#d4af37;border:2.5px solid white;box-shadow:0 0 0 4px rgba(212,175,55,0.25),0 2px 8px rgba(212,175,55,0.5);`
    : `width:${size}px;height:${size}px;border-radius:50%;background:#334b6e;border:2px solid rgba(255,255,255,0.7);box-shadow:0 1px 4px rgba(0,0,0,0.3);`;

  return L.divIcon({
    html: `<div style="${style}"></div>`,
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -(size / 2 + 6)],
  });
}

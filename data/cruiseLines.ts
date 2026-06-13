import { CruiseLine } from "@/types/cruise";

export const cruiseLines: CruiseLine[] = [
{
id: "celebrity",
name: "Celebrity Cruises",

category: "premium",

atmosphere: "relaxed",

overallScore: 9.5,

foodScore: 9.5,

serviceScore: 9.3,

shipScore: 9.7,

entertainmentScore: 8.7,

tranquilityScore: 9.4,

valueScore: 8.9,

averagePassengerAge: "50-70",

idealFor: [
"Retired couples",
"First cruise",
"Relaxed travel"
],

strengths: [
"Excellent food",
"Premium atmosphere",
"Modern ships"
],

weaknesses: [
"Higher prices"
],

recommended: true,

logo: "/logos/celebrity.svg",

website: "https://www.celebritycruises.com"
},
{
  id: "oceania",
  name: "Oceania Cruises",

  category: "premium",

  atmosphere: "relaxed",

  overallScore: 9.2,

  foodScore: 9.8,

  serviceScore: 9.1,

  shipScore: 8.8,

  entertainmentScore: 7.5,

  tranquilityScore: 9.2,

  valueScore: 8.0,

  averagePassengerAge: "55-70",

  idealFor: [
    "Amantes de la gastronomía",
    "Viajes tranquilos",
    "Parejas retiradas"
  ],

  strengths: [
    "Mejor cocina del sector",
    "Barcos pequeños e íntimos",
    "Itinerarios exclusivos"
  ],

  weaknesses: [
    "Entretenimiento limitado",
    "Capacidad reducida en reservas"
  ],

  recommended: true,

  logo: "/logos/oceania.svg",

  website: "https://www.oceaniacruises.com"
},
{
  id: "regent",
  name: "Regent Seven Seas",

  category: "luxury",

  atmosphere: "relaxed",

  overallScore: 9.8,

  foodScore: 9.8,

  serviceScore: 9.9,

  shipScore: 9.5,

  entertainmentScore: 8.5,

  tranquilityScore: 9.8,

  valueScore: 7.2,

  averagePassengerAge: "55-75",

  idealFor: [
    "Viajeros de lujo",
    "Parejas retiradas",
    "Experiencias únicas"
  ],

  strengths: [
    "Todo incluido de verdad",
    "Servicio excepcional",
    "Intimidad a bordo"
  ],

  weaknesses: [
    "Precios muy elevados",
    "Plazas muy limitadas"
  ],

  recommended: false,

  logo: "/logos/regent.svg",

  website: "https://www.rssc.com"
},
{
  id: "silversea",
  name: "Silversea",

  category: "luxury",

  atmosphere: "relaxed",

  overallScore: 9.6,

  foodScore: 9.6,

  serviceScore: 9.8,

  shipScore: 9.2,

  entertainmentScore: 7.8,

  tranquilityScore: 9.9,

  valueScore: 6.5,

  averagePassengerAge: "55-70",

  idealFor: [
    "Lujo ultra-exclusivo",
    "Viajes íntimos",
    "Exploración refinada"
  ],

  strengths: [
    "Servicio más personalizado del sector",
    "Ambiente de máxima tranquilidad",
    "Destinos únicos y remotos"
  ],

  weaknesses: [
    "El más caro del mercado",
    "Pocas actividades de entretenimiento"
  ],

  recommended: false,

  logo: "/logos/silversea.svg",

  website: "https://www.silversea.com"
},
{
  id: "msc",
  name: "MSC Cruceros",

  category: "mainstream",

  atmosphere: "active",

  overallScore: 7.0,

  foodScore: 7.0,

  serviceScore: 7.2,

  shipScore: 8.0,

  entertainmentScore: 9.0,

  tranquilityScore: 6.0,

  valueScore: 9.2,

  averagePassengerAge: "35-60",

  idealFor: [
    "Viajeros con presupuesto ajustado",
    "Familias",
    "Amantes del entretenimiento"
  ],

  strengths: [
    "Muy asequible",
    "Mega-barcos modernos",
    "Gran programa de entretenimiento"
  ],

  weaknesses: [
    "Mucha aglomeración a bordo",
    "Servicio menos personalizado",
    "No ideal para personas mayores"
  ],

  recommended: false,

  logo: "/logos/msc.svg",

  website: "https://www.msccruises.es"
},
{
  id: "costa",
  name: "Costa Cruceros",

  category: "mainstream",

  atmosphere: "classic",

  overallScore: 6.8,

  foodScore: 7.2,

  serviceScore: 7.0,

  shipScore: 7.5,

  entertainmentScore: 8.5,

  tranquilityScore: 6.0,

  valueScore: 9.0,

  averagePassengerAge: "40-65",

  idealFor: [
    "Viajeros con presupuesto",
    "Ambiente mediterráneo",
    "Primera experiencia básica"
  ],

  strengths: [
    "Buenas rutas mediterráneas",
    "Ambiente italiano característico",
    "Precios competitivos"
  ],

  weaknesses: [
    "Barcos muy concurridos",
    "Servicio inconsistente",
    "Flota parcialmente envejecida"
  ],

  recommended: false,

  logo: "/logos/costa.svg",

  website: "https://www.costacruises.es"
}
];
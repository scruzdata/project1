import type { Itinerary } from "@/types/itinerary";

export const itineraries: Itinerary[] = [
  {
    id: "greek-islands",
    name: "Islas Griegas",
    score: 9.8,
    durationMin: 8,
    durationMax: 12,
    departurePorts: ["Barcelona", "Atenas"],
    destinationIds: ["pireo","santorini","katakolon","corfu","kotor","zadar", "koper","ravenna",],
    bestMonths: [5, 6, 9, 10],
    difficulty: "moderate",
    idealFor: ["Experiencia memorable", "Paisajes impresionantes", "Escenarios icónicos"],
    highlights: ["Pueblos blancos de Santorini", "Mar Egeo", "Atardeceres espectaculares"],
    image: "/images/islas_griegas.webp",
    description: "Imaginad despertar cada mañana frente a una isla diferente, con el azul intenso del mar Egeo extendiéndose hasta el horizonte y la sensación de que el tiempo avanza un poco más despacio. Este viaje os llevará a algunos de los lugares más emblemáticos y fotogénicos del Mediterráneo, donde cada rincón parece sacado de una postal.\n\nPasear por las calles blancas de Santorini, contemplar las cúpulas azules que contrastan con el mar y disfrutar de uno de los atardeceres más famosos del mundo son experiencias que quedan grabadas para siempre. A lo largo del recorrido descubriréis pequeñas plazas, tabernas junto al mar y paisajes que invitan a detenerse y simplemente disfrutar del momento.\n\nMás que un crucero, es una oportunidad para celebrar esta nueva etapa de la vida rodeados de belleza, tranquilidad y lugares que muchas personas sueñan con visitar al menos una vez. Un viaje pensado para crear recuerdos que os acompañarán durante muchos años."
  
  },
  {
    id: "western-mediterranean",
    name: "Mediterráneo Occidental",
    score: 9.3,
    durationMin: 8,
    durationMax: 10,
    departurePorts: ["Barcelona"],
    destinationIds: ["barcelona","naples","rome", "la-spezia","marseille","palma", "barcelona"],
    bestMonths: [5, 6, 9, 10],
    difficulty: "easy",
    idealFor: ["Primer crucero", "Ritmo tranquilo", "Cultura y gastronomía"],
    highlights: ["El Coliseo", "Costa Azul", "Costa Amalfitana"],
    image: "/images/Mediterraneo.jpg",
    description: "Este itinerario reúne algunos de los destinos más fascinantes de Europa en un viaje cómodo, variado y lleno de experiencias inolvidables. Desde las calles de Barcelona hasta los monumentos históricos de Roma, pasando por los paisajes de la Costa Azul y la espectacular Costa Amalfitana, cada parada tiene algo especial que ofrecer.\n\nPodréis pasear por ciudades llenas de historia, descubrir mercados locales, sentaros en una terraza frente al mar y disfrutar de algunas de las mejores gastronomías del mundo. Cada escala combina cultura, belleza y ese ambiente mediterráneo que invita a disfrutar sin prisas.\n\nEs el viaje perfecto para quienes desean descubrir grandes ciudades y lugares icónicos sin el estrés de organizar desplazamientos. Solo queda dejarse llevar, disfrutar del barco y despertar cada día con una nueva aventura esperando en el puerto."
  
  },
  // {
  //   id: "italia-turquia-grecia",
  //   name: "Italia-Grecia-Turquia",
  //   score: 9.1,
  //   durationMin: 10,
  //   durationMax: 12,
  //   departurePorts: ["Barcelona", "Roma"],
  //   destinationIds: ["barcelona", "niza", "la-spezia", "rome", "naples","katakolon","Kusadasi","santorini", "pireo"],
  //   bestMonths: [5, 6, 9, 10],
  //   difficulty: "easy",
  //   idealFor: ["Primer crucero", "Ritmo tranquilo", "Cultura y gastronomía"],
  //   highlights: ["El Coliseo", "Costa Azul", "Costa Amalfitana"],
  //   image: "/images/italy_turquia-grecia.png",
  //   description: "Pocos viajes permiten descubrir tantas maravillas diferentes en tan pocos días. Este recorrido une tres países extraordinarios que han sido cuna de algunas de las civilizaciones más importantes de la historia, creando una experiencia llena de contrastes, descubrimientos y paisajes inolvidables.\n\nDesde el esplendor de Roma y la elegancia de la costa italiana hasta las impresionantes ruinas de Éfeso en Turquía y los pueblos blancos de Santorini, cada escala ofrece algo único. Tendréis la oportunidad de caminar por lugares donde se escribió la historia, contemplar monumentos milenarios y disfrutar de algunos de los paisajes más espectaculares del Mediterráneo.\n\nEs un viaje para quienes sienten curiosidad por el mundo y disfrutan descubriendo nuevas culturas. Cada día aporta una experiencia diferente, convirtiendo el crucero en una colección de recuerdos que difícilmente se puede igualar."
 
  // },
  {
    id: "spain-france-italy",
    name: "España- Francia-Italia",
    score: 9.1,
    durationMin: 7,
    durationMax: 8,
    departurePorts: ["Barcelona"],
    destinationIds: ["barcelona", "marseille", "genove", "rome", "messina","malta", "barcelona"],
    bestMonths: [5, 6, 9, 10],
    difficulty: "easy",
    idealFor: ["Primer crucero", "Ritmo tranquilo", "Cultura y gastronomía"],
    highlights: ["El Coliseo", "Costa Azul", "Costa Amalfitana", "La valleta"],
    image: "/images/spain-france-italy.png",
    description: "Pocos viajes permiten descubrir tantas maravillas diferentes en tan pocos días. Este recorrido une tres países extraordinarios que han sido cuna de algunas de las civilizaciones más importantes de la historia, creando una experiencia llena de contrastes, descubrimientos y paisajes inolvidables.\n\nDesde el esplendor de Roma y la elegancia de la costa italiana hasta las impresionantes ruinas de Éfeso en Turquía y los pueblos blancos de Santorini, cada escala ofrece algo único. Tendréis la oportunidad de caminar por lugares donde se escribió la historia, contemplar monumentos milenarios y disfrutar de algunos de los paisajes más espectaculares del Mediterráneo.\n\nEs un viaje para quienes sienten curiosidad por el mundo y disfrutan descubriendo nuevas culturas. Cada día aporta una experiencia diferente, convirtiendo el crucero en una colección de recuerdos que difícilmente se puede igualar."
 
  },
  {
    id: "iberia-morocco",
    name: "España y Marruecos",
    score: 9.1,
    durationMin: 8,
    durationMax: 12,
    departurePorts: ["Barcelona", "Lisboa"],
    destinationIds: ["malaga", "cadiz", "lisbon", "porto", "tangier"],
    bestMonths: [4, 5, 9, 10, 11],
    difficulty: "easy",
    idealFor: ["Viaje relajado", "Paisajes atlánticos", "Exploración cultural"],
    highlights: ["La Alhambra", "Miradores de Lisboa", "Medina marroquí"],
    image: "/images/marruecos.jpg",
    description: "Este itinerario combina la familiaridad y el encanto de la península ibérica con la magia y el exotismo del norte de África. Es un viaje relajado que permite descubrir ciudades llenas de personalidad, paisajes atlánticos impresionantes y culturas muy diferentes separadas por apenas unos kilómetros de mar.\n\nDesde los miradores de Lisboa y las calles históricas de Oporto hasta los aromas, colores y sonidos de las medinas marroquíes, el recorrido ofrece una mezcla única de experiencias. Cada puerto tiene una identidad propia y una historia que contar, invitando a pasear, explorar y disfrutar a vuestro ritmo.\n\nEs una propuesta ideal para quienes buscan algo diferente sin recorrer grandes distancias. Un viaje lleno de contrastes, gastronomía, historia y momentos especiales que demuestra cuánto puede cambiar el mundo de una costa a otra."

  },
  {
    id: "crucero-nilo",
    name: "Crucero Clásico por el Nilo",
    score: 9.0,
    durationMin: 4,
    durationMax: 8,
    departurePorts: ["Luxor", "Asu\u00e1n"],
    destinationIds: ["asuan","kom-ombo","edfu","luxor"],
    bestMonths: [10, 11, 12, 1, 2, 3, 4],
    difficulty: "easy",
    idealFor: ["Cultura", "Descanso", "Historia"],
    highlights: ["Templo de Karnak", "Valle de los Reyes", "Templo de Kom Ombo", "Templo de Fil\u00e9"],
    image: "https://www.kiwakatravel.com/wp-content/uploads/2021/12/Egipto-portada.jpeg",
    description: "Hay viajes que se disfrutan y otros que se recuerdan para siempre. Navegar por el Nilo pertenece claramente al segundo grupo. A bordo de un barco tranquilo y elegante recorreréis el mismo río que durante miles de años dio vida a una de las civilizaciones más fascinantes de la historia.\n\nA lo largo del trayecto descubriréis templos monumentales, columnas gigantescas cubiertas de jeroglíficos y paisajes que apenas han cambiado desde la época de los faraones. Lugares tan impresionantes como Karnak, Luxor, Kom Ombo o el Valle de los Reyes permiten acercarse a la historia de una manera difícil de describir con palabras.\n\nPero el Nilo también es calma. Ver el atardecer reflejado sobre el río, observar la vida cotidiana en sus orillas y disfrutar del silencio del desierto crea una atmósfera única. Es un viaje que combina cultura, descanso y emoción, perfecto para celebrar una etapa tan especial como la jubilación."
    }
  
];

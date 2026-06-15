module.exports = [
"[project]/.next-internal/server/app/itineraries/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/itineraries.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "itineraries",
    ()=>itineraries
]);
const itineraries = [
    {
        id: "greek-islands",
        name: "Islas Griegas",
        score: 9.8,
        durationMin: 8,
        durationMax: 12,
        departurePorts: [
            "Barcelona",
            "Atenas"
        ],
        destinationIds: [
            "pireo",
            "santorini",
            "katakolon",
            "corfu",
            "kotor",
            "zadar",
            "koper",
            "ravenna"
        ],
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        difficulty: "moderate",
        idealFor: [
            "Experiencia memorable",
            "Paisajes impresionantes",
            "Escenarios icónicos"
        ],
        highlights: [
            "Pueblos blancos de Santorini",
            "Mar Egeo",
            "Atardeceres espectaculares"
        ],
        image: "/images/islas_griegas.webp",
        description: "Imaginad despertar cada mañana frente a una isla diferente, con el azul intenso del mar Egeo extendiéndose hasta el horizonte y la sensación de que el tiempo avanza un poco más despacio. Este viaje os llevará a algunos de los lugares más emblemáticos y fotogénicos del Mediterráneo, donde cada rincón parece sacado de una postal.\n\nPasear por las calles blancas de Santorini, contemplar las cúpulas azules que contrastan con el mar y disfrutar de uno de los atardeceres más famosos del mundo son experiencias que quedan grabadas para siempre. A lo largo del recorrido descubriréis pequeñas plazas, tabernas junto al mar y paisajes que invitan a detenerse y simplemente disfrutar del momento.\n\nMás que un crucero, es una oportunidad para celebrar esta nueva etapa de la vida rodeados de belleza, tranquilidad y lugares que muchas personas sueñan con visitar al menos una vez. Un viaje pensado para crear recuerdos que os acompañarán durante muchos años."
    },
    {
        id: "western-mediterranean",
        name: "Mediterráneo Occidental",
        score: 9.3,
        durationMin: 8,
        durationMax: 10,
        departurePorts: [
            "Barcelona"
        ],
        destinationIds: [
            "barcelona",
            "naples",
            "rome",
            "la-spezia",
            "marseille",
            "palma",
            "barcelona"
        ],
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        difficulty: "easy",
        idealFor: [
            "Primer crucero",
            "Ritmo tranquilo",
            "Cultura y gastronomía"
        ],
        highlights: [
            "El Coliseo",
            "Costa Azul",
            "Costa Amalfitana"
        ],
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
        departurePorts: [
            "Barcelona"
        ],
        destinationIds: [
            "barcelona",
            "marseille",
            "genove",
            "rome",
            "messina",
            "malta",
            "barcelona"
        ],
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        difficulty: "easy",
        idealFor: [
            "Primer crucero",
            "Ritmo tranquilo",
            "Cultura y gastronomía"
        ],
        highlights: [
            "El Coliseo",
            "Costa Azul",
            "Costa Amalfitana",
            "La valleta"
        ],
        image: "/images/spain-france-italy.png",
        description: "Pocos viajes permiten descubrir tantas maravillas diferentes en tan pocos días. Este recorrido une tres países extraordinarios que han sido cuna de algunas de las civilizaciones más importantes de la historia, creando una experiencia llena de contrastes, descubrimientos y paisajes inolvidables.\n\nDesde el esplendor de Roma y la elegancia de la costa italiana hasta las impresionantes ruinas de Éfeso en Turquía y los pueblos blancos de Santorini, cada escala ofrece algo único. Tendréis la oportunidad de caminar por lugares donde se escribió la historia, contemplar monumentos milenarios y disfrutar de algunos de los paisajes más espectaculares del Mediterráneo.\n\nEs un viaje para quienes sienten curiosidad por el mundo y disfrutan descubriendo nuevas culturas. Cada día aporta una experiencia diferente, convirtiendo el crucero en una colección de recuerdos que difícilmente se puede igualar."
    },
    {
        id: "iberia-morocco",
        name: "España y Marruecos",
        score: 9.1,
        durationMin: 8,
        durationMax: 12,
        departurePorts: [
            "Barcelona",
            "Lisboa"
        ],
        destinationIds: [
            "malaga",
            "cadiz",
            "lisbon",
            "porto",
            "tangier"
        ],
        bestMonths: [
            4,
            5,
            9,
            10,
            11
        ],
        difficulty: "easy",
        idealFor: [
            "Viaje relajado",
            "Paisajes atlánticos",
            "Exploración cultural"
        ],
        highlights: [
            "La Alhambra",
            "Miradores de Lisboa",
            "Medina marroquí"
        ],
        image: "/images/marruecos.jpg",
        description: "Este itinerario combina la familiaridad y el encanto de la península ibérica con la magia y el exotismo del norte de África. Es un viaje relajado que permite descubrir ciudades llenas de personalidad, paisajes atlánticos impresionantes y culturas muy diferentes separadas por apenas unos kilómetros de mar.\n\nDesde los miradores de Lisboa y las calles históricas de Oporto hasta los aromas, colores y sonidos de las medinas marroquíes, el recorrido ofrece una mezcla única de experiencias. Cada puerto tiene una identidad propia y una historia que contar, invitando a pasear, explorar y disfrutar a vuestro ritmo.\n\nEs una propuesta ideal para quienes buscan algo diferente sin recorrer grandes distancias. Un viaje lleno de contrastes, gastronomía, historia y momentos especiales que demuestra cuánto puede cambiar el mundo de una costa a otra."
    },
    {
        id: "crucero-nilo",
        name: "Crucero Clásico por el Nilo",
        score: 9.0,
        durationMin: 4,
        durationMax: 8,
        departurePorts: [
            "Luxor",
            "Asu\u00e1n"
        ],
        destinationIds: [
            "asuan",
            "kom-ombo",
            "edfu",
            "luxor"
        ],
        bestMonths: [
            10,
            11,
            12,
            1,
            2,
            3,
            4
        ],
        difficulty: "easy",
        idealFor: [
            "Cultura",
            "Descanso",
            "Historia"
        ],
        highlights: [
            "Templo de Karnak",
            "Valle de los Reyes",
            "Templo de Kom Ombo",
            "Templo de Fil\u00e9"
        ],
        image: "https://www.kiwakatravel.com/wp-content/uploads/2021/12/Egipto-portada.jpeg",
        description: "Hay viajes que se disfrutan y otros que se recuerdan para siempre. Navegar por el Nilo pertenece claramente al segundo grupo. A bordo de un barco tranquilo y elegante recorreréis el mismo río que durante miles de años dio vida a una de las civilizaciones más fascinantes de la historia.\n\nA lo largo del trayecto descubriréis templos monumentales, columnas gigantescas cubiertas de jeroglíficos y paisajes que apenas han cambiado desde la época de los faraones. Lugares tan impresionantes como Karnak, Luxor, Kom Ombo o el Valle de los Reyes permiten acercarse a la historia de una manera difícil de describir con palabras.\n\nPero el Nilo también es calma. Ver el atardecer reflejado sobre el río, observar la vida cotidiana en sus orillas y disfrutar del silencio del desierto crea una atmósfera única. Es un viaje que combina cultura, descanso y emoción, perfecto para celebrar una etapa tan especial como la jubilación."
    }
];
}),
"[project]/data/cities.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cities",
    ()=>cities
]);
const cities = [
    {
        id: "santorini",
        name: "Santorini",
        countryId: "greece",
        latitude: 36.3932,
        longitude: 25.4615,
        walkingDifficulty: "moderate",
        safety: 5,
        beautyScore: 10,
        foodScore: 8,
        historyScore: 7,
        temperatureSummer: 29,
        temperatureSpring: 23,
        recommendedHours: 8,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "La isla más icónica de Grecia, famosa por sus pueblos encalados y las dramáticas vistas a la caldera.",
        highlights: [
            "Oia",
            "Fira",
            "Cúpulas azules"
        ],
        coverImage: "https://res.cloudinary.com/manawa/image/private/c_fill,g_auto,h_630,w_1200,q_auto/uy2qidhrbntj85537glz"
    },
    {
        id: "mykonos",
        name: "Mykonos",
        countryId: "greece",
        latitude: 37.4467,
        longitude: 25.3289,
        walkingDifficulty: "easy",
        safety: 5,
        beautyScore: 9,
        foodScore: 8,
        historyScore: 6,
        temperatureSummer: 28,
        temperatureSpring: 22,
        recommendedHours: 6,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Isla cicládica cosmopolita con encantadores molinos de viento, playas doradas y un animado paseo marítimo.",
        highlights: [
            "Pequeña Venecia",
            "Molinos de viento",
            "Playa Paradise"
        ],
        coverImage: "https://www.grecia.info/es/wp-content/uploads/sites/166/mykonos-hd.jpg"
    },
    {
        id: "rhodes",
        name: "Rodas",
        countryId: "greece",
        latitude: 36.4341,
        longitude: 28.2176,
        walkingDifficulty: "moderate",
        safety: 5,
        beautyScore: 9,
        foodScore: 8,
        historyScore: 9,
        temperatureSummer: 30,
        temperatureSpring: 23,
        recommendedHours: 8,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "La Ciudad Vieja medieval de Rodas es Patrimonio de la Humanidad, rodeada de murallas cruzadas.",
        highlights: [
            "Ciudad Vieja",
            "Palacio del Gran Maestre",
            "Lindos"
        ],
        coverImage: "https://cdn.holidayguru.es/wp-content/uploads/2017/01/Akropolis_lindos_rhodos_shutterstock_326789276.jpg"
    },
    {
        id: "kusadasi",
        name: "Kuşadası",
        countryId: "turkey",
        latitude: 37.8569,
        longitude: 27.2659,
        walkingDifficulty: "easy",
        safety: 4,
        beautyScore: 8,
        foodScore: 9,
        historyScore: 10,
        temperatureSummer: 33,
        temperatureSpring: 25,
        recommendedHours: 6,
        bestMonths: [
            4,
            5,
            9,
            10
        ],
        description: "Puerta de entrada a las ruinas de la antigua Éfeso, una de las ciudades clásicas mejor conservadas del mundo.",
        highlights: [
            "Ruinas de Éfeso",
            "Biblioteca de Celso",
            "Costa Egea"
        ],
        coverImage: "https://www.msccruceros.com.ar/-/media/global-contents/destinations/ports/turkey/kusadasi/kusadasi_visual.jpg?bc=transparent&as=1&mh=930&mw=1640&hash=7AB236ECF232BA8DCE031C2A7E4F984E"
    },
    {
        id: "malta",
        name: "Valletta",
        countryId: "malta",
        latitude: 35.8997,
        longitude: 14.5146,
        walkingDifficulty: "moderate",
        safety: 5,
        beautyScore: 9,
        foodScore: 7,
        historyScore: 10,
        temperatureSummer: 30,
        temperatureSpring: 23,
        recommendedHours: 8,
        bestMonths: [
            4,
            5,
            9,
            10,
            11
        ],
        description: "La capital más pequeña de Europa y joya de la UNESCO, Valletta mezcla arquitectura barroca con la antigua historia maltesa.",
        highlights: [
            "Co-Catedral de San Juan",
            "Gran Puerto",
            "Mdina"
        ],
        coverImage: "https://estaticos-cdn.prensaiberica.es/clip/8bef1f3b-d505-4b12-b7b5-b30428530a86_16-9-discover-aspect-ratio_default_0.jpg"
    },
    {
        id: "palma",
        name: "Palma de Mallorca",
        countryId: "spain",
        latitude: 39.5696,
        longitude: 2.6502,
        walkingDifficulty: "easy",
        safety: 5,
        beautyScore: 9,
        foodScore: 9,
        historyScore: 8,
        temperatureSummer: 29,
        temperatureSpring: 22,
        recommendedHours: 7,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Ciudad mediterránea sofisticada con una impresionante catedral gótica, tiendas exclusivas y un puerto cristalino.",
        highlights: [
            "Catedral La Seu",
            "Casco Antiguo",
            "Castillo de Bellver"
        ],
        coverImage: "https://abcmallorcastorage.blob.core.windows.net/images/2022/01/palma-mallorca-7-copy.jpg"
    },
    {
        id: "marseille",
        name: "Marsella",
        countryId: "france",
        latitude: 43.2965,
        longitude: 5.3698,
        walkingDifficulty: "moderate",
        safety: 4,
        beautyScore: 8,
        foodScore: 10,
        historyScore: 7,
        temperatureSummer: 29,
        temperatureSpring: 20,
        recommendedHours: 6,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "La ciudad más antigua de Francia, un puerto vibrante lleno de sabores provenzales y la icónica bouillabaisse.",
        highlights: [
            "Vieux-Port",
            "Notre-Dame de la Garde",
            "Calanques"
        ],
        coverImage: "https://www.civitatis.com/blog/wp-content/uploads/2024/11/vista-puerto-viejo-marsella.jpg"
    },
    {
        id: "la-spezia",
        name: "La Spezia",
        countryId: "italy",
        latitude: 44.1024,
        longitude: 9.824,
        walkingDifficulty: "moderate",
        safety: 5,
        beautyScore: 9,
        foodScore: 9,
        historyScore: 7,
        temperatureSummer: 27,
        temperatureSpring: 18,
        recommendedHours: 6,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Puerta de entrada a las Cinque Terre: cinco aldeas de colores pastel aferradas a acantilados costeros espectaculares.",
        highlights: [
            "Cinque Terre",
            "Portovenere",
            "Golfo de La Spezia"
        ],
        coverImage: "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Spezia.jpg"
    },
    {
        id: "rome",
        name: "Roma",
        countryId: "italy",
        latitude: 41.9028,
        longitude: 12.4964,
        walkingDifficulty: "moderate",
        safety: 4,
        beautyScore: 10,
        foodScore: 10,
        historyScore: 10,
        temperatureSummer: 32,
        temperatureSpring: 22,
        recommendedHours: 10,
        bestMonths: [
            4,
            5,
            9,
            10
        ],
        description: "La Ciudad Eterna — dos milenios de historia en cada calle: el Coliseo, el Vaticano, la Fontana di Trevi y mucho más.",
        highlights: [
            "Coliseo",
            "Ciudad del Vaticano",
            "Fontana di Trevi"
        ],
        coverImage: "https://media.istockphoto.com/id/539115110/es/foto/colosseum-in-rome-italy-y-sol-de-la-ma%C3%B1ana.jpg?s=612x612&w=0&k=20&c=S2BE7bvASd4hm6Yp0VbtvaGnnqTR4p5HJ-6RfDjR-MQ="
    },
    {
        id: "naples",
        name: "Nápoles",
        countryId: "italy",
        latitude: 40.8518,
        longitude: 14.2681,
        walkingDifficulty: "high",
        safety: 3,
        beautyScore: 9,
        foodScore: 10,
        historyScore: 9,
        temperatureSummer: 30,
        temperatureSpring: 22,
        recommendedHours: 8,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Cuna de la pizza, puerta a Pompeya y la Costa Amalfitana: una ciudad de pasión, historia y gastronomía extraordinaria.",
        highlights: [
            "Pompeya",
            "Costa Amalfitana",
            "Pizza Napoletana"
        ],
        coverImage: "https://losviajesdemary.com/wp-content/uploads/2015/10/Imperdibles-de-Napoles.png"
    },
    {
        id: "malaga",
        name: "Málaga",
        countryId: "spain",
        latitude: 36.7213,
        longitude: -4.4214,
        walkingDifficulty: "easy",
        safety: 5,
        beautyScore: 8,
        foodScore: 9,
        historyScore: 9,
        temperatureSummer: 29,
        temperatureSpring: 21,
        recommendedHours: 6,
        bestMonths: [
            4,
            5,
            9,
            10,
            11
        ],
        description: "Ciudad natal de Picasso y soleada puerta de Andalucía, con fortalezas moriscas, tapas y una vibrante escena cultural.",
        highlights: [
            "Alcazaba",
            "Museo Picasso",
            "Playa La Malagueta"
        ],
        coverImage: "https://content.r9cdn.net/rimg/dimg/ee/b1/8afb451d-city-5309-15cef627e8c.jpg?width=1366&height=768&crop=true&cropStrategy=attention"
    },
    {
        id: "cadiz",
        name: "Cádiz",
        countryId: "spain",
        latitude: 36.5271,
        longitude: -6.2886,
        walkingDifficulty: "easy",
        safety: 5,
        beautyScore: 9,
        foodScore: 9,
        historyScore: 10,
        temperatureSummer: 27,
        temperatureSpring: 21,
        recommendedHours: 6,
        bestMonths: [
            4,
            5,
            9,
            10,
            11
        ],
        description: "Una de las ciudades más antiguas de Europa, un tesoro rodeado de mar con catedral dorada y cultura marinera atlántica.",
        highlights: [
            "Casco Antiguo",
            "Catedral",
            "Playas del Atlántico"
        ],
        coverImage: "https://static-dm.barcelo.com/is/image/barcelo/puente-de-agosto-cadiz?&&fmt=webp-alpha&qlt=75&wid=1300&fit=crop,1"
    },
    {
        id: "lisbon",
        name: "Lisboa",
        countryId: "portugal",
        latitude: 38.7169,
        longitude: -9.1399,
        walkingDifficulty: "high",
        safety: 5,
        beautyScore: 10,
        foodScore: 9,
        historyScore: 9,
        temperatureSummer: 27,
        temperatureSpring: 20,
        recommendedHours: 8,
        bestMonths: [
            4,
            5,
            9,
            10,
            11
        ],
        description: "Ciudad de luz y Fado, con miradores sobre el Tajo, fachadas de azulejos y el rico legado de la Era de los Descubrimientos.",
        highlights: [
            "Alfama",
            "Torre de Belém",
            "Miradores"
        ],
        coverImage: "https://upload.wikimedia.org/wikipedia/commons/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg"
    },
    {
        id: "porto",
        name: "Oporto",
        countryId: "portugal",
        latitude: 41.1579,
        longitude: -8.6291,
        walkingDifficulty: "high",
        safety: 5,
        beautyScore: 9,
        foodScore: 9,
        historyScore: 8,
        temperatureSummer: 24,
        temperatureSpring: 18,
        recommendedHours: 6,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "El frente fluvial apilado de Oporto y sus bodegas de vino de Oporto crean una ciudad mágica y fotogénica única en Europa.",
        highlights: [
            "Barrio de Ribeira",
            "Bodegas de vino",
            "Puente Dom Luís"
        ],
        coverImage: "https://blog.blablacar.es/wp-content/uploads/2014/10/oporto.webp"
    },
    {
        id: "tangier",
        name: "Tánger",
        countryId: "morocco",
        latitude: 35.7595,
        longitude: -5.834,
        walkingDifficulty: "moderate",
        safety: 3,
        beautyScore: 8,
        foodScore: 9,
        historyScore: 8,
        temperatureSummer: 30,
        temperatureSpring: 22,
        recommendedHours: 4,
        bestMonths: [
            4,
            5,
            9,
            10,
            11
        ],
        description: "La puerta de África: la medina, los mercados de especias y las vistas al Estrecho de Gibraltar ofrecen un contraste cultural fascinante.",
        highlights: [
            "Medina",
            "Kasbah",
            "Estrecho de Gibraltar"
        ],
        coverImage: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2022/01/tanger-chefchaouen-888.jpg"
    },
    {
        id: "barcelona",
        name: "Barcelona",
        countryId: "spain",
        latitude: 41.3851,
        longitude: 2.1734,
        walkingDifficulty: "moderate",
        safety: 4,
        beautyScore: 9,
        foodScore: 10,
        historyScore: 9,
        temperatureSummer: 28,
        temperatureSpring: 20,
        recommendedHours: 8,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Ciudad vibrante donde modernismo, playa y vida urbana se combinan. El puerto es uno de los principales hubs de cruceros del Mediterráneo.",
        highlights: [
            "Sagrada Familia",
            "Barrio Gótico",
            "Las Ramblas",
            "Parc Güell"
        ],
        coverImage: "https://i0.wp.com/armandotuviaje.blog/wp-content/uploads/2017/06/barcelona1.jpg?fit=1920%2C1080&ssl=1"
    },
    {
        id: "niza",
        name: "Niza",
        countryId: "france",
        latitude: 43.7102,
        longitude: 7.2620,
        walkingDifficulty: "moderate",
        safety: 5,
        beautyScore: 9,
        foodScore: 9,
        historyScore: 7,
        temperatureSummer: 27,
        temperatureSpring: 19,
        recommendedHours: 6,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Elegante ciudad de la Costa Azul con paseo marítimo icónico, arquitectura francesa clásica y ambiente mediterráneo relajado.",
        highlights: [
            "Promenade des Anglais",
            "Casco antiguo (Vieux Nice)",
            "Colina del Castillo"
        ],
        coverImage: "https://content-viajes.nationalgeographic.com.es/medio/2025/12/12/adobestock_9015a079_355868025_251212151617_1280x879.webp"
    },
    {
        id: "katakolon",
        name: "Katákolon (Grecia)",
        countryId: "greece",
        latitude: 37.6415,
        longitude: 21.3180,
        walkingDifficulty: "easy",
        safety: 5,
        beautyScore: 7,
        foodScore: 8,
        historyScore: 10,
        temperatureSummer: 30,
        temperatureSpring: 22,
        recommendedHours: 4,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Pequeño puerto griego conocido como puerta de entrada a la antigua Olimpia, uno de los sitios arqueológicos más importantes del mundo.",
        highlights: [
            "Ancient Olympia",
            "Puerto de Katákolon",
            "Playas cercanas"
        ],
        coverImage: "https://www.shore2shore.es/media/s2scms/tours/images/carousel/2_FKYU93t.jpg"
    },
    {
        id: "pireo",
        name: "Pireo (Atenas)",
        countryId: "greece",
        latitude: 37.9429,
        longitude: 23.6469,
        walkingDifficulty: "moderate",
        safety: 4,
        beautyScore: 7,
        foodScore: 9,
        historyScore: 10,
        temperatureSummer: 32,
        temperatureSpring: 24,
        recommendedHours: 6,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Principal puerto de Atenas y punto de acceso a la Acrópolis y la historia clásica de Grecia. Mezcla de puerto moderno y cultura milenaria.",
        highlights: [
            "Acrópolis de Atenas",
            "Plaka",
            "Puerto de Mikrolimano"
        ],
        coverImage: "https://content-historia.nationalgeographic.com.es/medio/2025/01/28/istock_56cd2f10_1028749698_250128165345_1280x735.webp"
    },
    {
        id: "corfu",
        name: "Corfu",
        countryId: "greece",
        latitude: 39.6243,
        longitude: 19.9217,
        walkingDifficulty: "easy",
        safety: 5,
        beautyScore: 9,
        foodScore: 8,
        historyScore: 8,
        temperatureSummer: 31,
        temperatureSpring: 21,
        recommendedHours: 6,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Isla griega famosa por sus playas, arquitectura veneciana y ambiente relajado. Es una escala habitual de cruceros en el mar Jónico.",
        highlights: [
            "Old Town",
            "Old Fortress",
            "Liston Promenade",
            "Paleokastritsa"
        ],
        coverImage: "https://image.urlaubspiraten.de/640/image/upload/v1603282560/mediavault_images/ogxtfowfm7czsefouxg4.jpg"
    },
    {
        id: "kotor",
        name: "Kotor",
        countryId: "montenegro",
        latitude: 42.4247,
        longitude: 18.7712,
        walkingDifficulty: "moderate",
        safety: 5,
        beautyScore: 10,
        foodScore: 8,
        historyScore: 9,
        temperatureSummer: 30,
        temperatureSpring: 20,
        recommendedHours: 6,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Ciudad medieval amurallada situada en una espectacular bahía rodeada de montañas. Uno de los destinos más pintorescos del Adriático.",
        highlights: [
            "Old Town",
            "Kotor Fortress",
            "Bay of Kotor",
            "St. Tryphon Cathedral"
        ],
        coverImage: "https://www.belmondo-cruises.com/upld/xl/1452/kotor-crucero-a-montenegro.webp"
    },
    {
        id: "zadar",
        name: "Zadar",
        countryId: "croatia",
        latitude: 44.1194,
        longitude: 15.2314,
        walkingDifficulty: "easy",
        safety: 5,
        beautyScore: 8,
        foodScore: 8,
        historyScore: 8,
        temperatureSummer: 30,
        temperatureSpring: 21,
        recommendedHours: 5,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Histórica ciudad costera croata conocida por su casco antiguo romano y sus innovadoras instalaciones frente al mar.",
        highlights: [
            "Sea Organ",
            "Greeting to the Sun",
            "Roman Forum",
            "St. Donatus Church"
        ],
        coverImage: "https://i0.wp.com/blog.vayacruceros.com/wp-content/uploads/2017/09/Vistas-de-Zadar.jpg?resize=600%2C400&ssl=1"
    },
    {
        id: "koper",
        name: "Koper",
        countryId: "slovenia",
        latitude: 45.5481,
        longitude: 13.7302,
        walkingDifficulty: "easy",
        safety: 5,
        beautyScore: 7,
        foodScore: 8,
        historyScore: 7,
        temperatureSummer: 29,
        temperatureSpring: 19,
        recommendedHours: 4,
        bestMonths: [
            5,
            6,
            9,
            10
        ],
        description: "Principal puerto de Eslovenia, con un pequeño casco histórico de influencia veneciana y acceso rápido a la costa adriática.",
        highlights: [
            "Tito Square",
            "Praetorian Palace",
            "Cathedral of the Assumption",
            "Koper Promenade"
        ],
        coverImage: "https://visitslovenia.b-cdn.net/city/koper.jpg"
    },
    {
        id: "ravenna",
        name: "Ravenna",
        countryId: "italy",
        latitude: 44.4184,
        longitude: 12.2035,
        walkingDifficulty: "easy",
        safety: 5,
        beautyScore: 8,
        foodScore: 9,
        historyScore: 10,
        temperatureSummer: 31,
        temperatureSpring: 20,
        recommendedHours: 6,
        bestMonths: [
            4,
            5,
            6,
            9,
            10
        ],
        description: "Ciudad italiana célebre por sus impresionantes mosaicos bizantinos y sus monumentos declarados Patrimonio de la Humanidad.",
        highlights: [
            "Basilica di San Vitale",
            "Mausoleum of Galla Placidia",
            "Basilica di Sant'Apollinare Nuovo",
            "Dante's Tomb"
        ],
        coverImage: "https://www.travelemiliaromagna.it/wp-content/uploads/2025/02/ravenna-piazza-popolo-ph-rudy-balasko-via-shutterstock.jpg"
    },
    {
        id: "luxor",
        name: "Luxor",
        countryId: "egypt",
        latitude: 25.6872,
        longitude: 32.6396,
        walkingDifficulty: "easy",
        safety: 4,
        beautyScore: 8,
        foodScore: 7,
        historyScore: 10,
        temperatureSummer: 42,
        temperatureSpring: 28,
        recommendedHours: 6,
        bestMonths: [
            10,
            11,
            12,
            1,
            2,
            3,
            4
        ],
        description: "Luxor, la antigua Tebas, fue la capital del Antiguo Egipto. Esta ciudad a orillas del Nilo alberga monumentos faraónicos únicos: los templos de Karnak y Luxor, la necrópolis del Valle de los Reyes (tumbas de los faraones) y el templo de Hatshepsut.",
        highlights: [
            "Valle de los Reyes",
            "Templo de Karnak",
            "Templo de Luxor",
            "Colosos de Memn\u00f3n"
        ],
        coverImage: "https://images.trvl-media.com/place/6112078/3e433b58-07d7-4877-acf4-3e921119eaec.jpg?impolicy=fcrop&w=800&h=600&p=1&q=medium"
    },
    {
        id: "asuan",
        name: "Asu\u00e1n",
        countryId: "egypt",
        latitude: 24.0889,
        longitude: 32.8998,
        walkingDifficulty: "easy",
        safety: 4,
        beautyScore: 9,
        foodScore: 7,
        historyScore: 7,
        temperatureSummer: 44,
        temperatureSpring: 30,
        recommendedHours: 5,
        bestMonths: [
            10,
            11,
            12,
            1,
            2,
            3,
            4
        ],
        description: "Asu\u00e1n es la ciudad más meridional del trayecto y puerta del Alto Egipto. Destacan el gran **Templo de Philae** dedicado a Isis, la majestuosa **Alta Presa de Asu\u00e1n** y el famoso **Obelisco Inacabado** de granito. Desde Asu\u00e1n también parten las excursiones al Templo de Abu Simbel.",
        highlights: [
            "Templo de Philae",
            "Obelisco Inacabado",
            "Alta Presa de Asu\u00e1n",
            "Paseo en faluca"
        ],
        coverImage: "https://realegypt.com/wp-content/uploads/2023/12/Abu-Simbel-1024x683.jpg"
    },
    {
        id: "edfu",
        name: "Edfu",
        countryId: "egypt",
        latitude: 24.9778,
        longitude: 32.8733,
        walkingDifficulty: "easy",
        safety: 4,
        beautyScore: 7,
        foodScore: 6,
        historyScore: 8,
        temperatureSummer: 44,
        temperatureSpring: 30,
        recommendedHours: 3,
        bestMonths: [
            10,
            11,
            12,
            1,
            2,
            3,
            4
        ],
        description: "Edfu es un pequeño pueblo ribere\u00f1o famoso por su imponente **Templo de Horus** (Templo de Edfu), uno de los mejor conservados de Egipto. El templo fue construido en la era ptolemaica y está dedicado al dios halcón Horus.",
        highlights: [
            "Templo de Horus (Edfu)",
            "Torre del Silencio",
            "Mercado local",
            "Passeo por el Nilo"
        ],
        coverImage: "https://www.civitatis.com/f/pois/ChIJq06sCxPtSRQR5dXzr551YPI.jpg"
    },
    {
        id: "kom-ombo",
        name: "Kom Ombo",
        countryId: "egypt",
        latitude: 24.4796,
        longitude: 32.9459,
        walkingDifficulty: "easy",
        safety: 4,
        beautyScore: 7,
        foodScore: 6,
        historyScore: 7,
        temperatureSummer: 44,
        temperatureSpring: 30,
        recommendedHours: 3,
        bestMonths: [
            10,
            11,
            12,
            1,
            2,
            3,
            4
        ],
        description: "Kom Ombo es un pueblo junto al Nilo conocido por su **Templo Doble de Kom Ombo**, de origen ptolemaico y dedicado simultáneamente a los dioses Sobek (cocodrilo) y Haroeris. Junto al templo se encuentra un pequeño museo de cocodrilos momificados.",
        highlights: [
            "Templo Doble de Kom Ombo",
            "Museo del Cocodrilo",
            "Atardecer en el Nilo",
            "Aldea tradicional"
        ],
        coverImage: "https://www.egipto.com/wp-content/uploads/2022/02/templo-kom-ombo-optimized.jpg"
    },
    {
        id: "genove",
        name: "Génova",
        countryId: "italy",
        latitude: 44.4056,
        longitude: 8.9463,
        walkingDifficulty: "moderate",
        safety: 4,
        beautyScore: 9,
        foodScore: 9,
        historyScore: 9,
        temperatureSummer: 30,
        temperatureSpring: 18,
        recommendedHours: 9,
        bestMonths: [
            4,
            5,
            6,
            9,
            10
        ],
        description: "Génova es una histórica ciudad portuaria del norte de Italia y una de las repúblicas marítimas más importantes de la Edad Media. Su casco antiguo es uno de los más grandes de Europa, con callejuelas estrechas (caruggi), palacios renacentistas y un puerto renovado que combina historia y modernidad. Es famosa por su tradición naval y su gastronomía, especialmente el pesto genovés.",
        highlights: [
            "Centro histórico (Caruggi)",
            "Puerto Antiguo (Porto Antico)",
            "Acuario de Génova",
            "Via Garibaldi y Palazzi dei Rolli",
            "Catedral de San Lorenzo"
        ],
        coverImage: "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/%20Genoa_1.jpg"
    },
    {
        id: "messina",
        name: "Messina",
        countryId: "italy",
        latitude: 38.1938,
        longitude: 15.5540,
        walkingDifficulty: "moderate",
        safety: 4,
        beautyScore: 8.5,
        foodScore: 9,
        historyScore: 9,
        temperatureSummer: 34,
        temperatureSpring: 22,
        recommendedHours: 7,
        bestMonths: [
            4,
            5,
            6,
            9,
            10
        ],
        description: "Messina es una ciudad portuaria situada en el estrecho que separa Sicilia de la península italiana. Ha sido un punto estratégico clave durante siglos debido a su ubicación. Aunque fue gravemente dañada por terremotos e incendios históricos, hoy combina patrimonio religioso, arquitectura reconstruida y vistas espectaculares al estrecho de Messina.",
        highlights: [
            "Catedral de Messina",
            "Reloj astronómico del campanario",
            "Puerto de Messina",
            "Estrecho de Messina",
            "Fuente de Orión"
        ],
        coverImage: "https://www.turitalia.com/fotos/ciudades_italia/sicilia-messina-taormina.jpg"
    }
];
}),
"[project]/src/features/itineraries/components/ItineraryDetail.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ItineraryDetail",
    ()=>ItineraryDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ItineraryDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ItineraryDetail() from the server but ItineraryDetail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/itineraries/components/ItineraryDetail.tsx <module evaluation>", "ItineraryDetail");
}),
"[project]/src/features/itineraries/components/ItineraryDetail.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ItineraryDetail",
    ()=>ItineraryDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ItineraryDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ItineraryDetail() from the server but ItineraryDetail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/itineraries/components/ItineraryDetail.tsx", "ItineraryDetail");
}),
"[project]/src/features/itineraries/components/ItineraryDetail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$itineraries$2f$components$2f$ItineraryDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/itineraries/components/ItineraryDetail.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$itineraries$2f$components$2f$ItineraryDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/itineraries/components/ItineraryDetail.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$itineraries$2f$components$2f$ItineraryDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/itineraries/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ItineraryDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$itineraries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/itineraries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/cities.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$itineraries$2f$components$2f$ItineraryDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/itineraries/components/ItineraryDetail.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$itineraries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["itineraries"].map((it)=>({
            id: it.id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const it = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$itineraries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["itineraries"].find((i)=>i.id === id);
    return {
        title: it?.name ?? "Itinerario"
    };
}
async function ItineraryDetailPage({ params }) {
    const { id } = await params;
    const itinerary = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$itineraries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["itineraries"].find((i)=>i.id === id);
    if (!itinerary) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 container-site pt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/itineraries",
                    className: "inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/itineraries/[id]/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        "Todos los itinerarios"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/itineraries/[id]/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/itineraries/[id]/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$itineraries$2f$components$2f$ItineraryDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ItineraryDetail"], {
                itinerary: itinerary,
                cities: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cities"]
            }, void 0, false, {
                fileName: "[project]/src/app/itineraries/[id]/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-sm border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lead",
                            children: "¿Quieres explorar otras rutas?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/itineraries/[id]/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/itineraries",
                            className: "btn-primary",
                            children: "Ver todos los itinerarios"
                        }, void 0, false, {
                            fileName: "[project]/src/app/itineraries/[id]/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/itineraries/[id]/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/itineraries/[id]/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/itineraries/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/itineraries/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__61c3fe3a._.js.map
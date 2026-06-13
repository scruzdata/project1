module.exports = [
"[project]/.next-internal/server/app/map/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
        image: "/images/islas_griegas.webp"
    },
    {
        id: "western-mediterranean",
        name: "Mediterráneo Occidental",
        score: 9.3,
        durationMin: 7,
        durationMax: 10,
        departurePorts: [
            "Barcelona",
            "Roma"
        ],
        destinationIds: [
            "barcelona",
            "palma",
            "marseille",
            "la-spezia",
            "rome",
            "naples"
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
        image: "/images/Mediterraneo.jpg"
    },
    {
        id: "italia-turquia-grecia",
        name: "Italia-Turquia-Grecia",
        score: 9.1,
        durationMin: 0,
        durationMax: 12,
        departurePorts: [
            "Barcelona",
            "Roma"
        ],
        destinationIds: [
            "barcelona",
            "niza",
            "la-spezia",
            "rome",
            "naples",
            "katakolon",
            "Kusadasi",
            "santorini",
            "pireo"
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
        image: "/images/italy_turquia-grecia.png"
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
        image: "/images/marruecos.jpg"
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
        coverImage: "/cities/santorini.webp"
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
        coverImage: "/cities/mykonos.webp"
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
        coverImage: "/cities/rhodes.webp"
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
        coverImage: "/cities/kusadasi.webp"
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
        coverImage: "/cities/malta.webp"
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
        coverImage: "/cities/palma.webp"
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
        coverImage: "/cities/marseille.webp"
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
        coverImage: "/cities/la-spezia.webp"
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
        coverImage: "/cities/rome.webp"
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
        coverImage: "/cities/naples.webp"
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
        coverImage: "/cities/malaga.webp"
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
        coverImage: "/cities/cadiz.webp"
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
        coverImage: "/cities/lisbon.webp"
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
        coverImage: "/cities/porto.webp"
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
        coverImage: "/cities/tangier.webp"
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
        coverImage: "/cities/barcelona.webp"
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
        coverImage: "/cities/nice.webp"
    },
    {
        id: "katakolon",
        name: "Katákolon",
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
        coverImage: "/cities/katakolon.webp"
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
        coverImage: "/cities/piraeus.webp"
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
        coverImage: "/cities/corfu.webp"
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
        coverImage: "/cities/kotor.webp"
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
        coverImage: "/cities/zadar.webp"
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
        coverImage: "/cities/koper.webp"
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
        coverImage: "/cities/ravenna.webp"
    }
];
}),
"[project]/src/features/map/components/MapPageClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "MapPageClient",
    ()=>MapPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MapPageClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MapPageClient() from the server but MapPageClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/map/components/MapPageClient.tsx <module evaluation>", "MapPageClient");
}),
"[project]/src/features/map/components/MapPageClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "MapPageClient",
    ()=>MapPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MapPageClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MapPageClient() from the server but MapPageClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/map/components/MapPageClient.tsx", "MapPageClient");
}),
"[project]/src/features/map/components/MapPageClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$components$2f$MapPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/map/components/MapPageClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$components$2f$MapPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/map/components/MapPageClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$components$2f$MapPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/map/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$itineraries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/itineraries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/cities.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$components$2f$MapPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/map/components/MapPageClient.tsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "Mapa"
};
function MapPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$components$2f$MapPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MapPageClient"], {
        itineraries: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$itineraries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["itineraries"],
        cities: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cities"]
    }, void 0, false, {
        fileName: "[project]/src/app/map/page.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/map/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/map/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5bad63c6._.js.map
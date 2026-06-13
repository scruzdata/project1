module.exports = [
"[project]/.next-internal/server/app/destinations/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
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
        coverImage: "https://blog.vayacruceros.com/wp-content/uploads/2025/10/visitas-en-la-isla-de-mykonos.jpg"
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
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWHVxGtqxt2V3lBc2Buo51cwFtIh7EayHag&s"
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
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdej55dw-0-jkwvyDyRsCOhRPjVKYo8zZwFA&s"
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
        coverImage: "https://cdn.getyourguide.com/img/tour/63c953e1964fa.jpeg/68.jpg"
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
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWyq_eKnfHFkKRUUDfUE5AVSS-kYfHAg1Tg&s"
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
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iap1U1feg3BAw4kctH5AmE9iP8Ph8vWuQg&s"
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
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLs1dmhEcFb2P7ykSDEP0Sn7amwxlOnjlUdQ&s"
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
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4hs2CknS8077-OZ7cKelJrtanRAx-RZMXw&s"
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
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbnYow6xUe5Bt_yQeyFgoTQIsdBlQLmWFXA&s"
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
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcBKjXbC4Xnd_0BAdKjo9hoWtzVmOFW0p_Q&s"
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
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuQ1HRUPmN_o-1qRAIlEjPa8xrCDkERfg7g&s"
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
        coverImage: "https://passporterapp.com/es/blog/eslovenia/que-ver-en-koper/"
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
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zRobJ7Dcoq3qWTc3WAyqCqB9bKw28YJ6Wg&s"
    }
];
}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/features/destinations/components/DestinationCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DestinationCard",
    ()=>DestinationCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-rsc] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
function DestinationCard({ name, country, image, score, highlights, href, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("block h-full group", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "card-photo h-full",
            style: {
                minHeight: "380px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]",
                    style: {
                        backgroundImage: `url(${image})`
                    },
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "photo-overlay",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 right-4 z-10 card-glass px-3 py-1.5 flex items-baseline gap-0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-heading text-xl font-bold text-accent leading-none",
                            children: score.toFixed(1)
                        }, void 0, false, {
                            fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-white/60",
                            children: "/10"
                        }, void 0, false, {
                            fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 bottom-0 z-10 p-6 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-heading text-2xl font-semibold text-white leading-tight",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "h-3.5 w-3.5 text-white/60 shrink-0",
                                            strokeWidth: 1.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-white/70",
                                            children: country
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        highlights.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 text-white/50 mr-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"], {
                                        className: "h-3.5 w-3.5",
                                        strokeWidth: 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                highlights.slice(0, 3).map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-2.5 py-0.5 text-xs text-white/90",
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-200 group-hover:gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Ver ciudad"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/destinations/components/DestinationCard.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/destinations/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DestinationsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/cities.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$DestinationCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/destinations/components/DestinationCard.tsx [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "Destinos"
};
function DestinationsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-sm border-b border-border bg-muted/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow mb-3",
                            children: "Explora"
                        }, void 0, false, {
                            fileName: "[project]/src/app/destinations/page.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "heading-1 mb-4",
                            children: "Destinos"
                        }, void 0, false, {
                            fileName: "[project]/src/app/destinations/page.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lead max-w-2xl",
                            children: "Descubre cada puerto que podrás visitar en tu crucero."
                        }, void 0, false, {
                            fileName: "[project]/src/app/destinations/page.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/destinations/page.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/destinations/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cities"].map((city)=>{
                            const score = Math.round((city.beautyScore + city.foodScore + city.historyScore) / 3 * 10) / 10;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "h-[380px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$DestinationCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DestinationCard"], {
                                    name: city.name,
                                    country: city.countryId,
                                    image: city.coverImage,
                                    score: score,
                                    highlights: city.highlights,
                                    href: `/cities/${city.id}`,
                                    className: "h-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/destinations/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 19
                                }, this)
                            }, city.id, false, {
                                fileName: "[project]/src/app/destinations/page.tsx",
                                lineNumber: 29,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/destinations/page.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/destinations/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/destinations/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/destinations/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/destinations/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3dc626f1._.js.map
module.exports = [
"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
            "santorini",
            "mykonos",
            "rhodes",
            "kusadasi",
            "malta"
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
        id: "iberia-morocco",
        name: "Iberia y Marruecos",
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
    }
];
}),
"[project]/src/features/home/components/HeroSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-rsc] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-rsc] (ecmascript) <export default as Compass>");
;
;
;
function HeroSection({ eyebrow = "Regalo Jubilación", heading = "El viaje que siempre habéis soñado", lead = "Un crucero diseñado para dos. Elegante, relajado y lleno de momentos que recordaréis siempre.", primaryCta = {
    label: "Ver rutas",
    href: "/itineraries"
}, secondaryCta = {
    label: "Explorar destinos",
    href: "/destinations"
}, backgroundImage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 hero-gradient bg-cover bg-center bg-no-repeat",
                style: backgroundImage ? {
                    backgroundImage: `url(${backgroundImage})`
                } : undefined,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/HeroSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    background: "linear-gradient(to bottom, rgba(9,15,26,0.72) 0%, rgba(9,15,26,0.50) 50%, rgba(9,15,26,0.90) 100%)"
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/HeroSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                className: "absolute top-16 right-10 w-28 h-28 text-accent opacity-[0.08] pointer-events-none hidden lg:block",
                strokeWidth: 1,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/HeroSection.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"], {
                className: "absolute bottom-24 left-8 w-20 h-20 text-accent opacity-[0.08] pointer-events-none hidden lg:block",
                strokeWidth: 1,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/HeroSection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container-content flex flex-col items-center text-center gap-8 py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent backdrop-blur-sm",
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/HeroSection.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "heading-1 text-white max-w-3xl lg:text-[3.75rem]",
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/HeroSection.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "lead text-white/80 max-w-xl",
                        children: lead
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/HeroSection.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-4 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: primaryCta.href,
                                className: "btn-gold",
                                children: primaryCta.label
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/HeroSection.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: secondaryCta.href,
                                className: "btn btn-md border-2 border-white/60 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
                                children: secondaryCta.label
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/HeroSection.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/home/components/HeroSection.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/HeroSection.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-32 pointer-events-none",
                style: {
                    background: "linear-gradient(to top, hsl(var(--background)), transparent)"
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/HeroSection.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/home/components/HeroSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/home/components/TributeSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TributeSection",
    ()=>TributeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-rsc] (ecmascript) <export default as Heart>");
;
;
;
function TributeSection({ imageSrc, imageAlt = "Nuestra familia" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section border-t border-border bg-muted/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-site",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-7 order-2 lg:order-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-[0.15em]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                className: "w-3.5 h-3.5 fill-current",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                                lineNumber: 22,
                                                columnNumber: 17
                                            }, this),
                                            "Con todo nuestro amor"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "heading-2",
                                        children: "Por todo lo que habéis dado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-px bg-accent",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 text-muted-foreground leading-relaxed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Lleváis toda la vida construyendo algo más valioso que cualquier destino: un hogar lleno de amor, esfuerzo y entrega. Cada madrugada, cada sacrificio, cada “no os preocupéis” ha sido un ladrillo en la familia que hoy somos."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Nunca pedisteis nada a cambio. Pero ahora, después de tanto tiempo dedicado a los demás, ha llegado el momento de que el mundo os devuelva algo a vosotros. Tiempo para despertar sin prisas, para ver el horizonte desde cubierta, para disfrutar juntos sin más agenda que la felicidad."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Sabemos que ahora estais en un momento delicado por temas médicos operaciones de rodilla, etc.... asique aun no os hemos comprado nada, esto es un recordatorio para que mireis con tranquilidad a donde os gustaria ir y ver. Cuando el tiempo, medicos y el fisico os acompañe solo teneis que decirnos que quereis y nosotros nos encargaremos todo."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-foreground",
                                        children: "Os lo merecéis. Todo esto y mucho más."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-heading text-lg text-accent italic",
                                children: "“El mejor viaje es el que aún no habéis vivido.”"
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/home/components/TributeSection.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "order-1 lg:order-2",
                        children: imageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/40",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: imageSrc,
                                alt: imageAlt,
                                fill: true,
                                className: "object-cover",
                                sizes: "(max-width: 1024px) 100vw, 50vw"
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                lineNumber: 63,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/home/components/TributeSection.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-[4/3] rounded-2xl border-2 border-dashed border-border bg-card flex flex-col items-center justify-center gap-4 text-muted-foreground px-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-full bg-muted flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-6 h-6 text-accent/60",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-foreground/60",
                                            children: "Añade una foto familiar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs leading-relaxed",
                                            children: [
                                                "Pasa la prop",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "px-1.5 py-0.5 rounded bg-muted font-mono text-[11px]",
                                                    children: "imageSrc"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                "a ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "px-1.5 py-0.5 rounded bg-muted font-mono text-[11px]",
                                                    children: "TributeSection"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 23
                                                }, this),
                                                " en",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "px-1.5 py-0.5 rounded bg-muted font-mono text-[11px]",
                                                    children: "page.tsx"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/home/components/TributeSection.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/home/components/TributeSection.tsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/components/TributeSection.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/TributeSection.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/TributeSection.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/home/components/TributeSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$itineraries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/itineraries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/cities.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/components/HeroSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$TributeSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/home/components/TributeSection.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: "Regalo Jubilación"
};
function HomePage() {
    const featured = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$itineraries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["itineraries"]
    ].sort((a, b)=>b.score - a.score).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeroSection"], {
                backgroundImage: "/images/hero.jpg"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$home$2f$components$2f$TributeSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TributeSection"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site space-y-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow mb-2",
                                    children: "Rutas destacadas"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "heading-2",
                                    children: "Los mejores itinerarios"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-3 gap-6",
                            children: featured.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/itineraries/${it.id}`,
                                    className: "card overflow-hidden group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105",
                                            style: {
                                                backgroundImage: `url(${it.image})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-heading text-base font-semibold",
                                                    children: it.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: [
                                                        it.durationMin,
                                                        "–",
                                                        it.durationMax,
                                                        " noches · ",
                                                        it.departurePorts[0]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, it.id, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section border-t border-border bg-muted/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site space-y-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow mb-2",
                                    children: "Destinos"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "heading-2",
                                    children: "Lugares que os esperan"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cities"].slice(0, 8).map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/cities/${city.id}`,
                                    className: "card px-4 py-2 text-sm font-medium hover:ring-1 hover:ring-accent/40 transition-all duration-200",
                                    children: city.name
                                }, city.id, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/destinations",
                            className: "inline-block text-sm text-accent hover:underline",
                            children: "Ver todos los destinos →"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dff1e82f._.js.map
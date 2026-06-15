module.exports = [
"[project]/.next-internal/server/app/cities/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/data/dayPlans.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dayPlans",
    ()=>dayPlans
]);
const dayPlans = [
    {
        cityId: "santorini",
        activities: [
            {
                time: "09:00",
                title: "Pueblo de Oia",
                description: "Paseo por las calles empedradas del pueblo más pintoresco de Santorini, con sus casas blancas y cúpulas azules sobre la caldera.",
                durationMinutes: 120,
                category: "walk"
            },
            {
                time: "11:00",
                title: "Miradores de la caldera",
                description: "Contemplar las vistas panorámicas del volcán y el mar Egeo desde los puntos más fotografiados de la isla.",
                durationMinutes: 60,
                category: "viewpoint"
            },
            {
                time: "12:30",
                title: "Almuerzo en Fira",
                description: "Gastronomía griega tradicional con pulpo fresco, ensalada griega y vino local frente al mar.",
                durationMinutes: 90,
                category: "food"
            },
            {
                time: "14:00",
                title: "Exploración de Fira",
                description: "Recorrer la animada capital de la isla: tiendas, callejuelas blancas y la terraza del museo con vistas al cráter.",
                durationMinutes: 90,
                category: "walk"
            },
            {
                time: "15:30",
                title: "Yacimiento de Akrotiri",
                description: "La «Pompeya griega»: ciudad minoica conservada bajo las cenizas volcánicas hace 3.600 años.",
                durationMinutes: 90,
                category: "museum"
            }
        ]
    },
    {
        cityId: "mykonos",
        activities: [
            {
                time: "09:00",
                title: "Mykonos Town (Chora)",
                description: "Perderse por los callejones de la capital, diseñados para confundir a los piratas, llenos de bougainvillas y tiendas locales.",
                durationMinutes: 75,
                category: "walk"
            },
            {
                time: "10:15",
                title: "Molinos de viento",
                description: "Los siete molinos blancos sobre la colina son el símbolo de la isla; las vistas al puerto son impresionantes por la mañana.",
                durationMinutes: 45,
                category: "viewpoint"
            },
            {
                time: "11:00",
                title: "Little Venice",
                description: "Pasear por los balcones de madera de colores que se asoman al mar en el barrio más romántico y fotogénico de la isla.",
                durationMinutes: 60,
                category: "walk"
            },
            {
                time: "12:30",
                title: "Almuerzo en el puerto",
                description: "Marisco fresco, langosta y el famoso kopanisti (queso picante) en alguno de los restaurantes junto al agua.",
                durationMinutes: 90,
                category: "food"
            },
            {
                time: "14:30",
                title: "Iglesia Paraportiani",
                description: "Una de las iglesias más fotografiadas de Grecia: cinco capillas blancas fusionadas en una sola estructura única.",
                durationMinutes: 30,
                category: "walk"
            }
        ]
    },
    {
        cityId: "rhodes",
        activities: [
            {
                time: "09:00",
                title: "Puertas de la Ciudad Vieja",
                description: "Entrar por la imponente Puerta de Amboise y recorrer las murallas medievales que rodean la ciudad amurallada más grande de Europa.",
                durationMinutes: 60,
                category: "walk"
            },
            {
                time: "10:00",
                title: "Palacio del Gran Maestre",
                description: "Sede de los Caballeros de San Juan: castillo del siglo XIV con mosaicos romanos y colecciones medievales únicas.",
                durationMinutes: 90,
                category: "museum"
            },
            {
                time: "12:00",
                title: "Almuerzo en el casco antiguo",
                description: "Cocina rodia con platos como melekouni, pitaroudia y vinos locales bajo las arquerías medievales.",
                durationMinutes: 90,
                category: "food"
            },
            {
                time: "13:30",
                title: "Calle de los Caballeros",
                description: "La calle mejor conservada de la Edad Media: adoquines originales, mansiones de piedra y silencio solemne.",
                durationMinutes: 60,
                category: "walk"
            },
            {
                time: "15:00",
                title: "Acrópolis de Lindos",
                description: "Subida a la colina para ver el templo dórico del siglo V a.C. con vistas panorámicas a las dos bahías.",
                durationMinutes: 120,
                category: "viewpoint"
            }
        ]
    },
    {
        cityId: "kusadasi",
        activities: [
            {
                time: "09:00",
                title: "Ruinas de Éfeso",
                description: "Una de las ciudades más importantes del Imperio Romano: la gran avenida del Mármol, el Gran Teatro y el Ágora.",
                durationMinutes: 150,
                category: "museum"
            },
            {
                time: "11:30",
                title: "Biblioteca de Celso",
                description: "La fachada más fotografiada de Éfeso: dos pisos de columnas corintias que guardaban 12.000 pergaminos.",
                durationMinutes: 30,
                category: "viewpoint"
            },
            {
                time: "12:30",
                title: "Almuerzo en el mercado local",
                description: "Kebabs, meze y baklava entre especias y tejidos de colores en los puestos del mercado cubierto de Kuşadası.",
                durationMinutes: 75,
                category: "food"
            },
            {
                time: "14:00",
                title: "Castillo de la Paloma",
                description: "Fortaleza otomana sobre la isla del puerto, ahora peatonal, con rincones y vistas al Egeo desde sus murallas.",
                durationMinutes: 60,
                category: "walk"
            },
            {
                time: "15:15",
                title: "Gran Bazar",
                description: "Últimas compras entre alfombras, cerámica de Iznik y aceites de oliva antes de regresar al crucero.",
                durationMinutes: 60,
                category: "shopping"
            }
        ]
    },
    {
        cityId: "malta",
        activities: [
            {
                time: "09:00",
                title: "Co-Catedral de San Juan",
                description: "Interior barroco de oro deslumbrante: el suelo entero cubierto de epitafios de mármol y el famoso Caravaggio «La decapitación».",
                durationMinutes: 75,
                category: "church"
            },
            {
                time: "10:30",
                title: "Jardines Upper Barrakka",
                description: "El mejor mirador de La Valeta: vistas al Gran Puerto, a los Tres Fuertes y al amanecer sobre el Mediterráneo.",
                durationMinutes: 45,
                category: "viewpoint"
            },
            {
                time: "11:30",
                title: "Almuerzo maltés",
                description: "Probar el pastizzi (hojaldre relleno de ricotta), los ravjul y el vino Maltese en una taberna del casco antiguo.",
                durationMinutes: 90,
                category: "food"
            },
            {
                time: "13:30",
                title: "Museo de la Guerra",
                description: "Historia de la isla durante la Segunda Guerra Mundial, las operaciones navales y el asedio heroico de Malta.",
                durationMinutes: 60,
                category: "museum"
            },
            {
                time: "15:00",
                title: "Ciudad silenciosa de Mdina",
                description: "Excursión a la antigua capital medieval amurallada: palazzi barrocos, calles desiertas y vistas a toda la isla.",
                durationMinutes: 90,
                category: "walk"
            }
        ]
    },
    {
        cityId: "palma",
        activities: [
            {
                time: "09:30",
                title: "Catedral La Seu",
                description: "Una de las catedrales góticas más grandes de Europa, con la rosetón mayor del mundo y el polémico baldaquino de Gaudí.",
                durationMinutes: 75,
                category: "church"
            },
            {
                time: "11:00",
                title: "Barrio antiguo y Baños Árabes",
                description: "Callejuelas del centro histórico con palacios renacentistas y los únicos baños árabes conservados en Mallorca.",
                durationMinutes: 75,
                category: "walk"
            },
            {
                time: "12:30",
                title: "Mercado del Olivar",
                description: "Tapas mallorquinas: pa amb oli, sobrasada, queso local y ensaimada, en el mercado más auténtico de la ciudad.",
                durationMinutes: 90,
                category: "food"
            },
            {
                time: "14:15",
                title: "Castillo de Bellver",
                description: "Único castillo circular medieval de España; las vistas a la bahía de Palma y al casco antiguo son espectaculares.",
                durationMinutes: 75,
                category: "viewpoint"
            },
            {
                time: "15:45",
                title: "Paseo marítimo",
                description: "Última caminata por el Paseo Marítimo junto al puerto deportivo y los yates antes de regresar al crucero.",
                durationMinutes: 60,
                category: "walk"
            }
        ]
    },
    {
        cityId: "marseille",
        activities: [
            {
                time: "09:00",
                title: "Vieux-Port",
                description: "El corazón palpitante de Marsella: mercado de pescadores, ferrys a las Calanques y el ambiente más auténtico de la ciudad.",
                durationMinutes: 75,
                category: "walk"
            },
            {
                time: "10:30",
                title: "Notre-Dame de la Garde",
                description: "Subida a la basílica que preside la ciudad desde 147 metros: vistas de 360° sobre el puerto, las islas y los Alpes.",
                durationMinutes: 90,
                category: "viewpoint"
            },
            {
                time: "12:30",
                title: "Bouillabaisse provenzal",
                description: "El plato emblema de Marsella: sopa de cinco pescados de roca, con rouille y pan tostado, en un restaurante del Vieux-Port.",
                durationMinutes: 90,
                category: "food"
            },
            {
                time: "14:30",
                title: "MuCEM",
                description: "El Museo de las Civilizaciones de Europa y el Mediterráneo: arquitectura contemporánea y exposiciones sobre el mundo mediterráneo.",
                durationMinutes: 90,
                category: "museum"
            }
        ]
    },
    {
        cityId: "la-spezia",
        activities: [
            {
                time: "09:00",
                title: "Tren a las Cinque Terre",
                description: "En solo 12 minutos el tren conecta La Spezia con Riomaggiore, primera de las cinco aldeas pintadas sobre los acantilados.",
                durationMinutes: 30,
                category: "walk"
            },
            {
                time: "09:30",
                title: "Riomaggiore y Manarola",
                description: "Dos de las aldeas más fotogénicas: callejuelas de colores, barcos pintados y escalinatas que bajan hasta el mar.",
                durationMinutes: 90,
                category: "viewpoint"
            },
            {
                time: "11:30",
                title: "Corniglia y Vernazza",
                description: "Tren hasta Vernazza, la aldea más bonita: su pequeño puerto natural y la torre medieval son perfectos para fotografiar.",
                durationMinutes: 90,
                category: "walk"
            },
            {
                time: "13:30",
                title: "Almuerzo en Monterosso",
                description: "Pasta al pesto, anchoas marinadas y limoncino en Monterosso, la única aldea con playa de arena del conjunto.",
                durationMinutes: 90,
                category: "food"
            }
        ]
    },
    {
        cityId: "rome",
        activities: [
            {
                time: "08:30",
                title: "Coliseo y Foro Romano",
                description: "El anfiteatro más grande del Imperio Romano, con capacidad para 80.000 espectadores, y las ruinas del centro político de Roma.",
                durationMinutes: 150,
                category: "museum"
            },
            {
                time: "11:30",
                title: "Almuerzo en el Trastevere",
                description: "Cacio e pepe, supplì al teléfono y tiramisú en una trattoria del barrio más tradicional de la ciudad eterna.",
                durationMinutes: 90,
                category: "food"
            },
            {
                time: "13:30",
                title: "Museos Vaticanos y Capilla Sixtina",
                description: "La colección más importante de arte occidental: el techo de la Capilla Sixtina pintado por Miguel Ángel sigue siendo un milagro.",
                durationMinutes: 150,
                category: "museum"
            },
            {
                time: "16:30",
                title: "Fontana di Trevi",
                description: "Lanzar una moneda y pedir un deseo en la fuente barroca más famosa del mundo: el lugar más romántico de Roma.",
                durationMinutes: 45,
                category: "viewpoint"
            },
            {
                time: "17:30",
                title: "Piazza Navona",
                description: "La plaza más elegante de Roma: la fuente de los Cuatro Ríos de Bernini, artistas callejeros y gelatería al atardecer.",
                durationMinutes: 60,
                category: "walk"
            }
        ]
    },
    {
        cityId: "naples",
        activities: [
            {
                time: "08:30",
                title: "Pompeya",
                description: "La ciudad romana congelada por el Vesubio en el año 79 d.C.: calles intactas, frescos, tabernas y casas de 2.000 años.",
                durationMinutes: 180,
                category: "museum"
            },
            {
                time: "12:00",
                title: "Pizza napoletana auténtica",
                description: "La pizza más famosa del mundo en su ciudad natal: masa suave, tomate San Marzano y mozzarella di bufala.",
                durationMinutes: 75,
                category: "food"
            },
            {
                time: "13:30",
                title: "Centro Histórico (Spaccanapoli)",
                description: "La calle que parte Nápoles en dos, con iglesias barrocas, librerías antiquísimas y el caos vibrante de la ciudad.",
                durationMinutes: 90,
                category: "walk"
            },
            {
                time: "15:30",
                title: "Castel Nuovo",
                description: "Fortaleza angevina del siglo XIII junto al puerto: su arco de triunfo renacentista es una obra maestra de la escultura.",
                durationMinutes: 60,
                category: "viewpoint"
            }
        ]
    },
    {
        cityId: "malaga",
        activities: [
            {
                time: "09:00",
                title: "Alcazaba de Málaga",
                description: "Fortaleza palatina árabe del siglo XI sobre la ciudad: jardines con agua, arcos de herradura y vistas al puerto.",
                durationMinutes: 90,
                category: "museum"
            },
            {
                time: "10:45",
                title: "Museo Picasso",
                description: "Más de 200 obras del malagueño más universal: pinturas, esculturas y cerámica en un palacio renacentista del centro.",
                durationMinutes: 90,
                category: "museum"
            },
            {
                time: "12:30",
                title: "Tapas en el casco antiguo",
                description: "Espetos de sardinas, boquerones al limón y gambas al pil-pil: la gastronomía andaluza en su versión más auténtica.",
                durationMinutes: 90,
                category: "food"
            },
            {
                time: "14:30",
                title: "Catedral y calle Larios",
                description: "Catedral inacabada del siglo XVI conocida como «la Manquita» y el paseo más elegante de la ciudad.",
                durationMinutes: 60,
                category: "walk"
            },
            {
                time: "15:45",
                title: "Muelle Uno",
                description: "El moderno paseo portuario con tiendas, terrazas y vistas al Mediterráneo: el epílogo perfecto del día.",
                durationMinutes: 60,
                category: "walk"
            }
        ]
    },
    {
        cityId: "cadiz",
        activities: [
            {
                time: "09:30",
                title: "Casco Antiguo",
                description: "Una de las ciudades más antiguas de Europa occidental: callejuelas de pescadores, plazas porticadas y azoteas con vistas al océano.",
                durationMinutes: 75,
                category: "walk"
            },
            {
                time: "11:00",
                title: "Catedral de Cádiz",
                description: "La cúpula dorada que preside el perfil de la ciudad desde el mar; la cripta alberga los restos del compositor Manuel de Falla.",
                durationMinutes: 60,
                category: "church"
            },
            {
                time: "12:15",
                title: "Mercado Central",
                description: "El mercado gaditano más grande: atún rojo, mariscos, tortillitas de camarones y el ambiente más vivo de la ciudad.",
                durationMinutes: 75,
                category: "market"
            },
            {
                time: "14:00",
                title: "Torre Tavira",
                description: "La torre vigía más alta de Cádiz: cámara oscura y vistas panorámicas sobre los 160 torreones que salpican la ciudad.",
                durationMinutes: 60,
                category: "viewpoint"
            },
            {
                time: "15:30",
                title: "Playa de La Caleta",
                description: "La playa más antigua e íntima de Cádiz, abrazada entre dos castillos, perfecta para el paseo final del día.",
                durationMinutes: 60,
                category: "walk"
            }
        ]
    },
    {
        cityId: "lisbon",
        activities: [
            {
                time: "09:00",
                title: "Barrio de Alfama",
                description: "El barrio más antiguo de Lisboa: laberinto de callejuelas moriscas, casas con azulejos y el Fado que sale de las puertas.",
                durationMinutes: 90,
                category: "walk"
            },
            {
                time: "10:30",
                title: "Castillo de São Jorge",
                description: "Fortaleza medieval en lo alto de la colina más alta de Lisboa: vistas de 360° sobre la ciudad, el Tajo y el Atlántico.",
                durationMinutes: 75,
                category: "viewpoint"
            },
            {
                time: "12:00",
                title: "Almuerzo con bacalhau",
                description: "Bacalhau à brás, pastéis de nata y vinho verde en una tasca del centro histórico.",
                durationMinutes: 90,
                category: "food"
            },
            {
                time: "13:45",
                title: "Torre de Belém",
                description: "Joya manuelina del siglo XVI en la orilla del Tajo: símbolo de la Era de los Descubrimientos y de toda Portugal.",
                durationMinutes: 60,
                category: "walk"
            },
            {
                time: "15:00",
                title: "Monasterio de los Jerónimos",
                description: "Obra maestra del gótico manuelino financiada con las riquezas de las especias: el orgullo arquitectónico de Portugal.",
                durationMinutes: 75,
                category: "church"
            }
        ]
    },
    {
        cityId: "porto",
        activities: [
            {
                time: "09:30",
                title: "Barrio de Ribeira",
                description: "El frente fluvial de Oporto: casas de colores apiladas sobre el río Duero, terrazas de café y barcos rabelo tradicionales.",
                durationMinutes: 75,
                category: "walk"
            },
            {
                time: "11:00",
                title: "Catedral y Puente Dom Luís",
                description: "Catedral románica y paseo a pie por el nivel superior del puente de hierro con vistas panorámicas sobre el Duero.",
                durationMinutes: 75,
                category: "viewpoint"
            },
            {
                time: "12:30",
                title: "Francesinha y vino de Oporto",
                description: "El sándwich más indulgente de Portugal, regado con el primer vino de Oporto en una bodega centenaria de Gaia.",
                durationMinutes: 90,
                category: "food"
            },
            {
                time: "14:15",
                title: "Librería Lello",
                description: "Una de las librerías más bellas del mundo: escalera de caoba tallada que inspiró a J.K. Rowling para Hogwarts.",
                durationMinutes: 45,
                category: "shopping"
            },
            {
                time: "15:15",
                title: "Bodegas de vino de Oporto",
                description: "Cata guiada en una bodega de Vila Nova de Gaia con tawny, ruby y vintage: el gran tesoro líquido de Portugal.",
                durationMinutes: 90,
                category: "food"
            }
        ]
    },
    {
        cityId: "tangier",
        activities: [
            {
                time: "09:00",
                title: "Medina de Tánger",
                description: "Laberinto de callejuelas blancas y azules: tiendas de especias, perfumes de rosa y artesanía bereber a cada paso.",
                durationMinutes: 90,
                category: "walk"
            },
            {
                time: "10:30",
                title: "Gran Zoco",
                description: "La plaza central de la medina, corazón comercial y social de Tánger: telas, especias y el pulso de la ciudad.",
                durationMinutes: 45,
                category: "market"
            },
            {
                time: "11:30",
                title: "Kasbah y sus vistas",
                description: "La ciudadela que corona Tánger: murallas del siglo XVII, el Museo de la Kasbah y vistas al Estrecho de Gibraltar.",
                durationMinutes: 60,
                category: "viewpoint"
            },
            {
                time: "13:00",
                title: "Almuerzo marroquí",
                description: "Tajín de cordero, cuscús con siete verduras y té de menta en un restaurante de la Kasbah con terraza al Estrecho.",
                durationMinutes: 90,
                category: "food"
            }
        ]
    }
];
}),
"[project]/data/pointsOfInterest.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pointsOfInterest",
    ()=>pointsOfInterest
]);
const pointsOfInterest = [
    // ── Santorini ──────────────────────────────────────────────────
    {
        id: "santorini-oia",
        cityId: "santorini",
        name: "Pueblo de Oia",
        category: "landmark",
        description: "El pueblo más famoso de Grecia: casas cicládicas blancas, cúpulas azules y los mejores atardeceres del Mediterráneo.",
        durationMinutes: 120,
        mustSee: true
    },
    {
        id: "santorini-caldera",
        cityId: "santorini",
        name: "Caldera de Santorini",
        category: "viewpoint",
        description: "El cráter volcánico sumergido que da forma a la isla: vistas desde el borde de 300 metros sobre el nivel del mar.",
        durationMinutes: 60,
        mustSee: true
    },
    {
        id: "santorini-akrotiri",
        cityId: "santorini",
        name: "Yacimiento de Akrotiri",
        category: "ruins",
        description: "Ciudad minoica sepultada por cenizas volcánicas hace 3.600 años; conserva frescos, vasijas y calles completas.",
        durationMinutes: 90,
        mustSee: false
    },
    {
        id: "santorini-kamari",
        cityId: "santorini",
        name: "Playa de Kamari",
        category: "beach",
        description: "Playa de arena volcánica negra al pie del acantilado de Mesa Vouno, con aguas transparentes y ambiente relajado.",
        durationMinutes: 120,
        mustSee: false
    },
    // ── Mykonos ────────────────────────────────────────────────────
    {
        id: "mykonos-windmills",
        cityId: "mykonos",
        name: "Molinos de viento",
        category: "landmark",
        description: "Los siete molinos blancos sobre la colina de Kato Mili son el icono más fotografiado de la isla.",
        durationMinutes: 45,
        mustSee: true
    },
    {
        id: "mykonos-little-venice",
        cityId: "mykonos",
        name: "Little Venice",
        category: "viewpoint",
        description: "Balcones de madera de colores que se proyectan sobre el Egeo: el barrio más romántico y fotogénico de Mykonos.",
        durationMinutes: 60,
        mustSee: true
    },
    {
        id: "mykonos-paraportiani",
        cityId: "mykonos",
        name: "Iglesia Paraportiani",
        category: "church",
        description: "Cinco capillas blancas fusionadas en una sola estructura única; se considera la iglesia más fotografiada de Grecia.",
        durationMinutes: 30,
        mustSee: false
    },
    {
        id: "mykonos-delos",
        cityId: "mykonos",
        name: "Isla de Delos",
        category: "ruins",
        description: "Isla sagrada de la mitología griega y Patrimonio de la UNESCO: ruinas del santuario de Apolo a 30 minutos en barco.",
        durationMinutes: 180,
        mustSee: false
    },
    // ── Rhodes ─────────────────────────────────────────────────────
    {
        id: "rhodes-palace",
        cityId: "rhodes",
        name: "Palacio del Gran Maestre",
        category: "museum",
        description: "Castillo cruzado del siglo XIV con torres, mosaicos romanos y salas que reconstruyen la vida medieval en la isla.",
        durationMinutes: 90,
        mustSee: true
    },
    {
        id: "rhodes-knights-street",
        cityId: "rhodes",
        name: "Calle de los Caballeros",
        category: "landmark",
        description: "La calle medieval mejor conservada de Europa: adoquines originales, mansiones de piedra de cada nación de los Caballeros.",
        durationMinutes: 45,
        mustSee: true
    },
    {
        id: "rhodes-lindos",
        cityId: "rhodes",
        name: "Acrópolis de Lindos",
        category: "ruins",
        description: "Templo dórico del siglo V a.C. encaramado en un acantilado con vistas a dos bahías cristalinas.",
        durationMinutes: 120,
        mustSee: false
    },
    {
        id: "rhodes-mandraki",
        cityId: "rhodes",
        name: "Puerto de Mandraki",
        category: "landmark",
        description: "Legendario puerto donde se supone que se alzó el Coloso de Rodas; hoy dos ciervos de bronce marcan su entrada.",
        durationMinutes: 30,
        mustSee: false
    },
    // ── Kuşadası ───────────────────────────────────────────────────
    {
        id: "kusadasi-ephesus",
        cityId: "kusadasi",
        name: "Ruinas de Éfeso",
        category: "ruins",
        description: "Una de las ciudades romanas mejor conservadas del mundo: la gran avenida del Mármol, teatro para 24.000 espectadores y termas.",
        durationMinutes: 180,
        mustSee: true
    },
    {
        id: "kusadasi-library",
        cityId: "kusadasi",
        name: "Biblioteca de Celso",
        category: "landmark",
        description: "La fachada más impresionante de Éfeso: dos pisos de columnas corintias que albergaron 12.000 pergaminos en el año 117 d.C.",
        durationMinutes: 30,
        mustSee: true
    },
    {
        id: "kusadasi-virgin-mary",
        cityId: "kusadasi",
        name: "Casa de la Virgen María",
        category: "church",
        description: "Capilla donde se cree que vivió y murió la Virgen María; lugar de peregrinación reconocido por el Vaticano.",
        durationMinutes: 60,
        mustSee: false
    },
    {
        id: "kusadasi-bazaar",
        cityId: "kusadasi",
        name: "Gran Bazar",
        category: "market",
        description: "Alfombras, cuero, especias y cerámica de Iznik en los puestos cubiertos del mercado más visitado de la ciudad.",
        durationMinutes: 60,
        mustSee: false
    },
    // ── Malta ──────────────────────────────────────────────────────
    {
        id: "malta-cathedral",
        cityId: "malta",
        name: "Co-Catedral de San Juan",
        category: "church",
        description: "Interior barroco de oro con el suelo de mármol cubierto de epitafios y el Caravaggio más grande jamás pintado.",
        durationMinutes: 75,
        mustSee: true
    },
    {
        id: "malta-barrakka",
        cityId: "malta",
        name: "Jardines Upper Barrakka",
        category: "viewpoint",
        description: "El mejor mirador de La Valeta: vistas sobre el Gran Puerto, los Tres Fuertes y los bastiones del siglo XVI.",
        durationMinutes: 45,
        mustSee: true
    },
    {
        id: "malta-mdina",
        cityId: "malta",
        name: "Mdina, la Ciudad Silenciosa",
        category: "landmark",
        description: "Antigua capital medieval amurallada: palazzi barrocos, calles desiertas y vistas a toda la isla desde sus bastiones.",
        durationMinutes: 90,
        mustSee: false
    },
    {
        id: "malta-war-museum",
        cityId: "malta",
        name: "Museo de la Guerra",
        category: "museum",
        description: "Historia del heroico sitio de Malta en la Segunda Guerra Mundial y las operaciones navales que decidieron el Mediterráneo.",
        durationMinutes: 60,
        mustSee: false
    },
    // ── Palma ──────────────────────────────────────────────────────
    {
        id: "palma-cathedral",
        cityId: "palma",
        name: "Catedral La Seu",
        category: "church",
        description: "Una de las catedrales góticas más grandes de Europa con la mayor rosetón del mundo y el baldaquino intervenido por Gaudí.",
        durationMinutes: 75,
        mustSee: true
    },
    {
        id: "palma-bellver",
        cityId: "palma",
        name: "Castillo de Bellver",
        category: "landmark",
        description: "Único castillo circular medieval de España, en colina forestal con vistas panorámicas a la bahía de Palma.",
        durationMinutes: 75,
        mustSee: true
    },
    {
        id: "palma-arab-baths",
        cityId: "palma",
        name: "Baños Árabes",
        category: "museum",
        description: "Los únicos baños árabes conservados en Mallorca: sala de vapor del siglo X con columnas de distintas épocas.",
        durationMinutes: 30,
        mustSee: false
    },
    {
        id: "palma-old-quarter",
        cityId: "palma",
        name: "Casco Antiguo",
        category: "landmark",
        description: "Callejuelas del centro histórico con palacios renacentistas, tiendas de diseño local y patios interiores escondidos.",
        durationMinutes: 75,
        mustSee: false
    },
    // ── Marseille ──────────────────────────────────────────────────
    {
        id: "marseille-vieux-port",
        cityId: "marseille",
        name: "Vieux-Port",
        category: "landmark",
        description: "El puerto más antiguo de Francia: mercado de pescadores al amanecer, barcas de colores y el aroma de la provenza.",
        durationMinutes: 75,
        mustSee: true
    },
    {
        id: "marseille-notre-dame",
        cityId: "marseille",
        name: "Notre-Dame de la Garde",
        category: "viewpoint",
        description: "«La Bonne Mère»: basílica a 147 metros de altura con vistas de 360° sobre el puerto, las islas y los Alpes.",
        durationMinutes: 90,
        mustSee: true
    },
    {
        id: "marseille-mucem",
        cityId: "marseille",
        name: "MuCEM",
        category: "museum",
        description: "Museo de las Civilizaciones de Europa y el Mediterráneo: arquitectura contemporánea en un antiguo fuerte portuario.",
        durationMinutes: 90,
        mustSee: false
    },
    {
        id: "marseille-calanques",
        cityId: "marseille",
        name: "Calanques",
        category: "viewpoint",
        description: "Fiordos de piedra caliza blanca con aguas turquesas; accesibles en barco desde el Vieux-Port en 30 minutos.",
        durationMinutes: 120,
        mustSee: false
    },
    // ── La Spezia ──────────────────────────────────────────────────
    {
        id: "la-spezia-riomaggiore",
        cityId: "la-spezia",
        name: "Riomaggiore",
        category: "landmark",
        description: "La aldea más meridional de las Cinque Terre: casas de colores sobre el puerto y el sendero de la Vía dell'Amore.",
        durationMinutes: 75,
        mustSee: true
    },
    {
        id: "la-spezia-vernazza",
        cityId: "la-spezia",
        name: "Vernazza",
        category: "viewpoint",
        description: "Considerada la más bonita de las cinco aldeas: su puerto natural, la torre medieval y el mirador desde la colina.",
        durationMinutes: 75,
        mustSee: true
    },
    {
        id: "la-spezia-monterosso",
        cityId: "la-spezia",
        name: "Monterosso al Mare",
        category: "beach",
        description: "La única aldea de las Cinque Terre con playa de arena; también la de gastronomía más variada y limoncino artesanal.",
        durationMinutes: 90,
        mustSee: false
    },
    {
        id: "la-spezia-portovenere",
        cityId: "la-spezia",
        name: "Portovenere",
        category: "landmark",
        description: "Puerto medieval con casas-torre de colores, la iglesia de San Pietro sobre el promontorio rocoso y la Grotta Arpaia.",
        durationMinutes: 90,
        mustSee: false
    },
    // ── Rome ───────────────────────────────────────────────────────
    {
        id: "rome-colosseum",
        cityId: "rome",
        name: "Coliseo",
        category: "ruins",
        description: "El anfiteatro más grande del mundo: 2.000 años de historia, gladiadores y espectáculos para 80.000 espectadores.",
        durationMinutes: 90,
        mustSee: true
    },
    {
        id: "rome-vatican",
        cityId: "rome",
        name: "Capilla Sixtina y Museos Vaticanos",
        category: "museum",
        description: "La mayor colección de arte occidental, coronada por el techo de la Capilla Sixtina pintado por Miguel Ángel.",
        durationMinutes: 150,
        mustSee: true
    },
    {
        id: "rome-trevi",
        cityId: "rome",
        name: "Fontana di Trevi",
        category: "landmark",
        description: "La fuente más famosa del mundo: 26 metros de mármol barroco donde lanzar una moneda asegura el regreso a Roma.",
        durationMinutes: 30,
        mustSee: true
    },
    {
        id: "rome-navona",
        cityId: "rome",
        name: "Piazza Navona",
        category: "landmark",
        description: "La plaza más elegante de Roma sobre el antiguo estadio de Domiciano: la Fuente de los Cuatro Ríos de Bernini.",
        durationMinutes: 45,
        mustSee: false
    },
    // ── Naples ─────────────────────────────────────────────────────
    {
        id: "naples-pompeii",
        cityId: "naples",
        name: "Pompeya",
        category: "ruins",
        description: "Ciudad romana sepultada por el Vesubio en el 79 d.C.: las calles, casas, termas y frescos conservados son únicos en el mundo.",
        durationMinutes: 180,
        mustSee: true
    },
    {
        id: "naples-castel-nuovo",
        cityId: "naples",
        name: "Castel Nuovo",
        category: "landmark",
        description: "Fortaleza angevina del siglo XIII junto al puerto; su arco de triunfo renacentista es una obra maestra de la escultura italiana.",
        durationMinutes: 60,
        mustSee: true
    },
    {
        id: "naples-spaccanapoli",
        cityId: "naples",
        name: "Spaccanapoli",
        category: "landmark",
        description: "La arteria que parte la ciudad en dos: librerías antiquísimas, iglesias barrocas y la auténtica vida napolitana.",
        durationMinutes: 75,
        mustSee: false
    },
    {
        id: "naples-pizza",
        cityId: "naples",
        name: "Pizza napoletana",
        category: "food",
        description: "La pizza original: masa de larga fermentación, tomate San Marzano DOP y mozzarella di bufala campana en horno de leña.",
        durationMinutes: 60,
        mustSee: false
    },
    // ── Málaga ─────────────────────────────────────────────────────
    {
        id: "malaga-alcazaba",
        cityId: "malaga",
        name: "Alcazaba de Málaga",
        category: "landmark",
        description: "Fortaleza palatina árabe del siglo XI: jardines con fuentes, arcos de herradura y vistas sobre la ciudad y el puerto.",
        durationMinutes: 90,
        mustSee: true
    },
    {
        id: "malaga-picasso",
        cityId: "malaga",
        name: "Museo Picasso",
        category: "museum",
        description: "Más de 200 obras del malagueño más universal en el Palacio de Buenavista: pinturas, esculturas y grabados.",
        durationMinutes: 90,
        mustSee: true
    },
    {
        id: "malaga-cathedral",
        cityId: "malaga",
        name: "Catedral de Málaga",
        category: "church",
        description: "La «Manquita» (catedral a la que le falta una torre) del siglo XVI: mezcla de gótico, renacentista y barroco.",
        durationMinutes: 45,
        mustSee: false
    },
    {
        id: "malaga-beach",
        cityId: "malaga",
        name: "Playa La Malagueta",
        category: "beach",
        description: "La playa urbana más accesible de Málaga, a cinco minutos del centro; ideal para un baño al terminar la visita.",
        durationMinutes: 90,
        mustSee: false
    },
    // ── Cádiz ──────────────────────────────────────────────────────
    {
        id: "cadiz-cathedral",
        cityId: "cadiz",
        name: "Catedral de Cádiz",
        category: "church",
        description: "La cúpula dorada más visible del Atlántico: construcción de dos siglos que mezcla barroco y neoclásico.",
        durationMinutes: 60,
        mustSee: true
    },
    {
        id: "cadiz-old-town",
        cityId: "cadiz",
        name: "Casco Antiguo",
        category: "landmark",
        description: "Una de las ciudades con más historia de Europa occidental: barrios de pescadores, plazas porticadas y azoteas blancas.",
        durationMinutes: 90,
        mustSee: true
    },
    {
        id: "cadiz-tavira",
        cityId: "cadiz",
        name: "Torre Tavira",
        category: "viewpoint",
        description: "La torre vigía más alta de Cádiz: cámara oscura en tiempo real y vistas panorámicas sobre los 160 torreones.",
        durationMinutes: 60,
        mustSee: false
    },
    {
        id: "cadiz-caleta",
        cityId: "cadiz",
        name: "Playa de La Caleta",
        category: "beach",
        description: "La playa más íntima de la ciudad, abrazada entre el Castillo de Santa Catalina y el Castillo de San Sebastián.",
        durationMinutes: 60,
        mustSee: false
    },
    // ── Lisbon ─────────────────────────────────────────────────────
    {
        id: "lisbon-belem",
        cityId: "lisbon",
        name: "Torre de Belém",
        category: "landmark",
        description: "Joya del estilo manuelino en la orilla del Tajo: símbolo de los Descubrimientos y de la historia de Portugal.",
        durationMinutes: 60,
        mustSee: true
    },
    {
        id: "lisbon-jeronimos",
        cityId: "lisbon",
        name: "Monasterio de los Jerónimos",
        category: "church",
        description: "Obra maestra del gótico manuelino financiada con las riquezas de las especias; alberga la tumba de Vasco de Gama.",
        durationMinutes: 75,
        mustSee: true
    },
    {
        id: "lisbon-alfama",
        cityId: "lisbon",
        name: "Barrio de Alfama",
        category: "landmark",
        description: "El barrio más antiguo de Lisboa: laberinto morisco con el Castillo de São Jorge, miradores y el Fado en cada taberna.",
        durationMinutes: 90,
        mustSee: true
    },
    {
        id: "lisbon-lx-factory",
        cityId: "lisbon",
        name: "LX Factory",
        category: "market",
        description: "Antigua fábrica industrial reconvertida en espacio creativo: mercado de domingo, restaurantes, librerías y arte urbano.",
        durationMinutes: 75,
        mustSee: false
    },
    // ── Porto ──────────────────────────────────────────────────────
    {
        id: "porto-ribeira",
        cityId: "porto",
        name: "Barrio de Ribeira",
        category: "landmark",
        description: "El frente fluvial Patrimonio de la UNESCO: casas de colores apiladas sobre el Duero y las barcas rabelo del vino de Oporto.",
        durationMinutes: 90,
        mustSee: true
    },
    {
        id: "porto-bridge",
        cityId: "porto",
        name: "Puente Dom Luís I",
        category: "landmark",
        description: "Puente de hierro de dos niveles sobre el Duero; cruzar el nivel superior a pie ofrece las mejores vistas de la ciudad.",
        durationMinutes: 45,
        mustSee: true
    },
    {
        id: "porto-lello",
        cityId: "porto",
        name: "Librería Lello",
        category: "landmark",
        description: "Una de las librerías más bellas del mundo: escalera neogótica que inspiró Hogwarts y vidrieras de 1906.",
        durationMinutes: 45,
        mustSee: false
    },
    {
        id: "porto-wine-cellars",
        cityId: "porto",
        name: "Bodegas de vino de Oporto",
        category: "food",
        description: "Cata guiada en Vila Nova de Gaia: toneles centenarios, historia del vino de Oporto y degustación de tawny y ruby.",
        durationMinutes: 90,
        mustSee: false
    },
    // ── Tangier ────────────────────────────────────────────────────
    {
        id: "tangier-medina",
        cityId: "tangier",
        name: "Medina de Tánger",
        category: "landmark",
        description: "Laberinto de callejuelas blancas y azules: el corazón histórico de Tánger con especias, artesanía y café de menta.",
        durationMinutes: 90,
        mustSee: true
    },
    {
        id: "tangier-kasbah",
        cityId: "tangier",
        name: "Kasbah y Museo",
        category: "museum",
        description: "La ciudadela que domina la ciudad: murallas del siglo XVII, el Museo de la Kasbah y vistas únicas al Estrecho.",
        durationMinutes: 75,
        mustSee: true
    },
    {
        id: "tangier-grand-socco",
        cityId: "tangier",
        name: "Gran Zoco",
        category: "market",
        description: "La plaza más animada de Tánger: mercado de telas, especias y fruta fresca rodeado de arquitectura morisca.",
        durationMinutes: 45,
        mustSee: false
    },
    {
        id: "tangier-cafe-hafa",
        cityId: "tangier",
        name: "Café Hafa",
        category: "viewpoint",
        description: "Histórico café en terrazas escalonadas sobre el Estrecho de Gibraltar: el lugar favorito de Paul Bowles y los Rolling Stones.",
        durationMinutes: 60,
        mustSee: false
    }
];
}),
"[project]/src/features/cities/cities.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTIVITY_CATEGORY_CONFIG",
    ()=>ACTIVITY_CATEGORY_CONFIG,
    "COUNTRY_NAMES",
    ()=>COUNTRY_NAMES,
    "MONTH_SHORT",
    ()=>MONTH_SHORT,
    "POI_CATEGORY_CONFIG",
    ()=>POI_CATEGORY_CONFIG,
    "SAFETY_CONFIG",
    ()=>SAFETY_CONFIG,
    "SCORE_FIELDS",
    ()=>SCORE_FIELDS,
    "WALKING_CONFIG",
    ()=>WALKING_CONFIG
]);
const WALKING_CONFIG = {
    easy: {
        label: "Nivel fácil",
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-500/10",
        dot: "bg-emerald-500",
        detail: "Terreno llano, ideal para todos los viajeros."
    },
    moderate: {
        label: "Nivel moderado",
        color: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-500/10",
        dot: "bg-amber-500",
        detail: "Algunas cuestas y escaleras; cómodo con calzado adecuado."
    },
    high: {
        label: "Nivel intenso",
        color: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-500/10",
        dot: "bg-orange-500",
        detail: "Numerosas cuestas empinadas; se recomienda buena condición física."
    }
};
const SAFETY_CONFIG = {
    1: {
        label: "Precaución",
        color: "text-red-600 dark:text-red-400",
        detail: "Se recomienda precaución extra y atención al entorno."
    },
    2: {
        label: "Moderada",
        color: "text-orange-600 dark:text-orange-400",
        detail: "Destino con zonas que requieren atención."
    },
    3: {
        label: "Aceptable",
        color: "text-amber-600 dark:text-amber-400",
        detail: "Destino generalmente seguro con precauciones normales."
    },
    4: {
        label: "Buena",
        color: "text-emerald-600 dark:text-emerald-400",
        detail: "Destino muy seguro, tranquilo para viajar en familia."
    },
    5: {
        label: "Excelente",
        color: "text-emerald-600 dark:text-emerald-400",
        detail: "Destino muy seguro, ideal para el primer crucero."
    }
};
const ACTIVITY_CATEGORY_CONFIG = {
    viewpoint: {
        label: "Mirador",
        color: "text-sky-600 dark:text-sky-400",
        bg: "bg-sky-500/10"
    },
    food: {
        label: "Gastronomía",
        color: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-500/10"
    },
    museum: {
        label: "Museo",
        color: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-500/10"
    },
    shopping: {
        label: "Compras",
        color: "text-pink-600 dark:text-pink-400",
        bg: "bg-pink-500/10"
    },
    walk: {
        label: "Paseo",
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-500/10"
    },
    church: {
        label: "Iglesia",
        color: "text-indigo-600 dark:text-indigo-400",
        bg: "bg-indigo-500/10"
    },
    market: {
        label: "Mercado",
        color: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-500/10"
    }
};
const POI_CATEGORY_CONFIG = {
    landmark: {
        label: "Monumento",
        color: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-500/10"
    },
    museum: {
        label: "Museo",
        color: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-500/10"
    },
    beach: {
        label: "Playa",
        color: "text-cyan-600 dark:text-cyan-400",
        bg: "bg-cyan-500/10"
    },
    food: {
        label: "Gastronomía",
        color: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-500/10"
    },
    viewpoint: {
        label: "Mirador",
        color: "text-sky-600 dark:text-sky-400",
        bg: "bg-sky-500/10"
    },
    market: {
        label: "Mercado",
        color: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-500/10"
    },
    church: {
        label: "Iglesia",
        color: "text-indigo-600 dark:text-indigo-400",
        bg: "bg-indigo-500/10"
    },
    ruins: {
        label: "Ruinas",
        color: "text-stone-600 dark:text-stone-400",
        bg: "bg-stone-500/10"
    }
};
const SCORE_FIELDS = [
    {
        key: "beautyScore",
        label: "Belleza"
    },
    {
        key: "foodScore",
        label: "Gastronomía"
    },
    {
        key: "historyScore",
        label: "Historia"
    }
];
const MONTH_SHORT = {
    1: "Ene",
    2: "Feb",
    3: "Mar",
    4: "Abr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Ago",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dic"
};
const COUNTRY_NAMES = {
    greece: "Grecia",
    turkey: "Turquía",
    malta: "Malta",
    spain: "España",
    france: "Francia",
    italy: "Italia",
    portugal: "Portugal",
    morocco: "Marruecos"
};
}),
"[project]/src/features/cities/components/CityHero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CityHero",
    ()=>CityHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-rsc] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/footprints.js [app-rsc] (ecmascript) <export default as Footprints>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$cities$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cities/cities.config.ts [app-rsc] (ecmascript)");
;
;
;
function CityHero({ city }) {
    const walking = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$cities$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WALKING_CONFIG"][city.walkingDifficulty];
    const safety = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$cities$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SAFETY_CONFIG"][city.safety];
    const country = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$cities$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COUNTRY_NAMES"][city.countryId] ?? city.countryId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-[70vh] flex items-end hero-gradient bg-cover bg-center",
        style: {
            backgroundImage: `url(${city.coverImage})`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "photo-overlay",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/features/cities/components/CityHero.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container-site pb-12 pt-32 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: country
                    }, void 0, false, {
                        fileName: "[project]/src/features/cities/components/CityHero.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "heading-1 text-white",
                        children: city.name
                    }, void 0, false, {
                        fileName: "[project]/src/features/cities/components/CityHero.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "lead text-white/75 max-w-2xl",
                        children: city.description
                    }, void 0, false, {
                        fileName: "[project]/src/features/cities/components/CityHero.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 pt-2",
                        role: "list",
                        "aria-label": "Datos rápidos",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatChip, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                label: `${city.recommendedHours}h recomendadas`
                            }, void 0, false, {
                                fileName: "[project]/src/features/cities/components/CityHero.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatChip, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__["Footprints"],
                                label: walking.label
                            }, void 0, false, {
                                fileName: "[project]/src/features/cities/components/CityHero.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatChip, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                label: `Seguridad ${safety.label.toLowerCase()}`
                            }, void 0, false, {
                                fileName: "[project]/src/features/cities/components/CityHero.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/cities/components/CityHero.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/cities/components/CityHero.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/cities/components/CityHero.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
function StatChip({ icon: Icon, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-glass px-3 py-2 flex items-center gap-2 text-sm text-white",
        role: "listitem",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-3.5 w-3.5 text-accent shrink-0",
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/src/features/cities/components/CityHero.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/cities/components/CityHero.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/cities/components/CityScores.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "CityScores",
    ()=>CityScores
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CityScores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CityScores() from the server but CityScores is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/cities/components/CityScores.tsx <module evaluation>", "CityScores");
}),
"[project]/src/features/cities/components/CityScores.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "CityScores",
    ()=>CityScores
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CityScores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CityScores() from the server but CityScores is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/cities/components/CityScores.tsx", "CityScores");
}),
"[project]/src/features/cities/components/CityScores.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$CityScores$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/cities/components/CityScores.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$CityScores$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/cities/components/CityScores.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$CityScores$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
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
"[project]/src/features/cities/components/CityHighlights.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CityHighlights",
    ()=>CityHighlights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-rsc] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$cities$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cities/cities.config.ts [app-rsc] (ecmascript)");
;
;
;
;
const ALL_MONTHS = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
];
function CityHighlights({ city }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid sm:grid-cols-2 gap-10 md:gap-16 items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow mb-2",
                                children: "Lo imprescindible"
                            }, void 0, false, {
                                fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "heading-3",
                                children: "Puntos destacados"
                            }, void 0, false, {
                                fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-3",
                        role: "list",
                        children: city.highlights.map((highlight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3 card p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-5 w-5 text-accent shrink-0 mt-0.5",
                                        strokeWidth: 1.5,
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base",
                                        children: highlight
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, highlight, true, {
                                fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow mb-2",
                                children: "Temporada ideal"
                            }, void 0, false, {
                                fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "heading-3",
                                children: "Mejor época para visitar"
                            }, void 0, false, {
                                fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-6 md:grid-cols-12 gap-2",
                        role: "list",
                        "aria-label": "Meses del año",
                        children: ALL_MONTHS.map((m)=>{
                            const active = city.bestMonths.includes(m);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-1",
                                role: "listitem",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-full text-center py-2.5 px-1 rounded-lg text-xs font-medium transition-colors", active ? "bg-accent/15 text-accent font-semibold" : "bg-muted/40 text-muted-foreground"),
                                        "aria-label": active ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$cities$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MONTH_SHORT"][m]}: recomendado` : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$cities$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MONTH_SHORT"][m],
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$cities$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MONTH_SHORT"][m]
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-1 rounded-full bg-accent",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, m, true, {
                                fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Los meses en dorado son los más recomendados para visitar",
                            " ",
                            city.name,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/cities/components/CityHighlights.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/cities/components/DayTimeline.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "DayTimeline",
    ()=>DayTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DayTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DayTimeline() from the server but DayTimeline is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/cities/components/DayTimeline.tsx <module evaluation>", "DayTimeline");
}),
"[project]/src/features/cities/components/DayTimeline.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "DayTimeline",
    ()=>DayTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DayTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DayTimeline() from the server but DayTimeline is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/cities/components/DayTimeline.tsx", "DayTimeline");
}),
"[project]/src/features/cities/components/DayTimeline.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$DayTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/cities/components/DayTimeline.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$DayTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/cities/components/DayTimeline.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$DayTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/features/cities/components/PointsOfInterestSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "PointsOfInterestSection",
    ()=>PointsOfInterestSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PointsOfInterestSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PointsOfInterestSection() from the server but PointsOfInterestSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/cities/components/PointsOfInterestSection.tsx <module evaluation>", "PointsOfInterestSection");
}),
"[project]/src/features/cities/components/PointsOfInterestSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "PointsOfInterestSection",
    ()=>PointsOfInterestSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PointsOfInterestSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PointsOfInterestSection() from the server but PointsOfInterestSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/cities/components/PointsOfInterestSection.tsx", "PointsOfInterestSection");
}),
"[project]/src/features/cities/components/PointsOfInterestSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$PointsOfInterestSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/cities/components/PointsOfInterestSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$PointsOfInterestSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/cities/components/PointsOfInterestSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$PointsOfInterestSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/cities/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CityDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/cities.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dayPlans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/dayPlans.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$pointsOfInterest$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/pointsOfInterest.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$CityHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cities/components/CityHero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$CityScores$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cities/components/CityScores.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$CityHighlights$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cities/components/CityHighlights.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$DayTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cities/components/DayTimeline.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$PointsOfInterestSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cities/components/PointsOfInterestSection.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cities"].map((c)=>({
            id: c.id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const city = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cities"].find((c)=>c.id === id);
    return {
        title: city?.name ?? "Destino"
    };
}
async function CityDetailPage({ params }) {
    const { id } = await params;
    const city = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cities"].find((c)=>c.id === id);
    if (!city) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const dayPlan = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dayPlans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dayPlans"].find((dp)=>dp.cityId === id);
    const pois = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$pointsOfInterest$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pointsOfInterest"].filter((poi)=>poi.cityId === id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 container-site pt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/destinations",
                    className: "inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/cities/[id]/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        "Todos los destinos"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/cities/[id]/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/cities/[id]/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$CityHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CityHero"], {
                city: city
            }, void 0, false, {
                fileName: "[project]/src/app/cities/[id]/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$CityScores$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CityScores"], {
                        city: city
                    }, void 0, false, {
                        fileName: "[project]/src/app/cities/[id]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/cities/[id]/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/cities/[id]/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-sm border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$CityHighlights$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CityHighlights"], {
                        city: city
                    }, void 0, false, {
                        fileName: "[project]/src/app/cities/[id]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/cities/[id]/page.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/cities/[id]/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            dayPlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section border-t border-border bg-muted/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow mb-3",
                                    children: [
                                        "Un día en ",
                                        city.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/cities/[id]/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "heading-2",
                                    children: "Cómo aprovechar el tiempo al máximo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cities/[id]/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/cities/[id]/page.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$DayTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DayTimeline"], {
                            dayPlan: dayPlan
                        }, void 0, false, {
                            fileName: "[project]/src/app/cities/[id]/page.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/cities/[id]/page.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/cities/[id]/page.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            pois.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow mb-3",
                                    children: "Qué ver"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cities/[id]/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "heading-2",
                                    children: "Puntos de interés"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cities/[id]/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/cities/[id]/page.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cities$2f$components$2f$PointsOfInterestSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PointsOfInterestSection"], {
                            pois: pois
                        }, void 0, false, {
                            fileName: "[project]/src/app/cities/[id]/page.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/cities/[id]/page.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/cities/[id]/page.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-sm border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lead",
                            children: "¿Listo para planificar el viaje?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/cities/[id]/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/itineraries",
                            className: "btn-primary",
                            children: "Ver itinerarios"
                        }, void 0, false, {
                            fileName: "[project]/src/app/cities/[id]/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/cities/[id]/page.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/cities/[id]/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/cities/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/cities/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__00bb90a6._.js.map
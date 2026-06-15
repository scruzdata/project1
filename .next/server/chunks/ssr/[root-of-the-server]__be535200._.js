module.exports = [
"[project]/.next-internal/server/app/cruise-lines/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/cruiseLines.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cruiseLines",
    ()=>cruiseLines
]);
const cruiseLines = [
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
            "Parejas jubiladas",
            "Primer crucero",
            "Viaje relajado"
        ],
        strengths: [
            "Excelente gastronomía",
            "Ambiente premium",
            "Barcos modernos"
        ],
        weaknesses: [
            "Precios elevados"
        ],
        recommended: true,
        logo: "/logos/celebrity.svg",
        image: "/images/cruises/celebrity-cruises-barco.jpg",
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
        image: "/images/cruises/oceania-cruises.jpg",
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
        image: "/images/cruises/regent_seven.jpg",
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
        image: "/images/cruises/silversea.jpg",
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
        image: "/images/cruises/msc-cruceros.jpg",
        website: "https://www.msccruceros.es/"
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
        image: "/images/cruises/costa_crucero.webp",
        website: "https://www.costacruceros.es/"
    }
];
}),
"[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "CruiseLineGrid",
    ()=>CruiseLineGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CruiseLineGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CruiseLineGrid() from the server but CruiseLineGrid is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx <module evaluation>", "CruiseLineGrid");
}),
"[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "CruiseLineGrid",
    ()=>CruiseLineGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CruiseLineGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CruiseLineGrid() from the server but CruiseLineGrid is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx", "CruiseLineGrid");
}),
"[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$CruiseLineGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$CruiseLineGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$CruiseLineGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/features/cruise-lines/components/ComparisonTable.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ComparisonTable",
    ()=>ComparisonTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ComparisonTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ComparisonTable() from the server but ComparisonTable is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/cruise-lines/components/ComparisonTable.tsx <module evaluation>", "ComparisonTable");
}),
"[project]/src/features/cruise-lines/components/ComparisonTable.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ComparisonTable",
    ()=>ComparisonTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ComparisonTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ComparisonTable() from the server but ComparisonTable is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/cruise-lines/components/ComparisonTable.tsx", "ComparisonTable");
}),
"[project]/src/features/cruise-lines/components/ComparisonTable.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$ComparisonTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/cruise-lines/components/ComparisonTable.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$ComparisonTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/cruise-lines/components/ComparisonTable.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$ComparisonTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/cruise-lines/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CruiseLinesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cruiseLines$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/cruiseLines.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$CruiseLineGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$ComparisonTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cruise-lines/components/ComparisonTable.tsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "Cruceros"
};
function CruiseLinesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-sm border-b border-border bg-muted/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow mb-3",
                            children: "Líneas de crucero"
                        }, void 0, false, {
                            fileName: "[project]/src/app/cruise-lines/page.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "heading-1 mb-4",
                            children: "Elige tu compañía ideal"
                        }, void 0, false, {
                            fileName: "[project]/src/app/cruise-lines/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lead max-w-2xl",
                            children: "Hemos analizado las principales compañías para encontrar las más adecuadas para un primer crucero elegante, tranquilo y sin estrés."
                        }, void 0, false, {
                            fileName: "[project]/src/app/cruise-lines/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.logitravel.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-200 hover:gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Ver más en Logitravel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cruise-lines/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cruise-lines/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/cruise-lines/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/cruise-lines/page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/cruise-lines/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$CruiseLineGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CruiseLineGrid"], {
                        cruiseLines: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cruiseLines$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cruiseLines"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/cruise-lines/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/cruise-lines/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/cruise-lines/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section border-t border-border bg-muted/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow mb-3",
                                    children: "Comparativa interactiva"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cruise-lines/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "heading-2",
                                    children: "Compara todas las compañías"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cruise-lines/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "lead mt-2 max-w-xl",
                                    children: "Filtra por categoría o ambiente y ordena por cualquier puntuación. Encuentra la compañía que mejor se adapta a vuestro viaje."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cruise-lines/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/cruise-lines/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$ComparisonTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ComparisonTable"], {
                            cruiseLines: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cruiseLines$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cruiseLines"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/cruise-lines/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/cruise-lines/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/cruise-lines/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/cruise-lines/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/cruise-lines/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__be535200._.js.map
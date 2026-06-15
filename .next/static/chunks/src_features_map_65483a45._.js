(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/map/map.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ITINERARY_COLORS",
    ()=>ITINERARY_COLORS,
    "MAP_DEFAULTS",
    ()=>MAP_DEFAULTS,
    "TILE_LAYER",
    ()=>TILE_LAYER
]);
const ITINERARY_COLORS = {
    "greek-islands": "#4DDCE3",
    "western-mediterranean": "#10b981",
    "iberia-morocco": "#f97316",
    "spain-france-italy": "#275EF5",
    "mediterraneo-maravillas": "#E13FEB"
};
const MAP_DEFAULTS = {
    center: [
        38.5,
        10.0
    ],
    zoom: 5,
    minZoom: 4,
    maxZoom: 12
};
const TILE_LAYER = {
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    urlDark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/map/components/MapPin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCityIcon",
    ()=>createCityIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
function createCityIcon(isHighlighted) {
    const size = isHighlighted ? 14 : 8;
    const style = isHighlighted ? "width:".concat(size, "px;height:").concat(size, "px;border-radius:50%;background:#d4af37;border:2.5px solid white;box-shadow:0 0 0 4px rgba(212,175,55,0.25),0 2px 8px rgba(212,175,55,0.5);") : "width:".concat(size, "px;height:").concat(size, "px;border-radius:50%;background:#334b6e;border:2px solid rgba(255,255,255,0.7);box-shadow:0 1px 4px rgba(0,0,0,0.3);");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        html: '<div style="'.concat(style, '"></div>'),
        className: "",
        iconSize: [
            size,
            size
        ],
        iconAnchor: [
            size / 2,
            size / 2
        ],
        popupAnchor: [
            0,
            -(size / 2 + 6)
        ]
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/map/components/InteractiveMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveMap",
    ()=>InteractiveMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Polyline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$map$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/map/map.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$components$2f$MapPin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/map/components/MapPin.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// ── Animates stroke-dashoffset via rAF — reliable in all envs ──
function RouteAnimator() {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteAnimator.useEffect": ()=>{
            const container = map.getContainer();
            let frame;
            let aOffset = 0;
            let iOffset = 0;
            function tick() {
                aOffset = (aOffset + 0.5) % 18;
                iOffset = (iOffset + 0.2) % 12;
                container.querySelectorAll("path.route-active").forEach({
                    "RouteAnimator.useEffect.tick": (p)=>{
                        p.setAttribute("stroke-dashoffset", String(aOffset));
                    }
                }["RouteAnimator.useEffect.tick"]);
                container.querySelectorAll("path.route-inactive").forEach({
                    "RouteAnimator.useEffect.tick": (p)=>{
                        p.setAttribute("stroke-dashoffset", String(iOffset));
                    }
                }["RouteAnimator.useEffect.tick"]);
                frame = requestAnimationFrame(tick);
            }
            frame = requestAnimationFrame(tick);
            return ({
                "RouteAnimator.useEffect": ()=>cancelAnimationFrame(frame)
            })["RouteAnimator.useEffect"];
        }
    }["RouteAnimator.useEffect"], [
        map
    ]);
    return null;
}
_s(RouteAnimator, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = RouteAnimator;
// ── Flies to the bounds of the selected itinerary on change ────
function MapController(param) {
    let { cityMap, selectedItineraryId, itineraries } = param;
    _s1();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapController.useEffect": ()=>{
            const it = itineraries.find({
                "MapController.useEffect.it": (i)=>i.id === selectedItineraryId
            }["MapController.useEffect.it"]);
            if (!it) return;
            const positions = it.destinationIds.map({
                "MapController.useEffect.positions": (id)=>cityMap.get(id)
            }["MapController.useEffect.positions"]).filter({
                "MapController.useEffect.positions": (c)=>!!c
            }["MapController.useEffect.positions"]).map({
                "MapController.useEffect.positions": (c)=>[
                        c.latitude,
                        c.longitude
                    ]
            }["MapController.useEffect.positions"]);
            if (positions.length >= 2) {
                map.flyToBounds(positions, {
                    padding: [
                        60,
                        60
                    ],
                    duration: 1.2,
                    maxZoom: 8
                });
            }
        }
    }["MapController.useEffect"], [
        selectedItineraryId,
        map,
        cityMap,
        itineraries
    ]);
    return null;
}
_s1(MapController, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c1 = MapController;
function InteractiveMap(param) {
    let { itineraries, cities, selectedItineraryId } = param;
    _s2();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = resolvedTheme === "dark";
    const cityMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InteractiveMap.useMemo[cityMap]": ()=>new Map(cities.map({
                "InteractiveMap.useMemo[cityMap]": (c)=>[
                        c.id,
                        c
                    ]
            }["InteractiveMap.useMemo[cityMap]"]))
    }["InteractiveMap.useMemo[cityMap]"], [
        cities
    ]);
    const selectedDestinationIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InteractiveMap.useMemo[selectedDestinationIds]": ()=>{
            var _itineraries_find;
            var _itineraries_find_destinationIds;
            return new Set((_itineraries_find_destinationIds = (_itineraries_find = itineraries.find({
                "InteractiveMap.useMemo[selectedDestinationIds]": (it)=>it.id === selectedItineraryId
            }["InteractiveMap.useMemo[selectedDestinationIds]"])) === null || _itineraries_find === void 0 ? void 0 : _itineraries_find.destinationIds) !== null && _itineraries_find_destinationIds !== void 0 ? _itineraries_find_destinationIds : []);
        }
    }["InteractiveMap.useMemo[selectedDestinationIds]"], [
        itineraries,
        selectedItineraryId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
        center: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$map$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_DEFAULTS"].center,
        zoom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$map$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_DEFAULTS"].zoom,
        minZoom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$map$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_DEFAULTS"].minZoom,
        maxZoom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$map$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_DEFAULTS"].maxZoom,
        className: "h-full w-full",
        zoomControl: false,
        scrollWheelZoom: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                url: isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$map$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_LAYER"].urlDark : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$map$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_LAYER"].url,
                attribution: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$map$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_LAYER"].attribution
            }, void 0, false, {
                fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapController, {
                cityMap: cityMap,
                selectedItineraryId: selectedItineraryId,
                itineraries: itineraries
            }, void 0, false, {
                fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            itineraries.map((it)=>{
                const isSelected = it.id === selectedItineraryId;
                var _ITINERARY_COLORS_it_id;
                const color = (_ITINERARY_COLORS_it_id = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$map$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITINERARY_COLORS"][it.id]) !== null && _ITINERARY_COLORS_it_id !== void 0 ? _ITINERARY_COLORS_it_id : "#d4af37";
                const positions = it.destinationIds.map((id)=>cityMap.get(id)).filter((c)=>!!c).map((c)=>[
                        c.latitude,
                        c.longitude
                    ]);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                    positions: positions,
                    pathOptions: {
                        color,
                        weight: isSelected ? 3 : 1.5,
                        opacity: isSelected ? 0.9 : 0.3,
                        dashArray: isSelected ? "12 6" : "6 6",
                        className: isSelected ? "route-active" : "route-inactive"
                    }
                }, it.id, false, {
                    fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RouteAnimator, {}, void 0, false, {
                fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            cities.map((city)=>{
                const isHighlighted = selectedDestinationIds.has(city.id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                    position: [
                        city.latitude,
                        city.longitude
                    ],
                    icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$map$2f$components$2f$MapPin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCityIcon"])(isHighlighted),
                    zIndexOffset: isHighlighted ? 100 : 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "city-popup-wrapper",
                            children: [
                                city.coverImage && // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: city.coverImage,
                                    alt: city.name,
                                    className: "city-popup-image"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                                    lineNumber: 173,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "city-popup-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "city-popup-name",
                                            children: city.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "city-popup-desc",
                                            children: city.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "city-popup-scores",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "✨ ",
                                                        city.beautyScore,
                                                        "/10"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "🍽 ",
                                                        city.foodScore,
                                                        "/10"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "🏛 ",
                                                        city.historyScore,
                                                        "/10"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/cities/".concat(city.id),
                                            className: "city-popup-link",
                                            children: "Ver ciudad →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                                    lineNumber: 179,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                            lineNumber: 170,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, this)
                }, city.id, false, {
                    fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/map/components/InteractiveMap.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s2(InteractiveMap, "3sN6R2awAr40+e4JKA8eG8ZhXSE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c2 = InteractiveMap;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RouteAnimator");
__turbopack_context__.k.register(_c1, "MapController");
__turbopack_context__.k.register(_c2, "InteractiveMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/map/components/InteractiveMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/features/map/components/InteractiveMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_features_map_65483a45._.js.map
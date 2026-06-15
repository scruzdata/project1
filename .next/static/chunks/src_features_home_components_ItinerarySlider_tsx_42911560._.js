(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/home/components/ItinerarySlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItinerarySlider",
    ()=>ItinerarySlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ItinerarySlider(param) {
    let { itineraries } = param;
    _s();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function scroll(direction) {
        var _track_querySelector;
        const track = trackRef.current;
        if (!track) return;
        var _track_querySelector_offsetWidth;
        const cardWidth = (_track_querySelector_offsetWidth = (_track_querySelector = track.querySelector("a")) === null || _track_querySelector === void 0 ? void 0 : _track_querySelector.offsetWidth) !== null && _track_querySelector_offsetWidth !== void 0 ? _track_querySelector_offsetWidth : 320;
        track.scrollBy({
            left: direction === "right" ? cardWidth + 24 : -(cardWidth + 24),
            behavior: "smooth"
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>scroll("left"),
                "aria-label": "Anterior itinerario",
                className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border shadow-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200",
                children: "‹"
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: trackRef,
                className: "flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide",
                style: {
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                },
                children: itineraries.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/itineraries/".concat(it.id),
                        className: "card overflow-hidden group flex-none w-[280px] sm:w-[300px] md:w-[320px] snap-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105",
                                style: {
                                    backgroundImage: "url(".concat(it.image, ")")
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full shadow",
                                        children: it.score.toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-heading text-base font-semibold leading-snug",
                                        children: it.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            it.durationMin,
                                            "–",
                                            it.durationMax,
                                            " noches · ",
                                            it.departurePorts[0]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1 pt-1",
                                        children: it.idealFor.slice(0, 2).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, it.id, true, {
                        fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>scroll("right"),
                "aria-label": "Siguiente itinerario",
                className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border shadow-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200",
                children: "›"
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/home/components/ItinerarySlider.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(ItinerarySlider, "MRPoGswyMQM28Ca9bWnGm0R+Wxw=");
_c = ItinerarySlider;
var _c;
__turbopack_context__.k.register(_c, "ItinerarySlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_features_home_components_ItinerarySlider_tsx_42911560._.js.map
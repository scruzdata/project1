(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/map/components/InteractiveMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/node_modules_leaflet_dist_leaflet_ef5f0413.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css)"
    ]
  },
  "static/chunks/node_modules_aa06b1bf._.js",
  "static/chunks/src_features_map_components_c67bf1e5._.js",
  "static/chunks/src_features_map_components_InteractiveMap_tsx_1e2d88d8._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/features/map/components/InteractiveMap.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);
module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/components/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$en$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/locales/en.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$fr$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/locales/fr.json.[json].cjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const frenchText = __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$fr$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].auto;
const englishAuto = Object.fromEntries(Object.keys(frenchText).map((key)=>[
        key,
        key
    ]));
const dictionaries = {
    en: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$en$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        auto: englishAuto
    },
    fr: __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$fr$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
};
const englishByFrenchText = Object.fromEntries(Object.entries(frenchText).map(([english, french])=>[
        french,
        english
    ]));
const textSources = new WeakMap();
const attributeSources = new WeakMap();
function sourceText(value) {
    return englishByFrenchText[value] ?? value;
}
function translateValue(value, language) {
    const source = sourceText(value);
    return language === "fr" ? frenchText[source] ?? source : source;
}
function translateDocument(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node = walker.nextNode();
    while(node){
        if (node.parentElement?.tagName !== "SCRIPT" && node.parentElement?.tagName !== "STYLE") {
            textNodes.push(node);
        }
        node = walker.nextNode();
    }
    for (const textNode of textNodes){
        const current = textNode.nodeValue ?? "";
        const leading = current.match(/^\s*/)?.[0] ?? "";
        const trailing = current.match(/\s*$/)?.[0] ?? "";
        const content = current.trim();
        if (!content) continue;
        const cachedSource = textSources.get(textNode);
        const cachedTranslation = cachedSource ? translateValue(cachedSource, language) : null;
        const source = cachedSource && (content === cachedSource || content === cachedTranslation) ? cachedSource : sourceText(content);
        textSources.set(textNode, source);
        const translated = translateValue(source, language);
        if (translated !== content) {
            textNode.nodeValue = `${leading}${translated}${trailing}`;
        }
    }
    for (const element of Array.from(document.body.querySelectorAll("[placeholder], [title], [aria-label], [alt]"))){
        const sources = attributeSources.get(element) ?? new Map();
        attributeSources.set(element, sources);
        for (const attribute of [
            "placeholder",
            "title",
            "aria-label",
            "alt"
        ]){
            const value = element.getAttribute(attribute);
            if (value && !sources.has(attribute)) {
                sources.set(attribute, sourceText(value));
            }
            const source = sources.get(attribute);
            if (source) {
                element.setAttribute(attribute, translateValue(source, language));
            }
        }
    }
}
function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedLanguage = window.localStorage.getItem("techverse-language");
        if (savedLanguage !== "en" && savedLanguage !== "fr") return;
        const restoreLanguage = window.setTimeout(()=>{
            setLanguage(savedLanguage);
        }, 0);
        return ()=>window.clearTimeout(restoreLanguage);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.lang = language;
        translateDocument(language);
        let translating = false;
        const applyTranslation = ()=>{
            if (translating) return;
            translating = true;
            translateDocument(language);
            translating = false;
        };
        const observer = new MutationObserver(applyTranslation);
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
        return ()=>observer.disconnect();
    }, [
        language
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            language,
            toggleLanguage: ()=>{
                setLanguage((current)=>{
                    const nextLanguage = current === "fr" ? "en" : "fr";
                    window.localStorage.setItem("techverse-language", nextLanguage);
                    return nextLanguage;
                });
            },
            t: dictionaries[language]
        }), [
        language
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/LanguageContext.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }
    return context;
}
}),
"[project]/components/LocalizedBanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalizedBanner",
    ()=>LocalizedBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function LocalizedBanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "demo-banner",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-shell py-2 text-center",
            children: "TECHVERSE COMMERCE DEMO · Fictional catalogue and operational data · Built for discussion"
        }, void 0, false, {
            fileName: "[project]/components/LocalizedBanner.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/LocalizedBanner.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const links = [
    [
        "Shop",
        "#catalogue"
    ],
    [
        "Categories",
        "#catalogue"
    ],
    [
        "For business",
        "#b2b"
    ],
    [
        "Track order",
        "/portal"
    ]
];
function Nav() {
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "site-nav",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-shell nav-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-mark",
                                children: "TV"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "tech",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "verse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 23,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Commerce & Distribution"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "desktop-nav",
                        children: links.map(([label, href])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: path === href ? "nav-link active" : "nav-link",
                                children: label
                            }, label, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/support",
                                className: "nav-help",
                                children: "Help centre"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/portal",
                                className: "account-link",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "◎"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    " Account"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "#catalogue",
                                className: "nav-cart",
                                children: [
                                    "Cart ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 46,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "menu-toggle",
                                onClick: ()=>setOpen(!open),
                                "aria-label": "Toggle navigation menu",
                                children: open ? "×" : "☰"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mobile-nav",
                children: [
                    links.map(([label, href])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            onClick: ()=>setOpen(false),
                            children: label
                        }, label, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/portal",
                        onClick: ()=>setOpen(false),
                        children: "Account"
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/locales/en.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "banner": "TECHVERSE CONCEPT DEMO · Prepared for discussion · Not commissioned by B NET",
    "brand": {
        "title": "ISP Digital Platform",
        "byline": "by TechVerse Global"
    },
    "nav": {
        "home": "Home",
        "plans": "Plans",
        "coverage": "Coverage",
        "installation": "Installation",
        "support": "Support",
        "portal": "Portal",
        "staffOps": "Staff Ops Demo",
        "workspace": "Workspace",
        "staffOpsCta": "Staff Operations Demo",
        "customerPortal": "Customer Portal",
        "openMenu": "Open navigation menu",
        "closeMenu": "Close navigation menu",
        "languageLabel": "Language",
        "switchToFrench": "Switch to French",
        "switchToEnglish": "Switch to English"
    },
    "footer": {
        "product": "Product",
        "experience": "Experience",
        "company": "Company",
        "customerPlatform": "Customer Platform",
        "businessAccounts": "Business Accounts",
        "faqs": "FAQs",
        "about": "About TechVerse",
        "serviceAreas": "Service Areas",
        "networkHealth": "Network Health",
        "demoOverview": "Demo Overview",
        "description": "Connected internet experiences for discovery, service activation, support, and the operations teams behind the network.",
        "demoReady": "Demo ready",
        "conceptOnly": "Concept only",
        "copyright": "© 2026 TechVerse Global. All rights reserved.",
        "disclaimer": "Demonstration interface only. Sample data, package names and operational metrics are illustrative and should be validated before production rollout."
    }
};
}),
"[project]/locales/fr.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "banner": "DÉMO CONCEPT TECHVERSE · Préparée pour discussion · Non commanditée par B NET",
    "brand": {
        "title": "Plateforme numérique FAI",
        "byline": "par TechVerse Global"
    },
    "nav": {
        "home": "Accueil",
        "plans": "Forfaits",
        "coverage": "Couverture",
        "installation": "Installation",
        "support": "Assistance",
        "portal": "Portail",
        "staffOps": "Démo opérations",
        "workspace": "Espace de travail",
        "staffOpsCta": "Démo des opérations",
        "customerPortal": "Portail client",
        "openMenu": "Ouvrir le menu de navigation",
        "closeMenu": "Fermer le menu de navigation",
        "languageLabel": "Langue",
        "switchToFrench": "Passer au français",
        "switchToEnglish": "Passer à l'anglais"
    },
    "footer": {
        "product": "Produit",
        "experience": "Expérience",
        "company": "Entreprise",
        "customerPlatform": "Plateforme client",
        "businessAccounts": "Comptes professionnels",
        "faqs": "FAQ",
        "about": "À propos de TechVerse",
        "serviceAreas": "Zones de service",
        "networkHealth": "Etat du reseau",
        "demoOverview": "Vue d'ensemble de la demo",
        "description": "Des expériences internet connectées pour la découverte, l'activation du service, l'assistance et les équipes qui exploitent le réseau.",
        "demoReady": "Démo prête",
        "conceptOnly": "Concept uniquement",
        "copyright": "© 2026 TechVerse Global. Tous droits réservés.",
        "disclaimer": "Interface de démonstration uniquement. Les données, noms de forfaits et indicateurs opérationnels sont indicatifs et doivent être validés avant tout lancement en production."
    },
    "auto": {
        "Concept demo for an ISP": "Démo concept pour un FAI",
        "Make internet service easier to discover, buy and support.": "Rendez les services internet plus faciles à découvrir, acheter et gérer.",
        "Explore plans": "Découvrir les forfaits",
        "Check coverage": "Vérifier la couverture",
        "Customer Platform": "Plateforme client",
        "Staff Operations Demo": "Démo des opérations",
        "Customer portal preview": "Aperçu du portail client",
        "Live concept": "Concept en direct",
        "Current plan": "Forfait actuel",
        "Service status": "État du service",
        "Operational": "Opérationnel",
        "Last checked 10:42": "Dernière vérification à 10 h 42",
        "Open support ticket": "Ouvrir un ticket d'assistance",
        "Connectivity issue · Assigned to field support · ETA 45 min": "Problème de connectivité · Affecté à l'assistance terrain · Délai estimé : 45 min",
        "Coverage": "Couverture",
        "7 service areas": "7 zones de service",
        "illustrative": "indicatif",
        "Support": "Assistance",
        "24/7 ticket intake": "Réception des tickets 24 h/24, 7 j/7",
        "demo workflow": "workflow de démo",
        "Payments": "Paiements",
        "Online-ready": "Prêt pour le paiement en ligne",
        "integration point": "point d'intégration",
        "Business": "Professionnel",
        "Multi-branch portal": "Portail multi-sites",
        "demo capability": "fonctionnalité de démo",
        "Customer acquisition": "Acquisition client",
        "From discovering a plan to becoming a customer": "De la découverte d'un forfait à la souscription",
        "Explore": "Découvrir",
        "Check": "Vérifier",
        "Convert": "Convertir",
        "Illustrative packages": "Forfaits indicatifs",
        "Simple plans for the pitch": "Des forfaits simples pour la présentation",
        "Home Plus": "Domicile Plus",
        "Business Pro": "Professionnel Pro",
        "Business Max": "Professionnel Max",
        "Home": "Domicile",
        "Unlimited browsing": "Navigation illimitée",
        "Standard support": "Assistance standard",
        "Wi‑Fi installation": "Installation Wi-Fi",
        "Priority support": "Assistance prioritaire",
        "Static IP option": "Option IP statique",
        "Service dashboard": "Tableau de bord du service",
        "Multi-site readiness": "Prêt pour plusieurs sites",
        "Performance reporting": "Rapports de performance",
        "download speed": "débit descendant",
        "per month · demo": "par mois · démo",
        "Request installation": "Demander une installation",
        "Operations opportunity": "Opportunité opérationnelle",
        "See support workflow": "Voir le workflow d'assistance",
        "See portal": "Voir le portail",
        "Plans": "Forfaits",
        "Choose the service that fits the customer": "Choisissez le service adapté au client",
        "Customer portal": "Portail client",
        "Installation": "Installation",
        "Request installation online": "Demander une installation en ligne",
        "Full name": "Nom complet",
        "Phone number": "Numéro de téléphone",
        "Email address": "Adresse e-mail",
        "Service area": "Zone de service",
        "Select an area": "Sélectionnez une zone",
        "Preferred installation date": "Date d'installation souhaitée",
        "Submit request": "Envoyer la demande",
        "Support center": "Centre d'assistance",
        "Create a support ticket": "Créer un ticket d'assistance",
        "Subject": "Objet",
        "Describe the issue": "Décrivez le problème",
        "Submit ticket": "Envoyer le ticket",
        "Active": "Actif",
        "Pending": "En attente",
        "New": "Nouveau",
        "Scheduled": "Planifié",
        "Assigned": "Affecté",
        "In Progress": "En cours",
        "Completed": "Terminé",
        "Resolved": "Résolu",
        "Closed": "Fermé",
        "Available": "Disponible",
        "On Job": "En intervention",
        "Offline": "Hors ligne",
        "On Leave": "En congé",
        "High": "Élevée",
        "Medium": "Moyenne",
        "Low": "Faible",
        "Healthy": "Sain",
        "At Risk": "À risque",
        "Breached": "Dépassé",
        "Overview": "Vue d'ensemble",
        "Installations": "Installations",
        "Tickets": "Tickets",
        "Customers": "Clients",
        "Technicians": "Techniciens",
        "Map": "Carte",
        "Network": "Réseau",
        "Reports": "Rapports",
        "Settings": "Paramètres",
        "DEMO MODE": "MODE DÉMO",
        "Reset Demo Data": "Réinitialiser les données de démo",
        "Demo data refreshed": "Données de démo actualisées",
        "Search customer, ticket, technician": "Rechercher un client, un ticket ou un technicien",
        "Operations Manager": "Responsable des opérations",
        "Staff dashboard": "Tableau de bord du personnel",
        "Customer View": "Vue client",
        "ISP Operations": "Opérations FAI",
        "Search": "Rechercher",
        "Filter": "Filtrer",
        "All": "Tous",
        "Name": "Nom",
        "Phone": "Téléphone",
        "Email": "E-mail",
        "Company": "Entreprise",
        "Address": "Adresse",
        "Region": "Région",
        "Status": "État",
        "Priority": "Priorité",
        "Date": "Date",
        "Technician": "Technicien",
        "Team": "Équipe",
        "Actions": "Actions",
        "Details": "Détails",
        "Save changes": "Enregistrer les modifications",
        "Cancel": "Annuler",
        "Assign": "Affecter",
        "Resolve": "Résoudre",
        "Back": "Retour",
        "Customer not found": "Client introuvable",
        "Installation not found": "Installation introuvable",
        "Ticket not found": "Ticket introuvable",
        "Technician not found": "Technicien introuvable",
        "Request received": "Demande reçue",
        "Request reviewed": "Demande examinée",
        "Technician assigned": "Technicien affecté",
        "Visit scheduled": "Visite planifiée",
        "Installation in progress": "Installation en cours",
        "Installation completed": "Installation terminée",
        "Customer activated": "Client activé",
        "Customer submitted outage report": "Le client a signalé une panne",
        "Ticket acknowledged": "Ticket pris en compte",
        "Assigned to support agent": "Affecté à un agent d'assistance",
        "Network diagnostics started": "Diagnostics réseau démarrés",
        "Issue identified": "Problème identifié",
        "Customer service restored": "Service client rétabli",
        "Ticket resolved": "Ticket résolu",
        "Open Tickets": "Tickets ouverts",
        "SLA Healthy": "SLA respecté",
        "SLA At Risk": "SLA à risque",
        "SLA Breached": "SLA dépassé",
        "Request ID": "ID de demande",
        "Area": "Zone",
        "Plan": "Forfait",
        "Requested": "Demandé",
        "Time": "Heure",
        "Summary": "Résumé",
        "Issue": "Problème",
        "Impact": "Impact",
        "Team lead": "Responsable d'équipe",
        "View details": "Voir les détails",
        "View all": "Tout afficher",
        "Open Assistance Tickets": "Tickets d'assistance ouverts",
        "Pending Installations": "Installations en attente",
        "Active Technicians": "Techniciens actifs",
        "Network Incidents": "Incidents réseau",
        "Resolved Today": "Résolus aujourd'hui",
        "Pending field work": "Interventions terrain en attente",
        "Assistance queue": "File d'assistance",
        "Unassigned": "Non affecté",
        "NEW": "NOUVEAU",
        "IN PROGRESS": "EN COURS",
        "COMPLETED": "TERMINÉ",
        "REVIEWING": "EN EXAMEN",
        "Professional Accounts": "Comptes professionnels",
        "Service Zones": "Zones de service",
        "Network Health": "État du réseau",
        "Demo Overview": "Vue d'ensemble de la démo",
        "Demonstration interface only. Sample data, package names and operational metrics are illustrative and should be validated before production rollout.": "Interface de démonstration uniquement. Les données, noms de forfaits et indicateurs opérationnels sont indicatifs et doivent être validés avant le lancement en production.",
        "Business 50 Mbps": "Professionnel 50 Mbps",
        "Business Max 100 Mbps": "Professionnel Max 100 Mbps",
        "Home Plus 20 Mbps": "Domicile Plus 20 Mbps"
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0wjkp8p._.js.map
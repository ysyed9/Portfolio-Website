"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Navbar.jsx":
/*!***************************************!*\
  !*** ./src/app/components/Navbar.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavLink */ \"(app-pages-browser)/./src/app/components/NavLink.jsx\");\n/* harmony import */ var _heroicons_react_24_solid_esm_Bars3Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/solid/esm/Bars3Icon */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/Bars3Icon.js\");\n/* harmony import */ var _heroicons_react_24_solid_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid/esm/XMarkIcon */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var _MenuOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuOverlay */ \"(app-pages-browser)/./src/app/components/MenuOverlay.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst navLinks = [\n    {\n        title: \"About\",\n        path: \"#about\"\n    },\n    {\n        title: \"Projects\",\n        path: \"#projects\"\n    },\n    {\n        title: \"Contact\",\n        path: \"#contact\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const [navbarOpen, setNavbarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mx-auto px-4 py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"text-2xl md:text-3xl text-white font-semibold\",\n                        children: \"Younus\"\n                    }, void 0, false, {\n                        fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mobile-menu block md:hidden\",\n                        children: !navbarOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setNavbarOpen(true),\n                            className: \"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-black hover:border-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid_esm_Bars3Icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"h-5 w-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setNavbarOpen(false),\n                            className: \"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"h-5 w-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu hidden md:block md:w-auto\",\n                        id: \"navbar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0\",\n                            children: navLinks.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: link.path,\n                                        title: link.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            navbarOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuOverlay__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                links: navLinks\n            }, void 0, false, {\n                fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n                lineNumber: 62,\n                columnNumber: 21\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/components/Navbar.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"15c5sM/hZYq2eTRu58QbId6xljA=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM2QjtBQUNXO0FBQ1I7QUFDaUM7QUFBQTtBQUN6QjtBQUV4QyxNQUFNTyxXQUFXO0lBQ2Y7UUFDRUMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0NBQ0Q7QUFFRCxNQUFNQyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUU3QyxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ2Qsa0RBQUlBO3dCQUNIZ0IsTUFBTTt3QkFDTkYsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDWixDQUFDSCwyQkFDQSw4REFBQ007NEJBQ0NDLFNBQVMsSUFBTU4sY0FBYzs0QkFDN0JFLFdBQVU7c0NBRVYsNEVBQUNWLCtFQUFTQTtnQ0FBQ1UsV0FBVTs7Ozs7Ozs7OztzREFHdkIsOERBQUNHOzRCQUNDQyxTQUFTLElBQU1OLGNBQWM7NEJBQzdCRSxXQUFVO3NDQUVWLDRFQUFDVCwrRUFBU0E7Z0NBQUNTLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTNCLDhEQUFDQzt3QkFBSUQsV0FBVTt3QkFBaUNLLElBQUc7a0NBQ2pELDRFQUFDQzs0QkFBR04sV0FBVTtzQ0FDWFAsU0FBU2MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNuQiw4REFBQ0M7OENBQ0MsNEVBQUNyQixnREFBT0E7d0NBQUNhLE1BQU1NLEtBQUtiLElBQUk7d0NBQUVELE9BQU9jLEtBQUtkLEtBQUs7Ozs7OzttQ0FEcENlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPaEJaLDJCQUFhLDhEQUFDTCxvREFBV0E7Z0JBQUNtQixPQUFPbEI7Ozs7OzRCQUFlOzs7Ozs7O0FBR3ZEO0dBMUNNRztLQUFBQTtBQTRDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTmF2YmFyLmpzeD8xOTc0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2TGluayBmcm9tIFwiLi9OYXZMaW5rXCI7XG5pbXBvcnQgeyBCYXJzM0ljb24sIFhNYXJrSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XG5pbXBvcnQgTWVudU92ZXJsYXkgZnJvbSBcIi4vTWVudU92ZXJsYXlcIjtcblxuY29uc3QgbmF2TGlua3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJBYm91dFwiLFxuICAgIHBhdGg6IFwiI2Fib3V0XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQcm9qZWN0c1wiLFxuICAgIHBhdGg6IFwiI3Byb2plY3RzXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb250YWN0XCIsXG4gICAgcGF0aDogXCIjY29udGFjdFwiLFxuICB9LFxuXTtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBbbmF2YmFyT3Blbiwgc2V0TmF2YmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIG14LWF1dG8gYm9yZGVyIGJvcmRlci1bIzMzMzUzRl0gdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei0xMCBiZy1bIzEyMTIxMl0gYmctb3BhY2l0eS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG14LWF1dG8gcHgtNCBweS0yXCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj17XCIvXCJ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkXCJcbiAgICAgICAgPlxuICAgICAgICAgIFlvdW51c1xuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUgYmxvY2sgbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgeyFuYXZiYXJPcGVuID8gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZiYXJPcGVuKHRydWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQgYm9yZGVyLXNsYXRlLTIwMCB0ZXh0LXNsYXRlLTIwMCBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmJvcmRlci13aGl0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCYXJzM0ljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZiYXJPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIGJvcmRlci1zbGF0ZS0yMDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8WE1hcmtJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSBoaWRkZW4gbWQ6YmxvY2sgbWQ6dy1hdXRvXCIgaWQ9XCJuYXZiYXJcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBwLTQgbWQ6cC0wIG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtOCBtdC0wXCI+XG4gICAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj17bGluay5wYXRofSB0aXRsZT17bGluay50aXRsZX0gLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7bmF2YmFyT3BlbiA/IDxNZW51T3ZlcmxheSBsaW5rcz17bmF2TGlua3N9IC8+IDogbnVsbH1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdkxpbmsiLCJCYXJzM0ljb24iLCJYTWFya0ljb24iLCJNZW51T3ZlcmxheSIsIm5hdkxpbmtzIiwidGl0bGUiLCJwYXRoIiwiTmF2YmFyIiwibmF2YmFyT3BlbiIsInNldE5hdmJhck9wZW4iLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsImlkIiwidWwiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJsaSIsImxpbmtzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Navbar.jsx\n"));

/***/ })

});
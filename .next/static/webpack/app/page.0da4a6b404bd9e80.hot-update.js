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

/***/ "(app-pages-browser)/./src/app/api/send/emailjs.js":
/*!*************************************!*\
  !*** ./src/app/api/send/emailjs.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Emailjs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ \"(app-pages-browser)/./node_modules/emailjs-com/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../public/github-icon.svg */ \"(app-pages-browser)/./public/github-icon.svg\");\n/* harmony import */ var _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../public/linkedin-icon.svg */ \"(app-pages-browser)/./public/linkedin-icon.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Emailjs() {\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        email: \"\",\n        subject: \"\",\n        message: \"\"\n    });\n    const [isEmailSent, setIsEmailSent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isFormIncomplete, setIsFormIncomplete] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const { email, subject, message } = formValues;\n        setIsFormIncomplete(!email || !subject || !message);\n    }, [\n        formValues\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const publicKey = \"lmoiIWkqgOGyaGwcZ\";\n        emailjs_com__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init(publicKey);\n        const serviceID = \"service_p1ssj3f\";\n        const templateID = \"template_ju6bg6c\";\n        emailjs_com__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sendForm(serviceID, templateID, e.target).then((result)=>{\n            console.log(\"Email sent successfully:\", result.text);\n            setIsEmailSent(true);\n            setFormValues({\n                email: \"\",\n                subject: \"\",\n                message: \"\"\n            });\n        }).catch((error)=>{\n            console.error(\"Error sending email:\", error);\n        });\n    };\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormValues((prevValues)=>({\n                ...prevValues,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"contact\",\n        className: \"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2\"\n            }, void 0, false, {\n                fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl font-bold text-white my-2\",\n                        children: \"Let's Connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#ADB7BE] mb-4 max-w-md\",\n                        children: [\n                            \" \",\n                            \"I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"socials flex flex-row gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"https://github.com/ysyed9\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    src: _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    alt: \"Github Icon\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"https://www.linkedin.com/in/younus-syed-8457802a5/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    src: _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                    alt: \"Linkedin Icon\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Your email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"email\",\n                                    type: \"email\",\n                                    id: \"email\",\n                                    value: formValues.email,\n                                    onChange: handleInputChange,\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"Enter email...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"subject\",\n                                    className: \"text-white block text-sm mb-2 font-medium\",\n                                    children: \"Subject\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"subject\",\n                                    type: \"text\",\n                                    id: \"subject\",\n                                    value: formValues.subject,\n                                    onChange: handleInputChange,\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"Just saying hi\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"message\",\n                                    className: \"text-white block text-sm mb-2 font-medium\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"message\",\n                                    id: \"message\",\n                                    value: formValues.message,\n                                    onChange: handleInputChange,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"Let's talk about...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-blue-300 hover:bg-black text-white font-medium py-2.5 px-5 rounded-lg w-full\",\n                            disabled: isFormIncomplete,\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                            lineNumber: 137,\n                            columnNumber: 13\n                        }, this),\n                        isEmailSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-green-500 text-sm mt-2\",\n                            children: \"Email sent successfully!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                            lineNumber: 145,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                    lineNumber: 84,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/younussyed/Desktop/codeProjects/portofio-website/src/app/api/send/emailjs.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(Emailjs, \"ZBD2gF4DxWw9ht/1dEovuFL03Pk=\");\n_c = Emailjs;\n;\nvar _c;\n$RefreshReg$(_c, \"Emailjs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL3NlbmQvZW1haWxqcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDZTtBQUNWO0FBQ0w7QUFDb0I7QUFDSTtBQUN0QjtBQUdoQixTQUFTUTs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO1FBQzNDVSxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztJQUNYO0lBRUEsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2Usa0JBQWtCQyxvQkFBb0IsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRXpEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU0sRUFBRVMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUFHSjtRQUNwQ1Esb0JBQW9CLENBQUNOLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDQztJQUM3QyxHQUFHO1FBQUNKO0tBQVc7SUFFZixNQUFNUyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1DLFlBQVk7UUFDbEJsQix3REFBWSxDQUFDa0I7UUFFYixNQUFNRSxZQUFZO1FBQ2xCLE1BQU1DLGFBQWE7UUFFbkJyQiw0REFBZ0IsQ0FBQ29CLFdBQVdDLFlBQVlMLEVBQUVPLE1BQU0sRUFDN0NDLElBQUksQ0FBQyxDQUFDQztZQUNMQyxRQUFRQyxHQUFHLENBQUMsNEJBQTRCRixPQUFPRyxJQUFJO1lBQ25EaEIsZUFBZTtZQUNmTCxjQUFjO2dCQUNaQyxPQUFPO2dCQUNQQyxTQUFTO2dCQUNUQyxTQUFTO1lBQ1g7UUFDRixHQUNDbUIsS0FBSyxDQUFDLENBQUNDO1lBQ05KLFFBQVFJLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0o7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ2Y7UUFDekIsTUFBTSxFQUFFZ0IsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR2pCLEVBQUVPLE1BQU07UUFDaENoQixjQUFjLENBQUMyQixhQUFnQjtnQkFDN0IsR0FBR0EsVUFBVTtnQkFDYixDQUFDRixLQUFLLEVBQUVDO1lBQ1Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUNDQyxJQUFHO1FBQ0hDLFdBQVU7OzBCQUVWLDhEQUFDQztnQkFBSUQsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFHRixXQUFVO2tDQUFvQzs7Ozs7O2tDQUdsRCw4REFBQ0c7d0JBQUVILFdBQVU7OzRCQUNWOzRCQUFJOzs7Ozs7O2tDQUtQLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNwQyxrREFBSUE7Z0NBQUN3QyxNQUFLOzBDQUNULDRFQUFDckMsbURBQUtBO29DQUFDc0MsS0FBS3hDLCtEQUFVQTtvQ0FBRXlDLEtBQUk7Ozs7Ozs7Ozs7OzBDQUU5Qiw4REFBQzFDLGtEQUFJQTtnQ0FBQ3dDLE1BQUs7MENBQ1QsNEVBQUNyQyxtREFBS0E7b0NBQUNzQyxLQUFLdkMsaUVBQVlBO29DQUFFd0MsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXBDLDhEQUFDTDswQkFDRyw0RUFBQ007b0JBQUtQLFdBQVU7b0JBQWdCUSxVQUFVOUI7O3NDQUN4Qyw4REFBQ3VCOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ1M7b0NBQ0NDLFNBQVE7b0NBQ1JWLFdBQVU7OENBQ1g7Ozs7Ozs4Q0FHRCw4REFBQ1c7b0NBQ0NoQixNQUFLO29DQUNMaUIsTUFBSztvQ0FDTGIsSUFBRztvQ0FDSEgsT0FBTzNCLFdBQVdFLEtBQUs7b0NBQ3ZCMEMsVUFBVW5CO29DQUNWb0IsUUFBUTtvQ0FDUmQsV0FBVTtvQ0FDVmUsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ2Q7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FDQ0MsU0FBUTtvQ0FDUlYsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDVztvQ0FDQ2hCLE1BQUs7b0NBQ0xpQixNQUFLO29DQUNMYixJQUFHO29DQUNISCxPQUFPM0IsV0FBV0csT0FBTztvQ0FDekJ5QyxVQUFVbkI7b0NBQ1ZvQixRQUFRO29DQUNSZCxXQUFVO29DQUNWZSxhQUFZOzs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDZDs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNTO29DQUNDQyxTQUFRO29DQUNSVixXQUFVOzhDQUNYOzs7Ozs7OENBR0QsOERBQUNnQjtvQ0FDQ3JCLE1BQUs7b0NBQ0xJLElBQUc7b0NBQ0hILE9BQU8zQixXQUFXSSxPQUFPO29DQUN6QndDLFVBQVVuQjtvQ0FDVk0sV0FBVTtvQ0FDVmUsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ0U7NEJBQ0NMLE1BQUs7NEJBQ0xaLFdBQVU7NEJBQ1ZrQixVQUFVMUM7c0NBQ1g7Ozs7Ozt3QkFHQUYsNkJBQ1AsOERBQUM2Qjs0QkFBRUgsV0FBVTtzQ0FBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpEO0dBNUl3QmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXBpL3NlbmQvZW1haWxqcy5qcz9mZmU4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSBcIi9wdWJsaWMvZ2l0aHViLWljb24uc3ZnXCI7XG5pbXBvcnQgTGlua2VkaW5JY29uIGZyb20gXCIvcHVibGljL2xpbmtlZGluLWljb24uc3ZnXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW1haWxqcygpIHtcbiAgY29uc3QgW2Zvcm1WYWx1ZXMsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiBcIlwiLFxuICAgIHN1YmplY3Q6IFwiXCIsXG4gICAgbWVzc2FnZTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgW2lzRW1haWxTZW50LCBzZXRJc0VtYWlsU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0Zvcm1JbmNvbXBsZXRlLCBzZXRJc0Zvcm1JbmNvbXBsZXRlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBlbWFpbCwgc3ViamVjdCwgbWVzc2FnZSB9ID0gZm9ybVZhbHVlcztcbiAgICBzZXRJc0Zvcm1JbmNvbXBsZXRlKCFlbWFpbCB8fCAhc3ViamVjdCB8fCAhbWVzc2FnZSk7XG4gIH0sIFtmb3JtVmFsdWVzXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwdWJsaWNLZXkgPSBcImxtb2lJV2txZ09HeWFHd2NaXCI7XG4gICAgZW1haWxqcy5pbml0KHB1YmxpY0tleSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlSUQgPSBcInNlcnZpY2VfcDFzc2ozZlwiO1xuICAgIGNvbnN0IHRlbXBsYXRlSUQgPSBcInRlbXBsYXRlX2p1NmJnNmNcIjtcblxuICAgIGVtYWlsanMuc2VuZEZvcm0oc2VydmljZUlELCB0ZW1wbGF0ZUlELCBlLnRhcmdldClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseTpcIiwgcmVzdWx0LnRleHQpO1xuICAgICAgICBzZXRJc0VtYWlsU2VudCh0cnVlKTtcbiAgICAgICAgc2V0Rm9ybVZhbHVlcyh7XG4gICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgc3ViamVjdDogXCJcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIlwiLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIGVtYWlsOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0Rm9ybVZhbHVlcygocHJldlZhbHVlcykgPT4gKHtcbiAgICAgIC4uLnByZXZWYWx1ZXMsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD1cImNvbnRhY3RcIlxuICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBteS0xMiBtZDpteS0xMiBweS0yNCBnYXAtNCByZWxhdGl2ZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bcmFkaWFsLWdyYWRpZW50KGVsbGlwc2VfYXRfY2VudGVyLF92YXIoLS10dy1ncmFkaWVudC1zdG9wcykpXSBmcm9tLWJsdWUtNDAwIHRvLXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBoLTgwIHctODAgei0wIGJsdXItbGcgYWJzb2x1dGUgdG9wLTMvNCAtbGVmdC00IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUtMS8yXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTBcIj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbXktMlwiPlxuICAgICAgICAgIExldCZhcG9zO3MgQ29ubmVjdFxuICAgICAgICA8L2g1PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjQURCN0JFXSBtYi00IG1heC13LW1kXCI+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIEkmYXBvczttIGN1cnJlbnRseSBsb29raW5nIGZvciBuZXcgb3Bwb3J0dW5pdGllcywgbXkgaW5ib3ggaXMgYWx3YXlzXG4gICAgICAgICAgb3Blbi4gV2hldGhlciB5b3UgaGF2ZSBhIHF1ZXN0aW9uIG9yIGp1c3Qgd2FudCB0byBzYXkgaGksIEkmYXBvcztsbFxuICAgICAgICAgIHRyeSBteSBiZXN0IHRvIGdldCBiYWNrIHRvIHlvdSFcbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbHMgZmxleCBmbGV4LXJvdyBnYXAtMlwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20veXN5ZWQ5XCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtHaXRodWJJY29ufSBhbHQ9XCJHaXRodWIgSWNvblwiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4veW91bnVzLXN5ZWQtODQ1NzgwMmE1L1wiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17TGlua2VkaW5JY29ufSBhbHQ9XCJMaW5rZWRpbiBJY29uXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFlvdXIgZW1haWxcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMTgxOTFFXSBib3JkZXIgYm9yZGVyLVsjMzMzNTNGXSBwbGFjZWhvbGRlci1bIzlDQTJBOV0gdGV4dC1ncmF5LTEwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgYmxvY2sgdy1mdWxsIHAtMi41XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsLi4uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJsb2NrIHRleHQtc20gbWItMiBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdWJqZWN0XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5zdWJqZWN0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMTgxOTFFXSBib3JkZXIgYm9yZGVyLVsjMzMzNTNGXSBwbGFjZWhvbGRlci1bIzlDQTJBOV0gdGV4dC1ncmF5LTEwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgYmxvY2sgdy1mdWxsIHAtMi41XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkp1c3Qgc2F5aW5nIGhpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJsb2NrIHRleHQtc20gbWItMiBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNZXNzYWdlXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMTgxOTFFXSBib3JkZXIgYm9yZGVyLVsjMzMzNTNGXSBwbGFjZWhvbGRlci1bIzlDQTJBOV0gdGV4dC1ncmF5LTEwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgYmxvY2sgdy1mdWxsIHAtMi41XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxldCdzIHRhbGsgYWJvdXQuLi5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTMwMCBob3ZlcjpiZy1ibGFjayB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHB5LTIuNSBweC01IHJvdW5kZWQtbGcgdy1mdWxsXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRm9ybUluY29tcGxldGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNlbmQgTWVzc2FnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7aXNFbWFpbFNlbnQgJiYgKFxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgdGV4dC1zbSBtdC0yXCI+RW1haWwgc2VudCBzdWNjZXNzZnVsbHkhPC9wPlxuICAgICAgKX1cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJlbWFpbGpzIiwiTGluayIsIkdpdGh1Ykljb24iLCJMaW5rZWRpbkljb24iLCJJbWFnZSIsIkVtYWlsanMiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJpc0VtYWlsU2VudCIsInNldElzRW1haWxTZW50IiwiaXNGb3JtSW5jb21wbGV0ZSIsInNldElzRm9ybUluY29tcGxldGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdWJsaWNLZXkiLCJpbml0Iiwic2VydmljZUlEIiwidGVtcGxhdGVJRCIsInNlbmRGb3JtIiwidGFyZ2V0IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwibmFtZSIsInZhbHVlIiwicHJldlZhbHVlcyIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImRpdiIsImg1IiwicCIsImhyZWYiLCJzcmMiLCJhbHQiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/send/emailjs.js\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Form() {\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        let rege = /[^0-9a-z]/gi;\n        const numbers = input.split(\",\").map((el)=>el.trim().replace(rege, \"\"));\n        while(numbers.includes(\"\")){\n            let inx = numbers.indexOf(\"\");\n            numbers.splice(inx, 1);\n        }\n        setList([\n            ...list,\n            ...numbers\n        ]);\n        setInput(\"\");\n    };\n    const handleRising = ()=>{\n        const sortedList = [\n            ...list\n        ].sort((a, b)=>a - b);\n        setList(sortedList);\n    };\n    const handleDecrease = ()=>{\n        const sortedList = [\n            ...list\n        ].sort((a, b)=>b - a);\n        setList(sortedList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex justify-center mb-10\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Array:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"border border-slate-800 ml-1\",\n                                placeholder: \" lets see\",\n                                value: input,\n                                onChange: (e)=>setInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/chm/ThickCorgi/sim/components/Form.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chm/ThickCorgi/sim/components/Form.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border border-slate-900 ml-1 px-1 \",\n                        type: \"submit\",\n                        children: \"Visualize\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chm/ThickCorgi/sim/components/Form.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border border-slate-900 ml-1 px-1 \",\n                        onClick: ()=>setList([]),\n                        children: \"Clear\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chm/ThickCorgi/sim/components/Form.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border border-slate-900 ml-1 px-1 \",\n                        onClick: handleRising,\n                        children: \"Asc Order\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chm/ThickCorgi/sim/components/Form.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border border-slate-900 ml-1 px-1 \",\n                        onClick: handleDecrease,\n                        children: \"Desc Order\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chm/ThickCorgi/sim/components/Form.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chm/ThickCorgi/sim/components/Form.jsx\",\n                lineNumber: 36,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list-none flex justify-around mb-10\",\n                children: list.map((el, indx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"border border-black px-5 py-3 m-2 text-4xl \",\n                        children: el\n                    }, indx, false, {\n                        fileName: \"/Users/chm/ThickCorgi/sim/components/Form.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 14\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/chm/ThickCorgi/sim/components/Form.jsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Form, \"abta4i4xDNbiShbGvN6g6cv4JoY=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2dDO0FBQ0s7QUFHdEIsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlDLE9BQU87UUFDWCxNQUFNQyxVQUFVTixNQUFNTyxLQUFLLENBQUMsS0FBS0MsR0FBRyxDQUFDQyxDQUFBQSxLQUFLQSxHQUFHQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ04sTUFBTTtRQUNsRSxNQUFNQyxRQUFRTSxRQUFRLENBQUMsSUFBSTtZQUN6QixJQUFJQyxNQUFNUCxRQUFRUSxPQUFPLENBQUM7WUFFMUJSLFFBQVFTLE1BQU0sQ0FBQ0YsS0FBSTtRQUN6QjtRQUNJZCxRQUFRO2VBQUlEO2VBQVNRO1NBQVE7UUFDN0JMLFNBQVM7SUFDWDtJQUVBLE1BQU1lLGVBQWU7UUFDbkIsTUFBTUMsYUFBYTtlQUFJbkI7U0FBSyxDQUFDb0IsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQUlELElBQUVDO1FBQzNDckIsUUFBUWtCO0lBQ1Y7SUFDQSxNQUFNSSxpQkFBaUI7UUFDckIsTUFBTUosYUFBYTtlQUFJbkI7U0FBSyxDQUFDb0IsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQUlBLElBQUVEO1FBQzNDcEIsUUFBUWtCO0lBQ1Y7SUFFQSxxQkFDSTs7MEJBR0MsOERBQUNLO2dCQUFLQyxXQUFVO2dCQUE0QkMsVUFBVXRCOztrQ0FDbkQsOERBQUN1Qjs7NEJBQU07MENBRUwsOERBQUN6QjtnQ0FDRDBCLE1BQUs7Z0NBQ0xILFdBQVk7Z0NBQ1pJLGFBQVk7Z0NBQ1pDLE9BQU81QjtnQ0FDUDZCLFVBQVUsQ0FBQzFCLElBQUlGLFNBQVNFLEVBQUUyQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FHeEMsOERBQUNHO3dCQUFPUixXQUFVO3dCQUFxQ0csTUFBSztrQ0FBUzs7Ozs7O2tDQUNyRSw4REFBQ0s7d0JBQU9SLFdBQVU7d0JBQXFDUyxTQUFTLElBQUtqQyxRQUFRLEVBQUU7a0NBQUc7Ozs7OztrQ0FDbEYsOERBQUNnQzt3QkFBT1IsV0FBVTt3QkFBcUNTLFNBQVNoQjtrQ0FBYzs7Ozs7O2tDQUM5RSw4REFBQ2U7d0JBQU9SLFdBQVU7d0JBQXFDUyxTQUFTWDtrQ0FBZ0I7Ozs7Ozs7Ozs7OzswQkFJbEYsOERBQUNZO2dCQUFJVixXQUFVOzBCQUNaekIsS0FBS1UsR0FBRyxDQUFDLENBQUNDLElBQUd5QjtvQkFDZCxxQkFDRyw4REFBQ0M7d0JBQUdaLFdBQVU7a0NBQTBEZDt1QkFBUHlCOzs7OztnQkFFbEU7Ozs7Ozs7O0FBS1o7R0ExRHdCckM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzeD8yOTExIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHtCaU5vdGV9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpe1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCByZWdlID0gL1teMC05YS16XS9naVxuICAgIGNvbnN0IG51bWJlcnMgPSBpbnB1dC5zcGxpdCgnLCcpLm1hcChlbD0+IGVsLnRyaW0oKS5yZXBsYWNlKHJlZ2UsICcnKSlcbiAgICB3aGlsZShudW1iZXJzLmluY2x1ZGVzKCcnKSl7XG4gICAgICBsZXQgaW54ID0gbnVtYmVycy5pbmRleE9mKCcnKVxuXG4gICAgICBudW1iZXJzLnNwbGljZShpbngsMSlcbn1cbiAgICBzZXRMaXN0KFsuLi5saXN0LCAuLi5udW1iZXJzXSlcbiAgICBzZXRJbnB1dCgnJylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJpc2luZyA9ICgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRMaXN0ID0gWy4uLmxpc3RdLnNvcnQoKGEsYik9PmEtYilcbiAgICBzZXRMaXN0KHNvcnRlZExpc3QpXG4gIH1cbiAgY29uc3QgaGFuZGxlRGVjcmVhc2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgc29ydGVkTGlzdCA9IFsuLi5saXN0XS5zb3J0KChhLGIpPT5iLWEpXG4gICAgc2V0TGlzdChzb3J0ZWRMaXN0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgXG4gICAgICAgXG4gICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0xMFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEFycmF5OiBcbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBjbGFzc05hbWUgPSAnYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgbWwtMSdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIGxldHMgc2VlXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtOTAwIG1sLTEgcHgtMSBcIiB0eXBlPSdzdWJtaXQnPlZpc3VhbGl6ZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zbGF0ZS05MDAgbWwtMSBweC0xIFwiIG9uQ2xpY2s9eygpPT4gc2V0TGlzdChbXSl9PkNsZWFyPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTkwMCBtbC0xIHB4LTEgXCIgb25DbGljaz17aGFuZGxlUmlzaW5nfT5Bc2MgT3JkZXI8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtOTAwIG1sLTEgcHgtMSBcIiBvbkNsaWNrPXtoYW5kbGVEZWNyZWFzZX0+RGVzYyBPcmRlcjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+IFxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LW5vbmUgZmxleCBqdXN0aWZ5LWFyb3VuZCBtYi0xMFwiPlxuICAgICAgICAgIHtsaXN0Lm1hcCgoZWwsaW5keCk9PntcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrIHB4LTUgcHktMyBtLTIgdGV4dC00eGwgXCIga2V5PXtpbmR4fT57ZWx9PC9saT5cblxuICAgICAgICAgICApfVxuICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQmlOb3RlIiwiRm9ybSIsImxpc3QiLCJzZXRMaXN0IiwiaW5wdXQiLCJzZXRJbnB1dCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlZ2UiLCJudW1iZXJzIiwic3BsaXQiLCJtYXAiLCJlbCIsInRyaW0iLCJyZXBsYWNlIiwiaW5jbHVkZXMiLCJpbngiLCJpbmRleE9mIiwic3BsaWNlIiwiaGFuZGxlUmlzaW5nIiwic29ydGVkTGlzdCIsInNvcnQiLCJhIiwiYiIsImhhbmRsZURlY3JlYXNlIiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsImluZHgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Form.jsx\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./components/Toolbar.jsx":
/*!********************************!*\
  !*** ./components/Toolbar.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Toolbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_BiSolidUpArrowAlt_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=BiSolidUpArrowAlt!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Toolbar() {\n    _s();\n    const [showIcon, setShowIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleMouseDown = (e)=>{\n        setDragging(true);\n        document.addEventListener(\"mousemove\", handleMouseMove);\n        document.addEventListener(\"mouseup\", handleMouseUp);\n    };\n    const handleMouseMove = (e)=>{\n        if (dragging) {\n            setPosition({\n                x: e.clientX,\n                y: e.clientY\n            });\n        }\n    };\n    const handleMouseUp = ()=>{\n        setDragging(false);\n        document.removeEventListener(\"mousemove\", handleMouseMove);\n        document.removeEventListener(\"mouseup\", handleMouseUp);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"m-2 border border-slate-800 px-2\",\n                onClick: ()=>setShowIcon(!showIcon),\n                children: \"k arrow\"\n            }, void 0, false, {\n                fileName: \"/Users/chm/ThickCorgi/sim/components/Toolbar.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            showIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\",\n                    left: \"\".concat(position.x, \"px\"),\n                    top: \"\".concat(position.y, \"px\"),\n                    cursor: \"grab\"\n                },\n                onMouseDown: handleMouseDown,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiSolidUpArrowAlt_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiSolidUpArrowAlt, {\n                    size: 30\n                }, void 0, false, {\n                    fileName: \"/Users/chm/ThickCorgi/sim/components/Toolbar.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chm/ThickCorgi/sim/components/Toolbar.jsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chm/ThickCorgi/sim/components/Toolbar.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Toolbar, \"uE/EQLIQJfaqHKELIv6n2gyUoR4=\");\n_c = Toolbar;\nvar _c;\n$RefreshReg$(_c, \"Toolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVG9vbGJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNXO0FBRXBDLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO1FBQUVPLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ3RELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNVyxrQkFBa0IsQ0FBQ0M7UUFDdkJGLFlBQVk7UUFDWkcsU0FBU0MsZ0JBQWdCLENBQUMsYUFBYUM7UUFDdkNGLFNBQVNDLGdCQUFnQixDQUFDLFdBQVdFO0lBQ3ZDO0lBRUEsTUFBTUQsa0JBQWtCLENBQUNIO1FBQ3ZCLElBQUlILFVBQVU7WUFDWkgsWUFBWTtnQkFDVkMsR0FBR0ssRUFBRUssT0FBTztnQkFDWlQsR0FBR0ksRUFBRU0sT0FBTztZQUNkO1FBQ0Y7SUFDRjtJQUVBLE1BQU1GLGdCQUFnQjtRQUNwQk4sWUFBWTtRQUNaRyxTQUFTTSxtQkFBbUIsQ0FBQyxhQUFhSjtRQUMxQ0YsU0FBU00sbUJBQW1CLENBQUMsV0FBV0g7SUFDMUM7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDRCxXQUFVO2dCQUNWRSxTQUFTLElBQU1uQixZQUFZLENBQUNEOzBCQUM3Qjs7Ozs7O1lBR0FBLDBCQUNDLDhEQUFDaUI7Z0JBQ0NJLE9BQU87b0JBQ0xuQixVQUFVO29CQUNWb0IsTUFBTSxHQUFjLE9BQVhwQixTQUFTRSxDQUFDLEVBQUM7b0JBQ3BCbUIsS0FBSyxHQUFjLE9BQVhyQixTQUFTRyxDQUFDLEVBQUM7b0JBQ25CbUIsUUFBUTtnQkFDVjtnQkFDQUMsYUFBYWpCOzBCQUViLDRFQUFDVixzR0FBaUJBO29CQUFDNEIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkM7R0FqRHdCM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub29sYmFyLmpzeD9mNGNiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmlTb2xpZFVwQXJyb3dBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvb2xiYXIoKSB7XG4gIGNvbnN0IFtzaG93SWNvbiwgc2V0U2hvd0ljb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgW2RyYWdnaW5nLCBzZXREcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGUpID0+IHtcbiAgICBzZXREcmFnZ2luZyh0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgc2V0UG9zaXRpb24oe1xuICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgIHk6IGUuY2xpZW50WSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgIHNldERyYWdnaW5nKGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0xMFwiPlxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPVwibS0yIGJvcmRlciBib3JkZXItc2xhdGUtODAwIHB4LTJcIiBcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0ljb24oIXNob3dJY29uKX1cbiAgICAgID5cbiAgICAgICAgayBhcnJvd1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd0ljb24gJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogYCR7cG9zaXRpb24ueH1weGAsXG4gICAgICAgICAgICB0b3A6IGAke3Bvc2l0aW9uLnl9cHhgLFxuICAgICAgICAgICAgY3Vyc29yOiAnZ3JhYicsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICAgICAgICA+XG4gICAgICAgICAgPEJpU29saWRVcEFycm93QWx0IHNpemU9ezMwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJpU29saWRVcEFycm93QWx0IiwiVG9vbGJhciIsInNob3dJY29uIiwic2V0U2hvd0ljb24iLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwieCIsInkiLCJkcmFnZ2luZyIsInNldERyYWdnaW5nIiwiaGFuZGxlTW91c2VEb3duIiwiZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlVXAiLCJjbGllbnRYIiwiY2xpZW50WSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiY3Vyc29yIiwib25Nb3VzZURvd24iLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Toolbar.jsx\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./components/buttons/PointerButton.jsx":
/*!**********************************************!*\
  !*** ./components/buttons/PointerButton.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PointerButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_BiSolidUpArrowAlt_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=BiSolidUpArrowAlt!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction PointerButton(param) {\n    let { name, arrow, color } = param;\n    _s();\n    const [showIcon, setShowIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleMouseMove = (e)=>{\n            if (isDragging) {\n                setPosition({\n                    x: e.clientX - offset.x,\n                    y: e.clientY - offset.y\n                });\n            }\n        };\n        const handleMouseUp = ()=>{\n            setIsDragging(false);\n            document.removeEventListener(\"mousemove\", handleMouseMove);\n            document.removeEventListener(\"mouseup\", handleMouseUp);\n        };\n        if (isDragging) {\n            document.addEventListener(\"mousemove\", handleMouseMove);\n            document.addEventListener(\"mouseup\", handleMouseUp);\n        }\n        return ()=>{\n            document.removeEventListener(\"mousemove\", handleMouseMove);\n            document.removeEventListener(\"mouseup\", handleMouseUp);\n        };\n    }, [\n        isDragging,\n        offset\n    ]);\n    const handleMouseDown = (e)=>{\n        setIsDragging(true);\n        setOffset({\n            x: e.clientX - position.x,\n            y: e.clientY - position.y\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center mb-10\",\n        style: {\n            pointerEvents: \"none\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"m-2 border border-slate-800 px-2\",\n                onClick: ()=>setShowIcon(!showIcon),\n                style: {\n                    pointerEvents: \"auto\"\n                },\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/chm/ThickCorgi/sim/components/buttons/PointerButton.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            showIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-end \",\n                style: {\n                    position: \"absolute\",\n                    top: position.y + \"px\",\n                    left: position.x + \"px\",\n                    cursor: isDragging ? \"grabbing\" : \"grab\",\n                    pointerEvents: \"auto\"\n                },\n                onMouseDown: handleMouseDown,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiSolidUpArrowAlt_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiSolidUpArrowAlt, {\n                        size: 60,\n                        color: \"red\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chm/ThickCorgi/sim/components/buttons/PointerButton.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    \" \",\n                    \"\".concat(arrow, \" arrow\")\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chm/ThickCorgi/sim/components/buttons/PointerButton.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chm/ThickCorgi/sim/components/buttons/PointerButton.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(PointerButton, \"ftzjnXvksrilg5NgPrDzqBb54Qk=\");\n_c = PointerButton;\nvar _c;\n$RefreshReg$(_c, \"PointerButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYnV0dG9ucy9Qb2ludGVyQnV0dG9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBQ0E7QUFFcEMsU0FBU0ksY0FBYyxLQUFvQjtRQUFwQixFQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFDLEdBQXBCOztJQUNwQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO1FBQUVXLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ3RELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNlLFFBQVFDLFVBQVUsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQUVXLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBRWxEWCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixrQkFBa0IsQ0FBQ0M7WUFDdkIsSUFBSUwsWUFBWTtnQkFDZEgsWUFBWTtvQkFDVkMsR0FBR08sRUFBRUMsT0FBTyxHQUFHSixPQUFPSixDQUFDO29CQUN2QkMsR0FBR00sRUFBRUUsT0FBTyxHQUFHTCxPQUFPSCxDQUFDO2dCQUN6QjtZQUNGO1FBQ0Y7UUFFQSxNQUFNUyxnQkFBZ0I7WUFDcEJQLGNBQWM7WUFDZFEsU0FBU0MsbUJBQW1CLENBQUMsYUFBYU47WUFDMUNLLFNBQVNDLG1CQUFtQixDQUFDLFdBQVdGO1FBQzFDO1FBRUEsSUFBSVIsWUFBWTtZQUNkUyxTQUFTRSxnQkFBZ0IsQ0FBQyxhQUFhUDtZQUN2Q0ssU0FBU0UsZ0JBQWdCLENBQUMsV0FBV0g7UUFDdkM7UUFFQSxPQUFPO1lBQ0xDLFNBQVNDLG1CQUFtQixDQUFDLGFBQWFOO1lBQzFDSyxTQUFTQyxtQkFBbUIsQ0FBQyxXQUFXRjtRQUMxQztJQUNGLEdBQUc7UUFBQ1I7UUFBWUU7S0FBTztJQUV2QixNQUFNVSxrQkFBa0IsQ0FBQ1A7UUFDdkJKLGNBQWM7UUFDZEUsVUFBVTtZQUNSTCxHQUFHTyxFQUFFQyxPQUFPLEdBQUdWLFNBQVNFLENBQUM7WUFDekJDLEdBQUdNLEVBQUVFLE9BQU8sR0FBR1gsU0FBU0csQ0FBQztRQUMzQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVU7UUFBbUNDLE9BQU87WUFBRUMsZUFBZTtRQUFPOzswQkFFL0UsOERBQUNDO2dCQUNDSCxXQUFVO2dCQUNWSSxTQUFTLElBQU12QixZQUFZLENBQUNEO2dCQUM1QnFCLE9BQU87b0JBQUVDLGVBQWU7Z0JBQU87MEJBRTlCekI7Ozs7OztZQUdGRywwQkFDQyw4REFBQ21CO2dCQUNDQyxXQUFVO2dCQUNWQyxPQUFPO29CQUNMbkIsVUFBVTtvQkFDVnVCLEtBQUt2QixTQUFTRyxDQUFDLEdBQUc7b0JBQ2xCcUIsTUFBTXhCLFNBQVNFLENBQUMsR0FBRztvQkFDbkJ1QixRQUFRckIsYUFBYSxhQUFhO29CQUNsQ2dCLGVBQWU7Z0JBQ2pCO2dCQUNBTSxhQUFhVjs7a0NBRWIsOERBQUN2QixzR0FBaUJBO3dCQUFDa0MsTUFBTTt3QkFBSTlCLE9BQU07Ozs7OztvQkFBTztvQkFBRyxHQUFRLE9BQU5ELE9BQU07Ozs7Ozs7Ozs7Ozs7QUFLL0Q7R0FyRXdCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1dHRvbnMvUG9pbnRlckJ1dHRvbi5qc3g/YWFhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmlTb2xpZFVwQXJyb3dBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvaW50ZXJCdXR0b24oe25hbWUsIGFycm93LCBjb2xvcn0pIHtcbiAgY29uc3QgW3Nob3dJY29uLCBzZXRTaG93SWNvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbaXNEcmFnZ2luZywgc2V0SXNEcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgICAgc2V0UG9zaXRpb24oe1xuICAgICAgICAgIHg6IGUuY2xpZW50WCAtIG9mZnNldC54LFxuICAgICAgICAgIHk6IGUuY2xpZW50WSAtIG9mZnNldC55XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgICAgc2V0SXNEcmFnZ2luZyhmYWxzZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApO1xuICAgIH07XG5cbiAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKTtcbiAgICB9O1xuICB9LCBbaXNEcmFnZ2luZywgb2Zmc2V0XSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGUpID0+IHtcbiAgICBzZXRJc0RyYWdnaW5nKHRydWUpO1xuICAgIHNldE9mZnNldCh7XG4gICAgICB4OiBlLmNsaWVudFggLSBwb3NpdGlvbi54LFxuICAgICAgeTogZS5jbGllbnRZIC0gcG9zaXRpb24ueVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtYi0xMFwiIHN0eWxlPXt7IHBvaW50ZXJFdmVudHM6ICdub25lJyB9fT5cblxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPVwibS0yIGJvcmRlciBib3JkZXItc2xhdGUtODAwIHB4LTJcIiBcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0ljb24oIXNob3dJY29uKX1cbiAgICAgICAgc3R5bGU9e3sgcG9pbnRlckV2ZW50czogJ2F1dG8nIH19XG4gICAgICA+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHtzaG93SWNvbiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBcIiBcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnkgKyAncHgnLFxuICAgICAgICAgICAgbGVmdDogcG9zaXRpb24ueCArICdweCcsXG4gICAgICAgICAgICBjdXJzb3I6IGlzRHJhZ2dpbmcgPyAnZ3JhYmJpbmcnIDogJ2dyYWInLFxuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ2F1dG8nXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICAgICAgICA+XG4gICAgICAgICAgPEJpU29saWRVcEFycm93QWx0IHNpemU9ezYwfSBjb2xvcj0ncmVkJy8+IHtgJHthcnJvd30gYXJyb3dgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJpU29saWRVcEFycm93QWx0IiwiUG9pbnRlckJ1dHRvbiIsIm5hbWUiLCJhcnJvdyIsImNvbG9yIiwic2hvd0ljb24iLCJzZXRTaG93SWNvbiIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ4IiwieSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwiaGFuZGxlTW91c2VNb3ZlIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwiaGFuZGxlTW91c2VVcCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZURvd24iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJidXR0b24iLCJvbkNsaWNrIiwidG9wIiwibGVmdCIsImN1cnNvciIsIm9uTW91c2VEb3duIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/buttons/PointerButton.jsx\n"));

/***/ })

});
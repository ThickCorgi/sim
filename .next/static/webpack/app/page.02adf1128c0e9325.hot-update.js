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

/***/ "(app-pages-browser)/./components/ButtonK.jsx":
/*!********************************!*\
  !*** ./components/ButtonK.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonK; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_BiSolidUpArrowAlt_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=BiSolidUpArrowAlt!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ButtonK() {\n    _s();\n    const [showIcon, setShowIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleMouseMove = (e)=>{\n            if (isDragging) {\n                setPosition({\n                    x: e.clientX - offset.x,\n                    y: e.clientY - offset.y\n                });\n            }\n        };\n        const handleMouseUp = ()=>{\n            setIsDragging(false);\n            document.removeEventListener(\"mousemove\", handleMouseMove);\n            document.removeEventListener(\"mouseup\", handleMouseUp);\n        };\n        if (isDragging) {\n            document.addEventListener(\"mousemove\", handleMouseMove);\n            document.addEventListener(\"mouseup\", handleMouseUp);\n        }\n        return ()=>{\n            document.removeEventListener(\"mousemove\", handleMouseMove);\n            document.removeEventListener(\"mouseup\", handleMouseUp);\n        };\n    }, [\n        isDragging,\n        offset\n    ]);\n    const handleMouseDown = (e)=>{\n        setIsDragging(true);\n        setOffset({\n            x: e.clientX - position.x,\n            y: e.clientY - position.y\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center mb-10\",\n        style: {\n            pointerEvents: \"none\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"m-2 border border-slate-800 px-2\",\n                onClick: ()=>setShowIcon(!showIcon),\n                style: {\n                    pointerEvents: \"auto\"\n                },\n                children: \"k arrow\"\n            }, void 0, false, {\n                fileName: \"/Users/chm/ThickCorgi/sim/components/ButtonK.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            showIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-end \",\n                style: {\n                    position: \"absolute\",\n                    top: position.y + \"px\",\n                    left: position.x + \"px\",\n                    cursor: isDragging ? \"grabbing\" : \"grab\",\n                    pointerEvents: \"auto\"\n                },\n                onMouseDown: handleMouseDown,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiSolidUpArrowAlt_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiSolidUpArrowAlt, {\n                        size: 60\n                    }, void 0, false, {\n                        fileName: \"/Users/chm/ThickCorgi/sim/components/ButtonK.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    \" k\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chm/ThickCorgi/sim/components/ButtonK.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chm/ThickCorgi/sim/components/ButtonK.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(ButtonK, \"ftzjnXvksrilg5NgPrDzqBb54Qk=\");\n_c = ButtonK;\nvar _c;\n$RefreshReg$(_c, \"ButtonK\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnV0dG9uSy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNBO0FBRXBDLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO1FBQUVRLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ3RELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUM7UUFBRVEsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFFbERSLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsa0JBQWtCLENBQUNDO1lBQ3ZCLElBQUlMLFlBQVk7Z0JBQ2RILFlBQVk7b0JBQ1ZDLEdBQUdPLEVBQUVDLE9BQU8sR0FBR0osT0FBT0osQ0FBQztvQkFDdkJDLEdBQUdNLEVBQUVFLE9BQU8sR0FBR0wsT0FBT0gsQ0FBQztnQkFDekI7WUFDRjtRQUNGO1FBRUEsTUFBTVMsZ0JBQWdCO1lBQ3BCUCxjQUFjO1lBQ2RRLFNBQVNDLG1CQUFtQixDQUFDLGFBQWFOO1lBQzFDSyxTQUFTQyxtQkFBbUIsQ0FBQyxXQUFXRjtRQUMxQztRQUVBLElBQUlSLFlBQVk7WUFDZFMsU0FBU0UsZ0JBQWdCLENBQUMsYUFBYVA7WUFDdkNLLFNBQVNFLGdCQUFnQixDQUFDLFdBQVdIO1FBQ3ZDO1FBRUEsT0FBTztZQUNMQyxTQUFTQyxtQkFBbUIsQ0FBQyxhQUFhTjtZQUMxQ0ssU0FBU0MsbUJBQW1CLENBQUMsV0FBV0Y7UUFDMUM7SUFDRixHQUFHO1FBQUNSO1FBQVlFO0tBQU87SUFFdkIsTUFBTVUsa0JBQWtCLENBQUNQO1FBQ3ZCSixjQUFjO1FBQ2RFLFVBQVU7WUFDUkwsR0FBR08sRUFBRUMsT0FBTyxHQUFHVixTQUFTRSxDQUFDO1lBQ3pCQyxHQUFHTSxFQUFFRSxPQUFPLEdBQUdYLFNBQVNHLENBQUM7UUFDM0I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYztRQUFJQyxXQUFVO1FBQW1DQyxPQUFPO1lBQUVDLGVBQWU7UUFBTzs7MEJBRS9FLDhEQUFDQztnQkFDQ0gsV0FBVTtnQkFDVkksU0FBUyxJQUFNdkIsWUFBWSxDQUFDRDtnQkFDNUJxQixPQUFPO29CQUFFQyxlQUFlO2dCQUFPOzBCQUNoQzs7Ozs7O1lBSUF0QiwwQkFDQyw4REFBQ21CO2dCQUNDQyxXQUFVO2dCQUNWQyxPQUFPO29CQUNMbkIsVUFBVTtvQkFDVnVCLEtBQUt2QixTQUFTRyxDQUFDLEdBQUc7b0JBQ2xCcUIsTUFBTXhCLFNBQVNFLENBQUMsR0FBRztvQkFDbkJ1QixRQUFRckIsYUFBYSxhQUFhO29CQUNsQ2dCLGVBQWU7Z0JBQ2pCO2dCQUNBTSxhQUFhVjs7a0NBRWIsOERBQUNwQixzR0FBaUJBO3dCQUFDK0IsTUFBTTs7Ozs7O29CQUFNOzs7Ozs7Ozs7Ozs7O0FBS3pDO0dBckV3QjlCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV0dG9uSy5qc3g/ZDc1MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmlTb2xpZFVwQXJyb3dBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbksoKSB7XG4gIGNvbnN0IFtzaG93SWNvbiwgc2V0U2hvd0ljb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldElzRHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICAgIHNldFBvc2l0aW9uKHtcbiAgICAgICAgICB4OiBlLmNsaWVudFggLSBvZmZzZXQueCxcbiAgICAgICAgICB5OiBlLmNsaWVudFkgLSBvZmZzZXQueVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICAgIHNldElzRHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKTtcbiAgICB9O1xuXG4gICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcCk7XG4gICAgfTtcbiAgfSwgW2lzRHJhZ2dpbmcsIG9mZnNldF0pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgc2V0SXNEcmFnZ2luZyh0cnVlKTtcbiAgICBzZXRPZmZzZXQoe1xuICAgICAgeDogZS5jbGllbnRYIC0gcG9zaXRpb24ueCxcbiAgICAgIHk6IGUuY2xpZW50WSAtIHBvc2l0aW9uLnlcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWItMTBcIiBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiAnbm9uZScgfX0+XG5cbiAgICAgIDxidXR0b24gXG4gICAgICAgIGNsYXNzTmFtZT1cIm0tMiBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBweC0yXCIgXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dJY29uKCFzaG93SWNvbil9XG4gICAgICAgIHN0eWxlPXt7IHBvaW50ZXJFdmVudHM6ICdhdXRvJyB9fVxuICAgICAgPlxuICAgICAgICBrIGFycm93XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge3Nob3dJY29uICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIFwiIFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogcG9zaXRpb24ueSArICdweCcsXG4gICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi54ICsgJ3B4JyxcbiAgICAgICAgICAgIGN1cnNvcjogaXNEcmFnZ2luZyA/ICdncmFiYmluZycgOiAnZ3JhYicsXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnYXV0bydcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgID5cbiAgICAgICAgICA8QmlTb2xpZFVwQXJyb3dBbHQgc2l6ZT17NjB9IC8+IGtcbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCaVNvbGlkVXBBcnJvd0FsdCIsIkJ1dHRvbksiLCJzaG93SWNvbiIsInNldFNob3dJY29uIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJoYW5kbGVNb3VzZU1vdmUiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZVVwIiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vdXNlRG93biIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0b3AiLCJsZWZ0IiwiY3Vyc29yIiwib25Nb3VzZURvd24iLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ButtonK.jsx\n"));

/***/ })

});
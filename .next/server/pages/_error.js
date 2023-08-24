"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 7424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _error)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/assets/Images/404Page/forest.png
/* harmony default export */ const forest = ({"src":"/_next/static/media/forest.ac3278e7.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42mMAgUvv5/PtetLOx4AOGtyZGUDg7LtZu46/a9kJYs+55doi2es9j4GBQQyu8Pibvjur71W+Ml8U6zD/odGXiUeK/2+41r6FgYGBiWHGVYP02Zd9/6dsT/nvvTT2/4ybGn+OvGn9dvjFxP/S7QHnGaZfsrox5YLp/7m3Lf6W7Q3+P+Wywf8djyv+73hW/T9ng89xhhmXLJ/MvGL9f8Ed61+5a9zf1e4xur76StWmba+yH825qXOZoWK9eUrrHvPlNVutJzEk2xfY5xsVMeQaNlTu0E6tWGtezcDAYCzJwGACxKbyDEFmSkZ5JqpOJY4aDE4OygwMRlIAkNtujKFJ+AAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/contexts/404/404page.tsx



function ErrorPage() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "h-screen text-center relative justify-center items-center flex flex-col",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex text-[10vw] font-black",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: forest.src,
                    alt: "tree-icon",
                    className: "w-[30vw] mx-auto"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-center ml-[3vw]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "font-[inter] p-1 xl:p-4 font-black",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-greenSRE100",
                                    children: "4"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-greenSRE200",
                                    children: "0"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-greenSRE100",
                                    children: "4"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-[1.3vw] italic font-semibold font-[inter] text-left ml-4",
                            children: [
                                "We can't find the page that you're ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                " looking for..."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            className: "font-[Montserrat-Bold] bg-[#FFFFFF] text-[#169470] text-[2vw] px-[30px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer mt-4 ml-4",
                            style: {
                                filter: "drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))"
                            },
                            children: "← Back to Home"
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/SEO/index.tsx
var SEO = __webpack_require__(7353);
;// CONCATENATED MODULE: ./pages/_error.tsx



const Error = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(SEO/* default */.Z, {
        title: "SRE ITB | Error",
        children: /*#__PURE__*/ jsx_runtime_.jsx(ErrorPage, {})
    });
};
/* harmony default export */ const _error = (Error);


/***/ }),

/***/ 7353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



const SEO = ({ title , children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7424));
module.exports = __webpack_exports__;

})();
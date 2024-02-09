"use strict";
exports.id = 683;
exports.ids = [683,905];
exports.modules = {

/***/ 5905:
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

/***/ 2199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ComingSoon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/Images/ComingSoon/Header.webp
/* harmony default export */ const Header = ({"src":"/_next/static/media/Header.3ebcc01c.webp","height":776,"width":1379,"blurDataURL":"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAkA4JYgCdAEO137PgAD7ngzuoUB77l6u7AlqWawbdOLjMg+m1IAj3YU/Y2+gYYAA","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/assets/Images/Illustration/LeafWhite.png
/* harmony default export */ const LeafWhite = ({"src":"/_next/static/media/LeafWhite.1ab662b2.png","height":1060,"width":1060,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAhklEQVR42mPABX7/+8n4+98vRjDn+59vjD/+fGOCS/79yQhX+e3PF0ZknT///mCGsf/8+yUMM0EcaILqz7/f2ZCs6AfiCoZvv79Kff/z1Q6oIBSoIAmIDX/9/cHz6+/PSiAuAyr4wgHT9ePvd3mgAnOgAhUGYgDQBJjD4SYwAk1gApoAdzgA5J5ZBfjWS3IAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/contexts/ComingSoon/ComingSoon.tsx





const Hero = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "h-screen flex flex-col justify-center items-center overflow-x-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative w-full h-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: Header,
                    alt: "Header",
                    layout: "fill",
                    objectFit: "cover",
                    placeholder: "blur"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full h-full opacity-50 bg-[#000000]"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute inset-0 justify-center items-center flex flex-col",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "font-montserrat text-center text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "xl:text-[48px] md:text-[40px] text-[32px] font-bold leading-[60px] text-shadow white-text-shadow",
                                children: "Exciting News Await"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "xl:text-[22px] md:text-[19px] text-[15px] px-[10vw] mt-[2.5vw]",
                                children: "We're cooking up something extraordinary behind the scenes. Stay tuned for a grand reveal that will redefine your experience. Our team is working tirelessly to bring you innovation, creativity, and a touch of magic."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "translate-y-[10vw] flex justify-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: LeafWhite.src,
                                    alt: "leaf-icon",
                                    className: "w-[100px] h-[100px]"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const ComingSoon = (Hero);


/***/ })

};
;
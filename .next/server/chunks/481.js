"use strict";
exports.id = 481;
exports.ids = [481];
exports.modules = {

/***/ 396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const Card = ({ image , title , desc  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative bg-gradient-to-r from-[#0D664C] to-[#169470] w-auto h-[500px] rounded-[60px] overflow-hidden mb-[10px] mx-[5%]",
        style: {
            filter: "drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[80%] h-[40%] relative flex mx-auto mt-[30px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: image,
                    alt: title,
                    layout: "fill",
                    objectFit: "cover",
                    className: "rounded-[30px]"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-[130px] w-full px-4 flex flex-col items-center justify-center mt-[10px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "text-white text-xl font-semibold font-[Montserrat-Bold] mb-[10px]",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-white font-[Montserrat-Medium]",
                        children: desc
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 9189:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _src_components_Activity_WideCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7990);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation
]);
const CarouselLastActivity = ({ contents  })=>{
    const { 0: slidesPerView , 1: setSlidesPerView  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Function to update the slidesPerView based on window width
        const handleResize = ()=>{
            if (window.innerWidth >= 1050) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 640) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-screen justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
            spaceBetween: 0,
            slidesPerView: slidesPerView,
            centeredSlides: false,
            pagination: {
                clickable: true
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            children: contents.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Activity_WideCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        image: item.thumbnail,
                        title: item.nama_kegiatan,
                        desc: item.deskripsi_pendek
                    })
                }, index))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselLastActivity);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _src_components_Activity_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation
]);
const CarouselPastEvents = ({ contents  })=>{
    const { 0: slidesPerView , 1: setSlidesPerView  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Function to update the slidesPerView based on window width
        const handleResize = ()=>{
            if (window.innerWidth >= 1050) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 640) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-screen",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
            spaceBetween: 0,
            slidesPerView: slidesPerView,
            pagination: {
                clickable: true
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            children: contents.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Activity_Card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        image: item.image,
                        title: item.title,
                        desc: item.desc
                    })
                }, index))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselPastEvents);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const WideCard = ({ image , title , desc  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative bg-gradient-to-r from-[#0D664C] to-[#169470] w-[800px] h-[300px] rounded-[60px] overflow-hidden mb-[10px] mx-[5%] flex",
        style: {
            filter: "drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[40%] h-[100%] relative flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: image,
                    alt: title,
                    layout: "fill",
                    objectFit: "cover",
                    className: "rounded-[30px]"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[60%] h-[100%] px-4 flex flex-col justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "text-white text-xl font-semibold font-[Montserrat-Bold] mb-[10px]",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-white font-[Montserrat-Medium",
                        children: desc
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WideCard);


/***/ })

};
;
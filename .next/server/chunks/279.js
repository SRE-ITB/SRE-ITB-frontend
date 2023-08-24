"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 6713:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const LatestUpdateCard = ({ image , title , desc , id  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleReadMoreClick = ()=>{
        try {
            const currentPath = router.asPath;
            void router.push(`${currentPath}/${id}`);
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative bg-gradient-to-r from-[#0D664C] to-[#169470] w-auto md:h-[300px] h-[600px] rounded-[60px] overflow-hidden mb-[10px] mx-[10%] md:flex",
        style: {
            filter: "drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:w-[30%] md:h-[80%] w-[80%] h-[200px] relative flex md:my-auto md:ml-8 mx-auto mt-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: image,
                    alt: title,
                    layout: "fill",
                    objectFit: "cover",
                    className: "rounded-[40px]"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "md:w-[70%] md:h-[100%] h-[380px] px-8 py-8 relative text-center md:text-left",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "text-white text-xl font-semibold font-[Montserrat-Bold] mb-[10px]",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "text-white font-[Montserrat-Medium]",
                        children: desc
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute md:bottom-8 bottom-12 right-0 left-0 flex justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "border-2 border-white rounded-[20px] px-5 py-1 text-white font-[Montserrat-Medium] hover:bg-[#0D664C] transition-all",
                            onClick: handleReadMoreClick,
                            children: "Read More"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LatestUpdateCard);


/***/ }),

/***/ 2204:
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



const PastEventsCard = ({ image , title , desc  })=>{
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
                className: "h-[130px] w-full px-4 justify-center mt-[10px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "text-white text-xl font-semibold font-[Montserrat-Bold] mb-[10px]",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "text-white font-[Montserrat-Medium]",
                        children: desc
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PastEventsCard);


/***/ }),

/***/ 1855:
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
/* harmony import */ var _src_components_Card_LatestUpdateCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6713);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation
]);
const LatestUpdateCarousel = ({ contents  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-screen justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
            slidesPerView: 1,
            pagination: {
                clickable: true,
                el: ".custom-pagination"
            },
            children: [
                contents.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Card_LatestUpdateCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            image: item.thumbnail,
                            title: item.nama_kegiatan,
                            desc: item.deskripsi_pendek,
                            id: item.id
                        })
                    }, index)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "swiper-pagination custom-pagination"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LatestUpdateCarousel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9205:
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
/* harmony import */ var _src_components_Card_PastEventsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation
]);
const PastEventsCarousel = ({ contents  })=>{
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
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
            spaceBetween: 0,
            slidesPerView: slidesPerView,
            pagination: {
                clickable: true,
                el: ".custom-pagination"
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            children: [
                contents.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Card_PastEventsCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            image: item.image,
                            title: item.title,
                            desc: item.desc
                        })
                    }, index)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "swiper-pagination custom-pagination"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PastEventsCarousel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
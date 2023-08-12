"use strict";
exports.id = 78;
exports.ids = [78];
exports.modules = {

/***/ 5047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Activity_CarouselLastActivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9189);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Activity_CarouselLastActivity__WEBPACK_IMPORTED_MODULE_1__]);
_src_components_Activity_CarouselLastActivity__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const LastActivity = ()=>{
    const { 0: contents , 1: setContents  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const fetchContents = async ()=>{
            try {
                const res = await fetch("https://api.sreitb.com/kegiatan/2");
                const data = await res.json();
                setContents([
                    {
                        thumbnail: data.data.thumbnail,
                        nama_kegiatan: data.data.nama_kegiatan,
                        deskripsi_pendek: data.data.deskripsi_pendek
                    }
                ]);
                console.log(contents);
            } catch (err) {
                console.log(err);
            }
        };
        void fetchContents();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center justify-center overflow-x-hidden sm:mt-[5vw] mt-[10vw] sm:mb-[5vw] mb-[10vw]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "font-[Montserrat-Bold] sm:text-[40px] text-[30px] mx-[5vw]",
                children: [
                    "Latest ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-[#169470]",
                        children: "Update"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[15px] w-[100px] rounded-full bg-[#169470] mt-[10px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-[50px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Activity_CarouselLastActivity__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    contents: contents
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastActivity);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Activity_CarouselPastEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9202);
/* harmony import */ var _src_assets_Images_Carousel_REProject_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8892);
/* harmony import */ var _src_assets_Images_Carousel_REview_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1088);
/* harmony import */ var _src_assets_Images_Carousel_SocialProject_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9288);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Activity_CarouselPastEvents__WEBPACK_IMPORTED_MODULE_1__]);
_src_components_Activity_CarouselPastEvents__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Assets



const PastEvents = ()=>{
    const contents = [
        {
            image: _src_assets_Images_Carousel_REview_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
            title: "Welcoming Party",
            desc: "First gathering event to welcome the new members by doing fun games to get to know each other, also introducing one year journey in SRE ITB that will be through together."
        },
        {
            image: _src_assets_Images_Carousel_SocialProject_jpg__WEBPACK_IMPORTED_MODULE_4__/* ["default"].src */ .Z.src,
            title: "Staff Onboarding",
            desc: "The first meeting for all of SRE ITB management team where each division will have their own session to introduce themselves with their own uniqueness."
        },
        {
            image: _src_assets_Images_Carousel_REProject_jpg__WEBPACK_IMPORTED_MODULE_2__/* ["default"].src */ .Z.src,
            title: "Town Hall Meeting",
            desc: "Meeting attended by both management team and members to strengthen our bond and as the progress report regarding SRE ITB programs that had been done."
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center justify-center text-center overflow-x-hidden sm:mt-[5vw] mt-[10vw] sm:mb-[5vw] mb-[10vw]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "font-[Montserrat-Bold] sm:text-[40px] text-[30px] mx-[5vw]",
                children: [
                    "Our ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-[#169470]",
                        children: "Past Events"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[15px] w-[100px] rounded-full bg-[#169470] mt-[10px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-[50px] items-center text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Activity_CarouselPastEvents__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    contents: contents
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PastEvents);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 1004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _404page)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/Images/Illustration/Plant.svg
/* harmony default export */ const Plant = ({"src":"/_next/static/media/Plant.6fad3998.svg","height":500,"width":500});
;// CONCATENATED MODULE: ./src/contexts/404/404page.tsx




const NotFound = ()=>{
    const { 0: isWideScreen , 1: setIsWideScreen  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        function handleResize() {
            setIsWideScreen(window.innerWidth > 640);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-screen relative items-center sm:items-start flex flex-col sm:flex-row font-montserrat",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[80vw] justify-center flex sm:w-[45vw] mt-[75px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: Plant,
                    alt: "plant",
                    className: ""
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center sm:items-start sm:w-[55vw] sm:h-screen sm:justify-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center sm:text-left px-[5vw] sm:px-0 sm:pr-[5vw]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-[30px] md:text-[35px] xl:text-[40px] font-bold font-gradient",
                                children: isWideScreen ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        "Page",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Not Found"
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: "Page Not Found"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[16px] md:text-[18px] xl:text-[20px] mt-[2vw]",
                                children: "Oops! It looks like you've stumbled upon a page that doesn't exist. Maybe the page has been moved, deleted, or you entered the wrong URL."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "mt-[5vw] border-[2px] font-extrabold border-green5 bg-white hover:bg-green5 rounded-full text-green5 duration-75 hover:text-white w-[275px] md:w-[325px] xl:w-[400px] h-[50px] text-[16px] md:text-[18px] xl:text-[20px]",
                        onClick: ()=>{
                            window.location.href = "/";
                        },
                        children: "Go Home"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _404page = (NotFound);


/***/ })

};
;
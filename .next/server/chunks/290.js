"use strict";
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 5290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Compe_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/assets/Images/IYREF/Compe/Footer/leaves.svg
/* harmony default export */ const leaves = ({"src":"/_next/static/media/leaves.99f8747d.svg","height":432,"width":298});
;// CONCATENATED MODULE: ./src/assets/Images/IYREF/Compe/Footer/stars.svg
/* harmony default export */ const stars = ({"src":"/_next/static/media/stars.1aaa07ff.svg","height":85,"width":68});
;// CONCATENATED MODULE: ./src/contexts/IYREF/Compe/Footer.tsx





const Footer = ({ contacts , registerLink , guidebookLink , events  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "overflow-hidden flex flex-col items-center justify-center relative",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: `w-[175vw] h-[850px] lg:h-[1300px] bg-green8 flex flex-col justify-between items-center font-montserrat py-40 lg:py-52 ${events ? "rounded-t-[50%]" : ""}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-between items-center w-full h-[227px] lg:h-[310px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col justify-between items-center text-center text-white",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-[24px] lg:text-[40px] font-light",
                                    children: "What Are You Waiting For?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-[28px] lg:text-[78px] font-bold",
                                    children: "Go Register Yourself"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col lg:flex-row justify-evenly gap-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: registerLink,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "border-[2px] border-white font-semibold bg-white hover:-translate-y-1 rounded-xl text-green8 duration-75 w-[225px] lg:w-[275px] h-[45px] lg:h-[65px] text-[16px] lg:text-[20px]",
                                        children: "Register Now"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: guidebookLink,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "border-[2px] border-white font-semibold bg-green8 hover:-translate-y-1 rounded-xl text-white duration-75 w-[225px] lg:w-[275px] h-[45px] lg:h-[65px] text-[16px] lg:text-[20px]",
                                        children: "Download Guidebook"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                contacts && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-screen h-auto flex flex-col justify-between gap-6 items-center text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-[28px] lg:text-[32px] font-bold",
                            children: "CONTACT PERSON"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full flex flex-col justify-between gap-3 items-center text-center px-[15px]",
                            children: contacts?.map((contact, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: contact.split("(")[0]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "(",
                                                contact.split("(")[1]
                                            ]
                                        })
                                    ]
                                }, index))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-[40px] lg:w-[70px] top-[60px] lg:top-[150px] right-[24vw] absolute",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: stars,
                        alt: "plant",
                        className: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-[120px] lg:w-[270px] left-[-5vw] bottom-[-10px] absolute",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: leaves,
                        alt: "plant",
                        className: ""
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Compe_Footer = (Footer);


/***/ })

};
;
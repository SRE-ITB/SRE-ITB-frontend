"use strict";
exports.id = 109;
exports.ids = [109];
exports.modules = {

/***/ 7199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Leaves.933949aa.svg","height":432,"width":250});

/***/ }),

/***/ 5638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bird_1.59db4ff8.svg","height":149,"width":227});

/***/ }),

/***/ 5355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bird_2.97356f78.svg","height":73,"width":138});

/***/ }),

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
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-screen h-auto flex flex-col justify-between gap-6 items-center text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-[28px] lg:text-[32px] font-bold",
                            children: "CONTACT PERSON"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full flex flex-col justify-between gap-3 items-center text-center px-[15px]",
                            children: contacts.map((contact, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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


/***/ }),

/***/ 9377:
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




const Hero = ({ title , desc , background , linkRegister  })=>{
    const { 0: isWideScreen , 1: setIsWideScreen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function handleResize() {
            setIsWideScreen(window.innerWidth > 540);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const page = router.pathname.split("iyref/")[1];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-screen flex flex-col justify-center items-center overflow-x-hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative w-full h-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: background,
                    alt: "Background",
                    layout: "fill",
                    objectFit: "cover",
                    placeholder: "blur"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-full opacity-30 bg-[#000000]"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute inset-0 justify-center items-center flex flex-col",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "font-montserrat text-center text-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "xl:text-[48px] md:text-[38px] text-[28px] font-bold leading-[40px] md:leading-[60px] animate__animated animate__fadeInUp",
                                children: isWideScreen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        title,
                                        " Competition",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "IYREF 2024"
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        title,
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Competition IYREF 2024"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "xl:text-[20px] md:text-[16px] text-[13px] px-[10vw] mt-[30px] animate__animated animate__fadeInUp",
                                children: desc
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "translate-y-[15px] flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: linkRegister,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: "font-normal mt-[50px] outline outline-1 text-[#FFFFFF] xl:text-[20px] md:text-[18px] text-[16px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer animate-bounce",
                                            children: [
                                                "Join Now ",
                                                page === "bpc" ? "(FREE)" : ""
                                            ]
                                        })
                                    }),
                                    page === "bcc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://bit.ly/WebinarBCCIYREF2024",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "font-normal mt-[10px] outline outline-1 text-[#FFFFFF] xl:text-[20px] md:text-[18px] text-[16px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer",
                                            children: "Join Webinar"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 2782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const Card = ({ title , subtitle , desc  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white bg-opacity-25 py-[5vh] px-[6vw] xl:px-[3vw] rounded-xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "font-semibold md:font-bold text-[20px]",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-[4vh] text-[16px] font-semibold",
                children: subtitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-[4vh] font-light text-[14px] md:text-[16px]",
                children: desc
            })
        ]
    });
};
Card.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    desc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
const Stages = ({ title , desc , cards  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "overflow-x-hidden font-montserrat",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative w-screen bg-gradient p-[5vw] pb-[10vw] text-center items-center text-white",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "font-bold text-[28px] xl:text-[48px] p-[3vw]",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "px-[6vw] text-[15px] xl:text-[20px] mt-[4vh]",
                    children: desc
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 xl:grid-cols-3 gap-[4vh] mx-[4vw] mt-[5vw]",
                    children: cards.map((card)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
                            title: card.title,
                            subtitle: card.subtitle,
                            desc: card.desc
                        }, card.title))
                })
            ]
        })
    });
};
Stages.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    desc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    cards: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        desc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
    })).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stages);


/***/ }),

/***/ 7766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Compe_Theme)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Card/ThemeCard.tsx


const ThemeCard = ({ text  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "z-10 relative w-[380px] py-[5vw] max-h-[200px] bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[2%] rounded-[10px] flex items-center justify-center drop-shadow mb-10",
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: "font-montserrat text-[20px] text-white px-5 text-center font-medium",
            children: text
        })
    });
};
/* harmony default export */ const Card_ThemeCard = (ThemeCard);

;// CONCATENATED MODULE: ./src/components/Card/FinalistCard.tsx


const FinalistCard = ({ title , contents  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-auto w-full sm:w-[500px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col items-center text-green11 text-center rounded-2xl drop-shadow",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "w-full text-[20px] lg:text-[24px] text-green7 font-semibold mb-[30px]",
                children: title
            }),
            contents.map((content, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative mb-2 py-[15px] w-full bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-montserrat text-[17px] text-white px-[30px] text-center font-medium",
                        children: content
                    })
                }, index))
        ]
    });
};
/* harmony default export */ const Card_FinalistCard = (FinalistCard);

// EXTERNAL MODULE: ./src/assets/Images/IYREF/Compe/Illustration/bird_1.svg
var bird_1 = __webpack_require__(5638);
// EXTERNAL MODULE: ./src/assets/Images/IYREF/Compe/Illustration/bird_2.svg
var bird_2 = __webpack_require__(5355);
// EXTERNAL MODULE: ./src/assets/Images/IYREF/Compe/Illustration/Leaves.svg
var Leaves = __webpack_require__(7199);
;// CONCATENATED MODULE: ./src/assets/Images/IYREF/Compe/Events/Hexagon.svg
/* harmony default export */ const Hexagon = ({"src":"/_next/static/media/Hexagon.93827147.svg","height":432,"width":229});
;// CONCATENATED MODULE: ./src/contexts/IYREF/Compe/Theme.tsx









const Theme = ({ type , theme , subtheme , addText , benefits  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative font-montserrat h-auto flex flex-col justify-center items-center overflow-y-hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative w-full z-10 mt-20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "my-[50px] space-y-3 mx-[10vw]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "text-green11 text-center text-[16px]",
                                children: [
                                    type,
                                    " IYREF 2024's THEME"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "font-gradient text-[24px] lg:text-[30px] xl:text-[32px] text-center font-bold px-5 lg:px-0 leading-[30px] sm:leading-normal",
                                children: [
                                    '"',
                                    theme,
                                    '"'
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-wrap flex mt-[10px] justify-center mb-[5vw] mx-[10vw] z-10",
                        children: subtheme?.map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Card_ThemeCard, {
                                text: text
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[300px] bottom-0 absolute left-0 z-[-5]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Leaves/* default */.Z,
                            alt: "leaves",
                            className: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[250px] hidden lg:block bottom-0 right-[70px] absolute z-[-5]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: bird_1/* default */.Z,
                            alt: "bird1",
                            className: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-5 mb-[80px] lg:mb-[100px] z-10 mt-[5vw] mx-[5vw]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-green11 text-center text-[20px] md:text-[28px] lg:text-[32px] font-bold",
                        children: "Total Competition Prize Up To"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-gradient text-[48px] md:text-[72px] lg:text-[96px] text-center font-bold leading-[50px] sm:leading-normal",
                        children: "IDR 30.000.000"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-[100px] lg:mb-[300px] px-[5vw] w-full relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-[20px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-green11 text-[16px] text-center",
                            children: addText
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `gap-5 ${benefits.some((benefit)=>benefit.contents && benefit.contents.length > 0) ? "flex-wrap flex justify-center" : "mx-[10vw] flex flex-col"}`,
                        children: [
                            benefits.map((benefit, index)=>benefit.contents && benefit.contents.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(Card_FinalistCard, {
                                    title: benefit.title,
                                    contents: benefit.contents
                                }, index) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-auto py-5 bg-white border-[2px] border-green9 px-[25px] rounded-2xl text-center flex justify-center items-center drop-shadow-green",
                                    children: benefit.title
                                })),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-[280px] hidden lg:flex justify-end bottom-0 right-[10vw] absolute z-[-5]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: Hexagon,
                                    alt: "hexagon",
                                    className: ""
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[70px] lg:w-[340px] bottom-[5vw] left-[20vw] absolute",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: bird_2/* default */.Z,
                    alt: "bird2",
                    className: ""
                })
            })
        ]
    });
};
/* harmony default export */ const Compe_Theme = (Theme);


/***/ }),

/***/ 8614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Compe_Timeline)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/assets/Images/IYREF/Compe/Timeline/Pot.svg
/* harmony default export */ const Pot = ({"src":"/_next/static/media/Pot.e6d0373e.svg","height":1488,"width":1000});
;// CONCATENATED MODULE: ./src/contexts/IYREF/Compe/Timeline.tsx




const Timeline = ({ timeline  })=>{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const isDateInRange = (currentDate, startDate, endDate)=>{
        const currentDateObj = new Date(currentDate);
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        return currentDateObj >= startDateObj && currentDateObj <= endDateObj;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "overflow-x-hidden font-montserrat relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:grid grid-cols-2 gap-[8vw] p-[5vw] pb-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "row-start-1 col-start-1 text-transparent font-bold bg-clip-text ml-auto md:mr-[3vw] text-center bg-gradient-to-r from-green1 to-green8 text-[36px] md:text-[64px]",
                        children: "Timeline"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row-start-1 col-start-2 mt-[4vh] md:mt-0 ml-[5vw] md:ml-0 relative mb-[10vw]",
                        children: [
                            timeline.map((timeline, index)=>{
                                const isInRange = isDateInRange(currentDate, timeline.startDate, timeline.endDate);
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex relative items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-5 h-5 aspect-square bg-green8 rounded-full"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `ml-[3vw] p-5 ${isInRange ? "bg-green8 rounded-r-xl" : ""}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: `text-transparent font-bold bg-clip-text text-[18px] md:text-[24px] ${isInRange ? "text-[#FFFFFF]" : "text-green8"}`,
                                                    children: timeline.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-transparent bg-clip-text bg-green1 text-[16px] md:text-[22px]",
                                                    children: timeline.desc
                                                })
                                            ]
                                        })
                                    ]
                                }, index);
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute h-full w-[4px] ml-[8px] bg-green8 top-0 rounded-full"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:block absolute w-[35vw] max-w-[600px] bottom-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: Pot,
                    alt: "Pot-Image"
                })
            })
        ]
    });
};
Timeline.propTypes = {
    timeline: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        title: (external_prop_types_default()).string.isRequired,
        desc: (external_prop_types_default()).string.isRequired
    })).isRequired
};
/* harmony default export */ const Compe_Timeline = (Timeline);


/***/ })

};
;
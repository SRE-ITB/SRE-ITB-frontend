"use strict";
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 2103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/whiteLogo.af5691f6.png","height":1724,"width":2125,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAAR0lEQVR42mP4x8gAB1D2P6l/5v8s/un/U4MK/TP/1/av/F/1v0ggmwkkwP9P/Z/QP4V/yv9EIFpE/qn/U/3H94/tHxcDJgAAaBYd1dHce/kAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 8790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/assets/Images/Logo/whiteLogo.png
var whiteLogo = __webpack_require__(2103);
;// CONCATENATED MODULE: ./src/assets/Images/Socmed/instagram.svg
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.d99fef78.svg","height":800,"width":800});
;// CONCATENATED MODULE: ./src/assets/Images/Socmed/gmail.svg
/* harmony default export */ const gmail = ({"src":"/_next/static/media/gmail.d2a1be2b.svg","height":800,"width":800});
;// CONCATENATED MODULE: ./src/assets/Images/Socmed/linkedin.svg
/* harmony default export */ const linkedin = ({"src":"/_next/static/media/linkedin.9411d211.svg","height":800,"width":800});
;// CONCATENATED MODULE: ./src/assets/Images/Socmed/tiktok.svg
/* harmony default export */ const tiktok = ({"src":"/_next/static/media/tiktok.782699a9.svg","height":800,"width":800});
;// CONCATENATED MODULE: ./src/assets/Images/Socmed/youtube.svg
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.e236bb5a.svg","height":800,"width":800});
;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx



// Assets






const Footer = ()=>{
    const contacts = [
        {
            image: gmail,
            type: "Email",
            username: "sre@km.itb.ac.id",
            link: "gmail.com"
        },
        {
            image: tiktok,
            type: "Tiktok",
            username: "@sreitb",
            link: "https://www.tiktok.com/@sreitb"
        },
        {
            image: instagram,
            type: "Instagram",
            username: "@sreitb",
            link: "https://www.instagram.com/sreitb/?hl=en"
        },
        {
            image: youtube,
            type: "Youtube",
            username: "@sreitb9329",
            link: "https://www.youtube.com/channel/UCcOfjxxKSJR3WHNa4BsQxww?app=desktop"
        },
        {
            image: linkedin,
            type: "LinkedIn",
            username: "Society of Renewable<br>Energy ITB",
            link: "https://www.linkedin.com/company/sreitb"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-auto w-full flex flex-col justify-center items-center bg-green sm:justify-start sm:flex-row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sm:pl-8 sm:w-3/5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: whiteLogo/* default.src */.Z.src,
                                alt: "logo",
                                className: "sm:h-[240px] sm:w-[290px] sm:px-0 px-[25%]"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-[OpenSans-Regular] text-white mb-[40px] mt-[-20px] text-center sm:text-left sm:ml-[57px] italic text-[20px]",
                                children: "#EnergizingSREITB"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-white grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4",
                        children: contacts.map((contact, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: contact.link,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mr-2 cursor-pointer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: contact.image,
                                                alt: contact.type,
                                                width: "35px",
                                                height: "35px",
                                                style: {
                                                    filter: "brightness(0) invert(0.9)"
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: contact.link,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "font-normal text-[12px] sm:text-[14px] mt-[-5px]",
                                            dangerouslySetInnerHTML: {
                                                __html: contact.username
                                            }
                                        })
                                    })
                                ]
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sm:h-[70px] h-[50px] w-full bg-black sm:text-[18px] text-[15px] text-white font-sans italic flex items-center justify-center md:justify-start md:pl-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "\xa9 2023 SRE ITB – All rights reserved"
                })
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);


/***/ }),

/***/ 8516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/utils/colors.ts
const colours = {
    white: "#FFFFFF",
    black: "#000000",
    gray200: "#F9F9F9",
    gray300: "#C4C4C4",
    gray400: "#9B9B9B",
    gray500: "#777676",
    gray600: "#535252",
    gray700: "#2F2E2E",
    yellow200: "#FFD271",
    yellow300: "#FEB20E",
    yellow400: "#DF9800",
    red200: "#FF634B",
    red300: "#F43518",
    red400: "#B71800",
    green200: "#E6FEED",
    green300: "#069154",
    green400: "#01703F",
    blue200: "#6979BE",
    blue300: "#1F307C",
    blue400: "#0B1A5C",
    cream200: "#FFF2EB",
    cream300: "#FFEADF",
    cream400: "#F5D5C4",
    pink200: "#FEE9E6",
    pink300: "#E28281",
    pink400: "#C86564"
};
/* harmony default export */ const colors = (colours);

;// CONCATENATED MODULE: ./src/components/Icon/Svg.tsx


const Icon = (props)=>{
    const { size =16 , title , ...rest } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0",
        height: size,
        width: size,
        color: colors.black,
        ...rest,
        children: [
            !!title && /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            }),
            props.children
        ]
    });
};
/* harmony default export */ const Svg = (Icon);

;// CONCATENATED MODULE: ./src/components/Icon/ArrowDownIcon.tsx


const ArrowDownIcon = ({ color ="black" , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Svg, {
        viewBox: "0 0 1024 1024",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M768.686 350.007l-205.471 193.251-205.472-193.251-63.119 59.495 268.591 253.17 268.59-253.17-63.119-59.495z",
            fill: color
        })
    });
};
/* harmony default export */ const Icon_ArrowDownIcon = (ArrowDownIcon);

// EXTERNAL MODULE: ./src/assets/Images/Logo/whiteLogo.png
var whiteLogo = __webpack_require__(2103);
;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.tsx






const MENU_LIST = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "About Us",
        href: "/About"
    },
    {
        text: "Activity",
        contents: [
            {
                text: "Internal Program",
                href: "/"
            },
            {
                text: "External Program",
                href: "/"
            },
            {
                text: "Learning Program",
                href: "/"
            },
            {
                text: "Project",
                href: "/"
            }
        ]
    },
    {
        text: "Student",
        href: "/"
    },
    {
        text: "IYREF",
        href: "/"
    },
    {
        text: "Merchandise",
        href: "/"
    }
];
function MobileHoverDropdown({ open , setOpen , contents , dropdownIdx , idx  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${dropdownIdx === idx ? "" : "hidden"} flex flex-col text-left`,
        children: contents.map((content, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "py-2 pl-5 text-white opacity-90 hover:opacity-70 font-bold cursor-pointer",
                onClick: ()=>{
                    setOpen(!open);
                },
                href: content.href,
                children: content.text
            }, idx))
    });
}
function HoverDropdown({ contents  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hidden peer-hover:absolute peer-hover:flex hover:absolute hover:flex flex-col w-64 py-3 top-20 left-1/2 transform -translate-x-1/2 border-solid border-2 border-greenSRE100 rounded-2xl bg-white z-50",
        children: contents.map((content, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "px-5 py-3 hover:bg-greenSRE100 text-greenSRE100 hover:text-white font-bold cursor-pointer",
                href: content.href,
                children: content.text
            }, idx))
    });
}
function MobileNav({ open , setOpen , dropdownIdx , setDropdownIdx  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `fixed overflow-y-auto top-0 left-0 z-10 h-screen w-screen lg:hidden bg-[#0D664C] transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex flex-col h-screen justify-center items-center",
            children: MENU_LIST.map((menu, idx)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-40 mx-auto",
                    onClick: ()=>{
                        setDropdownIdx(dropdownIdx === idx ? -1 : idx);
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "cursor-pointer hover:opacity-80 inline-block py-2 text-white font-bold",
                            onClick: ()=>{
                                if (!menu.contents) {
                                    setOpen(!open);
                                }
                            },
                            href: menu.contents ? undefined : menu.href,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "py-2 inline-flex items-center",
                                children: [
                                    menu.text,
                                    menu.contents ? /*#__PURE__*/ jsx_runtime_.jsx(Icon_ArrowDownIcon, {
                                        color: "white",
                                        className: "ml-1"
                                    }) : ""
                                ]
                            })
                        }),
                        menu.contents ? /*#__PURE__*/ jsx_runtime_.jsx(MobileHoverDropdown, {
                            open: open,
                            setOpen: setOpen,
                            contents: menu.contents,
                            dropdownIdx: dropdownIdx,
                            idx: idx
                        }) : ""
                    ]
                }, idx);
            })
        })
    });
}
const Navbar = ()=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const { 0: dropdownIdx , 1: setDropdownIdx  } = (0,external_react_.useState)(-1);
    const router = (0,router_.useRouter)();
    const page = router.pathname.split("/")[1] || "Home";
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "fixed flex top-0 w-full justify-center z-50 font-inter",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${open ? "h-screen" : ""} w-full h-[200px] flex`,
            style: {
                backgroundImage: "linear-gradient(to bottom, rgba(13, 102, 76, 1) 0%, rgba(13, 102, 76, 0.5) 65%, rgba(13, 102, 76, 0) 95%)"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(MobileNav, {
                    open: open,
                    setOpen: setOpen,
                    dropdownIdx: dropdownIdx,
                    setDropdownIdx: setDropdownIdx
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-[200px] h-[100px] flex mt-[-15px]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "cursor-pointer",
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: whiteLogo/* default */.Z,
                            alt: "logo",
                            className: ""
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full flex justify-end",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${open ? "fixed right-0" : ""} right-0 top-0 mt-[32px] mr-[15px] z-50 flex flex-col w-10 h-6 justify-between cursor-pointer lg:hidden`,
                            onClick: ()=>{
                                setOpen(!open);
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `h-1 w-6 bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "w-7 bg-white rotate-45 translate-y-2.5" : ""}`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `h-1 w-6 bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "h-0" : "w-6"}`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `h-1 w-6 bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "w-7 bg-white -rotate-45 -translate-y-2.5" : ""}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden lg:flex",
                            children: MENU_LIST.map((menu, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative inline-flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: `${"active px-6 mx-2 py-8 h-[80px]"} ${menu.contents ? "peer" : "inline-block"} text-[#FFFFFF] hover:opacity-80 font-bold cursor-pointer`,
                                            href: menu.href,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${idx === 0 && page === "Home" || idx === 1 && page === "About" ? "border-b-2 border-white" : ""} inline-flex items-center`,
                                                children: [
                                                    menu.text,
                                                    menu.contents ? /*#__PURE__*/ jsx_runtime_.jsx(Icon_ArrowDownIcon, {
                                                        color: "white"
                                                    }) : ""
                                                ]
                                            })
                                        }),
                                        menu.contents ? /*#__PURE__*/ jsx_runtime_.jsx(HoverDropdown, {
                                            contents: menu.contents
                                        }) : ""
                                    ]
                                }, idx))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);


/***/ })

};
;
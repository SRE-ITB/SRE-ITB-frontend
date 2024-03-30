"use strict";
exports.id = 841;
exports.ids = [841];
exports.modules = {

/***/ 9287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/iyrefLogo.a2b05062.png","height":561,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAPElEQVR42mP4F/PP9x8DAjL82/jP6Z/ev+R/2f8q/xX8K2X45/Jvyr/0f47/gv4V/iv+58/wj/9fC7IWAFCZJ09uEeqHAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 5047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/sreLogo.3e9be75a.png","height":397,"width":1122,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPElEQVR42gXAsQmAMBAAwB/MPSycQBAtJQhapBEstBLBOiNkvSOEIpm8VoNPDski+11OnT1sHrfeaFYdDZYbI63JVWWYAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 8426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_assets_Images_Navigation_Navbar_sreLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5047);
/* harmony import */ var _src_assets_Images_Navigation_Navbar_iyrefLogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9287);




const ToggleButton = ({ state , onToggle  })=>{
    const { 0: isChecked , 1: setIsChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(state);
    const handleToggle = ()=>{
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        onToggle(newCheckedState);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
        htmlFor: "toggle",
        className: `flex items-center cursor-pointer ${isChecked ? "bg-green6" : "bg-green8"} w-[110px] h-[40px] rounded-full p-1 transition-all duration-300`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: isChecked ? _src_assets_Images_Navigation_Navbar_sreLogo_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"].src */ .Z.src : _src_assets_Images_Navigation_Navbar_iyrefLogo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                alt: isChecked ? "SRE Logo" : "IYREF Logo",
                className: `w-14 mr-2 transition-all duration-300 transform ${isChecked ? "translate-x-[38px]" : "translate-x-[10px]"}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `bg-white w-7 h-7 rounded-full shadow-md transform transition-all duration-300 ${isChecked ? "translate-x-[-61px]" : "translate-x-[7px]"}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "checkbox",
                id: "toggle",
                className: "hidden",
                checked: isChecked,
                onChange: handleToggle
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleButton);


/***/ }),

/***/ 1799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Icon_ArrowDownIcon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
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


/***/ }),

/***/ 1841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_Button_Toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8426);
/* harmony import */ var _src_components_Icon_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1799);
/* harmony import */ var _src_assets_Images_Navigation_Navbar_sreLogo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5047);
/* harmony import */ var _src_assets_Images_Navigation_Navbar_iyrefLogo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9287);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const MENU_LIST = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "About",
        href: "/about"
    },
    {
        text: "Activity",
        href: "/activity"
    },
    {
        text: "Student",
        href: "/student"
    },
    {
        text: "Merchandise",
        href: "/merchandise"
    },
    {
        text: "Home",
        href: "/iyref"
    },
    {
        text: "Pre-Event",
        href: "/iyref/comvis",
        contents: [
            {
                text: "REFWON",
                href: "/iyref/refwon"
            },
            {
                text: "ComVis",
                href: "/iyref/comvis"
            }
        ]
    },
    {
        text: "Competitions",
        href: "/iyref/bcc",
        contents: [
            {
                text: "Business Case Competition",
                href: "/iyref/bcc"
            },
            {
                text: "Business Plan Competition",
                href: "/iyref/bpc"
            },
            {
                text: "National Essay Competition",
                href: "/iyref/nec"
            }
        ]
    },
    {
        text: "NEX STEP",
        href: "/iyref/pcc",
        contents: [
            {
                text: "Policy Case Competition",
                href: "/iyref/pcc"
            },
            {
                text: "Policy Workshop",
                href: "/iyref/pw"
            }
        ]
    },
    {
        text: "Summit",
        href: "/iyref/summit"
    }
];
function MobileHoverDropdown({ open , setOpen , contents , dropdownIdx , idx  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${dropdownIdx === idx ? "" : "hidden"} flex flex-col text-left`,
        children: contents.map((content, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "hidden peer-hover:absolute peer-hover:flex hover:absolute hover:flex flex-col w-64 py-3 top-20 left-1/2 transform -translate-x-1/2 border-solid border-2 border-green rounded-lg bg-white z-50",
        children: contents.map((content, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "px-5 py-3 hover:bg-green5 text-green2 hover:text-white font-bold cursor-pointer",
                href: content.href,
                children: content.text
            }, idx))
    });
}
function MobileNav({ open , setOpen , dropdownIdx , setDropdownIdx , handleToggle , menuList , page  }) {
    const { 0: isDesktopSize , 1: setIsDesktopSize  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const updateWindowSize = ()=>{
            setIsDesktopSize(window.innerWidth > 1280);
        };
        updateWindowSize();
        window.addEventListener("resize", updateWindowSize);
        return ()=>{
            window.removeEventListener("resize", updateWindowSize);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `fixed overflow-y-auto top-0 left-0 z-10 h-screen w-screen xl:hidden bg-green5 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col h-screen justify-center",
            children: [
                menuList.map((menu, idx)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-40 text-center mx-auto",
                        onClick: ()=>{
                            setDropdownIdx(dropdownIdx === idx ? -1 : idx);
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "cursor-pointer hover:opacity-80 inline-block py-2 text-white font-bold",
                                onClick: ()=>{
                                    if (!menu.contents) {
                                        setOpen(!open);
                                    }
                                },
                                href: menu.contents ? undefined : menu.href,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "py-2 inline-flex items-center",
                                    children: [
                                        menu.text,
                                        menu.contents ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Icon_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            color: "white",
                                            className: "ml-1"
                                        }) : ""
                                    ]
                                })
                            }),
                            menu.contents ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileHoverDropdown, {
                                open: open,
                                setOpen: setOpen,
                                contents: menu.contents,
                                dropdownIdx: dropdownIdx,
                                idx: idx
                            }) : ""
                        ]
                    }, idx);
                }),
                isDesktopSize ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center mt-[15px] px-6 mx-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Button_Toggle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        state: page === "iyref",
                        onToggle: handleToggle
                    })
                })
            ]
        })
    });
}
const Navbar = ({ e  })=>{
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: dropdownIdx , 1: setDropdownIdx  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const { 0: isNavbarSolid , 1: setIsNavbarSolid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: menuList , 1: setMenuList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(MENU_LIST);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const page = router.pathname.split("/")[1] || "home";
    const iyrefPage = router.pathname.split("/")[2] || "home";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (page === "iyref") {
            setMenuList(MENU_LIST.filter((item)=>item.href.split("/")[1] === "iyref"));
        } else {
            setMenuList(MENU_LIST.filter((item)=>item.href.split("/")[1] !== "iyref"));
        }
    }, [
        page
    ]);
    const handleToggle = (isChecked)=>{
        if (isChecked) {
            setTimeout(()=>{
                void router.push("/iyref");
            }, 200);
        } else {
            setTimeout(()=>{
                void router.push("/");
            }, 200);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY !== 0) {
                setIsNavbarSolid(true);
            } else {
                setIsNavbarSolid(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.nav, {
        className: "fixed flex top-0 w-full justify-center z-50 font-montserrat",
        initial: {
            backgroundColor: e ? "#2C9A7F" : "rgba(0, 0, 0, 0)"
        },
        animate: {
            backgroundColor: isNavbarSolid || e ? "#2C9A7F" : "rgba(0, 0, 0, 0)"
        },
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${open ? "h-screen" : ""} w-full h-[80px] flex`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNav, {
                    open: open,
                    setOpen: setOpen,
                    dropdownIdx: dropdownIdx,
                    setDropdownIdx: setDropdownIdx,
                    handleToggle: handleToggle,
                    menuList: menuList,
                    page: page
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-[70px] sm:w-[90px] ml-[30px] sm:ml-[5vw] flex items-center",
                    children: page === "iyref" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _src_assets_Images_Navigation_Navbar_iyrefLogo_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                        alt: "IYREF logo"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _src_assets_Images_Navigation_Navbar_sreLogo_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                        alt: "SRE logo"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex fixed z-20 w-full justify-end",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${open ? "fixed right-0" : ""} right-0 top-0 mr-[15px] z-50 flex flex-col w-10 h-6 justify-between cursor-pointer xl:hidden mt-[30px]`,
                            onClick: ()=>{
                                setOpen(!open);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `h-1 w-6 bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "w-7 bg-white rotate-45 translate-y-2.5" : ""}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `h-1 w-6 bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "h-0 w-0" : "w-6"}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `h-1 w-6 bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "w-7 bg-white -rotate-45 -translate-y-2.5" : ""}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hidden xl:flex",
                            children: [
                                menuList.map((menu, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative inline-flex items-center mt-[-7px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: `${"active px-6 mx-2 py-8"} ${menu.contents ? "peer" : "inline-block"} text-white hover:opacity-80 cursor-pointer`,
                                                href: menu.href,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${idx === 0 && page === "home" || idx === 1 && page === "about" || idx === 2 && page === "activity" || idx === 3 && page === "student" || idx === 4 && page === "merchandise" || idx === 0 && iyrefPage === "home" && page === "iyref" || idx === 1 && (iyrefPage === "refwon" || iyrefPage === "comvis") || idx === 2 && (iyrefPage === "bpc" || iyrefPage === "nec" || iyrefPage === "bcc") || idx === 3 && (iyrefPage === "pcc" || iyrefPage === "pw") || idx === 4 && iyrefPage === "summit" ? "rounded-[20px] bg-green7 py-[4px] px-[15px] font-bold" : ""} inline-flex items-center`,
                                                    children: [
                                                        menu.text,
                                                        menu.contents ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Icon_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                            color: "white"
                                                        }) : ""
                                                    ]
                                                })
                                            }),
                                            menu.contents ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HoverDropdown, {
                                                contents: menu.contents
                                            }) : ""
                                        ]
                                    }, idx)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "inline-flex items-center mt-[-7px] px-6 mx-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Button_Toggle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        state: page === "iyref",
                                        onToggle: handleToggle
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
Navbar.propTypes = {
    e: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 3406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navigation_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Navigation/Youtube.tsx

const Youtube = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center items-center w-full h-4/5 bg-green0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                className: "aspect-video w-[65%] mt-[5vw]",
                src: "https://www.youtube.com/embed/H2t9jZBPlpA",
                title: "SRE ITB Teaser",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true,
                style: {
                    filter: "drop-shadow(3px 5px 1px rgba(0, 0, 0, 0.25))",
                    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.25)"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[10vw]"
            })
        ]
    });
};
/* harmony default export */ const Navigation_Youtube = (Youtube);

;// CONCATENATED MODULE: ./src/assets/Images/Navigation/Footer/FooterIllustration.svg
/* harmony default export */ const FooterIllustration = ({"src":"/_next/static/media/FooterIllustration.5f79b725.svg","height":488,"width":1280});
;// CONCATENATED MODULE: ./src/assets/Images/Navigation/Footer/sreLogo.webp
/* harmony default export */ const sreLogo = ({"src":"/_next/static/media/sreLogo.3ebe4465.webp","height":1724,"width":2125,"blurDataURL":"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABYBvZtpLzFXciIoeQ8NMKlWhO4ww9REQKPgGN29YZgXuPZ0eSLWU71FAvU2pD/gBWUDggGAAAADABAJ0BKggABgACQDglpAADcAD++w0AAA==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/Images/Navigation/Footer/instagram.svg
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.9704d996.svg","height":800,"width":800});
;// CONCATENATED MODULE: ./src/assets/Images/Navigation/Footer/gmail.svg
/* harmony default export */ const gmail = ({"src":"/_next/static/media/gmail.03043c7b.svg","height":800,"width":800});
;// CONCATENATED MODULE: ./src/assets/Images/Navigation/Footer/linkedin.svg
/* harmony default export */ const linkedin = ({"src":"/_next/static/media/linkedin.f1997bf5.svg","height":800,"width":800});
;// CONCATENATED MODULE: ./src/assets/Images/Navigation/Footer/tiktok.svg
/* harmony default export */ const tiktok = ({"src":"/_next/static/media/tiktok.f2eb840f.svg","height":800,"width":800});
;// CONCATENATED MODULE: ./src/assets/Images/Navigation/Footer/youtube.svg
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.0efb67f9.svg","height":800,"width":800});
;// CONCATENATED MODULE: ./src/components/Navigation/Footer.tsx












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
    const router = (0,router_.useRouter)();
    const page = router.pathname.split("/")[1] || "home";
    const isActivityPage = router.pathname === "/activity";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: `flex flex-col overflow-x-hidden ${isActivityPage ? "bg-[#F0F1F4]" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col w-[101%]",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: FooterIllustration,
                    alt: "Footer Illustration",
                    className: "mb-[25px]",
                    draggable: false
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[20px] bg-green0 -mt-2"
            }),
            page === "home" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "bg-green0 w-full flex items-center justify-center py-[20px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-montserrat font-bold text-white text-shadow white-text-shadow text-4xl md:text-5xl",
                            children: "Our Teaser"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Navigation_Youtube, {})
                ]
            }) : "",
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full bg-green0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "h-auto w-full flex flex-col justify-center items-center bg-green sm:justify-start sm:flex-row mb-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "sm:pl-8 sm:w-3/5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: sreLogo.src,
                                        alt: "logo",
                                        className: "sm:h-[240px] sm:w-[290px] sm:px-0 px-[25%]"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-montserrat text-white mb-[40px] mt-[-20px] text-center sm:text-left sm:ml-[57px] italic text-[20px]",
                                        children: "#EnergizingSREITB"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-white sm:grid flex grid-cols-1 md:grid-cols-2 gap-2 md:gap-4",
                                children: contacts.map((contact, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: contact.link,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cursor-pointer mx-[2vw] sm:mx-0 sm:mr-2",
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
                                                    className: "hidden sm:block font-normal text-[12px] sm:text-[14px] mt-[-5px]",
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
            })
        ]
    });
};
/* harmony default export */ const Navigation_Footer = (Footer);


/***/ })

};
;
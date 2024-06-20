"use strict";
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Article_Details)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Icon/Svg.tsx + 1 modules
var Svg = __webpack_require__(1994);
;// CONCATENATED MODULE: ./src/components/Icon/ArrowRightIcon.tsx


const ArrowRightIcon = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Svg/* default */.Z, {
        viewBox: "0 0 1024 1024",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M260.9 863.145l75.52 75.52 426.665-426.665-426.665-426.666-75.52 75.52 351.145 351.146-351.145 351.145z"
        })
    });
};
/* harmony default export */ const Icon_ArrowRightIcon = (ArrowRightIcon);

;// CONCATENATED MODULE: ./src/components/Card/ArticleCard.tsx




const ArticleCard = ({ image , source , position , paragraph  })=>{
    const { 0: isParagraphVisible , 1: setIsParagraphVisible  } = (0,external_react_.useState)(false);
    const { 0: maxHeight , 1: setMaxHeight  } = (0,external_react_.useState)("0px");
    const paragraphRef = (0,external_react_.useRef)(null);
    const handleCardClick = ()=>{
        setIsParagraphVisible(!isParagraphVisible);
    };
    const updateMaxHeight = ()=>{
        if (paragraphRef.current) {
            const extraHeight = 25;
            setMaxHeight(isParagraphVisible ? `${paragraphRef.current.scrollHeight + extraHeight}px` : "0px");
        }
    };
    (0,external_react_.useEffect)(()=>{
        updateMaxHeight();
        window.addEventListener("resize", updateMaxHeight);
        return ()=>{
            window.removeEventListener("resize", updateMaxHeight);
        };
    }, [
        isParagraphVisible
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative mb-[30px]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex justify-between items-center w-auto h-auto rounded-xl py-5 px-10 font-montserrat cursor-pointer bg-semiWhite hover:scale-105 transition-transform duration-300 ease-in-out",
                onClick: handleCardClick,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative text-left mr-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-[25px] mb-2",
                                children: source
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "opacity-50",
                                children: position
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-[100px] w-[100px] overflow-hidden relative mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: image,
                                    alt: "image",
                                    placeholder: "blur",
                                    layout: "fill",
                                    objectFit: "cover",
                                    className: "rounded-full"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "items-center flex",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `flex items-center transition-all duration-500 ease-in-out ${isParagraphVisible ? "rotate-90" : "rotate-0"}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icon_ArrowRightIcon, {})
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: paragraphRef,
                className: `bg-semiWhite text-justify w-full px-10 rounded-b-xl transition-max-height duration-500 ease-in-out ${isParagraphVisible ? "-mt-[10px] py-[15px]" : "mt-0"}`,
                style: {
                    maxHeight,
                    overflow: "hidden"
                },
                children: paragraph.split("\n\n").map((para, index)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-4",
                        children: para
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const Card_ArticleCard = (ArticleCard);

;// CONCATENATED MODULE: ./src/contexts/Article/Details.tsx



const Details = ({ section , contents  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col items-center text-center font-montserrat relative min-h-screen overflow-x-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-[90vw]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full h-[20vw] max-h-[300px] mt-28 relative",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: section.header,
                        alt: "header",
                        placeholder: "blur",
                        layout: "fill",
                        objectFit: "cover",
                        className: "rounded-xl"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-left my-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "font-bold text-[30px]",
                        children: section.title
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: contents.map((content, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Card_ArticleCard, {
                            image: content.image,
                            source: content.source,
                            position: content.position,
                            paragraph: content.paragraph
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const Article_Details = (Details);


/***/ })

};
;
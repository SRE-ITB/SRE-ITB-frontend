"use strict";
exports.id = 298;
exports.ids = [298];
exports.modules = {

/***/ 4298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Event)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/assets/Images/IYREF/Compe/Illustration/bird_1.svg
var bird_1 = __webpack_require__(5638);
// EXTERNAL MODULE: ./src/assets/Images/IYREF/Compe/Illustration/bird_2.svg
var bird_2 = __webpack_require__(5355);
;// CONCATENATED MODULE: ./src/assets/Images/IYREF/Compe/Events/potted_plant.svg
/* harmony default export */ const potted_plant = ({"src":"/_next/static/media/potted_plant.b3a2f5b7.svg","height":750,"width":300});
// EXTERNAL MODULE: ./src/assets/Images/IYREF/Compe/Illustration/Leaves.svg
var Leaves = __webpack_require__(7199);
;// CONCATENATED MODULE: ./src/contexts/IYREF/Compe/Event.tsx
/* eslint-disable @typescript-eslint/comma-dangle */ 






const Events = ({ webinar , coaching  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "h-auto relative flex flex-col items-center font-montserrat py-[10vw]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[100px] lg:w-[300px] top-[40px] lg:right-[20vw] absolute",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: bird_1/* default */.Z,
                    alt: "plant",
                    className: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[340px] right-0 top-[500px] lg:top-[220px] absolute flex justify-end",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: Leaves/* default */.Z,
                    alt: "plant",
                    className: "transform -scale-x-100"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[400px] hidden lg:block bottom-[-150px] left-[10vw] absolute",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: potted_plant,
                    alt: "plant",
                    className: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[340px] hidden lg:block bottom-[800px] left-[35vw] absolute",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: bird_2/* default */.Z,
                    alt: "plant",
                    className: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[80vw] h-auto flex flex-col items-center lg:items-start justify-evenly text-center lg:text-left",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-[350px] lg:w-[600px] flex flex-col items-center lg:items-start justify-evenly",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-[28px] lg:text-[48px] font-bold font-gradient leading-[30px] lg:leading-[50px]",
                            children: webinar.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-green11 text-[14px] lg:text-[20px]",
                            children: webinar.desc
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full lg:w-[540px] h-[125px] lg:h-[150px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col justify-center items-start text-green11 text-[12px] lg:text-[16px] rounded-2xl",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: webinar.date
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: webinar.time
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: webinar.place
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: webinar.speaker
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full lg:w-[540px] h-[300px] lg:h-[200px] flex flex-col lg:flex-row justify-evenly lg:justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "h-[125px] w-full lg:w-[250px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col justify-center items-center text-green11 text-center rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "w-full text-[20px] lg:text-[24px] text-green7 font-semibold",
                                            children: "FREE"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "w-full text-[16px] lg:text-[20px] text-green11",
                                            children: webinar.free
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "h-[125px] w-full lg:w-[250px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col justify-center items-center text-green11 text-center rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "w-full text-[20px] lg:text-[24px] text-green7 font-semibold",
                                            children: "LIMITED SEATS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "w-full text-[16px] text-green11",
                                            children: "Are available for the general public"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[80vw] h-auto flex flex-col items-center lg:items-end justify-evenly text-center lg:text-right mt-[5vw]",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-[350px] lg:w-[600px] flex flex-col items-center lg:items-end justify-evenly",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-[28px] lg:text-[48px] font-bold font-gradient leading-[30px] lg:leading-[50px]",
                            children: coaching.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-green11 text-[14px] lg:text-[20px]",
                            children: coaching.desc
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full lg:w-[540px] h-[125px] lg:h-[150px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col justify-center items-start lg:items-end text-green11 text-[12px] lg:text-[16px] rounded-2xl",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: coaching.date
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: coaching.time
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: coaching.place
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: coaching.speaker
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "h-[125px] w-full lg:w-[250px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col justify-center items-center text-green11 text-center rounded-2xl",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "w-full text-[20px] lg:text-[24px] text-green7 font-semibold",
                                    children: "Exclusive"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "w-full text-[16px] text-green11",
                                    children: coaching.exclusive
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
Events.propTypes = {
    webinar: external_prop_types_default().shape({
        title: (external_prop_types_default()).string.isRequired,
        desc: (external_prop_types_default()).string.isRequired,
        date: (external_prop_types_default()).string.isRequired,
        time: (external_prop_types_default()).string.isRequired,
        place: (external_prop_types_default()).string.isRequired,
        speaker: (external_prop_types_default()).string.isRequired,
        free: (external_prop_types_default()).string.isRequired
    }),
    coaching: external_prop_types_default().shape({
        title: (external_prop_types_default()).string.isRequired,
        desc: (external_prop_types_default()).string.isRequired,
        date: (external_prop_types_default()).string.isRequired,
        time: (external_prop_types_default()).string.isRequired,
        place: (external_prop_types_default()).string.isRequired,
        speaker: (external_prop_types_default()).string.isRequired,
        exclusive: (external_prop_types_default()).string.isRequired
    })
};
/* harmony default export */ const Event = (Events);


/***/ })

};
;
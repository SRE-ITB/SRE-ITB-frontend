"use strict";
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 9672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AlertBox = ({ isConfirm , content , onConfirm , onCancel  })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timeoutId = setTimeout(()=>{
            setIsOpen(true);
        }, 50);
        return ()=>{
            clearTimeout(timeoutId);
        };
    }, []);
    const handleConfirm = ()=>{
        setIsOpen(false);
        setTimeout(()=>{
            onConfirm();
        }, 300);
    };
    const handleCancel = ()=>{
        setIsOpen(false);
        setTimeout(()=>{
            onCancel?.();
        }, 300);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-[10vw] font-montserrat transition-opacity ease-in-out duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `bg-white p-5 rounded-md w-[500px] transition-transform ease-in-out duration-300 transform scale-${isOpen ? "100" : "90"}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-lg text-black font-semibold mb-3 text-center",
                    children: content
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `flex ${isConfirm ? "justify-between" : "justify-center"}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleConfirm,
                            className: "font-bold px-4 py-2 bg-[#169470] text-white rounded-md mr-2 hover:bg-[#046669] transition-all",
                            children: "Okay"
                        }),
                        isConfirm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleCancel,
                            className: "font-bold px-4 py-2 bg-gray-300 rounded-md",
                            children: "Cancel"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertBox);


/***/ })

};
;
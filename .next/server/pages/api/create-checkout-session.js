"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/create-checkout-session";
exports.ids = ["pages/api/create-checkout-session"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "./src/pages/api/create-checkout-session.js":
/*!**************************************************!*\
  !*** ./src/pages/api/create-checkout-session.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { items , email  } = req.body;\n    const transformedItems = items.map((item)=>({\n            description: item.description,\n            quantity: 1,\n            price_data: {\n                currency: \"usd\",\n                unit_amount: item.price * 100,\n                product_data: {\n                    name: item.title,\n                    images: [\n                        item.image\n                    ]\n                }\n            }\n        })\n    );\n    const session = await stripe.checkout.sessions.create({\n        payment_method_types: [\n            \"card\"\n        ],\n        shipping_rates: [\n            \"shr_1KIAaVSB35eQu76xqxb9tVJK\"\n        ],\n        shipping_address_collection: {\n            allowed_countries: [\n                \"GB\",\n                \"US\",\n                \"CA\"\n            ]\n        },\n        line_items: transformedItems,\n        mode: \"payment\",\n        success_url: `${process.env.HOST}/success`,\n        cancel_url: `${process.env.HOST}/checkout`,\n        metadata: {\n            email,\n            images: JSON.stringify(items.map((item)=>item.image\n            ))\n        }\n    });\n    res.status(200).json({\n        id: session.id\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBRTlELGlFQUFNLE9BQWdCQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ2xDLEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssR0FBRUMsS0FBSyxFQUFDLENBQUMsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBRWpDLEtBQUssQ0FBQ0MsZ0JBQWdCLEdBQUdILEtBQUssQ0FBQ0ksR0FBRyxFQUFFQyxJQUFJLElBQU0sQ0FBQztZQUM3Q0MsV0FBVyxFQUFFRCxJQUFJLENBQUNDLFdBQVc7WUFDN0JDLFFBQVEsRUFBRSxDQUFDO1lBQ1hDLFVBQVUsRUFBRSxDQUFDO2dCQUNYQyxRQUFRLEVBQUUsQ0FBSztnQkFDZkMsV0FBVyxFQUFFTCxJQUFJLENBQUNNLEtBQUssR0FBRyxHQUFHO2dCQUM3QkMsWUFBWSxFQUFFLENBQUM7b0JBQ2JDLElBQUksRUFBRVIsSUFBSSxDQUFDUyxLQUFLO29CQUNoQkMsTUFBTSxFQUFFLENBQUNWO3dCQUFBQSxJQUFJLENBQUNXLEtBQUs7b0JBQUEsQ0FBQztnQkFDdEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDOztJQUVELEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ3hCLE1BQU0sQ0FBQ3lCLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQztRQUNyREMsb0JBQW9CLEVBQUUsQ0FBQztZQUFBLENBQU07UUFBQSxDQUFDO1FBQzlCQyxjQUFjLEVBQUUsQ0FBQztZQUFBLENBQThCO1FBQUEsQ0FBQztRQUNoREMsMkJBQTJCLEVBQUUsQ0FBQztZQUM1QkMsaUJBQWlCLEVBQUUsQ0FBQztnQkFBQSxDQUFJO2dCQUFFLENBQUk7Z0JBQUUsQ0FBSTtZQUFBLENBQUM7UUFDdkMsQ0FBQztRQUNEQyxVQUFVLEVBQUV0QixnQkFBZ0I7UUFDNUJ1QixJQUFJLEVBQUUsQ0FBUztRQUNmQyxXQUFXLEtBQUtoQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2dDLElBQUksQ0FBQyxRQUFRO1FBQ3pDQyxVQUFVLEtBQUtsQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2dDLElBQUksQ0FBQyxTQUFTO1FBQ3pDRSxRQUFRLEVBQUUsQ0FBQztZQUNUN0IsS0FBSztZQUNMYyxNQUFNLEVBQUVnQixJQUFJLENBQUNDLFNBQVMsQ0FBQ2hDLEtBQUssQ0FBQ0ksR0FBRyxFQUFFQyxJQUFJLEdBQUtBLElBQUksQ0FBQ1csS0FBSzs7UUFDdkQsQ0FBQztJQUNILENBQUM7SUFFRGpCLEdBQUcsQ0FBQ2tDLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1FBQUNDLEVBQUUsRUFBRWxCLE9BQU8sQ0FBQ2tCLEVBQUU7SUFBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzP2JhMjIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBlID0gcmVxdWlyZShcInN0cmlwZVwiKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IGl0ZW1zLCBlbWFpbCB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgdHJhbnNmb3JtZWRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcbiAgICBxdWFudGl0eTogMSxcbiAgICBwcmljZV9kYXRhOiB7XG4gICAgICBjdXJyZW5jeTogXCJ1c2RcIixcbiAgICAgIHVuaXRfYW1vdW50OiBpdGVtLnByaWNlICogMTAwLFxuICAgICAgcHJvZHVjdF9kYXRhOiB7XG4gICAgICAgIG5hbWU6IGl0ZW0udGl0bGUsXG4gICAgICAgIGltYWdlczogW2l0ZW0uaW1hZ2VdLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSk7XG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbXCJjYXJkXCJdLFxuICAgIHNoaXBwaW5nX3JhdGVzOiBbXCJzaHJfMUtJQWFWU0IzNWVRdTc2eHF4Yjl0VkpLXCJdLFxuICAgIHNoaXBwaW5nX2FkZHJlc3NfY29sbGVjdGlvbjoge1xuICAgICAgYWxsb3dlZF9jb3VudHJpZXM6IFtcIkdCXCIsIFwiVVNcIiwgXCJDQVwiXSxcbiAgICB9LFxuICAgIGxpbmVfaXRlbXM6IHRyYW5zZm9ybWVkSXRlbXMsXG4gICAgbW9kZTogXCJwYXltZW50XCIsXG4gICAgc3VjY2Vzc191cmw6IGAke3Byb2Nlc3MuZW52LkhPU1R9L3N1Y2Nlc3NgLFxuICAgIGNhbmNlbF91cmw6IGAke3Byb2Nlc3MuZW52LkhPU1R9L2NoZWNrb3V0YCxcbiAgICBtZXRhZGF0YToge1xuICAgICAgZW1haWwsXG4gICAgICBpbWFnZXM6IEpTT04uc3RyaW5naWZ5KGl0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbS5pbWFnZSkpLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaWQ6IHNlc3Npb24uaWQgfSk7XG59O1xuIl0sIm5hbWVzIjpbInN0cmlwZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJyZXEiLCJyZXMiLCJpdGVtcyIsImVtYWlsIiwiYm9keSIsInRyYW5zZm9ybWVkSXRlbXMiLCJtYXAiLCJpdGVtIiwiZGVzY3JpcHRpb24iLCJxdWFudGl0eSIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInVuaXRfYW1vdW50IiwicHJpY2UiLCJwcm9kdWN0X2RhdGEiLCJuYW1lIiwidGl0bGUiLCJpbWFnZXMiLCJpbWFnZSIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJzaGlwcGluZ19yYXRlcyIsInNoaXBwaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImFsbG93ZWRfY291bnRyaWVzIiwibGluZV9pdGVtcyIsIm1vZGUiLCJzdWNjZXNzX3VybCIsIkhPU1QiLCJjYW5jZWxfdXJsIiwibWV0YWRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/create-checkout-session.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/create-checkout-session.js"));
module.exports = __webpack_exports__;

})();
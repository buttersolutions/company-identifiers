"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SE_CODES = exports.SEValidator = void 0;
var SE_CODES;
(function (SE_CODES) {
    SE_CODES["CorporateIdentityNumber"] = "CorporateIdentityNumber";
})(SE_CODES || (SE_CODES = {}));
exports.SE_CODES = SE_CODES;
const SEValidator = {
    CorporateIdentityNumber: {
        minSize: 10,
        maxSize: 10,
        sizeText: "10 characters long",
        format: [/\d{10}/],
        validator(registration) {
            return true;
        },
    },
};
exports.SEValidator = SEValidator;

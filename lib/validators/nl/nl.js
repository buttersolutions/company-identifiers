"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NL_CODES = exports.NLValidator = void 0;
var NL_CODES;
(function (NL_CODES) {
    NL_CODES["btwNumber"] = "btwNumber";
})(NL_CODES || (NL_CODES = {}));
exports.NL_CODES = NL_CODES;
const NLValidator = {
    btwNumber: {
        minSize: 12,
        maxSize: 12,
        sizeText: "12 characters long",
        format: [/^[A-Za-z0-9]{12}$/],
        validator(registration) {
            return true;
        },
    },
};
exports.NLValidator = NLValidator;

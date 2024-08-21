"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BE_CODES = exports.BEValidator = void 0;
var BE_CODES;
(function (BE_CODES) {
    BE_CODES["BCE"] = "BCE";
})(BE_CODES || (BE_CODES = {}));
exports.BE_CODES = BE_CODES;
const validateBCE = (registration) => {
    // Check if the input has exactly 10 digits and consists of numbers only
    return /^\d{10}$/.test(registration);
};
const BEValidator = {
    BCE: {
        minSize: 10,
        maxSize: 10,
        sizeText: "10 characters long",
        format: [/[0-9]{10}/],
        validator(registration) {
            return validateBCE(registration);
        },
    },
};
exports.BEValidator = BEValidator;

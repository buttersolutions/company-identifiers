"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DE_CODES = exports.DEValidator = void 0;
var DE_CODES;
(function (DE_CODES) {
    DE_CODES["UST_IDNR"] = "UST_IDNR";
})(DE_CODES || (DE_CODES = {}));
exports.DE_CODES = DE_CODES;
// Validate a 9-digit German VAT number (USt-IdNr)
const validateUSTIDNR = (registration) => {
    // Ensure the string is exactly 9 digits long
    const regex = /^[0-9]{9}$/;
    return regex.test(registration);
};
const DEValidator = {
    UST_IDNR: {
        minSize: 9,
        maxSize: 9,
        sizeText: "9 digits long",
        format: [/^[0-9]{9}$/],
        validator(registration) {
            return validateUSTIDNR(registration);
        },
    },
};
exports.DEValidator = DEValidator;

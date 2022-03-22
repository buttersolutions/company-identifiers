"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GB_ENG_CODES = exports.GB_ENGValidator = void 0;
var GB_ENG_CODES;
(function (GB_ENG_CODES) {
    GB_ENG_CODES["VAT"] = "VAT";
})(GB_ENG_CODES || (GB_ENG_CODES = {}));
exports.GB_ENG_CODES = GB_ENG_CODES;
/*
  The calculation and rules are based on this article:
    https://wiki.scn.sap.com/wiki/display/CRM/United+Kingdom
*/
const validateMod97 = (registration) => {
    const r = registration.startsWith("GB")
        ? registration.slice(2)
        : registration;
    const result = r
        .slice(0, -2)
        .split("")
        .reduce((acc, digit, index) => {
        return acc + parseInt(digit) * (8 - index);
    }, parseInt(r.slice(-2)));
    return result % 97 === 0 || (result + 55) % 97 === 0;
};
const GB_ENGValidator = {
    VAT: {
        minSize: 9,
        /* The number can be prefixed with "GB":
            https://www.pattersonhallaccountants.co.uk/vat-registration-number/
        */
        maxSize: 11,
        format: [/GB[0-9]{9}/, /[0-9]{9}/],
        validator(registration) {
            return validateMod97(registration);
        },
    },
};
exports.GB_ENGValidator = GB_ENGValidator;

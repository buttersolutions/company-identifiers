"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DK_CODES = exports.DKValidator = void 0;
var DK_CODES;
(function (DK_CODES) {
    DK_CODES["CVR"] = "CVR";
})(DK_CODES || (DK_CODES = {}));
exports.DK_CODES = DK_CODES;
/*
  The calculation and rules are based on this article:
    https://wiki.scn.sap.com/wiki/display/CRM/Denmark
*/
const validateMod11 = (registration) => {
    const result = registration.split("").reduce((acc, digit, index) => {
        return acc + parseInt(digit) * (index === 0 ? 2 : 8 - index);
    }, 0);
    return result % 11 === 0;
};
const DKValidator = {
    CVR: {
        minSize: 8,
        maxSize: 8,
        format: [/[0-9]{8}/],
        validator(registration) {
            if (registration[0] === "0")
                return false;
            return validateMod11(registration);
        },
    },
};
exports.DKValidator = DKValidator;

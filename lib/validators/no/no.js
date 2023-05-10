"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NO_CODES = exports.NOValidator = void 0;
var NO_CODES;
(function (NO_CODES) {
    NO_CODES["OrgNr"] = "OrgNr";
})(NO_CODES || (NO_CODES = {}));
exports.NO_CODES = NO_CODES;
const NOValidator = {
    OrgNr: {
        minSize: 9,
        maxSize: 9,
        sizeText: "9 characters long",
        format: [/[0-9]{9}/],
        validator(registration) {
            return true;
        },
    },
};
exports.NOValidator = NOValidator;

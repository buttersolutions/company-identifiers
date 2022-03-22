"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALIDATORS = exports.CODES = void 0;
const dk_1 = require("./dk");
const gb_eng_1 = require("./gb_eng");
exports.CODES = {
    DK: dk_1.DK_CODES,
    "GB-ENG": gb_eng_1.GB_ENG_CODES,
};
const VALIDATORS = {
    DK: dk_1.DKValidator,
    "GB-ENG": gb_eng_1.GB_ENGValidator,
};
exports.VALIDATORS = VALIDATORS;

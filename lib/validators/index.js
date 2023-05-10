"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALIDATORS = exports.CODES = void 0;
const dk_1 = require("./dk");
const gb_eng_1 = require("./gb_eng");
const no_1 = require("./no");
exports.CODES = {
    DK: dk_1.DK_CODES,
    "GB-ENG": gb_eng_1.GB_ENG_CODES,
    NO: no_1.NO_CODES,
};
const VALIDATORS = {
    DK: dk_1.DKValidator,
    "GB-ENG": gb_eng_1.GB_ENGValidator,
    "NO": no_1.NOValidator,
};
exports.VALIDATORS = VALIDATORS;

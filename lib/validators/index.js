"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALIDATORS = exports.CODES = void 0;
const dk_1 = require("./dk");
const gb_eng_1 = require("./gb_eng");
const no_1 = require("./no");
const se_1 = require("./se");
exports.CODES = {
    "GB-ENG": gb_eng_1.GB_ENG_CODES,
    DK: dk_1.DK_CODES,
    NO: no_1.NO_CODES,
    SE: se_1.SE_CODES
};
const VALIDATORS = {
    "GB-ENG": gb_eng_1.GB_ENGValidator,
    "NO": no_1.NOValidator,
    "SE": se_1.SEValidator,
    DK: dk_1.DKValidator,
};
exports.VALIDATORS = VALIDATORS;

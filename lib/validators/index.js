"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALIDATORS = exports.CODES = void 0;
const be_1 = require("./be");
const de_1 = require("./de");
const dk_1 = require("./dk");
const gb_eng_1 = require("./gb_eng");
const nl_1 = require("./nl");
const no_1 = require("./no");
const se_1 = require("./se");
exports.CODES = {
    "GB-ENG": gb_eng_1.GB_ENG_CODES,
    DK: dk_1.DK_CODES,
    NO: no_1.NO_CODES,
    SE: se_1.SE_CODES,
    NL: nl_1.NL_CODES,
    DE: de_1.DE_CODES,
    BE: be_1.BE_CODES,
};
const VALIDATORS = {
    "GB-ENG": gb_eng_1.GB_ENGValidator,
    NO: no_1.NOValidator,
    SE: se_1.SEValidator,
    DK: dk_1.DKValidator,
    NL: nl_1.NLValidator,
    DE: de_1.DEValidator,
    BE: be_1.BEValidator,
};
exports.VALIDATORS = VALIDATORS;

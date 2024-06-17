import { AVAILABLE_COUNTRIES_ISO_CODE } from "../enums";
import { ValidatorConfig } from "../typings";
import { DE_CODES } from "./de";
import { DK_CODES } from "./dk";
import { GB_ENG_CODES } from "./gb_eng";
import { NL_CODES } from "./nl";
import { NO_CODES } from "./no";
import { SE_CODES } from "./se";
export declare const CODES: {
    "GB-ENG": typeof GB_ENG_CODES;
    DK: typeof DK_CODES;
    NO: typeof NO_CODES;
    SE: typeof SE_CODES;
    NL: typeof NL_CODES;
    DE: typeof DE_CODES;
};
declare type ValidatorsCollection = Record<AVAILABLE_COUNTRIES_ISO_CODE, Record<string, ValidatorConfig>>;
declare const VALIDATORS: ValidatorsCollection;
export { VALIDATORS };

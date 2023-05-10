import { AVAILABLE_COUNTRIES_ISO_CODE } from "../enums";
import { ValidatorConfig } from "../typings";
import { DK_CODES } from "./dk";
import { GB_ENG_CODES } from "./gb_eng";
import { NO_CODES } from "./no";
export declare const CODES: {
    DK: typeof DK_CODES;
    "GB-ENG": typeof GB_ENG_CODES;
    NO: typeof NO_CODES;
};
declare type ValidatorsCollection = Record<AVAILABLE_COUNTRIES_ISO_CODE, Record<string, ValidatorConfig>>;
declare const VALIDATORS: ValidatorsCollection;
export { VALIDATORS };

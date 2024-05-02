import { AVAILABLE_COUNTRIES_ISO_CODE } from "../enums";
import { ValidatorConfig } from "../typings";
import { DK_CODES, DKValidator } from "./dk";
import { GB_ENG_CODES, GB_ENGValidator } from "./gb_eng";
import { NL_CODES, NLValidator } from "./nl";
import { NO_CODES, NOValidator } from "./no";
import { SE_CODES, SEValidator } from "./se";

export const CODES = {
  "GB-ENG": GB_ENG_CODES,
  DK: DK_CODES,
  NO: NO_CODES,
  SE: SE_CODES,
  NL: NL_CODES,
};

type ValidatorsCollection = Record<
  AVAILABLE_COUNTRIES_ISO_CODE,
  Record<string, ValidatorConfig>
>;

const VALIDATORS: ValidatorsCollection = {
  "GB-ENG": GB_ENGValidator,
  NO: NOValidator,
  SE: SEValidator,
  DK: DKValidator,
  NL: NLValidator,
};

export { VALIDATORS };

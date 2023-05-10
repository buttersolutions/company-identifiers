import { AVAILABLE_COUNTRIES_ISO_CODE } from "../enums";
import { ValidatorConfig } from "../typings";

import { DKValidator, DK_CODES } from "./dk";
import { GB_ENGValidator, GB_ENG_CODES } from "./gb_eng";
import { NOValidator, NO_CODES } from "./no";

export const CODES = {
  DK: DK_CODES,
  "GB-ENG": GB_ENG_CODES,
  NO: NO_CODES,
};

type ValidatorsCollection = Record<
  AVAILABLE_COUNTRIES_ISO_CODE,
  Record<string, ValidatorConfig>
>;

const VALIDATORS: ValidatorsCollection = {
  DK: DKValidator,
  "GB-ENG": GB_ENGValidator,
  "NO": NOValidator,
};

export { VALIDATORS };

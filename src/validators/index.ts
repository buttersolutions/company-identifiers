import { AVAILABLE_COUNTRIES_ISO_CODE } from "../enums";
import { ValidatorConfig } from "../typings";

import { DKValidator, DK_CODES } from "./dk";
import { GB_ENGValidator, GB_ENG_CODES } from "./gb_eng";
import { NOValidator, NO_CODES } from "./no";
import { SEValidator, SE_CODES } from "./se";

export const CODES = {
  "GB-ENG": GB_ENG_CODES,
  DK: DK_CODES,
  NO: NO_CODES,
  SE: SE_CODES
};

type ValidatorsCollection = Record<
  AVAILABLE_COUNTRIES_ISO_CODE,
  Record<string, ValidatorConfig>
>;

const VALIDATORS: ValidatorsCollection = {
  "GB-ENG": GB_ENGValidator,
  "NO": NOValidator,
  "SE": SEValidator,
  DK: DKValidator,
};

export { VALIDATORS };

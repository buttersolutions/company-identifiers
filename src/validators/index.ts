import { AVAILABLE_ORG_COUNTRIES_ISO_CODE } from "../enums";
import { ValidatorConfig } from "../typings";

import { DKValidator, DK_STANDARDS } from "./dk";
import { GB_ENGValidator, GB_ENG_STANDARDS } from "./gb_eng";

export const STANDARDS = {
  DK: DK_STANDARDS,
  "GB-ENG": GB_ENG_STANDARDS,
};

type ValidatorsCollection = Record<
  AVAILABLE_ORG_COUNTRIES_ISO_CODE,
  Record<string, ValidatorConfig>
>;

const VALIDATORS: ValidatorsCollection = {
  DK: DKValidator,
  "GB-ENG": GB_ENGValidator,
};

export { VALIDATORS };

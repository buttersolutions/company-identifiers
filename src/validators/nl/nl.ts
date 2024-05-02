import { ValidatorConfig } from "../../typings";

enum NL_CODES {
  CorporateIdentityNumber = "CorporateIdentityNumber",
}

const NLValidator: Record<NL_CODES, ValidatorConfig> = {
  CorporateIdentityNumber: {
    minSize: 12,
    maxSize: 12,
    sizeText: "12 characters long",
    format: [/[[:alnum:]]{12}/], // 5594453077, but canonical format contains a dash that should be removed before being validated: 559445-3077
    validator(registration: string): boolean {
      return true;
    },
  },
};

export { NLValidator, NL_CODES };

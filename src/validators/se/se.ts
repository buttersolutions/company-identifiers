import { ValidatorConfig } from "../../typings";

enum SE_CODES {
  CorporateIdentityNumber = "CorporateIdentityNumber",
}

const SEValidator: Record<SE_CODES, ValidatorConfig> = {
  CorporateIdentityNumber: {
    minSize: 10,
    maxSize: 10,
    sizeText: "10 characters long",
    format: [/\d{10}/], // 5594453077, but canonical format contains a dash that should be removed before being validated: 559445-3077
    validator(registration: string): boolean {
      return true;
    },
  },
};

export { SEValidator, SE_CODES };

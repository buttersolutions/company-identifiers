import { ValidatorConfig } from "../../typings";

enum NL_CODES {
  "btw-number" = "btw-number",
}

const NLValidator: Record<NL_CODES, ValidatorConfig> = {
  "btw-number": {
    minSize: 12,
    maxSize: 12,
    sizeText: "12 characters long",
    format: [/^[A-Za-z0-9]{12}$/], // 5594453077, but canonical format contains a dash that should be removed before being validated: 559445-3077
    validator(registration: string): boolean {
      return true;
    },
  },
};

export { NLValidator, NL_CODES };

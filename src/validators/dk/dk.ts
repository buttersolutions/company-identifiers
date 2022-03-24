import { ValidatorConfig } from "../../typings";

enum DK_CODES {
  CVR = "CVR",
}

/*
  The calculation and rules are based on this article:
    https://wiki.scn.sap.com/wiki/display/CRM/Denmark
*/
const validateMod11 = (registration: string) => {
  const result: number = registration.split("").reduce((acc, digit, index) => {
    return acc + parseInt(digit) * (index === 0 ? 2 : 8 - index);
  }, 0);
  return result % 11 === 0;
};

const DKValidator: Record<DK_CODES, ValidatorConfig> = {
  CVR: {
    minSize: 8,
    maxSize: 8,
    sizeText: "8 characters long",
    format: [/[0-9]{8}/],
    validator(registration) {
      if (registration[0] === "0") return false;
      return validateMod11(registration);
    },
  },
};

export { DKValidator, DK_CODES };

import { ValidatorConfig } from "../../typings";

export enum GB_ENG_STANDARDS {
  VAT = "VAT",
}

/*
  The calculation and rules are based on this article:
    https://wiki.scn.sap.com/wiki/display/CRM/United+Kingdom
*/
const validateMod97 = (registration: string) => {
  const r = registration.startsWith("GB")
    ? registration.slice(2)
    : registration;

  const result: number = r
    .slice(0, -2)
    .split("")
    .reduce((acc, digit, index) => {
      return acc + parseInt(digit) * (8 - index);
    }, parseInt(r.slice(-2)));

  return result % 97 === 0 || (result + 55) % 97 === 0;
};

const GB_ENGValidator: Record<GB_ENG_STANDARDS, ValidatorConfig> = {
  VAT: {
    minSize: 9,
    /* The number can be prefixed with "GB":
        https://www.pattersonhallaccountants.co.uk/vat-registration-number/
    */
    maxSize: 11,
    format: [/GB[0-9]{9}/, /[0-9]{9}/],
    validator(registration) {
      return validateMod97(registration);
    },
  },
};

export { GB_ENGValidator };

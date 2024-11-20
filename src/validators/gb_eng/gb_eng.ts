import { ValidatorConfig } from "../../typings";

enum GB_ENG_CODES {
  VAT = "VAT",
}

/*
  The calculation and rules are based on this article:
    https://wiki.scn.sap.com/wiki/display/CRM/United+Kingdom
*/
const validateMod = (registration: string): boolean => {
  // Remove the "GB" prefix if present
  const r = registration.startsWith("GB")
    ? registration.slice(2)
    : registration;

  // Check if the length is exactly 8 characters
  if (r.length !== 8) {
    console.log("Validation failed: length is not 8 characters.");
    return false;
  }

  // Ensure the input is numeric
  if (isNaN(Number(r))) {
    console.log("Validation failed: contains non-numeric characters.");
    return false;
  }

  // If both checks pass, return true
  return true;
};

const GB_ENGValidator: Record<GB_ENG_CODES, ValidatorConfig> = {
  VAT: {
    minSize: 8,
    /* The number can be prefixed with "GB":
        https://www.pattersonhallaccountants.co.uk/vat-registration-number/
    */
    maxSize: 11,
    sizeText: "between 8 characters long or 11 if 'GB' prefix is present",
    format: [/GB[0-9]{8}/, /[0-9]{8}/],
    validator(registration) {
      return validateMod(registration);
    },
  },
};

export { GB_ENGValidator, GB_ENG_CODES };

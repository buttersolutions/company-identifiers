import { ValidatorConfig } from "../../typings";

enum DE_CODES {
  UST_IDNR = "UST_IDNR",
}

// Validate a 9-digit German VAT number (USt-IdNr)
const validateUSTIDNR = (registration: string): boolean => {
  // Ensure the string is exactly 9 digits long
  const regex = /^[0-9]{9}$/;
  return regex.test(registration);
};

const DEValidator: Record<DE_CODES, ValidatorConfig> = {
  UST_IDNR: {
    minSize: 9,
    maxSize: 9,
    sizeText: "9 digits long",
    format: [/^[0-9]{9}$/],
    validator(registration) {
      return validateUSTIDNR(registration);
    },
  },
};

export { DEValidator, DE_CODES };

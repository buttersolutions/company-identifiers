import { ValidatorConfig } from "../../typings";

enum DE_CODES {
  UST_IDNR = "UST_IDNR",
}

const validateMod = (registration: string): boolean => {
  // Remove the "GB" prefix if present
  const r = registration.startsWith("DE")
    ? registration.slice(2)
    : registration;

  // Check if the length is exactly 8 characters
  if (r.length !== 9) {
    console.log("Validation failed: length is not 9 characters.");
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

const DEValidator: Record<DE_CODES, ValidatorConfig> = {
  UST_IDNR: {
    minSize: 9,
    maxSize: 11,
    sizeText: "9 digits long",
    format: [/DE[0-9]{9}/, /[0-9]{9}/],
    validator(registration) {
      return validateMod(registration);
    },
  },
};

export { DEValidator, DE_CODES };

import { ValidatorConfig } from "../../typings";

enum BE_CODES {
  BCE = "BCE",
}
const validateBCE = (registration: string) => {
  // Check if the input has exactly 10 digits and consists of numbers only
  return /^\d{10}$/.test(registration);
};

const BEValidator: Record<BE_CODES, ValidatorConfig> = {
  BCE: {
    minSize: 10,
    maxSize: 10,
    sizeText: "10 characters long",
    format: [/[0-9]{10}/],
    validator(registration) {
      return validateBCE(registration);
    },
  },
};

export { BEValidator, BE_CODES };

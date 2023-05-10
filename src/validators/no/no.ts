import { ValidatorConfig } from "../../typings";

enum NO_CODES {
  OrgNr = "OrgNr",
}

const NOValidator: Record<NO_CODES, ValidatorConfig> = {
  OrgNr: {
    minSize: 9,
    maxSize: 9,
    sizeText: "9 characters long",
    format: [/[0-9]{9}/],
    validator(registration): boolean {
      return true;
    },
  },
};

export { NOValidator, NO_CODES };

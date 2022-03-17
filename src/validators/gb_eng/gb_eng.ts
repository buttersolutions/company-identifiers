import { ValidatorConfig } from "../../typings";

export enum GB_ENG_STANDARDS {
  VAT = "VAT",
}

const GB_ENGValidator: Record<GB_ENG_STANDARDS, ValidatorConfig> = {
  VAT: {
    minSize: 9,
    maxSize: 11,
    format: [/GB[0-9]{9}/, /[0-9]{9}/],
    validator(registration) {
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
    },
  },
};

export { GB_ENGValidator };

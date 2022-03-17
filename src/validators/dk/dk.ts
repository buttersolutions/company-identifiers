import { ValidatorConfig } from "../../typings";

export enum DK_STANDARDS {
  CVR = "CVR",
}

const DKValidator: Record<DK_STANDARDS, ValidatorConfig> = {
  CVR: {
    minSize: 8,
    maxSize: 8,
    format: [/[0-9]{8}/],
    validator(registration) {
      if (registration[0] === "0") return false;
      const multipliers = [2, 7, 6, 5, 4, 3, 2, 1];
      const result: number = registration
        .split("")
        .reduce((acc, digit, index) => {
          return acc + parseInt(digit) * (index === 0 ? 2 : 8 - index);
        }, 0);
      return result % 11 === 0;
    },
  },
};

export { DKValidator };

import { AVAILABLE_ORG_COUNTRIES_ISO_CODE } from "./enums";
import { VALIDATORS, STANDARDS } from "./validators";

export class CompanyIdentifiers {
  private countryCode: AVAILABLE_ORG_COUNTRIES_ISO_CODE =
    AVAILABLE_ORG_COUNTRIES_ISO_CODE.DK;
  private standardCode: string = "";

  public setCountry(countryCode: AVAILABLE_ORG_COUNTRIES_ISO_CODE) {
    this.countryCode = countryCode;
    return this;
  }

  public setStandard(standard: string) {
    const possibleValues = Object.values(STANDARDS[this.countryCode]);

    const isValidStandard = possibleValues.some((value) => value === standard);

    if (!isValidStandard)
      throw new Error(`
        Standard ${standard} is not supported for ${this.countryCode},
        Supported standards are: ${possibleValues.join(", ")}
      `);

    this.standardCode = standard;
    return this;
  }

  public validate(registration: string): boolean {
    const config = VALIDATORS[this.countryCode][this.standardCode];

    return (
      registration.length >= config.minSize &&
      registration.length <= config.maxSize &&
      config.format.some((f) => registration.match(f)) &&
      config.validator(registration)
    );
  }
}

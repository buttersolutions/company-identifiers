import { AVAILABLE_COUNTRIES_ISO_CODE } from "./enums";
import { VALIDATORS, CODES } from "./validators";

export class CompanyIdentifiers {
  private countryCode: AVAILABLE_COUNTRIES_ISO_CODE =
    AVAILABLE_COUNTRIES_ISO_CODE.DK;
  private code: string = "";

  public setCountry(countryCode: AVAILABLE_COUNTRIES_ISO_CODE) {
    this.countryCode = countryCode;
    return this;
  }

  public setCode(code: string) {
    const possibleValues = Object.values(CODES[this.countryCode]);

    const isValidCode = possibleValues.some((value) => value === code);

    if (!isValidCode)
      throw new Error(`
        Code ${code} is not supported for ${this.countryCode},
        Supported Codes are: ${possibleValues.join(", ")}
      `);

    this.code = code;
    return this;
  }

  public validate(registration: string): boolean {
    const config = VALIDATORS[this.countryCode][this.code];

    return (
      registration.length >= config.minSize &&
      registration.length <= config.maxSize &&
      config.format.some((f) => registration.match(f)) &&
      config.validator(registration)
    );
  }
}

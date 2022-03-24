import { AVAILABLE_COUNTRIES_ISO_CODE } from "./enums";
import { ValidatorConfig, PublicValidatorConfig } from "./typings";
import { VALIDATORS, CODES } from "./validators";

export class CompanyIdentifiers {
  private countryCode: AVAILABLE_COUNTRIES_ISO_CODE =
    AVAILABLE_COUNTRIES_ISO_CODE.DK;
  private code: string = "";
  private config: ValidatorConfig | undefined;

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
    this.config = VALIDATORS[this.countryCode][this.code];
    return this;
  }

  public validate(registration: string): boolean {
    if (!this.config) {
      throw new Error(
        "Configuration has not been set, check if both country and code are set"
      );
    }

    return (
      registration.length >= this.config.minSize &&
      registration.length <= this.config.maxSize &&
      this.config.format.some((f) => registration.match(f)) &&
      this.config.validator(registration)
    );
  }

  public getConfig(): PublicValidatorConfig {
    if (!this.config) {
      throw new Error(
        "Configuration has not been set, check if both country and code are set"
      );
    }

    const ConvertToPublicConfig = ({
      validator,
      ...publicConfig
    }: ValidatorConfig): PublicValidatorConfig => publicConfig;

    return ConvertToPublicConfig(this.config);
  }
}

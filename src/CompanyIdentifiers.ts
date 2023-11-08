import { AVAILABLE_COUNTRIES_ISO_CODE } from "./enums";
import { ValidatorConfig } from "./typings";
import { VALIDATORS, CODES } from "./validators";

export type PublicValidatorConfig = Omit<ValidatorConfig, "validator">;
export class CompanyIdentifiers {
  private countryCode: AVAILABLE_COUNTRIES_ISO_CODE =
    AVAILABLE_COUNTRIES_ISO_CODE.DK;
  private code: string = "";
  private config: ValidatorConfig | undefined;

  public static GraphQLCodeToReadable(graphqlCode: string): string {
    return graphqlCode.split("__").join(":");
  }

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

  public validate(registration: string): {isValid: boolean, error?: Error} {
    if (!this.config) {
      throw new Error(
        "Configuration has not been set, check if both country and code are set"
      );
    }

    try {
      if (registration.length < this.config.minSize) {
        throw new Error('value is too short')
      }
  
      if (registration.length > this.config.maxSize) {
        throw new Error('value is too large')
      }
  
      if (!this.config.format.some((f) => registration.match(f))) {
        throw new Error('value does not match format')
      }
  
      if (!this.config.validator(registration)) {
        throw new Error('value does not match validator')
      }
    } catch (e) {
      const error = e as Error;
      return {isValid: false, error};
    }
    
    
    return {isValid: true, error: undefined};
  }

  public hasBeenConfigured(): boolean {
    return !!this.config;
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

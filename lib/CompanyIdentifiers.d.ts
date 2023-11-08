import { AVAILABLE_COUNTRIES_ISO_CODE } from "./enums";
import { ValidatorConfig } from "./typings";
export declare type PublicValidatorConfig = Omit<ValidatorConfig, "validator">;
export declare class CompanyIdentifiers {
    private countryCode;
    private code;
    private config;
    static GraphQLCodeToReadable(graphqlCode: string): string;
    setCountry(countryCode: AVAILABLE_COUNTRIES_ISO_CODE): this;
    setCode(code: string): this;
    validate(registration: string): {
        isValid: boolean;
        error?: Error;
    };
    hasBeenConfigured(): boolean;
    getConfig(): PublicValidatorConfig;
}

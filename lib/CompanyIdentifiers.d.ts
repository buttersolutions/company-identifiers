import { AVAILABLE_COUNTRIES_ISO_CODE } from "./enums";
import { PublicValidatorConfig } from "./typings";
export declare class CompanyIdentifiers {
    private countryCode;
    private code;
    private config;
    setCountry(countryCode: AVAILABLE_COUNTRIES_ISO_CODE): this;
    setCode(code: string): this;
    validate(registration: string): boolean;
    hasBeenConfigured(): boolean;
    getConfig(): PublicValidatorConfig;
}

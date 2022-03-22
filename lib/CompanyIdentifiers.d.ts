import { AVAILABLE_COUNTRIES_ISO_CODE } from "./enums";
export declare class CompanyIdentifiers {
    private countryCode;
    private code;
    setCountry(countryCode: AVAILABLE_COUNTRIES_ISO_CODE): this;
    setCode(code: string): this;
    validate(registration: string): boolean;
}

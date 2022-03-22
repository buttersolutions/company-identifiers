"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyIdentifiers = void 0;
const enums_1 = require("./enums");
const validators_1 = require("./validators");
class CompanyIdentifiers {
    constructor() {
        this.countryCode = enums_1.AVAILABLE_COUNTRIES_ISO_CODE.DK;
        this.code = "";
    }
    setCountry(countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    setCode(code) {
        const possibleValues = Object.values(validators_1.CODES[this.countryCode]);
        const isValidCode = possibleValues.some((value) => value === code);
        if (!isValidCode)
            throw new Error(`
        Code ${code} is not supported for ${this.countryCode},
        Supported Codes are: ${possibleValues.join(", ")}
      `);
        this.code = code;
        return this;
    }
    validate(registration) {
        const config = validators_1.VALIDATORS[this.countryCode][this.code];
        return (registration.length >= config.minSize &&
            registration.length <= config.maxSize &&
            config.format.some((f) => registration.match(f)) &&
            config.validator(registration));
    }
}
exports.CompanyIdentifiers = CompanyIdentifiers;

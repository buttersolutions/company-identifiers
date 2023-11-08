"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyIdentifiers = void 0;
const enums_1 = require("./enums");
const validators_1 = require("./validators");
class CompanyIdentifiers {
    constructor() {
        this.countryCode = enums_1.AVAILABLE_COUNTRIES_ISO_CODE.DK;
        this.code = "";
    }
    static GraphQLCodeToReadable(graphqlCode) {
        return graphqlCode.split("__").join(":");
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
        this.config = validators_1.VALIDATORS[this.countryCode][this.code];
        return this;
    }
    validate(registration) {
        if (!this.config) {
            throw new Error("Configuration has not been set, check if both country and code are set");
        }
        try {
            if (registration.length < this.config.minSize) {
                throw new Error('value is too short');
            }
            if (registration.length > this.config.maxSize) {
                throw new Error('value is too large');
            }
            if (!this.config.format.some((f) => registration.match(f))) {
                throw new Error('value does not match format');
            }
            if (!this.config.validator(registration)) {
                throw new Error('value does not match validator');
            }
        }
        catch (e) {
            const error = e;
            return { isValid: false, error };
        }
        return { isValid: true, error: undefined };
    }
    hasBeenConfigured() {
        return !!this.config;
    }
    getConfig() {
        if (!this.config) {
            throw new Error("Configuration has not been set, check if both country and code are set");
        }
        const ConvertToPublicConfig = (_a) => {
            var { validator } = _a, publicConfig = __rest(_a, ["validator"]);
            return publicConfig;
        };
        return ConvertToPublicConfig(this.config);
    }
}
exports.CompanyIdentifiers = CompanyIdentifiers;

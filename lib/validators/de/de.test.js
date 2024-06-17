"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyIdentifiers_1 = require("../../CompanyIdentifiers");
const enums_1 = require("../../enums");
describe("DE Validator", () => {
    let validator;
    beforeEach(() => {
        validator = new CompanyIdentifiers_1.CompanyIdentifiers().setCountry(enums_1.AVAILABLE_COUNTRIES_ISO_CODE.DE);
    });
    describe("Corporate Identity Number Standard", () => {
        beforeEach(() => {
            validator.setCode("UST_IDNR");
        });
        it("should succeed", () => {
            const result = validator.validate("123456789B01");
            expect(result.isValid).toBe(false);
        });
        it("should fail due to wrong size", () => {
            const result = validator.validate("123456789");
            expect(result.isValid).toBe(true);
        });
        it("should fail due to wrong format", () => {
            const result = validator.validate("1234562323232323");
            expect(result.isValid).toBe(false);
        });
    });
});

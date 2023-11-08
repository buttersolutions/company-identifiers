"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyIdentifiers_1 = require("../../CompanyIdentifiers");
const enums_1 = require("../../enums");
describe("SE Validator", () => {
    let validator;
    beforeEach(() => {
        validator = new CompanyIdentifiers_1.CompanyIdentifiers().setCountry(enums_1.AVAILABLE_COUNTRIES_ISO_CODE.SE);
    });
    describe("Corporate Identity Number Standard", () => {
        beforeEach(() => {
            validator.setCode("CorporateIdentityNumber");
        });
        it("should succeed", () => {
            const result = validator.validate("9876543210");
            expect(result.isValid).toBe(true);
        });
        it("should fail due to wrong size", () => {
            const result = validator.validate("876543210");
            expect(result.isValid).toBe(false);
        });
        it("should fail due to wrong format", () => {
            const result = validator.validate("012345678A");
            expect(result.isValid).toBe(false);
        });
    });
});

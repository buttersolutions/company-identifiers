"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyIdentifiers_1 = require("../../CompanyIdentifiers");
const enums_1 = require("../../enums");
describe("NO Validator", () => {
    let validator;
    beforeEach(() => {
        validator = new CompanyIdentifiers_1.CompanyIdentifiers().setCountry(enums_1.AVAILABLE_COUNTRIES_ISO_CODE.NO);
    });
    describe("OrgNr Standard", () => {
        beforeEach(() => {
            validator.setCode("OrgNr");
        });
        it("should succeed", () => {
            const result = validator.validate("123456789");
            expect(result).toBe(true);
        });
        it("should fail due to wrong size", () => {
            const result = validator.validate("12345678");
            expect(result).toBe(false);
        });
        it("should fail due to wrong format", () => {
            const result = validator.validate("A23456789");
            expect(result).toBe(false);
        });
    });
});

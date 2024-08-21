"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyIdentifiers_1 = require("../../CompanyIdentifiers");
const enums_1 = require("../../enums");
describe("BE Validator", () => {
    let validator;
    beforeEach(() => {
        validator = new CompanyIdentifiers_1.CompanyIdentifiers().setCountry(enums_1.AVAILABLE_COUNTRIES_ISO_CODE.BE);
    });
    describe("BCE Standard", () => {
        beforeEach(() => {
            validator.setCode("BCE");
        });
        // Using a known valid BCE number
        it("should succeed with valid BCE number", () => {
            const result = validator.validate("0403440288");
            expect(result.isValid).toBe(true);
        });
        it("should fail due to wrong size (less than 10 digits)", () => {
            const result = validator.validate("012345678");
            expect(result.isValid).toBe(false);
        });
        it("should fail due to wrong size (more than 10 digits)", () => {
            const result = validator.validate("01234567890");
            expect(result.isValid).toBe(false);
        });
        it("should fail due to non-numeric characters", () => {
            const result = validator.validate("01234abc89");
            expect(result.isValid).toBe(false);
        });
    });
});

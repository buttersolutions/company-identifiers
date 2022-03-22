"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyIdentifiers_1 = require("../../CompanyIdentifiers");
const enums_1 = require("../../enums");
describe("DK Validator", () => {
    let validator;
    beforeEach(() => {
        validator = new CompanyIdentifiers_1.CompanyIdentifiers().setCountry(enums_1.AVAILABLE_COUNTRIES_ISO_CODE.DK);
    });
    describe("CVR Standard", () => {
        beforeEach(() => {
            validator.setCode("CVR");
        });
        it("should succeed", () => {
            const result = validator.validate("88146328");
            expect(result).toBe(true);
        });
        it("should fail due to wrong size", () => {
            const result = validator.validate("8146328");
            expect(result).toBe(false);
        });
        it("should fail due to wrong calculation", () => {
            const result = validator.validate("88146327");
            expect(result).toBe(false);
        });
        it("should fail due to wrong format", () => {
            const result = validator.validate("B88146328");
            expect(result).toBe(false);
        });
        it("should fail due to starting with 0", () => {
            const result = validator.validate("08146328");
            expect(result).toBe(false);
        });
    });
});

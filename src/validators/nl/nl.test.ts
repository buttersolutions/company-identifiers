import { CompanyIdentifiers } from "../../CompanyIdentifiers";
import { AVAILABLE_COUNTRIES_ISO_CODE } from "../../enums";

describe("NL Validator", () => {
  let validator: CompanyIdentifiers;

  beforeEach(() => {
    validator = new CompanyIdentifiers().setCountry(
      AVAILABLE_COUNTRIES_ISO_CODE.NL
    );
  });

  describe("Corporate Identity Number Standard", () => {
    beforeEach(() => {
      validator.setCode("btwNumber");
    });

    it("should succeed", () => {
      const result = validator.validate("123456789B01");
      expect(result.isValid).toBe(true);
    });
    it("should succeed", () => {
      const result = validator.validate("123456789");
      expect(result.isValid).toBe(true);
    });

    it("should fail due to wrong size", () => {
      const result = validator.validate("12345");
      expect(result.isValid).toBe(false);
    });

    it("should fail due to wrong format", () => {
      const result = validator.validate("1234562323232323");
      expect(result.isValid).toBe(false);
    });
  });
});

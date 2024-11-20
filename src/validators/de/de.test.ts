import { CompanyIdentifiers } from "../../CompanyIdentifiers";
import { AVAILABLE_COUNTRIES_ISO_CODE } from "../../enums";

describe("DE Validator", () => {
  let validator: CompanyIdentifiers;

  beforeEach(() => {
    validator = new CompanyIdentifiers().setCountry(
      AVAILABLE_COUNTRIES_ISO_CODE.DE
    );
  });

  describe("Corporate Identity Number Standard", () => {
    beforeEach(() => {
      validator.setCode("UST_IDNR");
    });

    it("should fail", () => {
      const result = validator.validate("123456789B01");
      expect(result.isValid).toBe(false);
    });

    it("should succeed with DE", () => {
      const result = validator.validate("DE123456782");
      expect(result.isValid).toBe(true);
    });

    it("should fail due to wrong size", () => {
      const result = validator.validate("DE12345678923");
      expect(result.isValid).toBe(false);
    });

    it("should fail due to wrong format", () => {
      const result = validator.validate("1234562323232323");
      expect(result.isValid).toBe(false);
    });
  });
});

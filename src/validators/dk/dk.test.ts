import { CompanyIdentifiers } from "../../CompanyIdentifiers";
import { AVAILABLE_COUNTRIES_ISO_CODE } from "../../enums";

describe("DK Validator", () => {
  let validator: CompanyIdentifiers;

  beforeEach(() => {
    validator = new CompanyIdentifiers().setCountry(
      AVAILABLE_COUNTRIES_ISO_CODE.DK
    );
  });

  describe("CVR Standard", () => {
    beforeEach(() => {
      validator.setCode("CVR");
    });

    it("should succeed", () => {
      const result = validator.validate("88146328");
      expect(result.isValid).toBe(true);
    });

    it("should fail due to wrong size", () => {
      const result = validator.validate("8146328");
      expect(result.isValid).toBe(false);
    });

    it("should fail due to wrong calculation", () => {
      const result = validator.validate("88146327");
      expect(result.isValid).toBe(false);
    });

    it("should fail due to wrong format", () => {
      const result = validator.validate("B88146328");
      expect(result.isValid).toBe(false);
    });

    it("should fail due to starting with 0", () => {
      const result = validator.validate("08146328");
      expect(result.isValid).toBe(false);
    });
  });
});

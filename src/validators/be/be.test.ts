import { CompanyIdentifiers } from "../../CompanyIdentifiers";
import { AVAILABLE_COUNTRIES_ISO_CODE } from "../../enums";

describe("BE Validator", () => {
  let validator: CompanyIdentifiers;

  beforeEach(() => {
    validator = new CompanyIdentifiers().setCountry(
      AVAILABLE_COUNTRIES_ISO_CODE.BE
    );
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

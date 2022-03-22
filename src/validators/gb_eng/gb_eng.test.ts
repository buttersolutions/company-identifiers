import { CompanyIdentifiers } from "../../CompanyIdentifiers";
import { AVAILABLE_COUNTRIES_ISO_CODE } from "../../enums";

describe("GB-ENG Validator", () => {
  let validator: CompanyIdentifiers;

  beforeEach(() => {
    validator = new CompanyIdentifiers();
    validator.setCountry(AVAILABLE_COUNTRIES_ISO_CODE.GB_ENG);
  });

  describe("VAT Standard", () => {
    beforeEach(() => {
      validator.setCode("VAT");
    });

    it("should succeed by first condition", () => {
      const result = validator.validate("434031494");
      expect(result).toBe(true);
    });

    it("should succeed by second condition", () => {
      const result = validator.validate("434031439");
      expect(result).toBe(true);
    });

    it("should succed with prefixed GB", () => {
      const result = validator.validate("GB434031494");
      expect(result).toBe(true);
    });

    it("should fail due to wrong size", () => {
      const result = validator.validate("43403149");
      expect(result).toBe(false);
    });

    it("should fail due to wrong calculation", () => {
      const result = validator.validate("434031495");
      expect(result).toBe(false);
    });

    it("should fail due to wrong format", () => {
      const result = validator.validate("434031494w");
      expect(result).toBe(false);
    });
  });
});

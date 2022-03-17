import { CompanyRegistrationValidator } from "../../CompanyRegistrationValidator";
import { AVAILABLE_ORG_COUNTRIES_ISO_CODE } from "../../enums";

describe("DK Validator", () => {
  let validator: CompanyRegistrationValidator;

  beforeEach(() => {
    validator = new CompanyRegistrationValidator().setCountry(
      AVAILABLE_ORG_COUNTRIES_ISO_CODE.DK
    );
  });

  describe("CVR Standart", () => {
    beforeEach(() => {
      validator.setStandard("CVR");
    });

    it("should succed", () => {
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

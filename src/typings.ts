export type ValidatorConfig = {
  minSize: number;
  maxSize: number;
  sizeText: string;
  format: RegExp[];
  validator(registration: string): boolean;
};

export type PublicValidatorConfig = Omit<ValidatorConfig, "validator">;

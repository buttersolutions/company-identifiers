export type ValidatorConfig = {
  minSize: number;
  maxSize: number;
  format: RegExp[];
  validator(registration: string): boolean;
};

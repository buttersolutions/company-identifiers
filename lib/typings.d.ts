export declare type ValidatorConfig = {
    minSize: number;
    maxSize: number;
    sizeText: string;
    format: RegExp[];
    validator(registration: string): boolean;
};
export declare type PublicValidatorConfig = Omit<ValidatorConfig, "validator">;

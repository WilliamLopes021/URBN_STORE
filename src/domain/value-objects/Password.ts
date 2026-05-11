import { ValidationError } from "../errors/ValidationError";

export class Password {
  private value: string;
  private static hasLowerCaseLetter = /[a-z]/;
  private static hasUpperCaseLetter = /[A-Z]/;
  private static hasNumber = /\d/;
  private static hasSpecialCharacter = /[@$!%*?&]/;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): Password {
    Password.validate(value);
    return new Password(value);
  }

  private static validate(value: string): void {
    if (value.length < 6) {
      throw new ValidationError("Password must be at least 6 characters long");
    }
    if (!Password.hasLowerCaseLetter.test(value)) {
      throw new ValidationError("Password must contain at least one lowercase letter");
    }
    if (!Password.hasUpperCaseLetter.test(value)) {
      throw new ValidationError("Password must contain at least one uppercase letter");
    }
    if (!Password.hasNumber.test(value)) {
      throw new ValidationError("Password must contain at least one number");
    }
    if (!Password.hasSpecialCharacter.test(value)) {
      throw new ValidationError("Password must contain at least one special character");
    }
  }

  public setValue(value: string): void {
    Password.validate(value);
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }

  public equals(password: string): boolean {
    return this.value === password;
  }
}

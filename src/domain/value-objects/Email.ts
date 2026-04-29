import { ValidationError } from "../errors/ValidationError";

export class Email {
  private static regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(email: string): Email {
    if (!Email.regex.test(email)) {
      throw new ValidationError("Invalid email");
    }
    return new Email(email);
  }

  public setValue(email: string): void {
    if (!Email.regex.test(email)) {
      throw new ValidationError("Invalid email");
    }
    this.value = email;
  }

  public getValue(): string {
    return this.value;
  }
}

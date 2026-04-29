import { ValidationError } from "../errors/ValidationError";

export class Name {
  public value: string;

  private constructor(value: string) {
    this.value = value.trim();
  }

  public static create(value: string): Name {
    Name.validate(value);
    return new Name(value);
  }

  private static validate(value: string): void {
    const inputValue = value.trim();
    if (inputValue.length < 3 || inputValue.length > 100) {
      throw new ValidationError("Invalid name");
    }
  }

  public setValue(value: string): void {
    Name.validate(value);
    this.value = value.trim();
  }

  public getValue(): string {
    return this.value;
  }

}

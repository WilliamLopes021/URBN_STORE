export class Phone {
  private readonly value: string;
  private static readonly HAS_LETTERS = /[A-Za-z]/;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): Phone {
    Phone.validate(value);

    const sanitizedValue = Phone.sanitize(value);
    return new Phone(sanitizedValue);
  }

  private static validate(value: string): void {
    const trimmedValue = value?.trim();

    if (!trimmedValue) {
      throw new Error("Phone is required");
    }

    if (Phone.HAS_LETTERS.test(trimmedValue)) {
      throw new Error("Phone cannot contain letters");
    }
  }

  private static sanitize(value: string): string {
    return value.replace(/\D/g, "");
  }

  public getValue(): string {
    return this.value;
  }
}

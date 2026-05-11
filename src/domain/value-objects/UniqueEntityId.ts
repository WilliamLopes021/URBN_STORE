export class UniqueEntityId {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): UniqueEntityId {
    if (!value || value.trim() === "") {
      throw new Error("Invalid ID");
    }
    return new UniqueEntityId(value);
  }

  public equals(other: UniqueEntityId): boolean {
    return this.value === other.value;
  }

  public getValue(): string {
    return this.value;
  }
}

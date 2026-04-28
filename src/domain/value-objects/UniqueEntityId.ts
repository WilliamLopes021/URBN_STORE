export class UniqueEntityId {
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  public equals(other: UniqueEntityId): boolean {
    return this.value === other.value;
  }

  public getValue(): string {
    return this.value;
  }
}

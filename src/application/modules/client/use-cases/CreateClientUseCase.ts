import { Client } from "@/domain/entities/Client/Client";
import { Name } from "@/domain/value-objects/Name";
import { Email } from "@/domain/value-objects/Email";
import { Phone } from "@/domain/value-objects/Phone";
import { Password } from "@/domain/value-objects/Password";
import type { IdGenerator } from "@/application/interfaces/ports/IdGenerator";
import type { UserApiPort } from "../ports/UserApiPort";
import type { CreateClientInputDTO } from "../dtos/CreateClientDTO";

export class CreateClientUseCase {
  private readonly idGenerator: IdGenerator;
  private readonly userApiPort: UserApiPort;

  constructor(idGenerator: IdGenerator, userApiPort: UserApiPort) {
    this.idGenerator = idGenerator;
    this.userApiPort = userApiPort;
  }

  async execute(input: CreateClientInputDTO): Promise<Client> {
    const { name, email, phone, password } = input;

    if (email !== input.confirmEmail) {
      throw new Error("Emails do not match");
    }

    if (password && password !== input.confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const id = this.idGenerator.generateUuid();
    const nameOrError = Name.create(name);
    const emailOrError = Email.create(email);
    const phoneOrError = Phone.create(phone);
    const passwordOrError = Password.create(password);

    const client = Client.create({
      id,
      name: nameOrError,
      email: emailOrError,
      profilePicture: input.profilePicture,
      dataNasc: input.dataNasc,
      phone: phoneOrError,
      password: passwordOrError as Password,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.userApiPort.create(client);

    return client;
  }
}

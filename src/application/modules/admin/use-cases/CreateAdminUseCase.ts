import { Admin } from "@/domain/entities/Admin/Admin";
import type { CreateAdminInputDTO } from "../dtos/CreateAdminDTO";
import type { IdGenerator } from "@/application/interfaces/ports/IdGenerator";
import type { AdminApiPort } from "../ports/AdminApiPort";
import { Email } from "@/domain/value-objects/Email";
import { Password } from "@/domain/value-objects/Password";
import { Name } from "@/domain/value-objects/Name";

export class CreateAdminUseCase {
  private readonly idGenerator: IdGenerator;
  private readonly adminApiPort: AdminApiPort;

  constructor(idGenerator: IdGenerator, adminApiPort: AdminApiPort) {
    this.idGenerator = idGenerator;
    this.adminApiPort = adminApiPort;
  }

  async execute(input: CreateAdminInputDTO): Promise<Admin> {
    const { name, email, password, confirmEmail, confirmPassword } = input;

    const id = this.idGenerator.generateUuid();

    if (email !== confirmEmail) {
      throw new Error("Emails or passwords do not match");
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const emailOrError = Email.create(email);
    const passwordOrError = Password.create(password);
    const nameOrError = Name.create(name);

    const admin = Admin.create({
      id,
      name: nameOrError,
      email: emailOrError,
      password: passwordOrError,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.adminApiPort.createAdmin(admin);

    return admin;
  }
}

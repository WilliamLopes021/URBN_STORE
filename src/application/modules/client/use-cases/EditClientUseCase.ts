import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { UserApiPort } from "@/application/modules/client/ports/UserApiPort";
import type { EditClientInputDTO } from "../dtos/EditClientDTO";
import { Name } from "@/domain/value-objects/Name";
import { Phone } from "@/domain/value-objects/Phone";
import { Email } from "@/domain/value-objects/Email";

export class EditClientUseCase {
  private readonly userApiPort: UserApiPort;

  constructor(userApiPort: UserApiPort) {
    this.userApiPort = userApiPort;
  }

  async execute(id: string, input: EditClientInputDTO): Promise<void> {
    const { name, phone, email, profilePictureUrl } = input;
    const idValueObject = UniqueEntityId.create(id);  
    const nameValueObject = Name.create(name);
    const phoneValueObject = Phone.create(phone);
    const emailValueObject = Email.create(email);
    
    await this.userApiPort.update(idValueObject, {
      name: nameValueObject.getValue(),
      phone: phoneValueObject.getValue(),
      email: emailValueObject.getValue(),
      profilePictureUrl
    });
  }
}

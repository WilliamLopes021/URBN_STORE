import { Password } from "../../../domain/value-objects/Password";
import { UniqueEntityId } from "../../value-objects/UniqueEntityId";
import { Email } from "../../value-objects/Email";
import { Name } from "../../value-objects/Name";
import { Phone } from "../../value-objects/Phone";

export interface ClientProps {
  id: UniqueEntityId;
  profilePicture?: string;
  dataNasc: Date;
  name: Name;
  email: Email;
  phone: Phone;
  password: Password
  createdAt: Date;
  updatedAt: Date;
}
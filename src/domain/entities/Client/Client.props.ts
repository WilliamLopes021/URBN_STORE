import { Password } from "../../../domain/value-objects/Password";
import { UniqueEntityId } from "../../value-objects/UniqueEntityId";
import { Email } from "../../value-objects/Email";
import { Name } from "../../value-objects/Name";

export interface ClientProps {
  id: UniqueEntityId
  name: Name;
  email: Email;
  password: Password
  createdAt: Date;
  updatedAt: Date;
}
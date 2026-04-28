import { Email } from "../../value-objects/Email";
import { Name } from "../../value-objects/Name";
import { Password } from "../../value-objects/Password";
import { UniqueEntityId } from "../../value-objects/UniqueEntityId";

export interface AdminProps {
  id: UniqueEntityId;
  name: Name;
  email: Email;
  secret: string;
  password: Password;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}

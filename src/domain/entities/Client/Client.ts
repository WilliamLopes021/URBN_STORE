import type { ClientProps } from "./Client.props";
import { Name } from "../../value-objects/Name";
import { Phone } from "../../value-objects/Phone";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";
import type { Email } from "../../value-objects/Email";
import type { Password } from "../../value-objects/Password";

export class Client {
  private readonly props: ClientProps;

  private constructor(props: ClientProps) {
    this.props = props;
  }

  public static create(props: ClientProps): Client {
    return new Client(props);
  }

  public updateDetails({
    name,
    phone,
    profilePicture,
  }: {
    name?: string;
    phone?: string;
    profilePicture?: string;
  }): void {
    if (name) this.props.name = Name.create(name);
    if (phone) this.props.phone = Phone.create(phone);
    if (profilePicture) this.props.profilePicture = profilePicture;
    this.props.updatedAt = new Date();
  }

  public getDisplayInfo(): Pick<
    ClientProps,
    "name" | "email" | "phone" | "profilePicture" | "dataNasc"
  > {
    return {
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
      profilePicture: this.props.profilePicture,
      dataNasc: this.props.dataNasc,
    };
  }

  public getId(): UniqueEntityId {
    return this.props.id;
  }

  public getName(): Name {
    return this.props.name;
  }

  public getEmail(): Email {
    return this.props.email;
  }

  public getPassword(): Password {
    return this.props.password;
  }

  public getPhone(): Phone {
    return this.props.phone;
  }

  public getTimeStamps() {
    return { createdAt: this.props.createdAt, updatedAt: this.props.updatedAt };
  }
}


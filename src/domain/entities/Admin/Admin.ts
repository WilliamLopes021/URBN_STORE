import type { AdminProps } from "./Admin.props";
import { Name } from "../../value-objects/Name";
import { Password } from "../../value-objects/Password";
export class Admin {
  private readonly props: AdminProps;

  private constructor(props: AdminProps) {
    this.props = props;
  }

  public static create(props: AdminProps): Admin {
    return new Admin(props);
  }

  public updateCredentials(name?: string, profilePicture?: string): void {
    if (name) this.props.name = Name.create(name);
    if (profilePicture) this.props.profilePicture = profilePicture;
  }

  public updatePassword(newPassword: string): void {
    this.props.password = Password.create(newPassword);
  }

  public getDisplayInfo(): Pick<
    AdminProps,
    "name" | "email" | "profilePicture"
  > {
    return {
      name: this.props.name,
      email: this.props.email,
      profilePicture: this.props.profilePicture,
    };
  }

  public getPassword(): Password {
    return this.props.password;
  }

  public getTimeStamps() {
    return { createdAt: this.props.createdAt, updatedAt: this.props.updatedAt };
  }
}

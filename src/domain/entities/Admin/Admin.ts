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

  public updateCredentials(name: string): void {
    this.props.name = Name.create(name);
  }

  public updatePassword(password: string): void {
    this.props.password = Password.create(password);
  }

  getAdminProps(): AdminProps {
    return Object.freeze(this.props);
  }
}

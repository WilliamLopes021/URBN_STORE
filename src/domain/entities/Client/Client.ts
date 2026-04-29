import type { ClientProps } from "./Client.props";

export class Client {
  public props: ClientProps;

  private constructor(props: ClientProps) {
    this.props = props;
  }

  public static create(props: ClientProps): Client {
    return new Client(props);
  }
}


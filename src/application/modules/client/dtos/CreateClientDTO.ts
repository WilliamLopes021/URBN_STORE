export interface CreateClientInputDTO {
  name: string;
  email: string;
  confirmEmail: string;
  phone: string;
  password: string;
  confirmPassword: string;
  profilePicture: string;
  dataNasc: Date;
}

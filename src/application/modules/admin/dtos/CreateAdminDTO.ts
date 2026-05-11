export interface CreateAdminInputDTO {
  profilePicture?: string;
  name: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}
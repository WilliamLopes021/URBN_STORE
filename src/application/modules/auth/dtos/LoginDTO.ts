export interface LoginInputDTO {
  email: string;
  password: string;
}

export interface LoginOutputDTO {
  user: {
    id: string;
    email: string;
    role: "admin" | "client";
  };
  expiresAt: Date;
}

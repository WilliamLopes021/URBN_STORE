export interface AuthState {
  user: {
    id: string;
    email: string;
    role: "admin" | "client";
  } | null;
  expiresAt: Date | null;
  isLoggedIn: boolean;
}

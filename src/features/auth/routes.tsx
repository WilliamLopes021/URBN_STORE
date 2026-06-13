import type { RouteObject } from "react-router";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ActivateAccount } from "./pages/ActivateAccount";
import { RecoverPassword } from "./pages/RecoverPassword";
import { VerifyCode } from "./pages/VerifyCode";

export const authRoutes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/activate-account", element: <ActivateAccount /> },
  { path: "/recover-password", element: <RecoverPassword /> },
  { path: "/verify-code", element: <VerifyCode /> },
];

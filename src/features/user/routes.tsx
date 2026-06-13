import type { RouteObject } from "react-router";
import { Profile } from "./pages/Profile";

export const userRoutes: RouteObject[] = [
  { path: "/profile", element: <Profile /> },
];

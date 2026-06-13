import { useRoutes } from "react-router";
import { authRoutes } from "@/features/auth/routes";
import { productRoutes } from "@/features/product/routes";
import { paymentRoutes } from "@/features/payment/routes";
import { userRoutes } from "@/features/user/routes";
import { NotFound } from "@/shared/pages/NotFound";

export const AppRoutes = () => {
  const routes = useRoutes([
    ...authRoutes,
    ...productRoutes,
    ...paymentRoutes,
    ...userRoutes,
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

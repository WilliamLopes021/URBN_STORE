import type { RouteObject } from "react-router";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { ConfirmPayment } from "./pages/ConfirmPayment";
import { ConfirmOrder } from "./pages/ConfirmOrder";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export const paymentRoutes: RouteObject[] = [
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/confirm-payment", element: <ConfirmPayment /> },
  { path: "/confirm-order", element: <ConfirmOrder /> },
  { path: "/success-payment", element: <OrderConfirmed /> },
];

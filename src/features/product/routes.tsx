import type { RouteObject } from "react-router";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Favorite } from "./pages/Favorite";
import { MaleProducts } from "./pages/MaleProducts";
import { FemaleProducts } from "./pages/FemaleProducts";

export const productRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/product/:id", element: <Product /> },
  { path: "/favorites", element: <Favorite /> },
  { path: "/men", element: <MaleProducts /> },
  { path: "/women", element: <FemaleProducts /> },
];

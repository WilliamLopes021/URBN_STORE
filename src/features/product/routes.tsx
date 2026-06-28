import type { RouteObject } from "react-router";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Favorite } from "./pages/Favorite";
import { MaleProducts } from "./pages/MaleProducts";
import { FemaleProducts } from "./pages/FemaleProducts";
import { Shop } from "./pages/Shop";
import { NewProducts } from "./pages/NewProducts";
import { Category } from "./pages/Category";

export const productRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/product/:id", element: <Product /> },
  { path: "/category/:id", element: <Category /> },
  { path: "/shop", element: <Shop /> },
  { path: "/favorites", element: <Favorite /> },
  { path: "/drops", element: <NewProducts /> },
  { path: "/men", element: <MaleProducts /> },
  { path: "/women", element: <FemaleProducts /> },
];

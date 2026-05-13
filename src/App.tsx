import { RouterContext } from "./interfaces/router/RouterContext";
import { Home } from "@/features/product/pages/Home";
import { Product } from "@/features/product/pages/Product";
import { Route } from "react-router";

function App() {
  return (
    <RouterContext>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </RouterContext>
  );
}

export default App;

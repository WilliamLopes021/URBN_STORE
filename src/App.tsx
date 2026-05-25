import { RouterContext } from "./interfaces/router/RouterContext";
import { Home } from "@/features/product/pages/Home";
import { Product } from "@/features/product/pages/Product";
import { NotFound } from "@/shared/pages/NotFound";
import { Route } from "react-router";
import { Login } from "@/features/auth/pages/Login";
import { Register } from "@/features/auth/pages/Register";
import { VerifyCode } from "@/features/auth/pages/VerifyCode";
import { ActivateAccount } from "@/features/auth/pages/ActivateAccount";
import { RecoverPassword } from "@/features/auth/pages/RecoverPassword";
import { Profile } from "@/features/user/pages/Profile";
import { Cart } from "@/features/payment/pages/Cart";

function App() {
  return (
    <RouterContext>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/activate-account" element={<ActivateAccount />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/verify-code" element={<VerifyCode />} />
      <Route path="/profile" element={<Profile />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </RouterContext>
  );
}

export default App;

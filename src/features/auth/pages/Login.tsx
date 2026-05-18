import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FormField } from "@/features/auth/components/atoms/FormField";
import { SocialAuthSection } from "@/features/auth/components/atoms/SocialAuthSection";
import { GrungeButton } from "@/features/auth/components/atoms/GrungeButton";
import { Input } from "@/shared/components/atoms/Input";
import { Anchor } from "@/interfaces/router/Link";
import { Form } from "@/features/auth/components/atoms/Form";
import { AuthTemplate } from "../components/template/AuthTemplate";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthTemplate>
      <Form>
        <FormField htmlFor="email" label="Email">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@email.com"
            leftIcon={<Mail size={15} className="text-light-gray" />}
            required
          />
        </FormField>

        <FormField htmlFor="password" label="Password">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="senha"
            leftIcon={<Lock size={15} className="text-light-gray" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-light-gray hover:text-text-primary transition-colors"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            }
            required
          />
        </FormField>

        <div className="w-full flex justify-end -mt-2">
          <Anchor
            to="/recover-password"
            className="text-accent-blue text-xs font-semibold hover:underline transition-all"
          >
            Recuperar senha
          </Anchor>
        </div>

        <GrungeButton label="Login" type="submit" />
        <SocialAuthSection onSocialLogin={() => {}} />
        <p className="text-light-gray text-xs tracking-wide uppercase">
          Don't have an account?{" "}
          <Anchor
            to="/register"
            className="text-accent-pink font-black hover:underline transition-all"
          >
            Register
          </Anchor>
        </p>
      </Form>
    </AuthTemplate>
  );
};

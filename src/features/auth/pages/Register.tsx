import { useState } from "react";
import { Anchor } from "@/interfaces/router/Link";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FormField } from "../components/atoms/FormField";
import { SocialAuthSection } from "../components/atoms/SocialAuthSection";
import { GrungeButton } from "../components/atoms/GrungeButton";
import { Input } from "@/shared/components/atoms/Input";
import { Form } from "../components/atoms/Form";
import { AuthTemplate } from "../components/template/AuthTemplate";
import { ActiveAccountModal } from "../components/modal/ActivateAccountModal";

export const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <AuthTemplate>
      <Form onSubmit={handleSubmit}>
        <FormField label="Full Name">
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            leftIcon={<User size={15} className="text-light-gray" />}
          />
        </FormField>

        <FormField label="Email">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            leftIcon={<Mail size={15} className="text-light-gray" />}
          />
        </FormField>

        <FormField label="Password">
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
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
          />
        </FormField>

        {/* Confirm Password */}
        <FormField label="Confirm Password">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            leftIcon={<Lock size={15} className="text-light-gray" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="text-light-gray hover:text-text-primary transition-colors"
                aria-label={
                  showConfirmPassword ? "Ocultar senha" : "Mostrar senha"
                }
              >
                {showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            }
          />
        </FormField>

        <GrungeButton label="Create Account" type="submit" />

        <SocialAuthSection onSocialLogin={() => {}} />

        <p className="text-light-gray text-xs tracking-wide uppercase">
          Already have an account?{" "}
          <Anchor
            to="/login"
            className="text-accent-pink font-black hover:underline transition-all"
          >
            Login
          </Anchor>
        </p>
      </Form>
      <ActiveAccountModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </AuthTemplate>
  );
};

import { BsGoogle, BsApple } from "react-icons/bs";
import type { ReactNode } from "react";
import { Button } from "@/shared/components/atoms/Button";

type SocialProvider = "google" | "apple";

const PROVIDERS: { id: SocialProvider; label: string; icon: ReactNode }[] = [
  {
    id: "google",
    label: "Google",
    icon: <BsGoogle />,
  },
  {
    id: "apple",
    label: "Apple",
    icon: <BsApple />,
  },
];

type SocialAuthSectionProps = {
  onSocialLogin: (provider: SocialProvider) => void;
};

export const SocialAuthSection = ({
  onSocialLogin,
}: SocialAuthSectionProps) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex items-center gap-3 w-full">
        <div className="flex-1 h-px bg-border" />
        <span className="text-light-gray text-[0.65rem] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
          Or continue with
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="flex gap-3 w-full">
        {PROVIDERS.map(({ id, label, icon }) => (
          <Button
          color='secondary'
            key={id}
            onClick={() => onSocialLogin(id)}
            className="flex-1 flex items-center justify-center gap-2 bg-transparent
                       border border-border hover:border-border-strong
                       text-text-primary font-bold text-sm tracking-wide
                       py-3 px-4 transition-colors duration-200"
          >
            {icon}
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

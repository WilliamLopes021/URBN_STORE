import { AuthHeader } from "@/features/auth/components/atoms/AuthHeader";

interface AuthContainerProps {
  children: React.ReactNode;
}
export const AuthTemplate = ({ children }: AuthContainerProps) => {
  return (
    <main className="min-h-dvh bg-surface flex flex-col items-center justify-center px-6 py-10 font-sans relative overflow-hidden bg-radial from-accent-blue/10 from-20%">
      <AuthHeader />
      {children}
    </main>
  );
};

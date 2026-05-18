import { Button } from "@/shared/components/atoms/Button";
import { AuthTemplate } from "../components/template/AuthTemplate";
import { Input } from "@/shared/components/atoms/Input";
import { useRouter } from "@/interfaces/router/useRouter";

export const ActivateAccount = () => {
  const router = useRouter();
  return (
    <AuthTemplate>
      <div className="flex flex-col gap-4 w-full text-text-primary bg-bg p-8 rounded-lg">
        <div>
          <h2 className="text-2xl mb-3"> Ativar sua conta</h2>
          <p>
            Enviaremos um código de verificação para a ativação da sua conta.
          </p>
        </div>
        <form
          action=""
          className="flex flex-col gap-4 w-full"
          onSubmit={() => router("/verify-code")}
        >
          <Input type="email" placeholder="usuario@email.com" />
          <Button type="submit">Enviar código</Button>
        </form>
        <Button type="button" onClick={() => router("/")} color="secondary">
          Cancelar
        </Button>
      </div>
    </AuthTemplate>
  );
};

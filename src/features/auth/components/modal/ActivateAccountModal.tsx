import { Button } from "@/shared/components/atoms/Button";
import { ModalBase } from "@/shared/components/modal/ModalBase";
import { useRouter } from "@/interfaces/router/useRouter";

export const ActiveAccountModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {

  const router = useRouter();
  if (!isOpen) return null;
  return (
    <ModalBase onClose={() => {}}>
      <div className="flex flex-col gap-4 w-full text-text-primary bg-bg p-8 rounded-lg">
        <div>
          <h2 className="text-2xl mb-3"> Deseja ativar a sua conta?</h2>
          <p>
            Ao ativar a sua conta você poderá realizar compras e salvar seus
            produtos favoritos.
          </p>
        </div>
        <Button onClick={() => router("/activate-account")}>Sim, ativar conta</Button>
        <Button
          onClick={() => {
            onClose();
            router("/");
          }}
          color="secondary"
        >
          Cancelar
        </Button>
      </div>
    </ModalBase>
  );
};

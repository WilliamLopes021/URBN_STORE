import { OtpInput } from "../components/molecules/OtpInput";
import { AuthTemplate } from "../components/template/AuthTemplate";
import { Form } from "../components/atoms/Form";
import { GrungeButton } from "../components/atoms/GrungeButton";

export const VerifyCode = () => {
  return (
    <AuthTemplate>
      <div className="flex flex-col gap-3 text-center pb-10">
        <h2 className="font-medium text-text-primary text-lg uppercase ">
          Insira o código de verificação
        </h2>
        <span className="font-light text-sm text-text-primary/70 tracking-wide">
          Enviamos um código de verificação para o seu email
        </span>
      </div>
      <Form action="#">
        <OtpInput />
        <GrungeButton label="Verificar" />
      </Form>
      <p className="text-text-primary/70 text-sm font-light mt-10">
        Não recebeu o código?{" "}
        <button className="font-medium text-accent-blue hover:text-accent-red transition-colors duration-300">
          Reenviar código
        </button>
      </p>
    </AuthTemplate>
  );
};

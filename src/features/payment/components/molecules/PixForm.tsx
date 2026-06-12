import { Button } from "@/shared/components/atoms/Button";
import { Span } from "@/shared/components/atoms/Span";
import { Files } from "lucide-react";
import { Anchor } from "@/interfaces/router/Link";

export const PixForm = () => {
  return (
    <div className="text-text-primary">
      <h2 className="font-black text-lg uppercase">Pagamento via PIX</h2>

      <p>
        Utilize o QRCode para pagar ou copie código abaixo e cole no seu
        aplicativo do banco
      </p>
      <div className="flex justify-center items-center p-7 w-full max-w-[600px] mx-auto">
        <img
          src="https://imgs.search.brave.com/kwUAD17EQkymYOnh7r1nygWrFz4ta98Zox1SZznx0Ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q1L2Nh/Lzk0L2Q1Y2E5NDI3/MGNjNWUxYWYxM2Vh/MmI2ZDYwMDY3ZDUy/LmpwZw"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-center flex flex-col items-center max-w-[600px] mx-auto">
        <div className="w-full text-text-primary my-5 flex gap-2 bg-dark-gray/20 border border-border rounded-md p-2">
          <input
            type="text"
            className="w-full"
            readOnly
            value={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veritatis quo officiis neque vitae maiores ea "
            }
          />
          <Button color="secondary">
            <Files />
          </Button>
        </div>
        <Span>Código PIX expirará em 10 minutos</Span>
        <Button color={"primary"} type="button" className="mt-8">
          <Anchor to="/confirm-order">Completar o Pagamento</Anchor>
        </Button>
      </div>
    </div>
  );
};

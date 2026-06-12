import { useState } from "react";
import { CreditCard, QrCode, Check, Copy } from "lucide-react";
import type { PaymentMethod } from "../../types/payment";

interface CardDetails {
  number: string;
  holder: string;
  expiry: string;
  cvv: string;
}

interface ConfirmPaymentMethodProps {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
  cardDetails: CardDetails;
  setCardDetails: (details: CardDetails) => void;
}

export const ConfirmPaymentMethod = ({
  paymentMethod,
  setPaymentMethod,
  cardDetails,
  setCardDetails,
}: ConfirmPaymentMethodProps) => {
  const [copiedKey, setCopiedKey] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(
      "00020101021226750014br.gov.bcb.pix2553pix.urbnstore.com.br/checkout/payment/98573194751029487",
    );
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <section className="bg-surface border border-border rounded-lg p-6 transition-all duration-300 hover:border-border-strong">
      <div className="flex items-center gap-3 border-b border-border pb-4 mb-5">
        <CreditCard className="text-accent-pink size-6" />
        <h2 className="text-lg font-black uppercase tracking-wider">
          Forma de Pagamento
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { id: "credit_card", label: "Cartão", icon: CreditCard },
          { id: "pix", label: "Pix", icon: QrCode },
        ].map((item) => {
          const Icon = item.icon;
          const isSelected = paymentMethod === item.id;
          return (
            <button
              key={item.id}
              onClick={() =>
                setPaymentMethod(item.id as unknown as PaymentMethod)
              }
              className={`flex flex-col items-center justify-center gap-2 py-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-card-bg border-accent-pink shadow-[0_0_12px_rgba(252,20,116,0.15)] scale-[1.02] text-accent-pink"
                  : "bg-surface border-border hover:bg-card-bg/40 text-light-gray hover:text-text-primary"
              }`}
            >
              <Icon
                className={`size-5 ${isSelected ? "text-accent-pink" : "text-light-gray"}`}
              />
              <span className="text-[11px] font-black uppercase tracking-widest">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="bg-card-bg/60 border border-border/80 rounded-lg p-6">
        {paymentMethod === "credit_card" && (
          <div className="space-y-6">
            <div className="relative w-full max-w-[340px] h-[200px] mx-auto rounded-xl bg-linear-to-br from-dark-gray via-[#1a1a1a] to-accent-blue/40 border border-white/10 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex justify-between items-start">
                <div className="w-10 h-8 bg-amber-400/80 rounded-md flex items-center justify-center overflow-hidden border border-white/10">
                  <div className="grid grid-cols-2 w-full h-full divide-x divide-y divide-black/10">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <span className="text-xs font-black tracking-widest text-white/50">
                  URBN CARD
                </span>
              </div>

              <div className="space-y-4">
                <div className="text-xl font-bold tracking-[0.2em] text-white text-center font-mono">
                  {cardDetails.number}
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[9px] text-white/40 uppercase tracking-widest font-mono">
                      Card Holder
                    </p>
                    <p className="text-sm font-bold tracking-wide text-white uppercase font-mono">
                      {cardDetails.holder}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-white/40 uppercase tracking-widest font-mono">
                      Expires
                    </p>
                    <p className="text-sm font-bold tracking-wide text-white font-mono">
                      {cardDetails.expiry}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                  Nome Impresso no Cartão
                </label>
                <input
                  type="text"
                  value={cardDetails.holder}
                  onChange={(e) =>
                    setCardDetails({
                      ...cardDetails,
                      holder: e.target.value.toUpperCase(),
                    })
                  }
                  className="w-full bg-surface border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors uppercase font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                    Número do Cartão
                  </label>
                  <input
                    type="text"
                    placeholder="4532 8765 4321 0987"
                    value={cardDetails.number}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        number: e.target.value,
                      })
                    }
                    className="w-full bg-surface border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                      Validade
                    </label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      maxLength={5}
                      value={cardDetails.expiry}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          expiry: e.target.value,
                        })
                      }
                      className="w-full bg-surface border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors text-center font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                      CVV
                    </label>
                    <input
                      type="password"
                      maxLength={3}
                      placeholder="•••"
                      value={cardDetails.cvv}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          cvv: e.target.value,
                        })
                      }
                      className="w-full bg-surface border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors text-center font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "pix" && (
          <div className="flex flex-col items-center text-center space-y-4 py-2">
            <div className="bg-white p-3 rounded-lg border border-border shadow-md">
              <div className="w-40 h-40 flex items-center justify-center bg-gray-100 relative">
                <img
                  src="https://imgs.search.brave.com/kwUAD17EQkymYOnh7r1nygWrFz4ta98Zox1SZznx0Ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q1L2Nh/Lzk0L2Q1Y2E5NDI3/MGNjNWUxYWYxM2Vh/MmI2ZDYwMDY3ZDUy/LmpwZw"
                  alt="Pix QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-light-gray max-w-[400px]">
              Aponte a câmera do seu celular para o código QR acima ou
              copie o código Pix abaixo para pagar em seu banco.
            </p>

            <div className="w-full max-w-[440px] flex items-center gap-2 bg-surface border border-border rounded-md p-2">
              <input
                type="text"
                readOnly
                value="00020101021226750014br.gov.bcb.pix2553pix.urbnstore.com.br/checkout/payment/98573194751029487"
                className="w-full text-xs text-light-gray font-mono truncate select-all px-2 bg-transparent outline-none"
              />
              <button
                onClick={handleCopyPix}
                className={`flex items-center gap-1.5 px-4 py-2 rounded font-bold uppercase tracking-wider text-xs transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  copiedKey
                    ? "bg-emerald-600 text-white"
                    : "bg-accent-pink hover:bg-accent-pink/80 text-white"
                }`}
              >
                {copiedKey ? <Check size={14} /> : <Copy size={14} />}
                {copiedKey ? "Copiado!" : "Copiar"}
              </button>
            </div>
            <span className="text-[10px] text-accent-pink font-bold uppercase tracking-wider">
              O código Pix expira em 10 minutos
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

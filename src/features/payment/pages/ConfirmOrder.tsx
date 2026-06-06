import { useState } from "react";
import { CheckoutHeader } from "../components/organisms/CheckoutHeader";
import { orderItem } from "../constants/mockOrderItem";
import { useRouter } from "@/interfaces/router/useRouter";
import { Button } from "@/shared/components/atoms/Button";
import {
  Package,
  MapPin,
  CreditCard,
  Pencil,
  QrCode,
  Check,
  Copy,
  Lock,
  Truck,
  ShieldCheck,
} from "lucide-react";
import type { PaymentMethod } from "../types/payment";

export const ConfirmOrder = () => {
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("credit_card");
  const [address, setAddress] = useState({
    recipientName: "Lucas Andrade",
    street: "Rua Augusta",
    number: "1234",
    apartment: "Apto 56",
    neighborhood: "Consolação",
    city: "São Paulo",
    state: "SP",
    zip: "01304-001",
  });
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [tempAddress, setTempAddress] = useState({ ...address });

  const [cardDetails, setCardDetails] = useState({
    number: "4532 •••• •••• 4321",
    holder: "LUCAS ANDRADE",
    expiry: "12/31",
    cvv: "•••",
  });

  // State for Copied feedback
  const [copiedKey, setCopiedKey] = useState(false);

  // Dynamic Price Calculations (Mocking based on actual items in mockOrderItem)
  const subtotalValue = orderItem.reduce(
    (acc, item) => acc + Number(item.product.price) * item.quantity,
    0,
  );

  const shippingValue = 0; // Hardcoded for now
  const taxesValue = "R$ 43,92"; // Hardcoded for now
  const totalValue = (subtotalValue + shippingValue).toFixed(2); // Hardcoded for now

  const handleCopyPix = () => {
    navigator.clipboard.writeText(
      "00020101021226750014br.gov.bcb.pix2553pix.urbnstore.com.br/checkout/payment/98573194751029487",
    );
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleSaveAddress = (e: React.SubmitEvent) => {
    e.preventDefault();
    setAddress({ ...tempAddress });
    setIsEditingAddress(false);
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary pb-24 font-sans">
      <CheckoutHeader currentStep={3} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-6">

        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8">
          Finalizar Pedido
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <section className="bg-surface border border-border rounded-lg p-6 transition-all duration-300 hover:border-border-strong">
              <div className="flex items-center gap-3 border-b border-border pb-4 mb-4">
                <Package className="text-accent-pink size-6" />
                <div>
                  <h2 className="text-lg font-black uppercase tracking-wider">
                    Resumo do Pedido
                  </h2>
                  <p className="text-xs text-light-gray/70">
                    {orderItem.length}{" "}
                    {orderItem.length === 1 ? "item" : "itens"} no seu pedido
                  </p>
                </div>
              </div>

              <div className="divide-y divide-border/60 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                {orderItem.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 py-4 first:pt-0 last:pb-0 items-center justify-between"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden bg-card-bg border border-border/80 shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute -top-1 -right-1 bg-accent-pink text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border border-surface shadow-md">
                          {item.quantity}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm uppercase tracking-wide text-text-primary line-clamp-1">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-light-gray/60 mt-1">
                          Tamanho:{" "}
                          <span className="text-text-primary font-semibold uppercase">
                            {item.size || "Único"}
                          </span>
                        </p>
                      </div>
                    </div>
                    <span className="font-black text-sm text-text-primary whitespace-nowrap">
                      { Number(item.product.price) * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. ENDEREÇO DE ENTREGA */}
            <section className="bg-surface border border-border rounded-lg p-6 transition-all duration-300 hover:border-border-strong">
              <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent-pink size-6" />
                  <h2 className="text-lg font-black uppercase tracking-wider">
                    Endereço de Entrega
                  </h2>
                </div>
                {!isEditingAddress && (
                  <button
                    onClick={() => {
                      setTempAddress({ ...address });
                      setIsEditingAddress(true);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:bg-dark-gray/30 hover:border-accent-pink/50 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer"
                  >
                    <Pencil size={12} className="text-accent-pink" />
                    Alterar
                  </button>
                )}
              </div>

              {isEditingAddress ? (
                <form onSubmit={handleSaveAddress} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                        Destinatário
                      </label>
                      <input
                        type="text"
                        required
                        value={tempAddress.recipientName}
                        onChange={(e) =>
                          setTempAddress({
                            ...tempAddress,
                            recipientName: e.target.value,
                          })
                        }
                        className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                        CEP
                      </label>
                      <input
                        type="text"
                        required
                        value={tempAddress.zip}
                        onChange={(e) =>
                          setTempAddress({
                            ...tempAddress,
                            zip: e.target.value,
                          })
                        }
                        className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                        Rua / Logradouro
                      </label>
                      <input
                        type="text"
                        required
                        value={tempAddress.street}
                        onChange={(e) =>
                          setTempAddress({
                            ...tempAddress,
                            street: e.target.value,
                          })
                        }
                        className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                        Número
                      </label>
                      <input
                        type="text"
                        required
                        value={tempAddress.number}
                        onChange={(e) =>
                          setTempAddress({
                            ...tempAddress,
                            number: e.target.value,
                          })
                        }
                        className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                        Complemento / Bloco
                      </label>
                      <input
                        type="text"
                        value={tempAddress.apartment}
                        onChange={(e) =>
                          setTempAddress({
                            ...tempAddress,
                            apartment: e.target.value,
                          })
                        }
                        className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                        Bairro
                      </label>
                      <input
                        type="text"
                        required
                        value={tempAddress.neighborhood}
                        onChange={(e) =>
                          setTempAddress({
                            ...tempAddress,
                            neighborhood: e.target.value,
                          })
                        }
                        className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                            Cidade
                          </label>
                          <input
                            type="text"
                            required
                            value={tempAddress.city}
                            onChange={(e) =>
                              setTempAddress({
                                ...tempAddress,
                                city: e.target.value,
                              })
                            }
                            className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                            UF
                          </label>
                          <input
                            type="text"
                            required
                            maxLength={2}
                            value={tempAddress.state}
                            onChange={(e) =>
                              setTempAddress({
                                ...tempAddress,
                                state: e.target.value.toUpperCase(),
                              })
                            }
                            className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors text-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsEditingAddress(false)}
                      className="px-4 py-2 border border-border hover:bg-dark-gray/30 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-accent-pink hover:bg-accent-pink/80 rounded-md text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
                    >
                      Salvar
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-4 bg-card-bg/60 border border-border/50 rounded-lg flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-bold text-text-primary text-base">
                      {address.recipientName}
                    </p>
                    <p className="text-sm text-light-gray/80">
                      {address.street}, {address.number}{" "}
                      {address.apartment && `· ${address.apartment}`}
                    </p>
                    <p className="text-xs text-light-gray/60">
                      {address.neighborhood}, {address.city} - {address.state} ·{" "}
                      {address.zip}
                    </p>
                  </div>
                  <div className="bg-accent-pink/10 p-2.5 rounded-full text-accent-pink shrink-0 hidden md:block">
                    <Truck size={20} />
                  </div>
                </div>
              )}
            </section>

            {/* 3. FORMA DE PAGAMENTO */}
            <section className="bg-surface border border-border rounded-lg p-6 transition-all duration-300 hover:border-border-strong">
              <div className="flex items-center gap-3 border-b border-border pb-4 mb-5">
                <CreditCard className="text-accent-pink size-6" />
                <h2 className="text-lg font-black uppercase tracking-wider">
                  Forma de Pagamento
                </h2>
              </div>

              {/* Selector Tabs matching screenshot style, adapted to dark mode */}
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

              {/* Dynamic Payment Details Area */}
              <div className="bg-card-bg/60 border border-border/80 rounded-lg p-6">
                {paymentMethod === "credit_card" && (
                  <div className="space-y-6">
                    {/* Glassmorphic Credit Card Preview */}
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

                    {/* Simulating card options */}
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
                      {/* Styled High Fidelity QR Code Simulation */}
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
          </div>

          {/* Right Column (Sidebar Total & CTA) */}
          <div className="lg:col-span-4 lg:sticky lg:top-6">
            <section className="bg-surface border border-border rounded-lg p-6 space-y-6 shadow-xl">
              <h2 className="text-lg font-black uppercase tracking-wider border-b border-border pb-3">
                Resumo da Compra
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-light-gray">
                  <span>Subtotal</span>
                  <span className="font-semibold text-text-primary">
                    {subtotalValue}
                  </span>
                </div>
                <div className="flex justify-between text-light-gray">
                  <span>Frete</span>
                  {shippingValue === 0 ? (
                    <span className="font-bold text-emerald-500 uppercase text-xs tracking-wider">
                      Grátis
                    </span>
                  ) : (
                    <span className="font-semibold text-text-primary">
                      {shippingValue}
                    </span>
                  )}
                </div>
                <div className="flex justify-between text-light-gray">
                  <span>Taxas / Impostos</span>
                  <span className="font-semibold text-text-primary">
                    {taxesValue}
                  </span>
                </div>

                <div className="border-t border-border pt-4 mt-2 flex justify-between items-end">
                  <span className="font-black text-text-primary uppercase tracking-widest text-sm">
                    Total
                  </span>
                  <div className="text-right">
                    <span className="font-black text-accent-pink text-2xl md:text-3xl block tracking-tight">
                      {totalValue}
                    </span>
                    <span className="text-[10px] text-light-gray/50 font-semibold block">
                      ou em até 10x sem juros
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo Banner / Info inside summary */}
              <div className="bg-accent-blue/10 border border-accent-blue/30 rounded-md p-3 flex gap-2 items-start text-xs text-accent-blue">
                <ShieldCheck size={16} className="shrink-0 mt-0.5" />
                <span>
                  Garantia estendida de 30 dias inclusa grátis para todos os
                  produtos.
                </span>
              </div>

              {/* Action Button */}
              <div className="space-y-4 pt-2">
                <Button
                  onClick={() => router("/success-payment")}
                  className="w-full flex justify-center items-center py-4 text-base font-bold bg-accent-pink hover:bg-accent-pink/90 text-white rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(252,20,116,0.2)] hover:shadow-[0_0_25px_rgba(252,20,116,0.35)] scale-100 hover:scale-[1.01]"
                >
                  Finalizar Pedido
                </Button>

                <div className="flex items-center justify-center gap-2 text-center text-xs text-light-gray/50 font-semibold">
                  <Lock size={12} className="text-emerald-500" />
                  <span>Ambiente 100% Seguro e Criptografado</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

import { ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/shared/components/atoms/Button";

interface PurchaseSummarySidebarProps {
  subtotalValue: number;
  shippingValue: number;
  taxesValue: string;
  totalValue: string;
  onConfirm: () => void;
}

export const PurchaseSummarySidebar = ({
  subtotalValue,
  shippingValue,
  taxesValue,
  totalValue,
  onConfirm,
}: PurchaseSummarySidebarProps) => {
  return (
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

      <div className="bg-accent-blue/10 border border-accent-blue/30 rounded-md p-3 flex gap-2 items-start text-xs text-accent-blue">
        <ShieldCheck size={16} className="shrink-0 mt-0.5" />
        <span>
          Garantia estendida de 30 dias inclusa grátis para todos os produtos.
        </span>
      </div>

      <div className="space-y-4 pt-2">
        <Button
          onClick={onConfirm}
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
  );
};

import { NavBar } from "@/shared/components/molecules/NavBar";
import { CartHeader } from "../components/atoms/CartHeader";
import { OrderItemCard } from "../components/molecules/OrderItemCard";
import { orderItem } from "../constants/mockOrderItem";
import { PriceDisplay } from "../components/atoms/PriceDisplay";
import { Button } from "@/shared/components/atoms/Button";
import { useRouter } from "@/interfaces/router/useRouter";
import { useState } from "react";
import type { OrderItemViewModel } from "@/interfaces/view-models/orderitem.viewmodel";
import { EmptyWarning } from "../components/atoms/EmptyWarning";

export const Cart = () => {
  const router = useRouter();
  const [visibleOrders, setVisibleOrders] = useState<number>(0);

  const groupedOrders: OrderItemViewModel[][] = [];
  const items: OrderItemViewModel[] = [];
  for (const order of orderItem) {
    items.push(order);
    if (items.length === 4) {
      groupedOrders.push([...items]);
      items.length = 0;
    }
  }

  return (
    <>
      <NavBar />
      <CartHeader />
      {orderItem.length === 0 && (
        <EmptyWarning
          text="Sua sacola está vazia"
          description="Adicione produtos para começar a comprar. Navegue pelas categorias para encontrar o que você precisa."
          buttonText="Continuar Comprando"
        />
      )}

      <main className="max-w-[1000px] mx-auto w-full px-5 flex flex-col gap-8 py-3">
        {groupedOrders[visibleOrders].map((item) => (
          <OrderItemCard key={item.id} orderItem={item} />
        ))}
        <div className="flex items-center justify-center gap-4">
          {Array.from({ length: groupedOrders.length }, (_, index) => (
            <button
              key={index}
              className={`w-6.5 h-2.5 rounded-full ${index === visibleOrders ? "bg-accent-blue" : "bg-light-gray/50"}`}
              onClick={() => setVisibleOrders(index)}
            />
          ))}
        </div>
        <PriceDisplay
          price={orderItem.reduce(
            (acc, item) => acc + Number(item.product.price) * item.quantity,
            0,
          )}
          shipping={100}
          discount={0}
        />
        <Button onClick={() => router("/checkout")}>Finalizar</Button>
      </main>
    </>
  );
};

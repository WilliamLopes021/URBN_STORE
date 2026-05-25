import { Footer } from "@/shared/components/molecules/Footer";
import { NavBar } from "@/shared/components/molecules/NavBar";
import { CartHeader } from "../components/atoms/CartHeader";
import { OrderItemCard } from "../components/molecules/OrderItemCard";
import { orderItem } from "../constants/mockOrderItem";

export const Cart = () => {
  return (
    <>
      <NavBar />
      <CartHeader />
      <main className="max-w-[1000px] mx-auto w-full px-5 flex flex-col gap-5 py-3">
        {orderItem.map((item) => (
          <OrderItemCard key={item.id} orderItem={item} />
        ))}
      </main>
      <Footer />
    </>
  );
};

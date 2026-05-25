import { ProfileHeader } from "../components/molecules/ProfileHeader";
import { InfoCard } from "../components/atoms/InfoCards";
import {
  Heart,
  Package,
  ArrowRight,
  CreditCard,
  MapPin,
  LogOut,
} from "lucide-react";
import { user } from "../constants/mockUser";
import { OrderCard } from "../components/atoms/OrderCard";
import { order } from "../constants/mockOrder";
import type { OrderViewModel } from "@/application/interfaces/view-models/order.viewmodel";
import { Button } from "@/shared/components/atoms/Button";
import { NavBar } from "@/shared/components/molecules/NavBar";
import { Footer } from "@/shared/components/molecules/Footer";

export const Profile = () => {
  const data = [
    {
      name: "Meus Pedidos",
      amount: 10,
      icon: Package,
      description: "pedidos realizados",
      style: "blue",
    },
    {
      name: "Favoritos",
      amount: 5,
      icon: Heart,
      description: "itens salvos",
      style: "pink",
    }, // faça um desse de localização e formas de pagamento
    {
      name: "Endereços",
      amount: 2,
      icon: MapPin,
      description: "endereços cadastrados",
      style: "blue",
    },
    {
      name: "Formas de Pagamento",
      amount: 5,
      icon: CreditCard,
      description: "itens salvos",
      style: "pink",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="py-6 w-full max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-6">
          <ProfileHeader user={user} orders={10} favorites={5} />
          <div className="p-8 text-text-primary">
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-black uppercase tracking-wider">
                  Pedidos Recentes
                </h2>
                <span className="flex items-center gap-2 text-text-light">
                  <span>Todos os pedidos</span>
                  <ArrowRight />
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {order.map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order as unknown as OrderViewModel}
                  />
                ))}
              </div>
            </section>

            <section className="mt-10">
              <div className="flex flex-col gap-3">
                {data.map((item) => (
                  <InfoCard
                    key={item.name}
                    icon={<item.icon className="size-12" />}
                    label={item.name}
                    data={[]}
                    description={item.name}
                    style={item.style as "pink" | "blue"}
                  />
                ))}
              </div>
            </section>
            <Button color="secondary" className="w-full mt-5">
              <LogOut className="size-5" />
              Logout
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

import { useState } from "react";
import { Sidebar } from "../components/organisms/SideBar";
import { ProfileHeader } from "../components/organisms/ProfileHeader";
import RecentOrders from "../components/organisms/RecentOrders";
import SavedAddresses from "../components/organisms/SavedAddresses";
import PaymentMethods from "../components/organisms/PaymentMethods";
import { USER } from "../constants/mockUser";
import { ORDERS } from "../constants/mockOrders";
import { ADDRESSES } from "../constants/mockAddresses";
import { PAYMENTS } from "../constants/mockPayments";
import { NavBar } from "@/shared/components/molecules/NavBar";

export const Profile = () => {
  const [activeNav, setActiveNav] = useState("profile");

  return (
    <>
      <NavBar />

      <div className="flex h-screen overflow-hidden bg-bg">
        <Sidebar
          activeNav={activeNav}
          onNavChange={setActiveNav}
          onLogout={() => {}}
          onShopNow={() => {}}
        />

        <main className="flex-1 min-w-0">
          <ProfileHeader user={USER} />

          <div
            className="p-6 grid gap-6"
            style={{ gridTemplateColumns: "1fr 320px" }}
          >
            <RecentOrders
              orders={ORDERS}
              onViewAll={() => setActiveNav("orders")}
            />

            <div className="flex flex-col gap-8">
              <SavedAddresses
                addresses={ADDRESSES}
                onManage={() => {}}
                onEdit={() => {}}
              />
              <PaymentMethods
                payments={PAYMENTS}
                onManage={() => {}}
                onEdit={() => {}}
                onAdd={() => {}}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

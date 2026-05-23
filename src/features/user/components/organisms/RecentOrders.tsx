import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../atoms/SectionHeader";
import OrderCard from "../molecules/OrderCard";

const RecentOrders = ({ orders = [], onViewAll }) => {
  const [btnHovered, setBtnHovered] = useState(false);
  return (
    <div>
      <SectionHeader title="Recent Orders" actionLabel="View All Orders" onAction={onViewAll} />
      <div>
        {orders.map((order, i) => (
          <OrderCard key={order.orderNumber ?? i} {...order} />
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={onViewAll}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest transition-opacity cursor-pointer"
          style={{ color: "#fc1474", opacity: btnHovered ? 0.7 : 1 }}
        >
          View All Orders <ArrowRight size={11} />
        </button>
      </div>
    </div>
  );
};

export default RecentOrders;  
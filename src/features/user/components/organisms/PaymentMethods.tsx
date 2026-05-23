import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeader from "../atoms/SectionHeader";
import PaymentCard from "../molecules/PaymentCard";

const PaymentMethods = ({ payments = [], onManage, onEdit, onAdd }) => {
  const [addHovered, setAddHovered] = useState(false);
  return (
    <div>
      <SectionHeader
        title="Payment Methods"
        actionLabel="Manage Payment"
        onAction={onManage}
      />
      <div className="flex flex-col gap-3">
        {payments.map((payment, i) => (
          <PaymentCard
            key={payment.last4 ?? i}
            {...payment}
            onEdit={() => onEdit?.(payment, i)}
          />
        ))}
      </div>
      <button
        onClick={onAdd}
        onMouseEnter={() => setAddHovered(true)}
        onMouseLeave={() => setAddHovered(false)}
        className="flex items-center gap-2 mt-4 text-[10px] font-black uppercase tracking-widest transition-colors cursor-pointer"
        style={{ color: addHovered ? "#ffffff" : "#cccccc" }}
      >
        <Plus size={13} style={{ color: "#fc1474" }} />
        Add Payment Method
      </button>
    </div>
  );
};

export default PaymentMethods;

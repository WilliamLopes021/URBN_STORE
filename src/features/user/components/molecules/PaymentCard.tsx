import { useState } from "react";
import { Pencil } from "lucide-react";
import Badge from "../atoms/Badge";

const PaymentCard = ({ brand, last4, expiry, isDefault, onEdit }) => {
  const [editHovered, setEditHovered] = useState(false);
  return (
    <div
      className="flex items-center gap-3 p-4 rounded-sm"
      style={{ background: "#1f1f1f", border: "1px solid #2a2a2a" }}
    >
      <div
        className="flex-shrink-0 px-2 py-1 rounded-sm text-[11px] font-black text-white"
        style={{ background: "#295fee", letterSpacing: "0.05em" }}
      >
        {brand}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold" style={{ color: "#ffffff" }}>
            Ending in {last4}
          </span>
          {isDefault && <Badge variant="default">Default</Badge>}
        </div>
        <div className="text-[11px] mt-0.5" style={{ color: "#888888" }}>
          Expires {expiry}
        </div>
      </div>
      <button
        onClick={onEdit}
        onMouseEnter={() => setEditHovered(true)}
        onMouseLeave={() => setEditHovered(false)}
        className="flex-shrink-0 transition-colors cursor-pointer"
        style={{ color: editHovered ? "#ffffff" : "#555555" }}
        aria-label="Edit payment method"
      >
        <Pencil size={13} />
      </button>
    </div>
  );
};

export default PaymentCard;

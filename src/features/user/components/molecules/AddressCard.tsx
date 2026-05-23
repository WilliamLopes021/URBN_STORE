import { useState } from "react";
import { MapPin, Pencil } from "lucide-react";
import Badge from "../atoms/Badge";

const AddressCard = ({ isPrimary, name, address, phone, onEdit }) => {
  const [editHovered, setEditHovered] = useState(false);
  return (
    <div
      className="flex gap-3 p-4 rounded-sm"
      style={{ background: "#1f1f1f", border: "1px solid #2a2a2a" }}
    >
      <MapPin
        size={14}
        style={{ color: "#fc1474", flexShrink: 0, marginTop: 2 }}
      />
      <div className="flex-1 min-w-0">
        {isPrimary && (
          <Badge variant="primary" className="mb-2">
            Primary
          </Badge>
        )}
        <div
          className="font-bold text-xs mt-1 leading-tight"
          style={{ color: "#ffffff" }}
        >
          {name}
        </div>
        <div
          className="text-[11px] mt-1.5 leading-relaxed whitespace-pre-line"
          style={{ color: "#888888" }}
        >
          {address}
        </div>
        <div className="text-[11px] mt-1" style={{ color: "#888888" }}>
          {phone}
        </div>
      </div>
      <button
        onClick={onEdit}
        onMouseEnter={() => setEditHovered(true)}
        onMouseLeave={() => setEditHovered(false)}
        className="flex-shrink-0 transition-colors cursor-pointer"
        style={{ color: editHovered ? "#ffffff" : "#555555" }}
        aria-label="Edit address"
      >
        <Pencil size={13} />
      </button>
    </div>
  );
};

export default AddressCard;

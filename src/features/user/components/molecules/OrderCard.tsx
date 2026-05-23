import Badge from "../atoms/Badge";

const OrderCard = ({
  image,
  name,
  variant,
  orderNumber,
  date,
  status,
  price,
}) => (
  <div
    className="flex items-center gap-3 py-3"
    style={{ borderBottom: "1px solid #232323" }}
  >
    <div
      className="rounded-sm overflow-hidden flex-shrink-0"
      style={{ width: 50, height: 50, background: "#2a2a2a" }}
    >
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          draggable={false}
        />
      )}
    </div>
    <div className="flex-1 min-w-0">
      <div
        className="font-black text-xs uppercase tracking-wider leading-tight"
        style={{ color: "#ffffff" }}
      >
        {name}
      </div>
      <div className="text-[11px] mt-0.5" style={{ color: "#888888" }}>
        {variant}
      </div>
      <div className="flex items-center gap-2 mt-1 flex-wrap">
        <span
          className="text-[10px] uppercase tracking-wider"
          style={{ color: "#444444" }}
        >
          {orderNumber}
        </span>
        <span className="text-[10px]" style={{ color: "#444444" }}>
          {date}
        </span>
      </div>
    </div>
    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
      <Badge variant="shipped">{status}</Badge>
      <span className="font-black text-sm" style={{ color: "#ffffff" }}>
        {price}
      </span>
    </div>
  </div>
);

export default OrderCard;

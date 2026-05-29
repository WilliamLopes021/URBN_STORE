interface OrderSummaryBarProps {
  itemCount: number;
  total: string;
  thumbnailSrc: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const OrderSummaryBar = ({
  itemCount,
  total,
  thumbnailSrc,
  isOpen,
  onToggle,
}: OrderSummaryBarProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="w-full flex items-center gap-3 px-4 py-3 bg-card-bg"
  >
    <img
      src={thumbnailSrc}
      alt="Order thumbnail"
      className="w-12 h-12 object-cover rounded-sm shrink-0"
    />

    <div className="flex flex-col items-start">
      <span className="text-text-primary font-black text-sm uppercase tracking-wider">
        Order Summary
      </span>
      <span className="text-light-gray text-xs">{itemCount} Items</span>
    </div>

    <div className="ml-auto flex items-center gap-2">
      <span className="text-accent-pink font-black text-base">{total}</span>
      <svg
        className={`w-4 h-4 text-light-gray transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </button>
);


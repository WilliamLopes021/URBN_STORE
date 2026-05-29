import type { OrderItem, PriceSummary } from "../types/checkout";
import { CheckoutHeader } from "../components/organisms/CheckoutHeader";
import { OrderSummaryDrawer } from "../components/organisms/OrderSummaryDrawer";

const MOCK_ITEMS: OrderItem[] = [
  {
    id: "1",
    name: "Chaos Hoodie",
    variant: "Black / XL",
    price: "$89.00",
    imageSrc: "ascqsa",
  },
  {
    id: "2",
    name: "Night Shifter Tee",
    variant: "Black",
    price: "$49.00",
    imageSrc: "",
  },
  {
    id: "3",
    name: "URBN Tag Cap",
    variant: "Black / OS",
    price: "$35.00",
    imageSrc: "",
  },
];

const MOCK_PRICES: PriceSummary = {
  subtotal: "$173.00",
  shipping: "$9.99",
  taxes: "$15.81",
  total: "$198.60",
};

export const Checkout = () => (
  <div className="min-h-screen bg-primary pb-24">
    <CheckoutHeader currentStep={1} />
    <OrderSummaryDrawer
      items={MOCK_ITEMS}
      prices={MOCK_PRICES}
      thumbnailSrc={MOCK_ITEMS[0].imageSrc}
    />
  </div>
);


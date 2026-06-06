import type { PriceSummary } from "../types/checkout";
import { orderItem } from "../constants/mockOrderItem";
import { CheckoutHeader } from "../components/organisms/CheckoutHeader";
import { OrderSummaryDrawer } from "../components/organisms/OrderSummaryDrawer";
import { ShippingForm } from "../components/organisms/ShippingForm";


const MOCK_PRICES: PriceSummary = {
  subtotal: "$173.00",
  shipping: "$9.99",
  taxes: "$15.81",
  total: "$198.60",
};

export const Checkout = () => (
  <div className="min-h-screen bg-surface pb-24">
    <CheckoutHeader currentStep={1} />
    <main className="max-w-7xl mx-auto">
      <ShippingForm onSubmit={() => {}} />
      <OrderSummaryDrawer
        items={orderItem}
        prices={MOCK_PRICES}
        thumbnailSrc={orderItem[0].product.images[0]}
      />
    </main>
  </div>
);

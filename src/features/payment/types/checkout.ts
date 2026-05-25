export type StepState = "active" | "inactive" | "completed";

export interface Step {
  number: number;
  label: string;
}

export interface OrderItem {
  id: string;
  name: string;
  variant: string;
  price: string;
  imageSrc: string;
}

export interface PriceSummary {
  subtotal: string;
  shipping: string;
  taxes: string;
  total: string;
}

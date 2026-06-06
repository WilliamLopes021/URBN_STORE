export type StepState = "active" | "inactive" | "completed";

export interface Step {
  number: number;
  label: string;
}

export interface PriceSummary {
  subtotal: string;
  shipping: string;
  taxes: string;
  total: string;
}

export interface ShippingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  saveInfo: boolean;
}

export interface ShippingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  saveInfo: boolean;
}

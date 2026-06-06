import type { ShippingFormData } from "../types/checkout";

export const STATES = [
  { value: "CA", label: "California" },
  { value: "NY", label: "New York" },
  { value: "TX", label: "Texas" },
  { value: "FL", label: "Florida" },
];

export const COUNTRIES = [
  { value: "US", label: "United States" },
  { value: "BR", label: "Brazil" },
  { value: "CA", label: "Canada" },
];

export const INITIAL: ShippingFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  apartment: "",
  city: "",
  state: "CA",
  zip: "",
  country: "US",
  saveInfo: false,
};

import { useState } from "react";
import { FormSelectField } from "../molecules/FormSelectField";
import type { ShippingFormData } from "../../types/checkout";
import { FormField } from "../molecules/FormField";
import { INITIAL, COUNTRIES, STATES } from "../../constants/mockForm";
import { Button } from "@/shared/components/atoms/Button";
import { Anchor } from "@/interfaces/router/Link";

interface ShippingFormProps {
  onSubmit: (data: ShippingFormData) => void;
}

export const ShippingForm = ({ onSubmit }: ShippingFormProps) => {
  const [form, setForm] = useState<ShippingFormData>(INITIAL);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 py-6 flex flex-col gap-3 ">
      <h2 className="text-text-primary font-black text-lg uppercase tracking-widest mb-2">
        Shipping Information
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <FormField
          id="firstName"
          name="firstName"
          label="First Name"
          value={form.firstName}
          onChange={handleChange}
        />
        <FormField
          id="lastName"
          name="lastName"
          label="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <FormField
        id="email"
        name="email"
        label="Email Address"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <FormField
        id="phone"
        name="phone"
        label="Phone Number"
        type="tel"
        value={form.phone}
        onChange={handleChange}
      />

      <FormField
        id="address"
        name="address"
        label="Address"
        value={form.address}
        onChange={handleChange}
      />

      <FormField
        id="apartment"
        name="apartment"
        label="Apartment, Suite, Etc. (Optional)"
        value={form.apartment}
        onChange={handleChange}
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <FormField
          id="city"
          name="city"
          label="City"
          value={form.city}
          onChange={handleChange}
        />
        <FormSelectField
          id="state"
          name="state"
          label="State / Province"
          value={form.state}
          options={STATES}
          onChange={handleChange}
        />
        <div className="col-span-2 md:col-span-1">
          <FormField
            id="zip"
            name="zip"
            label="Zip / Postal Code"
            value={form.zip}
            onChange={handleChange}
          />
        </div>
      </div>

      <FormSelectField
        id="country"
        name="country"
        label="Country / Region"
        value={form.country}
        options={COUNTRIES}
        onChange={handleChange}
      />

      <label className="flex items-center gap-2 cursor-pointer mt-1">
        <input
          type="checkbox"
          name="saveInfo"
          checked={form.saveInfo}
          onChange={handleChange}
          className="accent-accent-pink w-4 h-4"
        />
        <span className="text-light-gray text-xs font-semibold">
          Save this information for next time
        </span>
      </label>
      <Button color={"primary"} type="submit" className="mt-4">
        <Anchor to="/confirm-payment">Continuar para Pagamento</Anchor>
      </Button>
    </form>
  );
};

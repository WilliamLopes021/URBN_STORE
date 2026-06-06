import { FormLabel } from "../atoms/FormLabel";
import { Input } from "@/shared/components/atoms/Input";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField = ({
  id,
  name,
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}: FormFieldProps) => (
  <div className="flex flex-col">
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <Input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

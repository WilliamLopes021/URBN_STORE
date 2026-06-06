import { FormLabel } from "../atoms/FormLabel";
import { FormSelect } from "../atoms/FormSelect";

interface FormSelectOption {
  value: string;
  label: string;
}

interface FormSelectFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  options: FormSelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FormSelectField = ({
  id,
  name,
  label,
  value,
  options,
  onChange,
}: FormSelectFieldProps) => (
  <div className="flex flex-col">
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <div className="relative">
      <FormSelect
        id={id}
        name={name}
        value={value}
        options={options}
        onChange={onChange}
      />
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
          className="w-4 h-4 text-light-gray"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </div>
);

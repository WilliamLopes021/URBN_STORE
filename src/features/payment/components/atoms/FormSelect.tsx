interface FormSelectOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  id: string;
  name: string;
  value: string;
  options: FormSelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FormSelect = ({
  id,
  name,
  value,
  options,
  onChange,
}: FormSelectProps) => (
  <select
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    className="w-full bg-primary text-text-primary border border-accent-blue text-sm font-semibold px-3 py-3 appearance-none focus:outline-none focus:border-accent-pink"
  >
    {options.map((opt) => (
      <option key={opt.value} value={opt.value} className="bg-primary">
        {opt.label}
      </option>
    ))}
  </select>
);

import type { ReactNode } from "react";

type FormFieldProps = {
  htmlFor?: string;
  label: string;
  children: ReactNode;
};

export const FormField = ({ htmlFor, label, children }: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={htmlFor}
        className="text-text-primary font-black text-xs tracking-[0.2em] uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
};
interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export const FormLabel = ({ htmlFor, children }: FormLabelProps) => (
  <label
    htmlFor={htmlFor}
    className="block text-[9px] font-black uppercase tracking-widest text-light-gray mb-1"
  >
    {children}
  </label>
);


type FormProps = {
  children: React.ReactNode;
} & React.ComponentProps<"form">;

export const Form = ({ children, ...props }: FormProps) => {
  return (
    <form
      className="flex flex-col items-center gap-5 w-full max-w-sm mt-2"
      {...props}
    >
      {children}
    </form>
  );
};

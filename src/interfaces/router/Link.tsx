import { Link } from "react-router";

export const Anchor = ({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
} & React.ComponentProps<"a">) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

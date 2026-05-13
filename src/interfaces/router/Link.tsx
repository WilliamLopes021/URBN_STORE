import { Link } from "react-router";

export const Anchor = ({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  props?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

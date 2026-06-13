import { BrowserRouter } from "react-router";

export const RouterContext = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

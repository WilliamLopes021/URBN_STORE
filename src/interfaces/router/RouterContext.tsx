import { BrowserRouter, Routes } from "react-router";

export const RouterContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
};

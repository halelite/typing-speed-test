import Header from "@/components/header";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-dvh flex flex-col pt-4 pb-8 md:pt-8">
      <Header />
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
};

export default Layout;

import Header from "@/components/header";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		// px-4 md:px-8 lg:px-28
		// pb-8 md:pb-16 lg:py-8
		<div className="h-dvh flex flex-col pt-4 md:pt-8">
			<Header />
			<main className="flex-1 overflow-hidden">{children}</main>
		</div>
	);
};

export default Layout;

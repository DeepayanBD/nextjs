import { PropsWithChildren } from "react";

import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <>
            <MainHeader />
            <main className="text-black dark:text-white dark:bg-gray-900">
                {children}
            </main>
            <MainFooter />
        </>
    );
}

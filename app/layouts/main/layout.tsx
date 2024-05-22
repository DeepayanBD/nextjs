import { PropsWithChildren } from "react";

import MainHeader from "./header";
import MainFooter from "./footer";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MainHeader />
      <main className="text-black dark:text-white !bg-gray-100 dark:!bg-gray-900">
        {children}
      </main>
      <MainFooter />
    </>
  );
}

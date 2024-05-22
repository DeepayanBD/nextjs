"use client";

import React from "react";
import Link from "next/link";

import { DesktopNavbar, MobileNavbar } from "./navbar";

import DonateButton from "@/components/donate-button";
import DarkModeToggle from "@/components/dark-mode-toggle";
import ApplicationLogo from "@/components/logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { mainNavConfig } from "@/constants/mainNavConfig";

export default function MainHeader() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <nav className="block min-w-full container max-w-screen-xl px-4 py-2 mx-auto text-black bg-white dark:bg-slate-900/75 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 fixed z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
          <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
            <div className="shrink-0 flex items-center">
              <Link href="/">
                <ApplicationLogo className="block h-9 w-auto" />
              </Link>
            </div>
            <div className="flex gap-2">
              <div className="hidden lg:block content-center">
                <DesktopNavbar menuItems={mainNavConfig} />
              </div>
              <DarkModeToggle />
              <DonateButton className="hidden lg:block" />
              <button
                onClick={handleOpen}
                aria-label="Mobile Menu"
                className="ml-auto inline-block text-black dark:text-gray-200 hover:bg-slate-100/70 dark:hover:bg-slate-700/30 px-1 rounded lg:hidden"
              >
                {open ? (
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                  <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {open && <MobileNavbar />}
    </>
  );
}

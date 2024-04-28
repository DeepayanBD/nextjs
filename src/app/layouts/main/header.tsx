"use client";

import React from "react";
import Link from "next/link";

import MainNavbar from "./navbar";

import DonateButton from "@/app/components/DonateButton";
import DarkModeToggle from "@/app/components/DarkModeToggle";
import ApplicationLogo from "@/app/components/ApplicationLogo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { mainNavConfig } from "@/app/constants/mainNavConfig";

interface NavItemPropsType {
  label: string;
  link: string;
}

function NavItem({ label, link }: NavItemPropsType) {
  return (
    <Link href={link}>
      <li className="p-1 font-medium">{label}</li>
    </Link>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 text-black dark:text-white lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="Home" link="/" />
      <NavItem label="Who We Are" link="/who-we-are" />
      <NavItem label="What We Do" link="/what-we-do" />
      <NavItem label="Contact Us" link="/contact" />
    </ul>
  );
}

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
            <div className="flex gap-5">
              <div className="hidden lg:block content-center">
                <MainNavbar menuItems={mainNavConfig} />
              </div>
              <DarkModeToggle />
              <DonateButton className="hidden lg:block" />
              <button
                onClick={handleOpen}
                className="ml-auto inline-block text-blue-gray-900 lg:hidden"
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
      {open && (
        <div className="rounded-xl bg-white text-black dark:bg-slate-600 py-2 px-4 bg-opacity-90 fixed z-10 w-full mt-14">
          <NavList />
          <div className="pb-4">
            <DonateButton />
          </div>
        </div>
      )}
    </>
  );
}

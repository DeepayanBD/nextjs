import { Fragment } from "react";
import { MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { IDesktopNavItem } from "../types";
import NavItem from "./nav-item";

interface DropDownNavItem {
  label: string;
  open: boolean;
  handleOpen: () => void;
  children: IDesktopNavItem[];
}

export default function NavDropdown({
  label,
  children,
  handleOpen,
  open,
}: DropDownNavItem) {
  return (
    <MenuItem>
      <div>
        <MenuButton onClick={handleOpen} className="menu-button">
          <span className="font-semibold inline-flex">
            {label}
            <ChevronDownIcon
              className={`-mr-1 ml-2 h-5 w-5 opacity-40 transition duration-500  ${
                open && "rotate-180"
              }`}
              aria-hidden="true"
            />
          </span>
        </MenuButton>
        <Transition
          as={Fragment}
          show={open}
          enter="transition fade-in duration-500"
          enterFrom="transform opacity-0 scale-75"
          enterTo="transform opacity-100 scale-100"
          leave="transition fade-out duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-75"
        >
          <MenuItems className="absolute flex flex-col-reverse  dark:bg-slate-800 z-10 mt-2 w-56  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 px-1 dark:focus:!bg-violet-500">
              {children.map(({ label, link }, index) => (
                <NavItem key={index} label={label} link={link} />
              ))}
            </div>
          </MenuItems>
        </Transition>
      </div>
    </MenuItem>
  );
}

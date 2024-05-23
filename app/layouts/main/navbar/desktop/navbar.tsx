import { useState } from "react";
import { Menu } from "@headlessui/react";

import NavItem from "./nav-item";
import NavDropdown from "./nav-dropdown";
import { IDesktopNavItem } from "../types";

interface Props {
  menuItems: IDesktopNavItem[];
}

export default function DesktopNavbar({ menuItems }: Props) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <Menu
      as="menu"
      role="menu"
      className="relative list-none text-left items-center flex flex-row"
    >
      {menuItems.map((item, index) =>
        item.children ? (
          <NavDropdown
            key={index}
            handleOpen={() => handleDropdownToggle(index)}
            open={openDropdown === index}
            label={item.label}
          >
            {item.children}
          </NavDropdown>
        ) : (
          <NavItem key={index} label={item.label} link={item.link} />
        )
      )}
    </Menu>
  );
}

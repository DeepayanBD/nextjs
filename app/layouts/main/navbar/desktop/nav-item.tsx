import Link from "next/link";
import { MenuItem } from "@headlessui/react";
import { IDesktopNavItem } from "../types";

export default function NavItem({ label, link }: IDesktopNavItem) {
  return (
    <MenuItem>
      <Link href={link} role="menuitem" className="menu-button">
        <span className="font-semibold">{label}</span>
      </Link>
    </MenuItem>
  );
}

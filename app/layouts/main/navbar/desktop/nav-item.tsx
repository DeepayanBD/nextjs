import Link from "next/link";
import { Menu } from "@headlessui/react";
import { IDesktopNavItem } from "../types";

export default function NavItem({ label, link }: IDesktopNavItem) {
  return (
    <Menu.Item>
      <Link href={link} role="menuitem" className="menu-button">
        <span className="font-semibold">{label}</span>
      </Link>
    </Menu.Item>
  );
}

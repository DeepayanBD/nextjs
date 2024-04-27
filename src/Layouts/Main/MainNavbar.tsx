import { Menu, Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Dropdown from "@/Components/Dropdown";

interface MenuItem {
    label: string;
    link: string;
    children?: MenuItem[];
}

interface DropDownMenuItem {
    label: string;
    children: MenuItem[];
}

interface Props {
    menuItems: MenuItem[];
}

const MenuItem = ({ label, link }: MenuItem) => {
    return (
        <Menu.Item>
            <Link href={route(link)} className="menu-button">
                <li className="font-medium">{label}</li>
            </Link>
        </Menu.Item>
    );
};

const DropdownMenu = ({ label, children }: DropDownMenuItem) => {
    return (
        <div>
            <Dropdown>
                <Dropdown.Trigger>
                    <button
                        type="button"
                        className="font-medium inline-flex menu-button transition ease-in-out duration-150"
                    >
                        {label}
                        <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5 opacity-40"
                            aria-hidden="true"
                        />
                    </button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <div className="py-1 px-1">
                        {children.map(({ label, link }, index) => (
                            <Dropdown.Link
                                key={index}
                                label={label}
                                href={route(link)}
                                className="rounded-md menu-button menu-item"
                            >
                                <li className="font-medium">{label}</li>
                            </Dropdown.Link>
                        ))}
                    </div>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
};

export default function MainNavbar({ menuItems }: Props) {
    return (
        <Menu
            as="div"
            className="relative list-none text-start items-center flex flex-row"
        >
            {menuItems.map((item, index) =>
                item.children ? (
                    <DropdownMenu
                        key={index}
                        label={item.label}
                        children={item.children}
                    />
                ) : (
                    <MenuItem key={index} label={item.label} link={item.link} />
                )
            )}
        </Menu>
    );
}

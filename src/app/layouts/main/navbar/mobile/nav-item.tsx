import Link from "next/link";

interface NavItemPropsType {
  label: string;
  link: string;
}

export default function NavItem({ label, link }: NavItemPropsType) {
  return (
    <Link href={link} className="menu-button">
      <li className="font-semibold">{label}</li>
    </Link>
  );
}

import NavItem from "./nav-item";

export default function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 text-black dark:text-white lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="Home" link="/" />
      <NavItem label="Who We Are" link="/who-we-are" />
      <NavItem label="What We Do" link="/what-we-do" />
      <NavItem label="Contact Us" link="/contact" />
      <li className="font-bold text-gray-500 text-xs ps-4 uppercase">
        Project
      </li>
      <NavItem label="Self Employment" link="/project/maintenance" />
      <NavItem label="Food Distribution" link="/project/maintenance" />
      <NavItem label="Deepayan Arragya" link="/project/arraggya" />
      <NavItem label="Deepayan Arayanna" link="/project/maintenance" />
      <NavItem label="Deepayan Asram" link="/project/maintenance" />
      <NavItem label="Deepayan Bondhu" link="/project/maintenance" />
      <NavItem
        label="Education For A Better Tomorrow"
        link="/project/maintenance"
      />
      <NavItem label="Clean Water And Sanitation" link="/project/maintenance" />
      <NavItem label="Kurbani" link="/project/kurbani" />
      <li className="font-bold text-gray-500 text-xs ps-4 uppercase">Course</li>
      <NavItem label="Pre Marriage" link="/course/pre-marriage" />
      <NavItem label="Smart Parenting" link="/course/smart-parenting" />
      <NavItem label="Internship" link="/course/internship" />
    </ul>
  );
}

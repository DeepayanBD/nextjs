import DonateButton from "@/app/components/donate-button";
import NavList from "./nav-list";

export default function MobileNavbar() {
  return (
    <div className="rounded-xl bg-white text-black dark:bg-slate-800 py-2 h-screen overflow-y-auto px-4 fixed z-10 w-full mt-14 pb-20">
      <NavList />
      <div className="pb-4 px-4">
        <DonateButton />
      </div>
    </div>
  );
}

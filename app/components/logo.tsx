import Image from "next/image";
import logo from "@/public/assets/logo/logo.svg";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image height={18} width={90} alt="logo" src={logo} className={className} />
  );
}

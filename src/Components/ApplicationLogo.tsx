import Image from "next/image";
import logo from "@/assets/logo/logo.svg";

export default function ApplicationLogo({ className }: { className?: string }) {
  return (
    <Image height={18} width={90} alt="logo" src={logo} className={className} />
  );
}

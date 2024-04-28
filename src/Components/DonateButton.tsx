import Link from "next/link";

export default function DonateButton({ className }: { className?: string }) {
  return (
    <Link
      href="/donate"
      className={`rounded-full align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white shadow-md shadow-gray-900/10 hover:shadow-md hover:shadow-blue-900/40 dark:hover:shadow-blue-700/40 ${className}`}
    >
      Donate
    </Link>
  );
}

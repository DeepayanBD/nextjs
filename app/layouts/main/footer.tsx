import Link from "next/link";
import { footerLinks } from "./footerLinks";
const currentYear = new Date().getFullYear();

export default function MainFooter() {
  return (
    <footer className="px-8 py-14 bg-white dark:bg-gray-900 bg-opacity-90 text-gray-700 dark:text-gray-200 border-y border-b-0 border-gray-300/40">
      <div className="container mx-auto flex flex-col items-center divide-y divide-dashed divide-gray-400">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {footerLinks.map(({ link, label }, index) => (
            <ul key={index}>
              <li>
                <Link
                  href={link}
                  className="font-medium transition-colors hover:text-blue-500 dark:hover:text-white hover:underline"
                >
                  {label}
                </Link>
              </li>
            </ul>
          ))}
        </div>

        <div className=" sm:flex sm:items-center sm:justify-between pt-6  w-full antialiased">
          <p className="mb-4 text-base text-center  sm:mb-0">
            Copyright &copy; 2015–{currentYear}{" "}
            <Link
              href="/"
              className="hover:text-blue-500 dark:hover:text-blue-400"
              target="_self"
            >
              Deepayan Foundation
            </Link>
          </p>
          <div className="flex justify-center items-center space-x-1">
            <Link
              href="https://facebook.com/deepayan.bd"
              target="_blank"
              data-tooltip-target="tooltip-facebook"
              className="inline-flex justify-center p-2 text-gray-500 rounded-full cursor-pointer dark:text-gray-100 dark:hover:text-blue-400 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-blue-500/10"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://x.com/deepayan.bd"
              target="_blank"
              data-tooltip-target="tooltip-twitter"
              className="inline-flex justify-center p-2 text-gray-500 rounded-full cursor-pointer dark:text-gray-100 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-700/30"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

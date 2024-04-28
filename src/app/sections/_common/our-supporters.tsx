/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import logoAmazon from "@/app/assets/logos/supporters/logo-amazon.svg";
import logoCoinbase from "@/app/assets/logos/supporters/logo-coinbase.svg";
import logoDurrbar from "@/app/assets/logos/supporters/logo-durrbar.svg";
import logoSpotify from "@/app/assets/logos/supporters/logo-spotify.svg";
import logoSustainableDevelopmentGoals from "@/app/assets/logos/supporters/240px-SustainableDevelopmentGoalsLogo.svg.png";

export default function OurSupporters() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container !mx-auto text-center place-content-center grid">
        <p className="block antialiased font-sans leading-relaxed text-blue-gray-900 !font-semibold lg:!text-lg !text-base">
          More than 50+ brands trust us
        </p>
        <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 my-4 !text-2xl !leading-snug lg:!text-3xl">
          যাদের সহযোগিতায় আজকের দীপায়ন
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto max-w-5xl !text-gray-700 dark:!text-gray-300 lg:px-8 mb-10">
          From innovative startups to Fortune 500 companies, our client list
          spans a spectrum of sectors, each with unique challenges that we've
          successfully navigated.
        </p>
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="relative flex flex-col bg-clip-border rounded-xl  bg-indigo-600/30 px-10">
              <div className="p-6">
                <Image src={logoCoinbase} alt="logo" className="w-40" />
                <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal ">
                  coinbase.com
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl  bg-indigo-600/30 px-10">
              <div className="p-6">
                <Image src={logoAmazon} alt="logo" className="w-40" />
                <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal ">
                  amazon.com
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl  bg-indigo-600/30 lg:px-10 justify-center max-w-[18rem] lg:max-w-lg">
            <div className="p-6 text-center">
              <Image
                src={logoSustainableDevelopmentGoals}
                alt="logo"
                className="w-32 mx-auto"
              />
              <a
                href="https://sdgs.un.org/"
                className="block antialiased font-sans text-sm leading-normal text-inherit font-normal  my-4"
              >
                sdgs.un.org
              </a>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal lg:max-w-[16rem]">
                “Every year, the UN Secretary General presents an annual SDG
                Progress report, which is developed in cooperation with the UN
                System, and based on the global indicator framework and data
                produced by national statistical systems and information
                collected at the regional level."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="relative flex flex-col bg-clip-border rounded-xl  bg-indigo-600/30 px-10">
              <div className="p-6">
                <Image src={logoSpotify} alt="logo" className="w-40" />
                <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal ">
                  spotify.com
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl  bg-indigo-600/30 px-10">
              <div className="p-6">
                <Image src={logoDurrbar} alt="logo" className="w-40" />
                <a
                  href="https://www.durrbar.com/"
                  className="block antialiased font-sans text-sm leading-normal text-inherit font-normal "
                >
                  durrbar.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

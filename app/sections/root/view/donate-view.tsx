import bgImage from "@/app/assets/uploads/home-banner-04.jpg";
import bKashLogo from "@/app/assets/logos/donate/bkash.svg";
import nagadLogo from "@/app/assets/logos/donate/nagad.svg";
import sonaliBankLogo from "@/app/assets/logos/donate/sonali-bank.svg";
import Image from "next/image";
import sideLogo from "@/app/assets/logo/deepayan-logo.png";

const mathods = [
  {
    name: "bKash",
    logo: bKashLogo,
    details: "01916916832",
  },
  {
    name: "Nagad",
    logo: nagadLogo,
    details: "01799015558",
  },
  {
    name: "Sonali Bank",
    logo: sonaliBankLogo,
    details:
      "Deepayan Foundation \n01 11 50 20 08 08 3 \nCantonment Branch \nRouting - 200261036 \nSWIFT - BSONBDDHCNT",
  },
];

export default function DonateView() {
  return (
    <>
      <section className="relative px-5 md:px-10 lg:px-20 xl:px-96 mx-auto py-20 sm:py-32 lg:py-44">
        <Image
          src={bgImage}
          priority
          height={1000}
          width={500}
          alt="Photo by Fakurian Design"
          className="absolute inset-0 h-full w-full object-cover object-center "
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 from-10% via-purple-500 via-30% to-pink-500 to-90% mix-blend-normal opacity-55 dark:opacity-65"></div>

        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className=" relative ">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-4">
            <div className="lg:col-span-6 md:col-span-6">
              <div className="md:me-6">
                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">
                  Your Donation Can <br /> Change the World
                </h4>
                <div className="flex flex-col gap-3 min-w-full">
                  {mathods.map(({ name, logo, details }, index) => (
                    <div
                      key={index}
                      className="px-3 md:max-w-sm max-sm:w-full bg-blue-200 hover:bg-blue-300 rounded-xl shadow-md shadow-blue-500 flex items-center space-x-2"
                    >
                      <div className="shrink-0">
                        <Image
                          src={logo}
                          className="h-auto w-24 md:w-36"
                          alt={name}
                        />
                      </div>
                      <div className="py-6">
                        <div className="text-xl font-medium text-black">
                          {name}
                        </div>
                        <pre className="text-slate-600">{details}</pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 md:col-span-6">
              <Image
                className="rounded-xl shadow"
                quality={100}
                src={sideLogo}
                alt="Deepayan Logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

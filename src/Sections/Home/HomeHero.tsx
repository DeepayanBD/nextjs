import Image from "next/image";
import bgImage from "@/assets/uploads/WhatsApp-Image-2022-03-29-at-11.04.46-AM.jpeg";
import bgLogo from "@/assets/logo/deepayan-logo.png";

export default function HomeHero() {
  return (
    <section className="min-h-full h-screen relative flex flex-1 shrink-0 items-center justify-center overflow-hidden  bg-gray-100 py-16 md:py-20 xl:py-48">
      <Image
        src={bgImage}
        loading="lazy"
        width={1000}
        height={500}
        priority
        alt="Photo by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mix-blend-normal opacity-70"></div>

      <div className="flex flex-col md:flex-row relative max-w-screen-xl px-4 py-8 gap-10  lg:grid-cols-12">
        <div className="mr-auto max-w-lg place-self-center lg:col-span-6">
          <div className="relative flex flex-col items-center p-4 ">
            <p className="mb-4 text-center sm:text-3xl dark:text-white text-black text-base md:mb-8">
              Because Only Together We Can
            </p>
            <h1 className="mb-8 text-center sm:text-8xl font-bold dark:text-white text-black text-base md:mb-12 md:text-6xl">
              একটি মানবিক পৃথিবীর জন্য
            </h1>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100  focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Read More
              </a>

              <a
                href="#"
                className="inline-block rounded-full bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:ml-2.5 lg:mt-0 rounded-xl mix-blend-multiply lg:col-span-6 lg:flex">
          <Image
            className="rounded-xl mix-blend-darken"
            height={600}
            width={600}
            src={bgLogo}
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}

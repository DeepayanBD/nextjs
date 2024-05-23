import Link from "next/link";
import SectionTitle from "@/app/components/section-title";
import bgImage from "@/app/assets/uploads/WhatsApp-Image-2022-03-29-at-10.26.32-AM.webp";

export default function GetDonate() {
  return (
    <section
      className="font-bangla min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-8 bg-cover md:py-10 xl:py-24 bg-fixed"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 from-10% via-purple-500 via-30% to-pink-500 to-90% mix-blend-normal opacity-85"></div>

      <>
        <div className="flex flex-col relative">
          <SectionTitle title="অনুদান গ্রহণ" />
          <div className="flex flex-row relative max-w-screen-xl px-4 my-10 py-4 gap-6 justify-between">
            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
              <h1 className="mb-8 text-center text-lg font-bold dark:text-white text-black sm:text-5xl md:mb-12 md:text-2xl">
                একটি সুবিধাবঞ্চিত শিশুর জীবনের মোড় ঘুরিয়ে দিতে আমাদের সহায়তা
                করুন
              </h1>
              <p className="mb-4 md:mb-8 text-center dark:text-white text-black font-medium text-xs sm:text-xl">
                আপনার অনুদান পৌঁছে যাবে সুবিধাবঞ্চিত শিশু ও মানুষদের সাহায্যে।
                দারিদ্র ও ক্ষুধামুক্ত একটি বাংলাদেশ গড়ার এই লক্ষযাত্রায় আপনাকে
                স্বাগতম।
              </p>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <Link
                  href="/donate"
                  className="inline-block rounded-full bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-blue-300 transition duration-100 hover:bg-gray-300 hover:shadow-md hover:shadow-blue-500/35 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}

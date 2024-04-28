import Image from "next/image";
import SectionTitle from "@/app/old-components/section-title";

import banner from "@/app/assets/uploads/banner-02.jpg";
import sideImage from "@/app/assets/uploads/WhatsApp-Image-2022-03-29-at-11.19.24-AM-1024x768.jpeg";

export default function HomeVision() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-12 md:py-16 xl:py-24">
      <Image
        src={banner}
        loading="lazy"
        height={1000}
        width={1000}
        alt="Photo by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-50 blur-sm"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% mix-blend-normal opacity-55 dark:opacity-65"></div>

      <>
        <div className="flex flex-col relative">
          <SectionTitle title="আমাদের লক্ষ্য" />
          <div className="flex flex-col md:flex-row relative max-w-screen-xl px-4 py-8 gap-6  lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-6">
              <p className="max-w-2xl mb-6  text-black dark:text-white lg:mb-8">
                <strong className="font-bold">
                  “ক্ষুধার রাজ্যে পৃথিবী গদ্যময়,পূর্ণিমা চাঁদ যেন ঝলসানো রুটি”
                </strong>
                – সুকান্ত ভট্টাচার্য এই লাইনটির মাধ্যমে কী বোঝাতে চেয়েছেন?
                তিঁনি বোঝাতে চেয়েছেন, একজন ক্ষুধার্ত মানুষের কাছে পার্থিব জীবনের
                সৌন্দর্য মূল্যহীন। একজন মানুষ এর স্বাভাবিকভাবে বাঁচার জন্য তাকে
                তার মৌলিক অধিকারসমূহ প্রদান করা ছাড়া কোনো বিকল্প নেই।
              </p>

              <p className="max-w-2xl mb-6  text-black dark:text-white lg:mb-8 ">
                আমরা বিশ্বাস করি প্রতিটা মানুষ তাদের মৌলিক অধিকার নিয়ে বাঁচার
                অধিকার রাখে, বাংলাদেশ এর ২০.৫ শতাংশ মানুষ যারা দারিদ্রসীমার নিচে
                বসবাস করেন তাদের জীবনযাত্রার মান উন্নয়ন ও জাতির জনক বঙ্গবন্ধু
                শেখ মুজিবুর রহমান এর সেই ক্ষুধামুক্ত সোনার বাংলা গড়ার দৃঢ়
                প্রত্যয় নিয়ে আমাদের ফাউন্ডেশন এর যাত্রা শুরু হয় ২০১৭ সাল থেকে
              </p>

              <p className="max-w-2xl mb-6  text-black dark:text-white lg:mb-8 ">
                আমাদের এই ক্ষুদ্র প্রয়াসে আপনাদের আগ্রহ ও সহযোগিতা একান্ত কাম্য।
                স্বপ্নের সেই সোনার বাংলা গড়ার যাত্রায় আপনার অপেক্ষায় আমরা।
              </p>
            </div>
            <div className="lg:ml-2.5 lg:mt-0 lg:col-span-6 lg:flex">
              <Image
                className="rounded-lg"
                height={1000}
                width={1000}
                src={sideImage}
                alt="WhatsApp-Image-2022-03-29-at-11.19.24-AM-1024x768.jpeg"
              />
            </div>
          </div>
        </div>
      </>
    </section>
  );
}

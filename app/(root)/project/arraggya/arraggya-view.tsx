import Image from "next/image";

import GetDonate from "@/app/_common/get-donate";
import ImageGrid from "@/app/_common/image-grid";
import SectionTitle from "@/app/components/section-title";
import DonateButton from "@/app/components/donate-button";
import OurSupporters from "@/app/_common/our-supporters";

import sideImage from "@/public/assets/uploads/arraggya/side-image.jpeg";
import { arraggyaImages } from "./arraggya";

export default function ArraggyaView() {
  return (
    <>
      <section className="font-bangla bg-gray-100 dark:bg-gray-900 min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-8 mt-12 md:py-10 xl:py-24">
        <>
          <div className="flex flex-col relative">
            <SectionTitle title="প্রজেক্ট আরোগ্য" />
            <div className="flex flex-col  md:flex-row relative max-w-screen-xl px-4 py-8 gap-10  lg:grid-cols-12">
              <div className="mr-auto max-w-lg place-self-center lg:col-span-6 flex flex-col justify-between gap-2">
                <span className="max-w-2xl mb-6 font-medium text-black dark:text-white lg:mb-8 ">
                  সুস্বাস্থ্য ও সুস্থতা মহান সৃষ্টিকর্তার পক্ষ থেকে সমগ্র
                  মানবজাতির উপরে একটি নিয়ামত স্বরূপ। এই নিয়ামত এর অভাব আমরা
                  অক্ষরে অক্ষরে টের পাই যখন আমরা বা আমাদের প্রিয়জন অসুস্থ হয়ে
                  পড়েন। হয়তো অসুস্থ হলে আপনি বা আমি চিকিৎসকের শরণাপন্ন হই, হয়তো
                  ঔষধ সেবন এর পরে মহান আল্লাহ রাব্বুল আল-আমিন এর রহমতে সুস্থতা
                  লাভ করি। কিন্তু কখনো ভেবে দেখেছেন ? এক বেলার আহার জোগাতে যেই
                  অসহায় মানুষদের হিমশিম খেতে হয় তারা কিভাবে বছর এর পর বছর
                  রোগ-ব্যাধি তে ভুগেন। এর ফলাফল হলো একটা অমানবিক মৃত্যু। দীপায়ন
                  এ আমরা বিশ্বাস করি প্রতিটা মানুষ এর রয়েছে সুস্থভাবে বেঁচে
                  থাকার অধিকার। আমাদের রয়েছে প্রশিক্ষিত একদল স্বাস্থকর্মী ও কিছু
                  মহানুভব চিকিৎসকদের একটি দল যারা নিরলসভাবে কাজ করে চলেছেন এই
                  অসহায় মানুষদের মুখে হাসি ফোটাতে। আমাদের ভবিৎষত কর্মপরিকল্পনাতে
                  রয়েছে
                  <strong className="font-bold">
                    &nbsp;দীপায়ন আরোগ্যলয়&nbsp;
                  </strong>{" "}
                  যা সম্পূর্ণ বিনামূল্যে চিকিৎসা দিবে একটি বিশাল জনগোষ্ঠীকে,
                  একটি রোগমুক্ত বাংলাদেশ গড়ার এই প্রয়াস এ আপনার অনুদান হাসি
                  ফোটাবে হাজারো অসহায় রোগীর মুখে। সোনার বাংলাদেশ গড়ার দৃঢ়
                  প্রত্যয়ে আপনাকে স্বাগতম।
                </span>

                <DonateButton className="w-28 max-sm:w-full" />
              </div>
              <div className="lg:ml-2.5 lg:mt-0 lg:col-span-6 lg:flex">
                <Image
                  className="rounded-lg w-96 max-sm:w-full h-auto"
                  src={sideImage}
                  priority
                  placeholder="blur"
                  alt="Project Arraggya"
                />
              </div>
            </div>
          </div>
        </>
      </section>

      <ImageGrid images={arraggyaImages} />

      <OurSupporters />

      <GetDonate />
    </>
  );
}

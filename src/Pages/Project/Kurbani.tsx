import { Head } from "@inertiajs/react";

import { MainLayout } from "@/Layouts/Main";

import GetDonate from "@/Sections/Common/GetDonate";

import { kurbaniImages } from "@/constants/kurbani";
import DonateButton from "@/Components/DonateButton";
import ImageGrid from "@/Sections/Common/ImageGrid";
import SectionTitle from "@/Components/SectionTitle";

export default function ProjectKurbani() {
    return (
        <MainLayout>
            <Head title="Kurbani Project" />

            <section className="bg-gray-50 dark:bg-gray-900 min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-8 mt-12 md:py-10 xl:py-24">
                <>
                    <div className="flex flex-col relative">
                        <SectionTitle title="প্রজেক্ট কুরবানি" />
                        <div className="flex flex-col  md:flex-row relative max-w-screen-xl px-4 py-8 gap-10  lg:grid-cols-12">
                            <div className="lg:ml-2.5 lg:mt-0 lg:col-span-6 lg:flex">
                                <img
                                    className="rounded-lg"
                                    src="/assets/uploads/kurbani/bannerboy-1000x1024.jpg"
                                    alt="mockup"
                                />
                            </div>
                            <div className="mr-auto max-w-lg place-self-center lg:col-span-6">
                                <h6 className="max-w-2xl mb-6 font-medium dark:text-white text-black lg:mb-8 ">
                                    কুরবানী,মহান আল্লাহর সন্তুষ্টি লাভের উদ্দেশে
                                    সামর্থবান মুসলিম বান্দাহর উপরে অসহায় বান্দার
                                    হক , কিন্তু কালের বিবর্তনে এই উৎসবটি নতুন
                                    ফ্রিজ কেনা আর গোস্ত খাবার উৎসবে পরিণত হয়েছে
                                    (আস্তাগফিরুল্লাহ) । এই চরম উর্ধগতির বাজারে
                                    পশু ক্রয়ের ক্ষমতা হারিয়েছে কয়েকলক্ষ পরিবার।
                                    এই পবিত্র উৎসবের দিনেও যেন কোনো মধ্যবিত্ত বা
                                    অসহায় মানুষের বাসায় অবুঝ শিশুর অবুঝ প্রশ্নে
                                    কোনো পিতার হৃদয়ে রক্তখরন না হয়, সেইজন্য
                                    আমাদের এই ছোট্ট উদ্যোগ। এই উদ্যোগে সামিল হতে
                                    পারেন আপনিও । ক্ষুধামুক্ত বাংলাদেশ গোড়ার
                                    লক্ষে যুক্ত হন আমাদের সাথে। আপনার একটি
                                    অনুদান হাসি ফোটাবে হাজারো অসহায় পরিবার এর
                                    মুখে।
                                </h6>

                                <DonateButton />
                            </div>
                        </div>
                    </div>
                </>
            </section>

            <ImageGrid images={kurbaniImages} />

            <GetDonate />
        </MainLayout>
    );
}

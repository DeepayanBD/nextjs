import { Head } from "@inertiajs/react";
import { MainLayout } from "@/Layouts/Main";

import OurGoal from "@/Sections/Common/OurGoal";
import GetDonate from "@/Sections/Common/GetDonate";
import OurSupporters from "@/Sections/Common/OurSupporters";

export default function WhoWeAre() {
    return (
        <MainLayout>
            <Head title="Who Are We" />

            <section className="min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 md:py-20 xl:py-48">
                <img
                    src="/assets/uploads/WhatsApp-Image-2022-03-29-at-11.04.46-AM.jpeg"
                    loading="lazy"
                    alt="Photo by Fakurian Design"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mix-blend-multiply opacity-95"></div>

                <div className="relative flex flex-col text-start p-4 mx-14">
                    <p className="mb-4  sm:text-3xl text-white text-base ">
                        একটি দারিদ্রমুক্ত দেশ গড়তে
                    </p>
                    <hr className="my-2 w-2/6 md:mb-8 h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-75 dark:via-amber-400" />

                    <h1 className="mb-8  sm:text-4xl font-bold text-white text-base md:mb-12 md:text-4xl">
                        সোনার মানুষ গড়তে চাই, সোনার বাংলা গড়বো তাই
                    </h1>
                </div>
            </section>

            <OurGoal />

            <OurSupporters />

            <GetDonate />
        </MainLayout>
    );
}

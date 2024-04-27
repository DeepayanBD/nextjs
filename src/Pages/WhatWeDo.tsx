import { MainLayout } from "@/Layouts/Main";
import GetDonate from "@/Sections/Common/GetDonate";
import OurWork from "@/Sections/Common/OurWork";
import OurWorkPart from "@/Sections/Common/OurWorkPart";
import { Head } from "@inertiajs/react";

export default function WhatWeDo() {
    return (
        <MainLayout>
            <Head title="What We Do" />

            <section className="min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden  bg-gray-100 py-16 md:py-20 xl:py-48">
                <img
                    src="/assets/uploads/WhatsApp-Image-2022-03-29-at-11.04.46-AM.jpeg"
                    loading="lazy"
                    alt="Photo by Fakurian Design"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mix-blend-multiply opacity-95"></div>

                <div className="relative flex flex-col text-start p-4 mx-14">
                    <p className="mb-4  sm:text-3xl text-white text-base ">
                        একটি মানবিক পৃথিবীর জন্য
                    </p>
                    <hr className="my-2 w-2/6 md:mb-8 h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-75 dark:via-amber-400" />

                    <h1 className="mb-8  sm:text-4xl font-bold text-white text-base md:mb-12 md:text-4xl">
                        দুঃখে যাদের জীবন কাটে কষ্টে যাদের রাত, তাদের জন্য বাড়িয়ে
                        দেই ভালোবাসার হাত।
                    </h1>
                </div>
            </section>

            <OurWork />

            <OurWorkPart />

            <GetDonate />
        </MainLayout>
    );
}

import SectionTitle from "@/Components/SectionTitle";

export default function HomeSpeech() {
    return (
        <section className="bg-white dark:bg-gray-900 min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-8 shadow-lg md:py-10 xl:py-24">
            <img
                src="/assets/uploads/home-banner-04.jpg"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="absolute inset-0 h-full w-full object-cover object-center  blur-sm"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% mix-blend-normal opacity-55 dark:opacity-75"></div>

            <div className="absolute inset-0 dark:bg-black/70 bg-black/20 opacity-75"></div>
            <>
                <div className="flex flex-col relative">
                    <SectionTitle title="কিছু কথা" />
                    <div className="flex flex-col md:flex-row relative max-w-screen-xl dark:text-white text-black px-4 my-10 py-8 gap-6 justify-between">
                        <blockquote className="font-bold text-xl">
                            <svg
                                className="w-14 h-14 text-amber-500 dark:text-amber-600 my-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 14"
                            >
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <p>
                                আপনার একটু সাহায্য হাসি ফুটাতে পারে হাজারো অসহায়
                                শিশুদের মুখে। আপনাদের সাহায্য ও সহযোগিতায় আমরা
                                এতদূর আসতে পেরেছি, আরো অনেক দূর এগিয়ে যেতে চাই।
                            </p>
                            <svg
                                className="w-14 h-14 text-amber-500 dark:text-amber-600 my-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 14"
                            >
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                        </blockquote>
                        <blockquote className="font-bold text-xl">
                            <svg
                                className="w-14 h-14 text-amber-500 dark:text-amber-600 my-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 14"
                            >
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <p>
                                একটি ক্ষুধামুক্ত বাংলাদেশ গড়ার আমাদের এই স্বপ্ন
                                বাস্তবায়নে আপনাদের সহযোগিতা ও সমর্থন আমাদের
                                একান্ত কাম্য
                            </p>
                            <svg
                                className="w-14 h-14 text-amber-500 dark:text-amber-600 my-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 14"
                            >
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                        </blockquote>
                    </div>
                </div>
            </>
        </section>
    );
}

import DonateButton from "@/Components/DonateButton";
import { MainLayout } from "@/Layouts/Main";
import { Head } from "@inertiajs/react";

export default function Donate() {
    return (
        <MainLayout>
            <Head title="Donate" />
            <section className="relative px-5 lg:px-96 mx-auto lg:py-44 py-36 bg-[url('https://www.platoform.net/assets/images/charity/bg.jpg')] bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/50"></div>
                <div className="container relative z-1">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-8">
                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="md:me-6">
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">
                                    Your Donation Can <br /> Change the World
                                </h4>
                                <p className="text-white/75 text-lg max-w-xl">
                                    Start working with Techwind that can provide
                                    everything you need to generate awareness,
                                    drive traffic, connect.
                                </p>

                                <div className="mt-6">
                                    <DonateButton />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="p-6 rounded-lg border-t-8 border-indigo-600 bg-indigo-100 dark:bg-indigo-200 dark:text-black shadow-lg dark:shadow-gray-800">
                                <div className="mb-6 text-center">
                                    <h4 className="font-bold lg:leading-normal leading-normal text-3xl mb-3">
                                        Make a Donation
                                    </h4>
                                    <p className="text-slate-400">
                                        Your $40.00 monthly donation can give 12
                                        people clean water every year. 100%
                                        funds water projects.
                                    </p>
                                </div>

                                <form>
                                    <div className="grid grid-cols-1">
                                        <div>
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="mb-5">
                                                    <label className="form-label font-medium">
                                                        Your Name :{" "}
                                                        <span className="text-red-600">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-input w-full rounded-md py-3 px-4 text-sm  border-none dark:bg-slate-200"
                                                        placeholder="Name"
                                                        name="name"
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-5">
                                                    <label className="form-label font-medium">
                                                        Your Email :{" "}
                                                        <span className="text-red-600">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-input w-full rounded-md py-3 px-4 text-sm  border-none dark:bg-slate-200"
                                                        placeholder="Email"
                                                        name="email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <label className="form-label font-medium">
                                                I Want to Donate for
                                            </label>
                                            <select className="form-select form-input w-full rounded-md py-3 px-4 text-sm  border-none dark:bg-slate-200">
                                                <option value="Donate For Food">
                                                    Donate For Food
                                                </option>
                                                <option value="Food For Orphan">
                                                    Food For Orphan
                                                </option>
                                                <option value="Home For Homeless">
                                                    Home For Homeless
                                                </option>
                                                <option value="Holyday Gifts In Kind">
                                                    Holyday Gifts In Kind
                                                </option>
                                                <option value="For clean Water in Africa">
                                                    For clean Water in Africa
                                                </option>
                                                <option value="Health and Rights">
                                                    Health and Rights
                                                </option>
                                            </select>
                                        </div>

                                        <div className="mb-5">
                                            <label className="form-label font-medium">
                                                How much do you want to donate ?
                                            </label>
                                            <div className="relative mt-2">
                                                <span
                                                    className="absolute top-0.5 start-0.5 size-10 text-xl bg-gray-100 dark:bg-slate-300 inline-flex justify-center items-center dark:text-dark rounded"
                                                    id="basic-addon1"
                                                >
                                                    <span className="icon-[mdi--currency-bdt]"></span>
                                                </span>
                                                <input
                                                    type="number"
                                                    className="form-input ps-12  h-11 w-full rounded-md py-3 px-4 text-sm  border-none dark:bg-slate-200"
                                                    min="1"
                                                    max="1000"
                                                    placeholder="Enter Amount"
                                                    id="amount"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <div className="flex items-center w-full mb-0">
                                                <input
                                                    className="form-checkbox rounded border-gray-200 dark:border-gray-300 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="AcceptT&C"
                                                />
                                                <label
                                                    className="form-check-label text-slate-400"
                                                    htmlFor="AcceptT&C"
                                                >
                                                    I Accept{" "}
                                                    <a
                                                        href=""
                                                        className="text-indigo-600"
                                                    >
                                                        Terms And Condition
                                                    </a>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <input
                                                type="submit"
                                                className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full w-full"
                                                value="Donate Now"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

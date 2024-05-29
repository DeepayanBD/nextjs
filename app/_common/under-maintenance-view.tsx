import Image from "next/image";

import DonateButton from "@/app/components/donate-button";
import SectionTitle from "@/app/components/section-title";
import GetDonate from "@/app/_common/get-donate";

import sideImage from "@/public/assets/svg/undraw_co-working_re_w93t.svg";

export default function UnderMaintenanceView() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-8 mt-12 md:py-10 xl:py-24">
        <>
          <div className="flex flex-col relative">
            <SectionTitle title="Under Maintenance" />
            <div className="flex flex-col  md:flex-row relative max-w-screen-xl px-4 py-8 gap-10  lg:grid-cols-12">
              <div className="lg:ml-2.5 lg:mt-0 lg:col-span-6 lg:flex p-5 m-5">
                <Image
                  className="rounded-lg"
                  src={sideImage}
                  alt="Under Maintenance"
                  priority
                />
              </div>
              <div className="mr-auto max-w-lg place-self-center lg:col-span-6 flex flex-col justify-between gap-2  max-sm:px-5">
                <span className="max-w-2xl mb-6 font-medium dark:text-white text-black lg:mb-8">
                  {`As a vital arm of our nonprofit NGO, the ongoing maintenance
                  of our projects stands as a testament to our commitment to
                  sustainable impact. With a dedicated team of volunteers and
                  professionals, we ensure that every aspect of our initiatives
                  remains finely tuned and responsive to the evolving needs of
                  our communities. Whether it's maintaining infrastructure for
                  education, healthcare, or environmental conservation, we
                  approach each task with diligence and care. Regular
                  assessments, repairs, and upgrades not only guarantee the
                  longevity of our projects but also reinforce our promise to
                  serve with excellence and integrity. Through this ongoing
                  maintenance, we uphold the trust and support of our
                  stakeholders, fostering a legacy of positive change that
                  endures for generations to come.`}
                </span>

                <DonateButton className="w-28 max-sm:w-full" />
              </div>
            </div>
          </div>
        </>
      </section>

      <GetDonate />
    </>
  );
}

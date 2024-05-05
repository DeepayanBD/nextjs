import Image, { StaticImageData } from "next/image";
import SectionTitle from "@/app/components/section-title";
import { ourWorkPart } from "@/app/constants/ourWorkPart";

interface ReviewCardPropsType {
  heading: string;
  image: StaticImageData | string;
  details: string;
}

export function CardReview({ heading, image, details }: ReviewCardPropsType) {
  return (
    <div className="group flex-col grid bg-clip-border  bg-transparent text-gray-700 shadow-md shadow-blue-500/80 dark:shadow-blue-900/80 relative min-h-[30rem] items-end overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={heading}
        height={900}
        width={400}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="p-6 relative flex flex-col justify-end">
        <span className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
          {heading}
        </span>
        <p className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal">
          {details}
        </p>
      </div>
    </div>
  );
}

export default function OurWorkPart() {
  return (
    <section className="py-20 px-8 bg-gradient-to-tr from-blue-500/50 dark:from-blue-500/65 via-purple-500/50 dark:via-purple-500/65 to-pink-500/50 dark:to-pink-500/65 bg-blend-overlay">
      <div className="mx-auto container">
        <SectionTitle
          className="font-bangla"
          title="আমাদের কার্যক্রমের একাংশ"
        />
        <div className="container mx-auto mt-10 grid grid-cols-1 gap-10 lg:grid-cols-4">
          {ourWorkPart.map(({ heading, image, details }, index) => (
            <CardReview
              key={index}
              heading={heading}
              image={image}
              details={details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

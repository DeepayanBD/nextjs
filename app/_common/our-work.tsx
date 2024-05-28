import SectionTitle from "@/app/components/section-title";

interface ReviewCardPropsType {
  id: string;
  heading: string;
  details: string;
}

export function CardReview({ id, heading, details }: ReviewCardPropsType) {
  return (
    <div className="relative flex flex-col mt-6 px-4 rounded-xl md:w-96">
      <p className="font-bold mb-2 mt-1 text-black dark:text-white">{id}</p>
      <h3 className="text-3xl font-bold text-black dark:text-white">
        {heading}
      </h3>
      <p className="font-medium mt-3 text-blue-950 dark:text-white">
        {details}
      </p>
    </div>
  );
}

const CONTENTS = [
  {
    id: "01.",
    heading: "ক্ষুধা নিবারণে",
    details:
      "ক্ষুধামুক্ত বাংলাদেশ গড়ার প্রত্যয়ে প্রতি সপ্তাহে আমরা বিনামূল্যে খাদ্য বিতরণ করে থাকি। পাশাপাশি শিশুদের পড়ালেখায় মনোযোগী করার লক্ষে বিদ্যালয়ে মধ্যাহ্নভোজ এর আয়োজন করে শিক্ষার্থীদের ঝড়ে পড়া থেকে বিরত রাখতে আমরা ভূমিকা রেখে চলছি এক সোনালী ক্ষুধামুক্ত বাংলাদেশ বিনির্মানে।",
  },
  {
    id: "02.",
    heading: "মানবতার সেবায়",
    details:
      "তথ্য পাওয়া সাপেক্ষে আমরা অসহায় রোগীদের হাসপাতাল ও চিকিৎসার সমস্ত ব্যায় বহন করে থাকি। পাশাপাশি গ্রাম- ঘনবসতি এলাকায় সন্মাষিক মেডিকেল ক্যাম্প আয়োজন করে থাকি একটি নির্মল ও সুস্থ বাংলাদেশ এর লক্ষে।",
  },
  {
    id: "03.",
    heading: "কর্মসংস্থানে",
    details:
      "দীপায়ন এর একটি ক্ষুদ্র অঙ্গসংস্থান WooderBD এর মাধ্যমে আমরা সৃষ্টি করেছি নতুন কর্মসংস্থানের ব্যবস্থা। উন্নত প্রশিক্ষণ ও নতুন ব্যবসা প্রতিষ্ঠান শুরু করার জন্য সমস্ত সহায়তা সহ আমরা হাসি ফুটিয়েছি ১৪৮ টি পরিবারে। দিনবদলের অগ্রযাত্রায় এমন ভূমিকা রাখতে আমরা বদ্ধপরিকর। বর্তমানে ৩৬ জন কর্মী নিয়ে ক্ষুদ্র কুটির শিল্প ও কর্মসংস্থান এর উন্নয়নে অবদান রেখে চলেছে WooderBD. ",
  },
  {
    id: "04.",
    heading: "পথশিশুদের শিক্ষায়",
    details:
      "পথশিশুদের জন্য সাপ্তাহিক ছুটির দিন সহ সপ্তাহে চার দিন মানবতার স্কুল নিয়ে কাজ করছে দীপায়ন, এবং একটি স্থায়ী বিদ্যালয় স্থাপন এর জন্য অনুমোদন ও অনুদান গ্রহণ চলছে।  স্কুল এর ক্লাস শেষে সকল পথশিশুদের জন্য থাকছে পুষ্টিকর খাবার এর ব্যবস্থা। প্রত্যেক শিশুর একটা নিরাপদ ভবিষ্যত এর জন্য আমরা নিরলসভাবে কাজ করে চলেছি।  ",
  },
  {
    id: "05.",
    heading: "নিরাপদ পানির ব্যাবস্থায়",
    details:
      "গ্রীষ্মকালীন সময়ে তীব্র পানি সংকট দেখা দিলে সুবিধাবঞ্চিত জনগোষ্ঠীর কাছে সুপেয় পানি পৌঁছে দেয়া আমাদের পরিচালিত কার্যক্রম গুলোর মধ্যে একটি। পানি সংকট দূর করে অসহায় মানুষদের মুখে হাসি ফোটাতে পেরে আমরা আনন্দিত।",
  },
  {
    id: "06.",
    heading: "দুস্থ পুনর্বাসন",
    details:
      "সব বয়সের সকল অসহায় মানুষদের পাশে দীপায়ন শুরু থেকেই কাজ করে যাচ্ছে। আমাদের পুনর্বাসন প্রকল্পের আওতায় আমরা ১৯ জন অসহায় মানুষকে পুনর্বাসিত করতে পেরেছি। পুনর্বাসন প্রকল্প এখন সাংগঠনিক সক্ষমতা বৃদ্ধি পর্যায়ে রয়েছে। এ ছাড়াও আমরা পথশিশু পুনর্বাসন ও বৃদ্ধাশ্রম সংস্কার প্রকল্প নিয়ে কাজ করছি।",
  },
];

export default function OurWork() {
  return (
    <section className="font-bangla py-20 px-8 bg-white dark:bg-slate-950">
      <div className="mx-auto container">
        <SectionTitle title="আমাদের কার্যক্রম" />
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-y-6">
          {CONTENTS.map(({ id, heading, details }, index) => (
            <CardReview
              key={index}
              id={id}
              heading={heading}
              details={details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

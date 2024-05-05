import Image from "next/image";
import Iconify from "@/app/components/Iconify";
import contactImage from "@/app/assets/images/message.png";
import bgImage from "@/app/assets/uploads/WhatsApp-Image-2022-03-29-at-11.04.46-AM.jpeg";

const contacts = [
  {
    icon: "uil:phone",
    title: "Phone",
    details: `If you have an inquiry please call us in necessary.`,
    link: "tel:+8801799015558",
    content: "+880 17990-15558",
  },
  {
    icon: "uil:envelope",
    title: "Email",
    details: `You can contact throught e-mail for help and support.`,
    link: "mailto:saifullah71tv@gmail.com",
    content: "saifullah71tv@gmail.com",
  },
  {
    icon: "uil:map-marker",
    title: "Location",
    details:
      "8/7A Borobag (Azmat Garments Opposite Road), Mirpur - 2, Dhaka - 1216, Bangladesh",
    link: "https://maps.app.goo.gl/PTpdsMZ8dKH4inxh8",
    content: "View on Google map",
  },
];

export default function ContactView() {
  return (
    <>
      <section className="font-bangla min-h-full relative flex flex-1 shrink-0 items-center justify-center overflow-hidden  bg-gray-100  py-16 md:py-20 xl:py-48">
        <Image
          src={bgImage}
          priority
          alt="Photo by Fakurian Design"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mix-blend-multiply opacity-95"></div>

        <div className="relative flex flex-col text-start p-4 mx-14">
          <p className="mb-4  sm:text-3xl text-white text-base ">
            একটি মানবিক পৃথিবীর জন্য
          </p>
          <hr className="my-2 w-2/6 md:mb-8 h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-600 dark:via-red-600 to-transparent" />

          <h1 className="mb-8  sm:text-4xl font-bold text-white text-base md:mb-12 md:text-4xl">
            দুঃখে যাদের জীবন কাটে কষ্টে যাদের রাত, তাদের জন্য বাড়িয়ে দেই
            ভালোবাসার হাত।
          </h1>
        </div>
      </section>

      <section className="relative container px-5 xl:px-52 mx-auto md:py-24 py-16 ">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {contacts.map(({ content, details, icon, link, title }, index) => (
              <div key={index} className="text-center px-6 mt-6">
                <div className="size-20 bg-blue-600/10 text-blue-600 rounded-xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                  <Iconify icon={icon} />
                </div>

                <div className="content mt-7">
                  <h5 className="title h5 text-xl font-medium">{title}</h5>
                  <p className="text-slate-600 dark:text-slate-300 mt-3">
                    {details}
                  </p>

                  <div className="mt-5">
                    <a
                      href={link}
                      className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-blue-600 hover:text-blue-700 dark:hover:text-white after:bg-blue-500 duration-500 ease-in-out"
                    >
                      {content}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <Image src={contactImage} alt="" width={600} />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-blue-600/10 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch !
                  </h3>

                  <form className="mt-8 space-y-4 dark:text-black">
                    <input
                      required
                      type="text"
                      placeholder="Name"
                      className="w-full rounded-md py-3 px-4 text-sm  border-none dark:bg-slate-300"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md py-3 px-4 text-sm  border-none dark:bg-slate-300"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Subject"
                      className="w-full rounded-md py-3 px-4 text-sm  border-none dark:bg-slate-300"
                    />
                    <textarea
                      required
                      placeholder="Message"
                      rows={6}
                      className="w-full rounded-md px-4 text-sm pt-3  border-none dark:bg-slate-300"
                    ></textarea>

                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-full justify-center flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        fill="#fff"
                        className="mr-2"
                        viewBox="0 0 548.244 548.244"
                      >
                        <path
                          fillRule="evenodd"
                          d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                          clipRule="evenodd"
                          data-original="#000000"
                        />
                      </svg>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d456.3194012156227!2d90.36215529172549!3d23.798848253602436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1714939046029!5m2!1sen!2sbd"
              style={{ border: 0 }}
              className="w-full h-[500px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

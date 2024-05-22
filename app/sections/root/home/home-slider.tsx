import Image from "next/image";
import { homeSlider } from "@/constants/homeSlider";

export default function HomeSlider() {
  return (
    <section className="py-16 px-8 mx-auto bg-gradient-to-tr from-pink-500/40 via-purple-500/40 to-blue-500/40 mix-blend-normal ">
      <div className="mx-auto container ">
        <div className="slider">
          <div className="slide-track">
            {homeSlider.map((image, index) => (
              <div key={image.src + index}>
                <Image
                  className="rounded-2xl border-blue-600 border-2 h-96 w-72 object-cover slide"
                  src={image}
                  height={384}
                  width={288}
                  quality={100}
                  alt={image.src}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

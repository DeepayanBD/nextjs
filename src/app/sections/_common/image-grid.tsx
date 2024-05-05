import Image, { StaticImageData } from "next/image";

export default function ImageGrid({
  images,
}: {
  images: StaticImageData[] | string[];
}) {
  return (
    <section className="py-16 px-8 bg-gradient-to-r from-blue-500/50 dark:from-blue-500/65 via-purple-500/50 dark:via-purple-500/65 to-pink-500/50 dark:to-pink-500/65 bg-blend-overlay">
      <div className="mx-auto container ">
        <div className="py-6">
          <div className="grid max-sm:grid-cols-1 grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  className="h-auto max-w-full aspect-[4/3] rounded-lg"
                  width={400}
                  height={300}
                  src={image}
                  alt={typeof image === "string" ? image : image.src || ""}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

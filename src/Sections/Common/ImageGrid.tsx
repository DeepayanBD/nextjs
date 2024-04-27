export default function ImageGrid({ images }: { images: string[] }) {
    return (
        <section className="py-16 px-8 bg-gradient-to-r from-indigo-500/50 dark:from-indigo-500/65 via-purple-500/50 dark:via-purple-500/65 to-pink-500/50 dark:to-pink-500/65 bg-blend-overlay">
            <div className="mx-auto container ">
                <div className="py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((image) => (
                            <div key={image}>
                                <img
                                    className="h-auto max-w-full aspect-[4/3] rounded-lg"
                                    src={image}
                                    alt={image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function SectionTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className="text-center">
      <h2
        className={`font-bold text-4xl text-black dark:text-white ${className}`}
      >
        {title}
      </h2>
      <div className="flex justify-center items-center">
        <hr className="my-6 w-2/6  h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-600 dark:via-red-600 to-transparent " />
      </div>
    </div>
  );
}

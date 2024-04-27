import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { INewsItem } from "./types";

export default function NewsItem({ post }: { post: INewsItem }) {
    return (
        <>
            <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
                    <Link className="aspect-square" href={`/post/`}>
                        {post?.cover ? (
                            <img
                                src={post?.cover}
                                alt={"Thumbnail"}
                                className="object-cover transition-all aspect-square"
                                // fill
                                sizes="(max-width: 768px) 30vw, 33vw"
                            />
                        ) : (
                            <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                                <PhotoIcon />
                            </span>
                        )}
                    </Link>
                </div>

                <div className="">
                    <div>
                        <div className="flex gap-3 mt-4">
                            <Link href={`/category/`}>
                                <span className="inline-block text-xs font-medium tracking-wider uppercase text-blue-700">
                                    {"Technology"}
                                </span>
                            </Link>
                        </div>
                        <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                            <Link href={`/post/`}>
                                <span className="bg-gradient-to-r from-red-200 dark:from-blue-800 to-red-100 dark:to-blue-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                                    {post.title}
                                </span>
                            </Link>
                        </h2>

                        {/* <div className="hidden">
                            {post.excerpt && (
                                <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                                    <Link href={`/post/`}>{post.excerpt}</Link>
                                </p>
                            )}
                        </div> */}

                        <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                            <Link href={`/author/${post?.author?.name}`}>
                                <div className="flex items-center gap-3">
                                    <div className="relative h-5 w-5 flex-shrink-0">
                                        {post?.author?.image && (
                                            <img
                                                src={post?.author?.image}
                                                alt={post?.author?.name}
                                                className="rounded-full object-cover aspect-square"
                                                // fill
                                                sizes="20px"
                                            />
                                        )}
                                    </div>
                                    <span className="truncate text-sm">
                                        {post?.author?.name}
                                    </span>
                                </div>
                            </Link>
                            <span className="text-xs text-gray-300 dark:text-gray-600">
                                &bull;
                            </span>
                            <time
                                className="truncate text-sm"
                                dateTime={post.created_at}
                            >
                                {format(
                                    parseISO(post.created_at),
                                    "MMMM dd, yyyy"
                                )}
                            </time>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

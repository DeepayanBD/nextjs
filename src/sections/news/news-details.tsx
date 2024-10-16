import Link from "next/link";
import Image from "next/image";

import { Container } from "@mui/material";

import { fDate, formatStr } from "src/utils/format-time";

import type { INewsItem } from "../../types/news";

export function PostDetails({ post }: { post: INewsItem }) {
  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <span className="inline-block text-xs font-medium tracking-wider uppercase text-bl">
              post.catego
            </span>
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Link href="/author/">
                  <Image
                    src={post?.author?.image}
                    alt={post?.author?.name}
                    className="rounded-full object-cover"
                    height={40}
                    width={40}
                    sizes="40px"
                  />
                </Link>
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  <Link href="/author/">{post.author.name}</Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post.created_at}
                  >
                    {fDate(post.created_at, formatStr.date)}
                  </time>
                  <span>· {post.est_reading_time || "5"} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        <Image
          src={post?.cover}
          alt={
            typeof post?.cover === "string"
              ? post?.cover
              : post?.cover.src || "Thumbnail"
          }
          loading="eager"
          // fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {post.body}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
            >
              ← View all posts
            </Link>
          </div>
          {post.author && (
            <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
              <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
                <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
                  <Link href="/author/">
                    <Image
                      src={post?.author?.image}
                      alt={post?.author?.name}
                      className="rounded-full object-cover"
                      // fill
                      sizes="96px"
                    />
                  </Link>
                </div>
                <div>
                  <div className="mb-3">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                      About {post?.author.name}
                    </h3>
                  </div>
                  <div>{post?.author?.bio}</div>
                  <div className="mt-3">
                    <Link
                      href={`/author/${post?.author.name}`}
                      className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 dark:text-blue-500 "
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>
      </Container>
    </>
  );
}

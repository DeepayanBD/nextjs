import type { StaticImageData } from "next/image";

export type INewsAuthor = {
    name: string;
    image: StaticImageData | string;
    role: string;
    quotes: string;
    created_at: Date;
    bio?: string;
}

export type INewsItem = {
    id: string;
    title: string;
    slug: string;
    body: string;
    est_reading_time: string;
    cover: StaticImageData | string;
    description: string;
    created_at: string;
    author: INewsAuthor;
};
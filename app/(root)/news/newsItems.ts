import { INewsAuthor, INewsItem } from "@/app/types/news";

import imageAuthorOne from '@/public/assets/logo/maskable-icon.png'

import imageNewsOne from '@/public/assets/uploads/news/05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.avif'
import imageNewsTwo from '@/public/assets/uploads/news/2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.avif'
import imageNewsThree from '@/public/assets/uploads/news/12301f301772ed723724302aef7c70c5c1c0151f-4500x8000.avif'
import imageNewsFour from '@/public/assets/uploads/news/2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.avif'
import imageNewsFive from '@/public/assets/uploads/news/b7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.avif'
import imageNewsSix from '@/public/assets/uploads/news/a5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.avif'

const newsAuthor: INewsAuthor =
{
    name: "Deepayan",
    image: imageAuthorOne,
    role: "Reporter",
    quotes: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    created_at: new Date("2022-02-01"),
    bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

const newsItems: INewsItem[] = [
    {
        id: "1",
        title: "Architectural Engineering Wonders of the modern era for your Inspiration",
        slug: "breaking-news",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        est_reading_time: "5 min",
        cover: imageNewsOne,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        created_at: "2024-04-27",
        author: newsAuthor
    },
    {
        id: "2",
        title: "5 Effective Brain Recharging Activities No One is Talking About",
        slug: "feature-story",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        est_reading_time: "10 min",
        cover: imageNewsTwo,
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: "2024-04-26",
        author: newsAuthor
    },
    {
        id: "3",
        title: "14 Architectural Design Ideas for a Spacious Interior",
        slug: "feature-story",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        est_reading_time: "10 min",
        cover: imageNewsThree,
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: "2024-04-26",
        author: newsAuthor
    },
    {
        id: "4",
        title: "Every Next Level of Your Life Will Demand a Different You",
        slug: "feature-story",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        est_reading_time: "10 min",
        cover: imageNewsFour,
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: "2024-04-26",
        author: newsAuthor
    },
    {
        id: "5",
        title: "This Bread Pudding Will Give You All the Fall Feels",
        slug: "feature-story",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        est_reading_time: "10 min",
        cover: imageNewsFive,
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: "2024-04-26",
        author: newsAuthor
    },
    {
        id: "6",
        title: "I Moved Across the Country and Never Looked Back",
        slug: "feature-story",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        est_reading_time: "10 min",
        cover: imageNewsSix,
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: "2024-04-26",
        author: newsAuthor
    },
];

export { newsItems, newsAuthor }
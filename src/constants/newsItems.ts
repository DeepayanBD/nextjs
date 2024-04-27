import { INewsAuthor, INewsItem } from "@/Sections/News/types";

const newsAuthors: INewsAuthor[] = [
    {
        name: "John Doe",
        image: "/assets/uploads/author/4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.avif",
        role: "Editor",
        quotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        created_at: new Date("2022-01-01"),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Jane Smith",
        image: "/assets/uploads/author/4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.avif",
        role: "Reporter",
        quotes: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: new Date("2022-02-01"),
        bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];

const newsItems: INewsItem[] = [
    {
        id: "1",
        title: "Architectural Engineering Wonders of the modern era for your Inspiration",
        slug: "breaking-news",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        est_reading_time: "5 min",
        cover: "/assets/uploads/news/05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.avif",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        created_at: "2024-04-27",
        author: newsAuthors[0] // Assuming the first author is the author of this news item
    },
    {
        id: "2",
        title: "5 Effective Brain Recharging Activities No One is Talking About",
        slug: "feature-story",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        est_reading_time: "10 min",
        cover: "/assets/uploads/news/2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.avif",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: "2024-04-26",
        author: newsAuthors[1] // Assuming the second author is the author of this news item
    },
    {
        id: "3",
        title: "14 Architectural Design Ideas for a Spacious Interior",
        slug: "feature-story",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        est_reading_time: "10 min",
        cover: "/assets/uploads/news/12301f301772ed723724302aef7c70c5c1c0151f-4500x8000.avif",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: "2024-04-26",
        author: newsAuthors[1] // Assuming the second author is the author of this news item
    },
    {
        id: "4",
        title: "Every Next Level of Your Life Will Demand a Different You",
        slug: "feature-story",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        est_reading_time: "10 min",
        cover: "/assets/uploads/news/2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.avif",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: "2024-04-26",
        author: newsAuthors[1] // Assuming the second author is the author of this news item
    },
    {
        id: "5",
        title: "This Bread Pudding Will Give You All the Fall Feels",
        slug: "feature-story",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        est_reading_time: "10 min",
        cover: "/assets/uploads/news/b7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.avif",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: "2024-04-26",
        author: newsAuthors[1] // Assuming the second author is the author of this news item
    },
    {
        id: "6",
        title: "I Moved Across the Country and Never Looked Back",
        slug: "feature-story",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        est_reading_time: "10 min",
        cover: "/assets/uploads/news/a5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.avif",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        created_at: "2024-04-26",
        author: newsAuthors[1] // Assuming the second author is the author of this news item
    },
];

export { newsItems, newsAuthors }
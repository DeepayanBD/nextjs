import Container from "@/Components/Container";
import { MainLayout } from "@/Layouts/Main";
import NewsItem from "@/Sections/News/NewsItem";
import { newsItems } from "@/constants/newsItems";
import { Head } from "@inertiajs/react";

export default function NewsList() {
    return (
        <MainLayout>
            <Head title="News" />
            <Container className="relative px-5 xl:px-64 mx-auto md:py-24 py-16">
                <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 px-5  mx-auto">
                    {newsItems.map((news) => (
                        <NewsItem post={news} />
                    ))}
                </div>
            </Container>
        </MainLayout>
    );
}

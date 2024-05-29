import Container from "@/app/components/container";
import NewsItem from "./news-item";
import { newsItems } from "./newsItems";

export default function HomeListView() {
  return (
    <Container className="relative  px-0 xl:px-64 mx-auto md:py-24 py-16">
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 px-5  mx-auto">
        {newsItems.map((news) => (
          <NewsItem post={news} key={news.id} />
        ))}
      </div>
    </Container>
  );
}

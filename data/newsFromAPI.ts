import axios from "axios";
import { NewsItem } from "@/types";

export const newsCategories: string[] = [
  "Home",
  "Business",
  "Sports",
  "Entertainment",
  "Technology",
  "Politics",
  "World",
  "Science",
];


export async function fetchNewsAPI() {


  const res = await axios.get(
    `https://newsapi.org/v2/everything?q=india&language=en&apiKey=${process.env.API_KEY}`
  );

  const articles = res.data.articles || [];

  return articles.map((a: any, index: number): NewsItem => {
    const dateObj = new Date(a.publishedAt);

    return {
      id: index + 1,
      title: a.title,
      image: a.urlToImage || "/placeholder.jpg",
      date: dateObj.toDateString(),
      time: dateObj.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      category: a.source?.name || "General",
      excerpt: a.description || "",
      content: a.content || "",
    };
  });
}


export function generateCategories(news: NewsItem[]) {
  const categories = Array.from(
    new Set(news.map((n) => n.category))
  );

  return ["Home", ...categories];
}

export function generateTrending(news: NewsItem[]) {
  return news
    .slice(0, 12)
    .map((n) => n.title.split(" ").slice(0, 2).join(" "));
}

import { useState } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import TrendingTopics from "@/components/common/TrendingTopics";
import NewsGrid from "@/components/news/NewsGrid";
import FeaturedNews from "@/components/news/FeaturedNews";
import NewsCard from "@/components/news/NewsCard";
import {
  fetchNewsAPI,
  generateTrending,
  generateCategories,
} from "@/data/newsFromAPI";

export async function getServerSideProps() {
  const topNews = await fetchNewsAPI();

  const dynamicCategories = generateCategories(topNews);

  const trendingTopics = generateTrending(topNews);

  return {
    props: {
      topNews,
      trendingTopics,
      dynamicCategories,
    },
  };
}

export default function Home({
  topNews,
  trendingTopics,
  dynamicCategories,
}: {
  topNews: any[];
  trendingTopics: string[];
  dynamicCategories: string[];
}) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Hindustan - Latest News & Updates</title>
        <meta
          name="description"
          content="Stay updated with the latest news from India and around the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
        <Navigation
          isOpen={menuOpen}
          closeMenu={() => setMenuOpen(false)}
          categories={dynamicCategories}
        />

        <TrendingTopics topics={trendingTopics} />

        <main className=" mx-auto px-4 py-8 min-h-screen">
          <section className="mb-8">
            <div className="bg-linear-to-r from-red-600 to-red-700 text-white p-6 rounded-lg mb-6">
              <h2 className="text-3xl font-bold mb-2">Breaking News</h2>
              <p className="text-red-100">
                Stay updated with the latest news from around the world
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4">
                Top Hindi News
              </h2>
              <button className="text-red-600 hover:text-red-700 font-medium transition-colors">
                View All →
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-full lg:w-3/4 shrink-0">
                <div className="space-y-4 sm:space-y-6">
                  {topNews.slice(0, 3).map((news: any) => (
                    <FeaturedNews key={news.id} news={news} />
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-3 sm:gap-4 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:max-h-[970px] pb-2 lg:pb-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <div className="flex flex-row lg:flex-col gap-3 sm:gap-4 min-w-max lg:min-w-0 lg:w-full">
                  {topNews.slice(1, 5).map((news: any) => (
                    <div
                      className="w-72 sm:w-80 lg:w-full shrink-0"
                      key={news.id}
                    >
                      <NewsCard news={news} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <NewsGrid news={topNews} />
            </div>
          </section>

          <section className="my-8 ">
            <div className="bg-gray-200 rounded-lg p-8 text-center">
              <p className="text-gray-500">Advertisement Space</p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

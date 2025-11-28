import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import TrendingTopics from '@/components/common/TrendingTopics';
import NewsGrid from '@/components/news/NewsGrid';
import FeaturedNews from '@/components/news/FeaturedNews';
import NewsCard from '@/components/news/NewsCard';
import { topNews, trendingTopics } from '@/data/mockData';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Hindustan - Latest News & Updates</title>
        <meta name="description" content="Stay updated with the latest news from India and around the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
        <Navigation isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
        <TrendingTopics topics={trendingTopics} />

        <main className="container mx-auto px-4 py-8">
          {/* Featured Section */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg mb-6">
              <h2 className="text-3xl font-bold mb-2">Breaking News</h2>
              <p className="text-red-100">
                Stay updated with the latest news from around the world
              </p>
            </div>
          </section>

          {/* Top News Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4">
                Top Hindi News
              </h2>
              <button className="text-red-600 hover:text-red-700 font-medium transition-colors">
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <FeaturedNews news={topNews[0]} />
              </div>
              
              <div className="space-y-6">
                {topNews.slice(1, 3).map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </div>

            <NewsGrid news={topNews} />
          </section>

          {/* Advertisement Space */}
          <section className="my-8">
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
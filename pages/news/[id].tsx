import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, Share2 } from 'lucide-react';
import { topNews } from '@/data/mockData';

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // In a real app, fetch news by ID
  const news = topNews.find((item) => item.id === Number(id)) || topNews[0];

  return (
    <>
      <Head>
        <title>{news.title} - Hindustan News</title>
        <meta name="description" content={news.excerpt || news.title} />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
        <Navigation isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />

        <main className="container mx-auto px-4 py-8">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-96 object-cover"
            />
            
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full mb-4">
                {news.category}
              </span>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {news.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-gray-600 mb-6 pb-6 border-b">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {news.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {news.time}
                </span>
                <button className="flex items-center text-red-600 hover:text-red-700 transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {news.excerpt || 'Full article content would go here. This is a placeholder for the actual news content.'}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
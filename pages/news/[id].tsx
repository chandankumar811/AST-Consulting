import Head from "next/head";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, Share2 } from "lucide-react";
import { fetchNewsAPI } from "@/data/newsFromAPI";
import { useState } from "react";

export default function NewsDetail({ news }: { news: any }) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!news) {
    return (
      <div className="p-10 text-center text-gray-500">
        Article not found.
      </div>
    );
  }

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
          <article className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-96 object-cover"
            />

            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-red-600 text-white rounded-full text-sm mb-4">
                {news.category}
              </span>

              <h1 className="text-4xl font-bold mb-4">{news.title}</h1>

              <div className="flex items-center space-x-6 text-gray-600 mb-6 pb-6 border-b">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {news.date}
                </span>

                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {news.time}
                </span>

                <button className="flex items-center text-red-600 hover:text-red-700 transition">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg mb-4">{news.excerpt}</p>

                <p className="text-lg mb-4">
                  {news.content?.replace(/\[\+\d+ chars\]/, "") ||
                    "Full article content is not provided by the API."}
                </p>

                <a
                  href={news.url}
                  target="_blank"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Read full article →
                </a>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  const articles = await fetchNewsAPI();

  const news = articles[Number(id)] || null;

  return {
    props: {
      news,
    },
  };
}

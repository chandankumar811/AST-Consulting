import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import NewsGrid from "@/components/news/NewsGrid";

import { fetchNewsAPI } from "@/data/newsFromAPI";

export default function CategoryPage({ filteredNews }: { filteredNews: any[] }) {
  const router = useRouter();
  const { category } = router.query;
  const [menuOpen, setMenuOpen] = useState(false);

  const categoryName =
    typeof category === "string" ? category.replace("-", " ") : "news";

  return (
    <>
      <Head>
        <title>{categoryName} - Hindustan News</title>
        <meta
          name="description"
          content={`Latest ${categoryName} news and updates`}
        />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
        <Navigation isOpen={menuOpen} closeMenu={() => setMenuOpen(false)}  />

        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 capitalize border-l-4 border-red-600 pl-4">
            {categoryName} News
          </h1>

          <NewsGrid news={filteredNews} />

          {filteredNews.length === 0 && (
            <p className="text-gray-600 mt-6">
              No news available in this category.
            </p>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

// ⭐ Server Side Fetching — always fresh news
export async function getServerSideProps(context: any) {
  const { category } = context.params;
  const categoryName = category.replace("-", " ");

  const topNews = await fetchNewsAPI();

  const filteredNews = topNews.filter(
    (item: any) =>
      item.category?.toLowerCase() === categoryName.toLowerCase()
  );

  return {
    props: { filteredNews },
  };
}

import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import NewsGrid from '@/components/news/NewsGrid';
import { topNews } from '@/data/mockData';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const categoryName = typeof category === 'string' 
    ? category.replace('-', ' ')
    : 'News';

  return (
    <>
      <Head>
        <title>{categoryName} - Hindustan News</title>
        <meta name="description" content={`Latest ${categoryName} news and updates`} />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
        <Navigation isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />

        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 capitalize border-l-4 border-red-600 pl-4">
            {categoryName} News
          </h1>
          <NewsGrid news={topNews} />
        </main>

        <Footer />
      </div>
    </>
  );
}
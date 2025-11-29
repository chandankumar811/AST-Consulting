import React from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { NavigationProps } from '@/types';
import { newsCategories } from '@/data/newsFromAPI';

const Navigation: React.FC<NavigationProps> = ({ isOpen, closeMenu, categories = newsCategories }) => {
  const router = useRouter();
  const currentPath = router.pathname; 
  const currentSlug = router.asPath.replace("/", ""); 

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
      
      <nav className={`
        fixed lg:static top-0 left-0 h-full lg:h-auto w-64 lg:w-full
        bg-white lg:bg-gray-50 shadow-lg lg:shadow-none
        transform lg:transform-none transition-transform duration-300 z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="lg:hidden flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={closeMenu} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="lg:container lg:mx-auto lg:px-4">
          <ul className="flex flex-col lg:flex-row lg:space-x-1 overflow-x-auto py-3">
            {newsCategories.map((category: string, index: number) => {
              
              const slug = category.toLowerCase().replace(" ", "-");
              const isActive = 
                (index === 0 && currentPath === "/") || 
                currentSlug === slug;

              return (
                <li key={index}>
                  <Link
                    href={index === 0 ? '/' : `/${slug}`}
                    onClick={closeMenu}
                    className={`
                      block px-4 py-3 lg:py-2 text-sm font-medium transition-colors
                      ${
                        isActive 
                          ? "text-red-600 border-b-2 border-red-600" 
                          : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                      }
                    `}
                  >
                    {category}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

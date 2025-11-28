import React from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { NavigationProps } from '@/types';
import { newsCategories } from '@/data/mockData';

const Navigation: React.FC<NavigationProps> = ({ isOpen, closeMenu }) => {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
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
            {newsCategories.map((category: string, index: number) => (
              <li key={index}>
                <Link
                  href={index === 0 ? '/' : `/${category.toLowerCase().replace(' ', '-')}`}
                  className={`
                    block px-4 py-3 lg:py-2 text-sm font-medium
                    hover:bg-red-50 hover:text-red-600 transition-colors
                    ${index === 0 ? 'text-red-600 border-b-2 lg:border-b-2 border-red-600' : 'text-gray-700'}
                  `}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
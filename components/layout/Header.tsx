import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { HeaderProps } from '@/types';

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className=" mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <button onClick={toggleMenu} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <h1 className="text-2xl font-bold text-red-600">Hindustan</h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm text-gray-700 hover:text-red-600 transition-colors">
              Photo
            </button>
            <button className="text-sm text-gray-700 hover:text-red-600 transition-colors">
              Video
            </button>
            <button className="text-sm text-gray-700 hover:text-red-600 transition-colors">
              E-paper
            </button>
            <button className="text-sm text-gray-700 hover:text-red-600 transition-colors">
              Sign in
            </button>
          </div>

          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="lg:hidden"
            aria-label="Toggle search"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>

        {searchOpen && (
          <div className="pb-3">
            <input
              type="text"
              placeholder="Search news..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              aria-label="Search"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
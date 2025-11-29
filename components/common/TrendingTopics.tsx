import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TrendingTopicsProps } from '@/types';

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ topics }) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const scroll = (direction: 'left' | 'right'): void => {
    const container = document.getElementById('trending-container');
    const scrollAmount = 200;
    
    if (container) {
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      container.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="bg-white py-4 border-b">
      <div className=" mx-auto px-4">
        <div className="flex items-center">
          <button 
            onClick={() => scroll('left')}
            className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div 
            id="trending-container"
            className="flex-1 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex space-x-3">
              {topics.map((topic, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-100 hover:bg-red-100 text-sm rounded-full whitespace-nowrap transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => scroll('right')}
            className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;
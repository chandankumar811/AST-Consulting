import React from 'react';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { NewsCardProps } from '@/types';

const NewsCard: React.FC<NewsCardProps> = ({ news, featured = false }) => {
  return (
    <Link href={`/news/${news.id}`}>
      <article className={`
        bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer
        ${featured ? 'md:flex md:space-x-4' : ''}
      `}>
        <div className={featured ? 'md:w-1/2' : ''}>
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-fit object-cover"
          />
        </div>
        
        <div className={`p-4 ${featured ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs rounded-full mb-2 w-fit">
            {news.category}
          </span>
          
          <h3 className={`font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors line-clamp-3 ${
            featured ? 'text-2xl' : 'text-lg'
          }`}>
            {news.title}
          </h3>
          
          {news.excerpt && featured && (
            <p className="text-gray-600 mb-3">{news.excerpt}</p>
          )}
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {news.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {news.time}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
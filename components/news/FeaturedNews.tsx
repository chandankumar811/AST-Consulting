import React from 'react';
import NewsCard from './NewsCard';
import { FeaturedNewsProps } from '@/types';

const FeaturedNews: React.FC<FeaturedNewsProps> = ({ news }) => {
  return (
    <div className="mb-6">
      <NewsCard news={news} featured={true} />
    </div>
  );
};

export default FeaturedNews;
import { Star, StarHalf } from 'lucide-react';
import React from 'react'

const Rating = ({rating}) => {
  return (
    <div className="relative">
      <div className="flex space-x-1">
        {rating && Array.from({ length: 5 }, (_, id) => (
          <Star fill="gray" strokeWidth={0} key={id} />
        ))}
      </div>
      <div className="flex space-x-1 absolute top-0">
        {Array.from({ length: Math.floor(rating) }, (_, id) => (
          <Star fill="yellow" strokeWidth={0} key={id} />
        ))}
        {rating % 1 >= 0.25 && rating % 1 < 0.75 && (
          <StarHalf fill="yellow" strokeWidth={0} />
        )}
      </div>
    </div>
  );
}

export default Rating
import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CustomerReviews = ({ reviews, averageRating, totalReviews }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  const filteredReviews = selectedFilter === 'all' 
    ? displayedReviews 
    : displayedReviews.filter(review => review.rating === parseInt(selectedFilter));

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl culinary-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-text-primary">Customer Reviews</h3>
          <p className="text-text-secondary">Real experiences from our customers</p>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={20} className="text-yellow-400 fill-current" />
            <span className="text-xl font-bold text-text-primary">{averageRating}</span>
          </div>
          <p className="text-sm text-text-secondary">{totalReviews} reviews</p>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <h4 className="font-semibold text-text-primary mb-3">Rating Breakdown</h4>
          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center space-x-3">
                <span className="text-sm font-medium text-text-secondary w-8">
                  {rating}★
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-text-secondary w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Filters */}
        <div className="lg:col-span-2">
          <h4 className="font-semibold text-text-primary mb-3">Filter Reviews</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === 'all' ?'bg-primary text-white' :'bg-surface text-text-secondary hover:bg-accent/20'
              }`}
            >
              All Reviews
            </button>
            {[5, 4, 3, 2, 1].map(rating => (
              <button
                key={rating}
                onClick={() => setSelectedFilter(rating.toString())}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === rating.toString()
                    ? 'bg-primary text-white' :'bg-surface text-text-secondary hover:bg-accent/20'
                }`}
              >
                {rating}★
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className="border border-border rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">
                    {review.customerName.charAt(0)}
                  </span>
                </div>
                <div>
                  <h5 className="font-medium text-text-primary">{review.customerName}</h5>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-text-secondary">
                      {formatDate(review.date)}
                    </span>
                  </div>
                </div>
              </div>
              {review.verified && (
                <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                  Verified Purchase
                </span>
              )}
            </div>

            <p className="text-text-secondary mb-3">{review.comment}</p>

            {/* Review Images */}
            {review.images && review.images.length > 0 && (
              <div className="flex space-x-2 mb-3">
                {review.images.map((image, index) => (
                  <div key={index} className="w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`Review image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Helpful Actions */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-primary transition-colors">
                <Icon name="ThumbsUp" size={14} />
                <span>Helpful ({review.helpfulCount})</span>
              </button>
              <button className="text-sm text-text-secondary hover:text-primary transition-colors">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {reviews.length > 3 && (
        <div className="text-center mt-6">
          <Button
            variant="outline"
            onClick={() => setShowAllReviews(!showAllReviews)}
          >
            {showAllReviews ? 'Show Less' : `Show All ${reviews.length} Reviews`}
            <Icon 
              name={showAllReviews ? "ChevronUp" : "ChevronDown"} 
              size={16} 
              className="ml-2" 
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;
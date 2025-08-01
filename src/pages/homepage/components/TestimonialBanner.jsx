import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialBanner = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      business: 'Kumar\'s Sandwich Corner',
      location: 'Mumbai',
      review: 'VEEBA mayo made my sandwich shop famous! Customers specifically ask for VEEBA now.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      dishImage: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop',
      transformation: 'From 50 to 200 sandwiches daily'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      business: 'Home Chef',
      location: 'Delhi',
      review: 'My family gatherings are incomplete without VEEBA sauces. The WOK TOK range is absolutely amazing!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      dishImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=400&h=300&fit=crop',
      transformation: 'Became the family\'s favorite cook'
    },
    {
      id: 3,
      name: 'Chef Arjun Mehta',
      business: 'Spice Garden Restaurant',
      location: 'Bangalore',
      review: 'VEEBA\'s consistency and quality help us maintain our restaurant standards. Our customers love the taste!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/56.jpg',
      dishImage: 'https://images.pixabay.com/photo/2017/06/16/11/38/sauce-2408952_1280.jpg?w=400&h=300&fit=crop',
      transformation: '4.8★ rating on food apps'
    },
    {
      id: 4,
      name: 'Meera Patel',
      business: 'Tiffin Service',
      location: 'Ahmedabad',
      review: 'VEEBA products have transformed my tiffin business. Kids especially love the sandwich spreads!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      dishImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      transformation: '300+ daily tiffin orders'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent mb-4">
            Taste Transformations
          </h2>
          <p className="text-xl text-text-secondary">
            Real stories from VEEBA lovers across India
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="bg-white rounded-2xl culinary-shadow overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Testimonial Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-lg lg:text-xl text-text-primary mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].review}"
                  </blockquote>

                  {/* Transformation Highlight */}
                  <div className="bg-accent/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={20} className="text-green-600" />
                      <span className="font-semibold text-green-800">
                        {testimonials[currentTestimonial].transformation}
                      </span>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-text-secondary">
                        {testimonials[currentTestimonial].business}
                      </p>
                      <p className="text-sm text-text-secondary flex items-center">
                        <Icon name="MapPin" size={14} className="mr-1" />
                        {testimonials[currentTestimonial].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dish Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={testimonials[currentTestimonial].dishImage}
                  alt="Customer's dish"
                  className="w-full h-full object-cover appetite-filter"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* VEEBA Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-primary">Made with VEEBA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white culinary-shadow rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            {/* Testimonial Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white culinary-shadow rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Scrolling Banner */}
          <div className="mt-12 overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 bg-white rounded-lg p-4 culinary-shadow min-w-80">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary text-sm">{testimonial.name}</h5>
                      <p className="text-xs text-text-secondary">{testimonial.business}</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-primary line-clamp-2">
                    "{testimonial.review}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TestimonialBanner;
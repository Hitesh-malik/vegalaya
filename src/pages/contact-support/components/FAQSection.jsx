import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      category: "Product Information",
      icon: "Package",
      faqs: [
        {
          id: 1,
          question: "What makes VEEBA products different from other brands?",
          answer: `VEEBA products are crafted with premium ingredients and traditional recipes that deliver authentic taste experiences. Our commitment to quality ensures consistent flavor profiles that enhance your culinary creations.\n\nEach product undergoes rigorous quality testing and is made with natural ingredients wherever possible, giving you the confidence to create memorable meals every time.`
        },
        {
          id: 2,
          question: "How should I store VEEBA products for maximum freshness?",
          answer: `Most VEEBA products should be stored in a cool, dry place away from direct sunlight. Once opened, refrigerate immediately and consume within the timeframe mentioned on the packaging.\n\nFor unopened products, check the 'Best Before' date and store according to package instructions. Proper storage ensures optimal taste and quality.`
        },
        {
          id: 3,
          question: "Are VEEBA products suitable for vegetarians?",
          answer: `Most VEEBA products are vegetarian-friendly, clearly marked with green dot symbols on packaging. We also offer vegan options for plant-based diets.\n\nAlways check the ingredient list and dietary symbols on product packaging for specific dietary requirements and allergen information.`
        }
      ]
    },
    {
      category: "Cooking Support",
      icon: "ChefHat",
      faqs: [
        {
          id: 4,
          question: "How much VEEBA sauce should I use in my recipes?",
          answer: `Start with 1-2 tablespoons per serving and adjust according to taste preference. VEEBA products are concentrated for maximum flavor impact.\n\nFor marinades, use 2-3 tablespoons per 500g of protein. For dips and spreads, use as desired. Remember, you can always add more, but you can't take it away!`
        },
        {
          id: 5,
          question: "Can I use VEEBA products for cooking or just as condiments?",
          answer: `VEEBA products are versatile and perfect for both cooking and as condiments. Use them as marinades, cooking sauces, sandwich spreads, or dipping sauces.\n\nMany of our products work excellently as base ingredients for curries, stir-fries, and pasta dishes. Check our recipe section for creative cooking ideas.`
        },
        {
          id: 6,
          question: "What if my recipe doesn't turn out as expected?",
          answer: `Don't worry! Our Recipe SOS team is here to help. Contact us immediately with details about what went wrong, and we'll provide step-by-step guidance to fix it.\n\nWe also offer cooking tips and alternative methods to achieve the desired results. Your culinary success is our priority.`
        }
      ]
    },
    {
      category: "Orders & Delivery",icon: "Truck",
      faqs: [
        {
          id: 7,
          question: "Do you offer bulk ordering for restaurants and cafes?",
          answer: `Yes! We provide special bulk pricing and dedicated support for food service businesses. Contact our B2B team for customized solutions.\n\nWe offer flexible payment terms, regular delivery schedules, and dedicated account managers for business customers. Minimum order quantities apply.`
        },
        {
          id: 8,
          question: "What are your delivery areas and timelines?",
          answer: `We deliver across major Indian cities with same-day delivery in metro areas and 2-3 day delivery in other locations.\n\nFree delivery on orders above ₹500. Track your order in real-time through our website or mobile app. Special arrangements available for urgent requirements.`
        }
      ]
    }
  ];

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="bg-white rounded-2xl culinary-shadow p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center">
          <Icon name="HelpCircle" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Frequently Asked Questions</h3>
          <p className="text-sm text-text-secondary">Quick answers to common queries</p>
        </div>
      </div>

      <div className="space-y-6">
        {faqCategories.map((category) => (
          <div key={category.category}>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name={category.icon} size={20} className="text-primary" />
              <h4 className="text-lg font-semibold text-text-primary">{category.category}</h4>
            </div>
            
            <div className="space-y-3">
              {category.faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-surface transition-colors"
                  >
                    <span className="font-medium text-text-primary pr-4">{faq.question}</span>
                    <Icon
                      name={openFAQ === faq.id ? "ChevronUp" : "ChevronDown"}
                      size={20}
                      className="text-text-secondary flex-shrink-0"
                    />
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-4 pb-4 border-t border-border">
                      <div className="pt-3 text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-accent/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-conversion-accent mt-0.5" />
          <div>
            <h5 className="font-medium text-text-primary mb-1">Still have questions?</h5>
            <p className="text-sm text-text-secondary">
              Can't find what you're looking for? Our culinary experts are ready to help you with personalized assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
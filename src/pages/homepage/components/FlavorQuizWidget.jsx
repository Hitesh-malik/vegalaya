import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FlavorQuizWidget = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What\'s your preferred spice level?",
      options: [
        { id: 'mild', label: 'Mild & Creamy', icon: 'Smile' },
        { id: 'medium', label: 'Medium Heat', icon: 'Zap' },
        { id: 'hot', label: 'Spicy & Bold', icon: 'Flame' }
      ]
    },
    {
      id: 2,
      question: "Which cuisine excites you most?",
      options: [
        { id: 'indian', label: 'Indian Classics', icon: 'Utensils' },
        { id: 'asian', label: 'Asian Fusion', icon: 'Coffee' },
        { id: 'continental', label: 'Continental', icon: 'Wine' }
      ]
    },
    {
      id: 3,
      question: "Your ideal meal time?",
      options: [
        { id: 'quick', label: 'Quick Bites', icon: 'Clock' },
        { id: 'elaborate', label: 'Elaborate Cooking', icon: 'ChefHat' },
        { id: 'party', label: 'Party Hosting', icon: 'Users' }
      ]
    }
  ];

  const flavorProfiles = {
    'mild-indian-quick': {
      title: 'The Comfort Seeker',
      description: 'You love familiar flavors that bring warmth and satisfaction.',
      products: ['Classic Mayo', 'Sandwich Spread', 'Mint Mayo'],
      color: 'bg-green-100 text-green-800'
    },
    'medium-asian-elaborate': {
      title: 'The Flavor Explorer',
      description: 'You enjoy discovering new tastes and cooking adventures.',
      products: ['WOK TOK Sauces', 'Schezwan Mayo', 'Thai Chili Sauce'],
      color: 'bg-orange-100 text-orange-800'
    },
    'hot-continental-party': {
      title: 'The Bold Entertainer',
      description: 'You love making a statement with intense, memorable flavors.',
      products: ['Peri Peri Mayo', 'Jalapeño Spread', 'Hot & Sweet Sauce'],
      color: 'bg-red-100 text-red-800'
    }
  };

  const handleAnswer = (optionId) => {
    const newAnswers = { ...answers, [currentQuestion]: optionId };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Generate result based on answers
      const profileKey = `${newAnswers[0]}-${newAnswers[1]}-${newAnswers[2]}`;
      const profile = flavorProfiles[profileKey] || flavorProfiles['mild-indian-quick'];
      setShowResult(profile);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setIsQuizStarted(false);
  };

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  if (!isQuizStarted) {
    return (
      <div className="bg-white rounded-2xl p-8 culinary-shadow max-w-md mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Sparkles" size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-3">
            Discover Your Flavor Profile
          </h3>
          <p className="text-text-secondary mb-6">
            Take our quick quiz to find VEEBA products perfectly matched to your taste preferences.
          </p>
          <Button onClick={startQuiz} size="lg" className="w-full">
            Start Flavor Quiz
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="bg-white rounded-2xl p-8 culinary-shadow max-w-md mx-auto">
        <div className="text-center">
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${showResult.color}`}>
            Your Flavor Profile
          </div>
          <h3 className="text-2xl font-bold text-primary mb-3">
            {showResult.title}
          </h3>
          <p className="text-text-secondary mb-6">
            {showResult.description}
          </p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-primary mb-3">Recommended Products:</h4>
            <div className="space-y-2">
              {showResult.products.map((product, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-sm">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>{product}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Button size="lg" className="w-full">
              Shop My Recommendations
            </Button>
            <Button variant="outline" onClick={resetQuiz} className="w-full">
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 culinary-shadow max-w-md mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-text-secondary">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <div className="flex space-x-1">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentQuestion ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-6">
          {questions[currentQuestion].question}
        </h3>
      </div>

      <div className="space-y-3">
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleAnswer(option.id)}
            className="w-full p-4 text-left border border-border rounded-lg hover:border-primary hover:bg-accent/10 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
                <Icon name={option.icon} size={20} />
              </div>
              <span className="font-medium">{option.label}</span>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={resetQuiz}
        className="mt-6 text-sm text-text-secondary hover:text-primary transition-colors duration-200"
      >
        Start Over
      </button>
    </div>
  );
};

export default FlavorQuizWidget;
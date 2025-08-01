import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const QuickContactCard = ({ icon, title, description, primaryAction, secondaryAction, bgColor = "bg-surface" }) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 culinary-shadow texture-hover`}>
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon name={icon} size={24} className="text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-text-primary mb-2">{title}</h3>
          <p className="text-sm text-text-secondary mb-4 leading-relaxed">{description}</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {primaryAction && (
              <Button
                variant="default"
                size="sm"
                iconName={primaryAction.icon}
                iconPosition="left"
                onClick={primaryAction.onClick}
                className="flex-1 sm:flex-none"
              >
                {primaryAction.label}
              </Button>
            )}
            
            {secondaryAction && (
              <Button
                variant="outline"
                size="sm"
                iconName={secondaryAction.icon}
                iconPosition="left"
                onClick={secondaryAction.onClick}
                className="flex-1 sm:flex-none"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickContactCard;
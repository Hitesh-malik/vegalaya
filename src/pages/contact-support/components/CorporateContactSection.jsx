import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CorporateContactSection = () => {
  const corporateContacts = [
    {
      department: "Business Partnerships",
      manager: "Amit Verma",
      email: "partnerships@veeba.com",
      phone: "+91 11 4567 8901",
      description: "Restaurant partnerships, bulk orders, and food service solutions",
      icon: "Handshake",
      availability: "Mon-Fri, 9:00 AM - 6:00 PM"
    },
    {
      department: "Quality Assurance",
      manager: "Dr. Sunita Rao",
      email: "quality@veeba.com",
      phone: "+91 11 4567 8902",
      description: "Product feedback, quality concerns, and improvement suggestions",
      icon: "Shield",
      availability: "Mon-Sat, 8:00 AM - 8:00 PM"
    },
    {
      department: "Export & International",
      manager: "Rajesh Gupta",
      email: "export@veeba.com",
      phone: "+91 11 4567 8903",
      description: "International distribution, export inquiries, and global partnerships",
      icon: "Globe",
      availability: "Mon-Fri, 10:00 AM - 7:00 PM"
    },
    {
      department: "Media & PR",
      manager: "Kavya Sharma",
      email: "media@veeba.com",
      phone: "+91 11 4567 8904",
      description: "Press inquiries, media partnerships, and brand collaborations",
      icon: "Megaphone",
      availability: "Mon-Fri, 9:30 AM - 6:30 PM"
    }
  ];

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="bg-white rounded-2xl culinary-shadow p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center">
          <Icon name="Building" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Corporate Contacts</h3>
          <p className="text-sm text-text-secondary">Dedicated support for business inquiries and partnerships</p>
        </div>
      </div>

      <div className="space-y-6">
        {corporateContacts.map((contact, index) => (
          <div key={index} className="border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={contact.icon} size={24} className="text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-text-primary">{contact.department}</h4>
                  <span className="text-xs bg-accent/20 text-primary px-2 py-1 rounded-full mt-1 sm:mt-0 self-start">
                    {contact.availability}
                  </span>
                </div>
                
                <p className="text-sm font-medium text-text-secondary mb-2">{contact.manager}</p>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">{contact.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Mail"
                    iconPosition="left"
                    onClick={() => handleEmailClick(contact.email)}
                    className="flex-1 sm:flex-none"
                  >
                    {contact.email}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Phone"
                    iconPosition="left"
                    onClick={() => handlePhoneClick(contact.phone)}
                    className="flex-1 sm:flex-none"
                  >
                    {contact.phone}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Corporate Information */}
      <div className="mt-8 p-6 bg-surface rounded-lg">
        <h4 className="text-lg font-semibold text-text-primary mb-4">Corporate Information</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-text-primary mb-2">Head Office</h5>
            <p className="text-sm text-text-secondary leading-relaxed">
              VEEBA Foods Pvt. Ltd.<br />
              Plot No. 123, Sector 18<br />
              Gurgaon, Haryana - 122015<br />
              India
            </p>
          </div>
          
          <div>
            <h5 className="font-medium text-text-primary mb-2">Manufacturing Unit</h5>
            <p className="text-sm text-text-secondary leading-relaxed">
              VEEBA Manufacturing Facility<br />
              Industrial Area, Phase 2<br />
              Baddi, Himachal Pradesh - 173205<br />
              India
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span>ISO 22000:2018 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Leaf" size={16} />
              <span>FSSAI Licensed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={16} />
              <span>Pan-India Distribution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateContactSection;
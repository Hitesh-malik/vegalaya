import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const inquiryTypes = [
    { value: 'product-questions', label: 'Product Questions' },
    { value: 'cooking-support', label: 'Cooking Support' },
    { value: 'bulk-orders', label: 'Bulk Orders' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'quality-assurance', label: 'Quality Assurance' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
    if (errors.inquiryType) {
      setErrors(prev => ({ ...prev, inquiryType: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'Please agree to terms and conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      subject: '',
      message: '',
      agreeToTerms: false
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-2xl culinary-shadow p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center">
          <Icon name="MessageSquare" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Get in Touch</h3>
          <p className="text-sm text-text-secondary">We're here to help with all your culinary needs</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            required
          />
          
          <Select
            label="Inquiry Type"
            placeholder="Select inquiry type"
            options={inquiryTypes}
            value={formData.inquiryType}
            onChange={handleSelectChange}
            error={errors.inquiryType}
            required
          />
        </div>

        <Input
          label="Subject"
          type="text"
          name="subject"
          placeholder="Brief description of your inquiry"
          value={formData.subject}
          onChange={handleInputChange}
          error={errors.subject}
          required
        />

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Message <span className="text-conversion-accent">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Please provide details about your inquiry..."
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
              errors.message ? 'border-error' : 'border-border'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error">{errors.message}</p>
          )}
        </div>

        <Checkbox
          label="I agree to the terms and conditions and privacy policy"
          checked={formData.agreeToTerms}
          onChange={handleInputChange}
          name="agreeToTerms"
          error={errors.agreeToTerms}
          required
        />

        <Button
          type="submit"
          variant="default"
          size="lg"
          loading={isSubmitting}
          fullWidth
          iconName="Send"
          iconPosition="right"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const CheckoutForm = ({ cartItems, orderTotal, onPlaceOrder }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Delivery Information
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Delivery Options
    deliveryType: 'standard',
    deliveryTime: 'anytime',
    specialInstructions: '',
    
    // Payment
    paymentMethod: '',
    
    // Preferences
    createAccount: false,
    subscribeNewsletter: true,
    giftWrap: false,
    giftMessage: ''
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const deliveryOptions = [
    { value: 'standard', label: 'Standard Delivery (2-3 days)', price: 0, description: 'Free for orders above ₹500' },
    { value: 'express', label: 'Express Delivery (Next day)', price: 99, description: 'Delivered by tomorrow' },
    { value: 'scheduled', label: 'Scheduled Delivery', price: 49, description: 'Choose your preferred time slot' }
  ];

  const timeSlots = [
    { value: 'anytime', label: 'Anytime (9 AM - 9 PM)' },
    { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 4 PM)' },
    { value: 'evening', label: 'Evening (4 PM - 9 PM)' }
  ];

  const stateOptions = [
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'kolkata', label: 'Kolkata' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'pune', label: 'Pune' },
    { value: 'ahmedabad', label: 'Ahmedabad' }
  ];

  const paymentMethods = [
    { id: 'upi', name: 'UPI Payment', icon: 'Smartphone', description: 'Pay using Google Pay, PhonePe, Paytm' },
    { id: 'card', name: 'Credit/Debit Card', icon: 'CreditCard', description: 'Visa, Mastercard, RuPay accepted' },
    { id: 'netbanking', name: 'Net Banking', icon: 'Building2', description: 'All major banks supported' },
    { id: 'cod', name: 'Cash on Delivery', icon: 'Banknote', description: 'Pay when you receive' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    }

    if (step === 3) {
      if (!formData.paymentMethod) newErrors.paymentMethod = 'Please select a payment method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handlePlaceOrder = async () => {
    if (!validateStep(3)) return;

    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      onPlaceOrder({
        ...formData,
        orderItems: cartItems,
        total: orderTotal,
        orderId: `VEEBA${Date.now()}`,
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
      });
      setIsProcessing(false);
    }, 2000);
  };

  const steps = [
    { number: 1, title: 'Delivery Details', icon: 'MapPin' },
    { number: 2, title: 'Delivery Options', icon: 'Truck' },
    { number: 3, title: 'Payment', icon: 'CreditCard' }
  ];

  return (
    <div className="bg-white rounded-lg culinary-shadow p-6">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= step.number
                  ? 'bg-primary text-white' :'bg-surface text-text-secondary'
              }`}>
                {currentStep > step.number ? (
                  <Icon name="Check" size={16} />
                ) : (
                  <Icon name={step.icon} size={16} />
                )}
              </div>
              <div className="ml-3 hidden md:block">
                <p className={`text-sm font-medium ${
                  currentStep >= step.number ? 'text-primary' : 'text-text-secondary'
                }`}>
                  {step.title}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${
                currentStep > step.number ? 'bg-primary' : 'bg-border'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1: Delivery Details */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Delivery Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                error={errors.fullName}
                required
              />
              
              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                error={errors.email}
                required
              />
              
              <Input
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                error={errors.phone}
                required
              />
              
              <Input
                label="Pincode"
                type="text"
                value={formData.pincode}
                onChange={(e) => handleInputChange('pincode', e.target.value)}
                error={errors.pincode}
                required
              />
            </div>
            
            <Input
              label="Complete Address"
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              error={errors.address}
              placeholder="House/Flat No, Street, Landmark"
              required
              className="mt-4"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Input
                label="City"
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                error={errors.city}
                required
              />
              
              <Select
                label="State"
                options={stateOptions}
                value={formData.state}
                onChange={(value) => handleInputChange('state', value)}
                error={errors.state}
                required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={handleNextStep}>
              Continue to Delivery Options
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Delivery Options */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Delivery Options
            </h3>
            
            <div className="space-y-3">
              {deliveryOptions.map((option) => (
                <div
                  key={option.value}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    formData.deliveryType === option.value
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
                  }`}
                  onClick={() => handleInputChange('deliveryType', option.value)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        formData.deliveryType === option.value
                          ? 'border-primary bg-primary' :'border-border'
                      }`}>
                        {formData.deliveryType === option.value && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">{option.label}</p>
                        <p className="text-sm text-text-secondary">{option.description}</p>
                      </div>
                    </div>
                    <span className="font-medium text-primary">
                      {option.price === 0 ? 'Free' : `+₹${option.price}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Select
              label="Preferred Delivery Time"
              options={timeSlots}
              value={formData.deliveryTime}
              onChange={(value) => handleInputChange('deliveryTime', value)}
            />
          </div>

          <div>
            <Input
              label="Special Instructions (Optional)"
              type="text"
              value={formData.specialInstructions}
              onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
              placeholder="Any specific delivery instructions..."
            />
          </div>

          <div className="space-y-3">
            <Checkbox
              label="Gift wrap this order (+₹25)"
              checked={formData.giftWrap}
              onChange={(e) => handleInputChange('giftWrap', e.target.checked)}
            />
            
            {formData.giftWrap && (
              <Input
                label="Gift Message"
                type="text"
                value={formData.giftMessage}
                onChange={(e) => handleInputChange('giftMessage', e.target.value)}
                placeholder="Write a personalized message..."
              />
            )}
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={handlePreviousStep}>
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Back
            </Button>
            <Button onClick={handleNextStep}>
              Continue to Payment
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Payment */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Payment Method
            </h3>
            
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    formData.paymentMethod === method.id
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
                  }`}
                  onClick={() => handleInputChange('paymentMethod', method.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      formData.paymentMethod === method.id
                        ? 'border-primary bg-primary' :'border-border'
                    }`}>
                      {formData.paymentMethod === method.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <Icon name={method.icon} size={20} className="text-primary" />
                    <div>
                      <p className="font-medium text-text-primary">{method.name}</p>
                      <p className="text-sm text-text-secondary">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {errors.paymentMethod && (
              <p className="text-sm text-destructive mt-2">{errors.paymentMethod}</p>
            )}
          </div>

          <div className="space-y-3">
            <Checkbox
              label="Create an account for faster checkout next time"
              checked={formData.createAccount}
              onChange={(e) => handleInputChange('createAccount', e.target.checked)}
            />
            
            <Checkbox
              label="Subscribe to newsletter for recipes and offers"
              checked={formData.subscribeNewsletter}
              onChange={(e) => handleInputChange('subscribeNewsletter', e.target.checked)}
            />
          </div>

          {/* Security Badges */}
          <div className="flex items-center justify-center gap-4 py-4 border-t border-border">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span className="text-xs text-text-secondary">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Lock" size={16} className="text-success" />
              <span className="text-xs text-text-secondary">Safe Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-xs text-text-secondary">Verified Merchant</span>
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={handlePreviousStep}>
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Back
            </Button>
            <Button
              onClick={handlePlaceOrder}
              loading={isProcessing}
              className="bg-primary hover:bg-primary/90"
            >
              {isProcessing ? 'Processing...' : `Place Order - ₹${orderTotal.toFixed(2)}`}
              {!isProcessing && <Icon name="ArrowRight" size={16} className="ml-2" />}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
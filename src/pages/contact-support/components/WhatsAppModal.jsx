import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const WhatsAppModal = ({ isOpen, onClose }) => {
  const [selectedMessageType, setSelectedMessageType] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const messageTypes = [
    {
      id: "cooking-help",
      title: "Cooking Help",
      description: "Need assistance with recipes or cooking techniques",
      icon: "ChefHat",
      message:
        "Hi! I need help with cooking. Can you guide me through a recipe?",
    },
    {
      id: "product-info",
      title: "Product Information",
      description: "Questions about ingredients, nutrition, or availability",
      icon: "Info",
      message: "Hi! I have questions about your products. Can you help me?",
    },
    {
      id: "recipe-request",
      title: "Recipe Request",
      description: "Looking for specific recipes or meal ideas",
      icon: "BookOpen",
      message: "Hi! I'm looking for new recipe ideas. Any suggestions?",
    },
    {
      id: "bulk-order",
      title: "Bulk Order",
      description: "Inquiries about large quantities or wholesale",
      icon: "Package",
      message: "Hi! I'm interested in placing a bulk order. Can you help?",
    },
    {
      id: "feedback",
      title: "Feedback & Suggestions",
      description: "Share your experience or improvement ideas",
      icon: "MessageSquare",
      message: "Hi! I'd like to share some feedback about your products.",
    },
    {
      id: "custom",
      title: "Custom Message",
      description: "Write your own message",
      icon: "Edit3",
      message: "",
    },
  ];

  const handleMessageTypeSelect = (messageType) => {
    setSelectedMessageType(messageType.id);
    if (messageType.id !== "custom") {
      setCustomMessage(messageType.message);
    } else {
      setCustomMessage("");
    }
  };

  const handleSendMessage = () => {
    if (!selectedMessageType || !customMessage.trim()) {
      return;
    }

    const phoneNumber = "918178370793"; // Your WhatsApp number
    const encodedMessage = encodeURIComponent(customMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    onClose();

    // Reset form
    setSelectedMessageType("");
    setCustomMessage("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                WhatsApp Support
              </h3>
              <p className="text-sm text-text-secondary">
                Choose your message type
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-surface flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={18} />
          </button>
        </div>

        {/* Message Types */}
        <div className="p-6 space-y-3">
          {messageTypes.map((messageType) => (
            <div
              key={messageType.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedMessageType === messageType.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/30 hover:bg-surface/50"
              }`}
              onClick={() => handleMessageTypeSelect(messageType)}
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={messageType.icon}
                    size={20}
                    className="text-primary"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-text-primary mb-1">
                    {messageType.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {messageType.description}
                  </p>
                </div>
                {selectedMessageType === messageType.id && (
                  <Icon name="Check" size={18} className="text-primary" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Message Input */}
        {selectedMessageType && (
          <div className="px-6 pb-6">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Message
            </label>
            <textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />

            {/* Character count */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-text-secondary">
                {customMessage.length}/500 characters
              </span>
              {customMessage.length > 500 && (
                <span className="text-xs text-error">Message too long</span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 p-6 border-t border-border">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button
            onClick={handleSendMessage}
            disabled={
              !selectedMessageType ||
              !customMessage.trim() ||
              customMessage.length > 500
            }
            className="flex-1 bg-green-600 hover:bg-green-700"
            iconName="Send"
            iconPosition="right"
          >
            Send on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppModal;

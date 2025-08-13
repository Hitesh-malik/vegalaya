import React, { useState, useEffect } from "react";
import Header from "../../components/ui/Header";
import CartItem from "./components/CartItem";
import FlavorPairingSidebar from "./components/FlavorPairingSidebar";
import OrderSummary from "./components/OrderSummary";
import CheckoutForm from "./components/CheckoutForm";
import EmptyCart from "./components/EmptyCart";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";

const ShoppingCartCheckout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  // Mock cart data
  useEffect(() => {
    const mockCartItems = [];
    setCartItems(mockCartItems);
  }, []);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleAddToWishlist = (itemId) => {
    // Mock wishlist functionality
    console.log("Added to wishlist:", itemId);
  };

  const handleAddPairingToCart = (pairing) => {
    const newItem = {
      id: Date.now(),
      name: pairing.name,
      description: pairing.description,
      image: pairing.image,
      price: pairing.price,
      originalPrice: pairing.originalPrice,
      quantity: 1,
      variant: "Combo Pack",
      category: "combo",
      recipeHint: "Multiple recipe options",
    };
    setCartItems((prev) => [...prev, newItem]);
  };

  const handleApplyCoupon = (coupon) => {
    setAppliedCoupon(coupon);
  };

  const handlePlaceOrder = (orderData) => {
    setOrderDetails(orderData);
    setOrderPlaced(true);
  };

  const calculateOrderTotal = () => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const deliveryFee = subtotal > 500 ? 0 : 40;
    const packagingFee = 15;
    const couponDiscount = appliedCoupon ? appliedCoupon.discount : 0;
    return subtotal + deliveryFee + packagingFee - couponDiscount;
  };

  // Show empty cart if no items
  if (cartItems.length === 0 && !orderPlaced) {
    return <EmptyCart />;
  }

  // Show order confirmation
  if (orderPlaced && orderDetails) {
    return (
      <div className="min-h-screen bg-background-canvas">
        <Header />
        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg culinary-shadow p-8 text-center">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={40} className="text-success" />
              </div>

              <h1 className="text-3xl font-bold text-text-primary mb-4">
                Order Placed Successfully!
              </h1>

              <p className="text-lg text-text-secondary mb-6">
                Thank you for choosing VEGALAYA! Your order #
                {orderDetails.orderId} has been confirmed.
              </p>

              <div className="bg-surface rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-sm text-text-secondary">
                      Delivery Address
                    </p>
                    <p className="font-medium text-text-primary">
                      {orderDetails.fullName}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {orderDetails.address}, {orderDetails.city}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">
                      Estimated Delivery
                    </p>
                    <p className="font-medium text-text-primary">
                      {orderDetails.estimatedDelivery.toLocaleDateString(
                        "en-IN",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => (window.location.href = "/homepage")}>
                  <Icon name="Home" size={16} className="mr-2" />
                  Continue Shopping
                </Button>
                <Button variant="outline">
                  <Icon name="Package" size={16} className="mr-2" />
                  Track Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-canvas">
      <Header />

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
              <span>Home</span>
              <Icon name="ChevronRight" size={14} />
              <span className="text-primary">Shopping Cart</span>
            </div>
            <h1 className="text-3xl font-bold text-text-primary">
              {isCheckout ? "Checkout" : "Shopping Cart"}
            </h1>
            <p className="text-text-secondary mt-2">
              {isCheckout
                ? "Complete your order and get ready for a flavor journey"
                : `${cartItems.reduce(
                  (sum, item) => sum + item.quantity,
                  0
                )} items in your cart`}
            </p>
          </div>

          {!isCheckout ? (
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              {/* Cart Items - Takes 3 columns on xl screens */}
              <div className="xl:col-span-3">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                      onAddToWishlist={handleAddToWishlist}
                    />
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    onClick={() =>
                      (window.location.href = "/product-categories")
                    }
                  >
                    <Icon name="ArrowLeft" size={16} className="mr-2" />
                    Continue Shopping
                  </Button>
                  <Button variant="outline">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Save to Wishlist
                  </Button>
                </div>
              </div>

              {/* Sidebar - Takes 1 column on xl screens */}
              <div className="xl:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <OrderSummary
                    cartItems={cartItems}
                    onApplyCoupon={handleApplyCoupon}
                  />

                  {/* Checkout Button */}
                  <Button
                    size="lg"
                    onClick={() => setIsCheckout(true)}
                    className="w-full"
                  >
                    Proceed to Checkout
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              {/* Checkout Form - Takes 3 columns on xl screens */}
              <div className="xl:col-span-3">
                <CheckoutForm
                  cartItems={cartItems}
                  orderTotal={calculateOrderTotal()}
                  onPlaceOrder={handlePlaceOrder}
                />
              </div>

              {/* Order Summary - Takes 1 column on xl screens */}
              <div className="xl:col-span-1">
                <OrderSummary
                  cartItems={cartItems}
                  onApplyCoupon={handleApplyCoupon}
                />

                {/* Back to Cart */}
                <Button
                  variant="outline"
                  onClick={() => setIsCheckout(false)}
                  className="w-full mt-4"
                >
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Back to Cart
                </Button>
              </div>
            </div>
          )}

          {/* Trust Signals */}
          <div className="mt-12 bg-white rounded-lg culinary-shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Shield" size={24} className="text-success" />
                <div className="text-left">
                  <p className="font-medium text-text-primary">
                    Secure Payment
                  </p>
                  <p className="text-xs text-text-secondary">SSL Encrypted</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Icon name="Truck" size={24} className="text-primary" />
                <div className="text-left">
                  <p className="font-medium text-text-primary">Free Delivery</p>
                  <p className="text-xs text-text-secondary">
                    Orders above ₹500
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Icon name="RotateCcw" size={24} className="text-warning" />
                <div className="text-left">
                  <p className="font-medium text-text-primary">Easy Returns</p>
                  <p className="text-xs text-text-secondary">7 days policy</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Icon
                  name="Headphones"
                  size={24}
                  className="text-trust-builder"
                />
                <div className="text-left">
                  <p className="font-medium text-text-primary">24/7 Support</p>
                  <p className="text-xs text-text-secondary">
                    Always here to help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCheckout;

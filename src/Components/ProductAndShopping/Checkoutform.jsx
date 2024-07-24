import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backToShoppingArrow from '../../../Images/checkout-component-back-arrow.png';
import axios from 'axios';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    deliveryInstructions: '',
    deliveryTime: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataInfo = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      deliveryInstructions: formData.deliveryInstructions,
      deliveryTime: formData.deliveryTime,
      paymentMethod: formData.paymentMethod,
    };
    setFormData(formDataInfo);

    axios
      // .post('http://localhost:3000/checkout', formDataInfo)
      .post('https://fashion-gems-api.fly.dev/checkout', formDataInfo)
      .then((response) => {
        console.log(response.status, response.data);

        alert('Submission Successful');

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          deliveryInstructions: '',
          deliveryTime: '',
          paymentMethod: '',
        });
      })
      .catch((error) => {
        console.error('There was an error!', error);
        alert('Submission Failed');
      });
  };

  return (
    <div className="checkout-component-container">
      <div className="checkout-component-backtoshop-checkout-title-container">
        <div className="container-for-img-and-title">
          <Link to="/ShoppingComponent" className="back-to-shopping-link-btn">
            <img src={backToShoppingArrow} alt="Back to Shopping" />
          </Link>
          <Link to="/ShoppingComponent" className="back-to-shopping-link-btn">
            <h6>Back to shopping</h6>
          </Link>
        </div>
        <h3>Checkout</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="contact-info-container">
          <h5>Contact Information</h5>
          <div className="first-last-name-container">
            <div className="input-label-pair-first-name">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-label-pair-last-name">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Smith"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="phone-email-container">
            <div className="input-label-pair-first-email">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="JohnSmith@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-label-pair-last-phone">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                placeholder="(___)-___-____"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="delivery-container">
          <h5>Where should we deliver your order?</h5>
          <div className="input-label-pair-address">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              placeholder="1234 Main Street, Philadelphia PA"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="input-label-pair-delivery-instructions">
            <label>Delivery Instructions</label>
            <textarea
              name="deliveryInstructions"
              placeholder="Anything special when delivering your order?"
              value={formData.deliveryInstructions}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="receive-order-container">
          <h5>When would you like to receive your order?</h5>
          <div className="radio-container">
            <div className="input-label-pair-receive-asap">
              <input
                type="radio"
                name="deliveryTime"
                id="ASAP"
                value="ASAP"
                checked={formData.deliveryTime === 'ASAP'}
                onChange={handleChange}
              />
              <label htmlFor="ASAP">ASAP</label>
            </div>
            <div className="input-label-pair-receive-scheduled">
              <input
                type="radio"
                name="deliveryTime"
                id="schedule"
                value="Scheduled"
                checked={formData.deliveryTime === 'Scheduled'}
                onChange={handleChange}
              />
              <label htmlFor="schedule">Scheduled Delivery</label>
            </div>
          </div>
        </div>
        <div className="payment-method-container">
          <h5>Payment Method</h5>
          <div className="radio-container-2">
            <div className="input-label-pair-credit-card">
              <input
                type="radio"
                name="paymentMethod"
                id="credit"
                value="Credit Card"
                checked={formData.paymentMethod === 'Credit Card'}
                onChange={handleChange}
              />
              <label htmlFor="credit">Credit Card</label>
            </div>
            <div className="input-label-pair-cash-on-delivery">
              <input
                type="radio"
                name="paymentMethod"
                id="cash"
                value="Cash on Delivery"
                checked={formData.paymentMethod === 'Cash on Delivery'}
                onChange={handleChange}
              />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>
            <div className="input-label-pair-apple-google-pay">
              <input
                type="radio"
                name="paymentMethod"
                id="pay"
                value="Apple Or Google Pay"
                checked={formData.paymentMethod === 'Apple Or Google Pay'}
                onChange={handleChange}
              />
              <label htmlFor="pay">Apple Or Google Pay</label>
            </div>
            <div className="place-order-btn-container">
              <button type="submit">Place Order</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

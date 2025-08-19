import React, { useState } from 'react';
import './Contact.css';
import Footer from './Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    plotsize: '',
    budget: '',
    city: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <div className="container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please reach out with any questions, comments, or feedback.</p>
      </header>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneno">Phone Number</label>
          <input type="phoneno" id="phoneno" name="phoneno" value={formData.phoneno} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Plot Size.</label>
          <input type="plotsize" id="plotsize" name="plotsize" value={formData.plotsize} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Budget</label>
          <input type="budget" id="budget" name="budget" value={formData.budget} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">City</label>
          <input type="city" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    < Footer />
    </>
  );
};

export default ContactUs;

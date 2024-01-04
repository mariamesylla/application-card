import React from 'react';
import React, { useState } from 'react';
import { useParams, useNavigate, Link} from "react-router-dom";

export const Form = () => {


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    detailedAddress: '',
    ssn: '',
    totalIncome: '',
  });
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate("/approval");
  };
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation - Check for empty fields
    const newErrors = {};
    for (const key in formData) {
      if (formData[key] === '') {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid - Handle form submission here
      // For example, you can send the form data to an API or perform other actions
      console.log('Form submitted:', formData);
      // Reset form and errors after submission (if needed)
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        detailedAddress: '',
        ssn: '',
        totalIncome: '',
      });
      setErrors({});
    }
  };


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Card Application</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-semibold mb-2">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName}
               onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
            <input type="email" id="email" name="email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email address" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number" required />
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-sm font-semibold mb-2">Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your date of birth" required />
          </div>
          <div className="mb-4">
            <label htmlFor="detailedAddress" className="block text-sm font-semibold mb-2"> Address</label>
            <textarea id="detailedAddress" name="detailedAddress"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your detailed address" required />
          </div>
          <div className="mb-4">
            <label htmlFor="ssn" className="block text-sm font-semibold mb-2">Social Security Number</label>
            <input type="text" id="ssn" name="ssn"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your SSN" required />
          </div>
          <div className="mb-4">
            <label htmlFor="totalIncome" className="block text-sm font-semibold mb-2">Total Income</label>
            <input type="number" id="totalIncome" name="totalIncome"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your total income" required />
          </div>
          
          <div className="flex items-center justify-between" >
            <button type="submit" onClick={handleClick} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:bg-blue-600 hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


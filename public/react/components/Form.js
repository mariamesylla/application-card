import React from 'react';
import React, { useState } from 'react';
import { useParams, useNavigate, Link} from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    state: '',
    city: '',
    zipCode: '',
    ssn: '',
    dateOfBirth: '',
    totalIncome: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value !=''){
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]:'',
            })
      
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Basic validation - checking for empty fields


    if (formData.firstName === '') { 
      validationErrors.firstName = 'First Name is required'; } 
    
    if (formData.ssn === '') { 
      validationErrors.ssn = 'Social Security Number is required'; } 

    if (formData.state === '') { 
      validationErrors.state = 'State required'; }

    if (formData.zipCode === '') { 
      validationErrors.zipCode = 'Zip Code required'; }
      
    if (formData.totalIncome === '') { 
      validationErrors.totalIncome = 'Total Income required'; } 
    
    if (Object.keys(validationErrors).length > 0) { 
        
      setErrors(validationErrors); } else {
      // Store the first name and total income
      localStorage.setItem('firstName', formData.firstName);
      localStorage.setItem('totalIncome', formData.totalIncome);

      // Redirect to the decision page
      navigate('/');
    }
  };


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 " >Credit Card Application</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block mb-2 text-sm font-semibold text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-2 text-sm font-semibold text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="street" className="block mb-2 text-sm font-semibold text-gray-600">
          Street Address
        </label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="state" className="block mb-2 text-sm font-semibold text-gray-600">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
        </div>
        <div>
          <label htmlFor="city" className="block mb-2 text-sm font-semibold text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="zipCode" className="block mb-2 text-sm font-semibold text-gray-600">
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
        </div>
        <div>
          <label htmlFor="ssn" className="block mb-2 text-sm font-semibold text-gray-600">
            Social Security Number
          </label>
          <input
            type="text"
            id="ssn"
            name="ssn"
            value={formData.ssn}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.ssn && <p className="text-red-500 text-xs mt-1">{errors.ssn}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-semibold text-gray-600">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="totalIncome" className="block mb-2 text-sm font-semibold text-gray-600">
            Total Income
          </label>
          <input
            type="number"
            id="totalIncome"
            name="totalIncome"
            value={formData.totalIncome}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.totalIncome && (
            <p className="text-red-500 text-xs mt-1">{errors.totalIncome}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
      </div>
    </div>
  );
}


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
    email:'',
    phone:'',
    zipCode: '',
    ssn: '',
    dateOfBirth: '',
    totalIncome: '',
    sourceOfIncome:'',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });


    //To clear validation error
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
      validationErrors.firstName = 'First Name required'; } 
    
    if (formData.lastName ===''){
        validationErrors.lastName = 'Last Name  required';
      }
    if (formData.ssn === '') { 
      validationErrors.ssn = 'Social Security Number  required'; } 

    if (formData.ssn === '') { 
        validationErrors.street = 'Street address  required'; } 
  
    if (formData.state === '') { 
      validationErrors.state = 'State required'; }

    if (formData.zipCode === '') { 
      validationErrors.zipCode = 'Zip Code required'; }
      
    if (formData.totalIncome === '') { 
      validationErrors.totalIncome = 'Total Income required'; } 
    
    if (Object.keys(validationErrors).length > 0) { 
        
      setErrors(validationErrors); } else {


      // To store the first name and total income
      localStorage.setItem('firstName', formData.firstName);
      localStorage.setItem('totalIncome', formData.totalIncome);

      // To redirect to the decision page
      navigate('/approval');
    }
  };


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center pt-10 pb-8">
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
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

        <hr class="mx-auto my-8 h-1 w-100 border-0 bg-gray-100" />

      <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-600">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(___) ___-____"
            maxlength="13"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
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
         {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}

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
            maxlength="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
        </div>
         </div>
         <hr class="mx-auto my-8 h-1 w-100 border-0 bg-gray-100" />

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
            placeholder="___-__-____"
            maxlength="11"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.ssn && <p className="text-red-500 text-xs mt-1">{errors.ssn}</p>}
        </div>
     

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-semibold text-gray-600">
            Date of Birth (Optional)
          </label>
          <input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        </div>
        <div >
          <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-600">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="totalIncome" className="block mb-2 text-sm font-semibold text-gray-600">
            Total Income
          </label>
          <input
            type="text"
            id="totalIncome"
            name="totalIncome"
            value={formData.totalIncome}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            maxlength="6"
          />
          {errors.totalIncome && (
            <p className="text-red-500 text-xs mt-1">{errors.totalIncome}</p>
          )}
        </div>
        
        <div>
        <label htmlFor="sourceOfIncome" className="block mb-2 text-sm font-semibold text-gray-600">Source of Income:</label>
        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          id="sourceOfIncome"
          name="sourceOfIncome"
          value={formData.sourceOfIncome}
          onChange={handleChange}
        >
          <option ></option>
          <option value="Self Employed">Self Employed</option>
          <option value="Employed">Employed</option>
          <option value="Retired">Retired</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Military">Military</option>
        </select>
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


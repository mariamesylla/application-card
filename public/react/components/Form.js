import React from 'react';

export const Form = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Bank Application</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-semibold mb-2">Full Name</label>
            <input type="text" id="fullName" name="fullName"
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
            <label htmlFor="address" className="block text-sm font-semibold mb-2">Address</label>
            <textarea id="address" name="address"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your address" required />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:bg-blue-600 hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


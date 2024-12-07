"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

const EventRegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    participants: 1,
    specialRequirements: "",
  });

  const eventTypes = [
    "Academic Conference",
    "Sports Tournament",
    "Cultural Festival",
    "Workshop",
    "Seminar",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    // Add actual submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 bg-gray-50 border-b">
            <div className="flex items-center justify-center">
              <Calendar className="mr-3 text-primary-900" size={36} />
              <h2 className="text-2xl font-bold text-gray-800">
                Event Registration
              </h2>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900"
              />
            </div>

            <div>
              <label
                htmlFor="eventType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Event Type
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900"
              >
                <option value="">Select Event Type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="participants"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Number of Participants
              </label>
              <input
                type="number"
                id="participants"
                name="participants"
                min="1"
                value={formData.participants}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900"
              />
            </div>

            <div>
              <label
                htmlFor="specialRequirements"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Special Requirements
              </label>
              <textarea
                id="specialRequirements"
                name="specialRequirements"
                rows={3}
                value={formData.specialRequirements}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900"
                placeholder="Any special accommodations or requirements?"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-900 transition duration-300"
              >
                Register for Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationPage;

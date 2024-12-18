"use client";
import React, { useState } from "react";

export default function DirectDebit() {
  const [selectedUser, setSelectedUser] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    pin: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mandateData = {
      user: selectedUser,
    };

    console.log("New Direct Debit Mandate:", mandateData);
    // Add logic to save the mandate (e.g., API call).
    setShowModal(true);
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();
    // Save the debit card details (e.g., API call to save the card)
    console.log("Debit Card Details:", cardDetails);

    // Close the modal after saving the card
    setShowModal(false);

    // Optionally, reset the card details state
    setCardDetails({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      pin: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pl-60">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Clear Direct Debit Mandate
          </h1>
          <label className="block text-gray-700 font-medium mb-2">
            Select User
          </label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select a user
            </option>
            <option value="user1">peter</option>
            <option value="user2">judas</option>
            <option value="user3">abel</option>
          </select>
        </div>
        {/* 
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="#"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div> */}

        <button
          type="submit"
          className="w-full bg-aellaBlue text-white p-3 rounded-md hover:bg-blue-600 transition"
        >
          Clear Direct Debit
        </button>
      </form>
    </div>
  );
}

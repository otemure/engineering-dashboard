"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Wallet() {
  const [action, setAction] = useState("");
  const [amount, setAmount] = useState("");
  const [limit, setLimit] = useState("");
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data.map((user) => user.first_name)); // Example of storing first names
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === "fund") {
      console.log(`User: ${user}, Action: Fund Wallet, Amount: ${amount}`);
    } else if (action === "clear") {
      console.log(`User: ${user}, Action: Clear Wallet`);
    } else if (action === "raise") {
      console.log(
        `User: ${user}, Action: Raise Wallet Limit, New Limit: ${limit}`
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pl-60">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h1 className="text-2xl font-bold text-center pt-5 text-black">
          Wallet
        </h1>
        {/* Dropdown for User Selection */}
        <div className="mb-4">
          <label
            htmlFor="user"
            className="block text-gray-700 font-medium mb-2"
          >
            Select a user
          </label>
          <select
            id="user"
            value={user}
            onChange={handleUserChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            required
          >
            <option value="" disabled>
              Choose a user
            </option>
            {users.map((userName, index) => (
              <option key={index} value={userName}>
                {userName}
              </option>
            ))}
          </select>
        </div>
        {/* Dropdown for Wallet Actions */}
        <div className="mb-4">
          <label
            htmlFor="action"
            className="block text-gray-700 font-medium mb-2 pt-5"
          >
            What wallet action would you want to take?
          </label>
          <select
            id="action"
            value={action}
            onChange={handleActionChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            required
          >
            <option value="" disabled>
              Select an action
            </option>
            <option value="fund">Fund Wallet</option>
            <option value="clear">Clear Wallet Balance</option>
            <option value="raise">Raise Wallet Limit</option>
          </select>
        </div>
        {/* Conditional Inputs Based on Selected Action */}
        {action === "fund" && (
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-gray-700 font-medium mb-2"
            >
              Enter amount to fund
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="₦ Enter amount"
              required
              min="0"
              step="0.01"
            />
          </div>
        )}
        {action === "clear" && (
          <p className="text-gray-500 text-center mb-4">
            This will clear the wallet balance to zero.
          </p>
        )}
        {action === "raise" && (
          <div className="mb-4">
            <label
              htmlFor="limit"
              className="block text-gray-700 font-medium mb-2"
            >
              Enter new wallet limit
            </label>
            <input
              type="number"
              id="limit"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="₦ Enter new limit"
              required
              min="0"
              step="0.01"
            />
          </div>
        )}
        {/* Submit Button with Dynamic Text */}
        <button
          type="submit"
          className="w-full block text-center bg-blue-600 text-white p-3 rounded-md hover:bg-blue-800 transition"
        >
          {action === "fund" && "Fund Wallet"}
          {action === "clear" && "Clear Wallet"}
          {action === "raise" && "Raise Limit"}
          {!action && "Select an Action"}
        </button>
      </form>
    </div>
  );
}

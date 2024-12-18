"use client";
import { useState } from "react";

export default function Profile() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [action, setAction] = useState("");
  const [showSetBvnModal, setShowSetBvnModal] = useState(false);
  const [showApproveDeclineModal, setShowApproveDeclineModal] = useState(false);
  const [bvn, setBvn] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User ID:", userId);
    console.log("Email:", email);
    console.log("Action:", action);

    if (action === "set-bvn") {
      setShowSetBvnModal(true);
    } else if (action === "approve-decline-bvn") {
      setShowApproveDeclineModal(true);
    } else {
      handleAction();
    }
  };

  const handleAction = () => {
    switch (action) {
      case "approve-decline-bvn":
        console.log("Approve/Decline BVN for user...");
        break;
      case "liveliness-check":
        console.log("Performing liveliness check...");
        break;
      default:
        console.log("No action selected.");
    }

    resetForm();
  };

  const handleSetBvn = () => {
    if (bvn.length === 10 && /^\d+$/.test(bvn)) {
      console.log("Setting BVN:", bvn, "for user", userId);
      setError(""); // Clear any previous error
      setShowSetBvnModal(false); // Close Set BVN modal
      resetForm();
    } else {
      setError("Please enter a valid 10-digit BVN.");
    }
  };

  const handleApproveDeclineBvn = (action) => {
    console.log(`${action} BVN for user ${userId}`);
    setShowApproveDeclineModal(false); // Close Approve/Decline modal
    resetForm();
  };

  const resetForm = () => {
    setUserId("");
    setEmail("");
    setAction("");
    setBvn(""); // Reset BVN
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pl-60">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h1 className="text-2xl font-bold text-center text-black">Profile</h1>
        <p className="text-center text-sm text-gray-500 mb-4">
          Select an action and enter the user details.
        </p>

        {/* Dropdown for selecting action */}
        <div className="mb-4">
          <label
            htmlFor="action"
            className="block text-gray-700 font-medium mb-2"
          >
            What would you like to do?
          </label>
          <select
            id="action"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            required
          >
            <option value="" disabled>Select an action</option>
            <option value="set-bvn">Set BVN</option>
            <option value="approve-decline-bvn">Approve/Decline BVN</option>
            <option value="liveliness-check">Liveliness Check</option>
          </select>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            User Email/Id
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter user email"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-aellaBlue text-white p-3 rounded-md hover:bg-blue-600 transition"
        >
          Perform Action
        </button>
      </form>

      {/* Modal for Setting BVN */}
      {showSetBvnModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-2xl font-bold mb-4">Set BVN</h2>
            <p className="mb-4">
              Please enter the 10-digit BVN for user {userId}:
            </p>

            {/* BVN Input */}
            <input
              type="text"
              maxLength="10"
              value={bvn}
              onChange={(e) => {
                // Only allow updates if the length is within the max limit
                if (e.target.value.length <= 10) {
                  setBvn(e.target.value);
                }
              }}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter 10-digit BVN"
              required
            />

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Modal Action Buttons */}
            <div className="mt-4 flex justify-around">
              <button
                onClick={handleSetBvn}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Set BVN
              </button>
              <button
                onClick={() => setShowSetBvnModal(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
            <button
              onClick={() => setShowSetBvnModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Modal for Approve/Decline BVN */}
      {showApproveDeclineModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-light mb-4 text-center">
              Approve/Decline BVN
            </h2>
            <p className="mb-4"></p>

            {/* Approve/Decline Action Buttons */}
            <div className="mt-4 flex justify-around">
              <button
                onClick={() => handleApproveDeclineBvn("Approve")}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() => handleApproveDeclineBvn("Decline")}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Decline
              </button>
            </div>
            <button
              onClick={() => setShowApproveDeclineModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

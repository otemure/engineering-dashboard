"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DirectDebit() {
  const [selectedUser, setSelectedUser] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []);

  const handleDeleteCard = () => {
    if (!selectedUser) {
      alert("Please select a user.");
      return;
    }


    setUserToDelete(selectedUser);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    axios
      .delete("https://reqres.in/api/users/2") 
      .then((res) => {
        console.log(res.data);
        setSuccessMessage(`Card deleted successfully for ${userToDelete}`);
      })
      .catch((err) => {
        console.error("Error deleting card:", err);
      });


    setShowModal(false);
    setSelectedUser("");
    setUserToDelete("");
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setUserToDelete("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pl-60">
      <form className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center pt-5 text-black">
          Clear User Card
        </h1>

        {/* Dropdown to select user */}
        <div className="mb-4">
          <label
            htmlFor="user"
            className="block text-gray-700 font-medium mb-2 mt-6"
          >
            Select User
          </label>
          <select
            id="user"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            required
          >
            <option value="" disabled>
              Select a user
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.first_name}>
                {user.first_name}
              </option>
            ))}
          </select>
        </div>


        <button
          type="button"
          onClick={handleDeleteCard}
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
        >
          Clear User Card
        </button>


        {successMessage && (
          <p className="mt-4 text-green-500 text-center">{successMessage}</p>
        )}
      </form>

  
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 relative">
            <h2 className="text-l font-light mb-4">
              Are you sure you want to clear card for {userToDelete}?
            </h2>

            {/* Modal Action Buttons */}
            <div className="mt-4 flex justify-around">
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Clear
              </button>
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function PreschoolForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "preschool_enquiries"), {
        name,
        phone,
        message,
        createdAt: new Date(),
      });

      alert("Preschool Enquiry Submitted!");
      setName("");
      setPhone("");
      setMessage("");

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 to-pink-50 py-20 px-4">

      <div className="w-full max-w-lg bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-purple-100">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Preschool Enquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-gray-700 font-medium">Child / Parent Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl bg-white text-gray-800 
                         focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-500 shadow-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-700 font-medium">Phone Number</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl bg-white text-gray-800 
                         focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-500 shadow-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-700 font-medium">Message</label>
            <textarea
              placeholder="Write your message..."
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl bg-white text-gray-800 
                         focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-500 shadow-sm"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-linear-to-r from-purple-600 to-pink-500 text-white font-bold 
                       text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Submit Enquiry
          </button>

        </form>
      </div>

    </div>
  );
}

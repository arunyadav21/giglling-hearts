import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { motion as Motion } from "framer-motion";

export default function PartnerForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => { 
    e.preventDefault();

    try {
      await addDoc(collection(db, "partner_enquiries"), {
        name,
        phone,
        city,
        message,
        createdAt: new Date(),
      });

      alert("Partner enquiry submitted!");
      setName("");
      setPhone("");
      setCity("");
      setMessage("");

    } catch (error) {
      console.error("Error submitting:", error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-white pt-28 pb-16 px-4">
      
      <div className="max-w-lg mx-auto">

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-3xl shadow-2xl border border-purple-100"
        >
          
          {/* HEADER */}
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
            Partner Inquiry Form
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Fill the details and our team will contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME */}
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 mt-1 border border-gray-300 rounded-xl focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition bg-white text-gray-800"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full p-3 mt-1 border border-gray-300 rounded-xl focus:border-pink-600 focus:ring-2 focus:ring-pink-200 transition bg-white text-gray-800"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* CITY */}
            <div>
              <label className="text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full p-3 mt-1 border border-gray-300 rounded-xl focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition bg-white text-gray-800"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Your message or questions"
                className="w-full p-3 mt-1 border border-gray-300 rounded-xl focus:border-pink-600 focus:ring-2 focus:ring-pink-200 transition bg-white text-gray-800"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* BUTTON */}
            <Motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 bg-linear-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all"
              type="submit"
            >
              Submit Inquiry
            </Motion.button>

          </form>
        </Motion.div>

      </div>
    </div>
  );
}

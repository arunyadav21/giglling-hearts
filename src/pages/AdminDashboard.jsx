import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUserGraduate, FaHandshake, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaComment } from 'react-icons/fa';

export default function AdminDashboard() {
  const [preschoolData, setPreschoolData] = useState([]);
  const [partnerData, setPartnerData] = useState([]);
  const navigate = useNavigate();

  // Fetch Data
  const fetchPreschool = async () => {
    const snapshot = await getDocs(collection(db, "preschool_enquiries"));
    setPreschoolData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const fetchPartner = async () => {
    const snapshot = await getDocs(collection(db, "partner_enquiries"));
    setPartnerData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  // Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin-login");
    } catch (err) {
      console.log("Logout Error:", err);
    }
  };

  // Load Data
  useEffect(() => {
    const loadData = async () => {
      await fetchPreschool();
      await fetchPartner();
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 pt-20 pb-20 px-4">
      
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-linear-to-r from-purple-600 to-pink-500 rounded-2xl p-8 shadow-xl mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">
                Admin Dashboard
              </h1>
              <p className="text-white/90 text-lg">
                Manage preschool and partner enquiries
              </p>
            </div>
            
            <button
              onClick={handleLogout}
              className="mt-4 md:mt-0 flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-white">
              <div className="text-2xl font-bold">{preschoolData.length}</div>
              <div className="text-sm opacity-90">Preschool Enquiries</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-white">
              <div className="text-2xl font-bold">{partnerData.length}</div>
              <div className="text-sm opacity-90">Partner Enquiries</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-white">
              <div className="text-2xl font-bold">{preschoolData.length + partnerData.length}</div>
              <div className="text-sm opacity-90">Total Enquiries</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-white">
              <div className="text-2xl font-bold">{new Date().getDate()}</div>
              <div className="text-sm opacity-90">Today's Date</div>
            </div>
          </div>
        </div>

        {/* PRESCHOOL ENQUIRIES - EMAIL REMOVED */}
        <div className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden border border-purple-100">
          <div className="bg-linear-to-r from-purple-50 to-purple-100 p-6 border-b border-purple-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <FaUserGraduate className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Preschool Enquiries</h2>
                <p className="text-purple-600 font-medium">{preschoolData.length} Total Records</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-linear-to-r from-purple-50 to-pink-50">
                <tr>
                  <th className="p-4 text-left font-semibold text-purple-700">Name</th>
                  <th className="p-4 text-left font-semibold text-purple-700">Phone</th>
                 {/* <th className="p-4 text-left font-semibold text-purple-700">Child's Age</th>*/}
                  <th className="p-4 text-left font-semibold text-purple-700">Message</th>
                </tr>
              </thead>

              <tbody>
                {preschoolData.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="p-8 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center py-8">
                        <FaUserGraduate className="text-4xl text-gray-300 mb-4" />
                        <p className="text-lg">No preschool enquiries found</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  preschoolData.map((row, index) => (
                    <tr 
                      key={row.id} 
                      className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-purple-50/30'}`}
                    >
                      <td className="p-4">
                        <div className="font-medium text-gray-900">{row.name || "N/A"}</div>
                        {row.email && (
                          <div className="text-sm text-gray-500 mt-1 truncate max-w-[150px] flex items-center gap-1">
                            <FaEnvelope className="text-gray-400 text-xs" />
                            {row.email}
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <FaPhone className="text-purple-500" />
                          {row.phone || "N/A"}
                        </div>
                      </td>
                      {/* Child's Age with Fallback 
                      <td className="p-4">
                        {row.childAge ? (
                          <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-3 py-1 rounded-full font-medium">
                            {row.childAge} years
                          </span>
                        ) : (
                          <span className="text-gray-500">Not specified</span>
                        )}
                      </td>*/}
                      <td className="p-4">
                        <div className="flex items-start gap-2">
                          <FaComment className="text-gray-400 mt-1 'flex-shrink-0'" />
                          <div className="text-gray-700 line-clamp-2">
                            {row.message || "No message provided"}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* PARTNER ENQUIRIES - INVESTMENT REMOVED */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100">
          <div className="bg-linear-to-r from-pink-50 to-purple-100 p-6 border-b border-pink-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FaHandshake className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Partner Enquiries</h2>
                <p className="text-pink-600 font-medium">{partnerData.length} Total Records</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-linear-to-r from-pink-50 to-purple-50">
                <tr>
                  <th className="p-4 text-left font-semibold text-pink-700">Name</th>
                  <th className="p-4 text-left font-semibold text-pink-700">Contact</th>
                  <th className="p-4 text-left font-semibold text-pink-700">Location</th>
                  <th className="p-4 text-left font-semibold text-pink-700">Message</th>
                </tr>
              </thead>

              <tbody>
                {partnerData.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="p-8 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center py-8">
                        <FaHandshake className="text-4xl text-gray-300 mb-4" />
                        <p className="text-lg">No partner enquiries found</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  partnerData.map((row, index) => (
                    <tr 
                      key={row.id} 
                      className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-pink-50/30'}`}
                    >
                      <td className="p-4">
                        <div className="font-medium text-gray-900">{row.name || "N/A"}</div>
                        {row.email && (
                          <div className="text-sm text-gray-500 mt-1 truncate max-w-[150px] flex items-center gap-1">
                            <FaEnvelope className="text-gray-400 text-xs" />
                            {row.email}
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <FaPhone className="text-pink-500" />
                          {row.phone || "N/A"}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-pink-500" />
                          <span className="bg-linear-to-r from-blue-100 to-blue-200 text-blue-700 px-3 py-1 rounded-full">
                            {row.city || "N/A"}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-start gap-2">
                          <FaComment className="text-gray-400 mt-1 'flex-shrink-0'" />
                          <div className="text-gray-700 line-clamp-2">
                            {row.message || "No message provided"}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* FOOTER INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-linear-to-r from-purple-100 to-pink-100 p-6 rounded-2xl">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <FaCalendarAlt className="text-purple-500" />
              Recent Activity
            </h3>
            <p className="text-gray-700">
              Last updated: {new Date().toLocaleDateString('en-IN', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="bg-linear-to-r from-pink-100 to-purple-100 p-6 rounded-2xl">
            <h3 className="font-bold text-gray-900 mb-3">Data Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Records:</span>
                <span className="font-bold text-purple-600">{preschoolData.length + partnerData.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Preschool:</span>
                <span className="font-bold text-purple-600">{preschoolData.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Partner:</span>
                <span className="font-bold text-pink-600">{partnerData.length}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-linear-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-3">Quick Info</h3>
            <p className="text-gray-700 text-sm">
              All data is securely stored and automatically updated. 
              Contact support for any assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
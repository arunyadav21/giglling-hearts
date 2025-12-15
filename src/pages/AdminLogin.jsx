import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { 
  FaLock, 
  FaEnvelope, 
  FaEye, 
  FaEyeSlash,
  FaShieldAlt,
  FaArrowRight,
  FaUserShield
} from 'react-icons/fa';

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch {
      setError("Invalid email or password! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 via-pink-50 to-white p-4 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Login Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          
          {/* Header */}
          <div className="bg-linear-to-r from-purple-600 to-pink-500 p-8 text-white text-center relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 text-2xl">🔒</div>
              <div className="absolute bottom-4 right-4 text-2xl">⚡</div>
            </div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserShield className="text-3xl text-white" />
              </div>
              
              <h2 className="text-3xl font-bold mb-2">Admin Portal</h2>
              <p className="text-white/90">Secure access to dashboard</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">
            {error && (
              <Motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2"
              >
                <FaShieldAlt />
                <span>{error}</span>
              </Motion.div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
             <div className="relative">
  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
    <FaEnvelope />
  </div>
  
  <input
    type="email"
    placeholder="Admin Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 
               rounded-xl text-gray-900 placeholder-gray-400 
               focus:border-purple-500 focus:ring-2 focus:ring-purple-200 
               transition-all duration-300"
    required
  />
</div>

              {/* Password Input */}
             <div className="relative">
  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
    <FaLock />
  </div>
  
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full pl-12 pr-12 py-4 bg-white border border-gray-300 
               rounded-xl text-gray-900 placeholder-gray-400 
               focus:border-purple-500 focus:ring-2 focus:ring-purple-200 
               transition-all duration-300"
    required
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 
               text-gray-400 hover:text-purple-600 transition-colors"
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>


              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                  Remember me
                </label>
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <Motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-linear-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Sign In to Dashboard</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Motion.button>

              {/* Security Note */}
              <div className="text-center pt-4 border-t border-gray-100">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                  <FaShieldAlt className="text-green-500" />
                  <span>Secure & Encrypted Connection</span>
                </div>
              </div>
            </form>
          </div>

          {/* Footer
          <div className="bg-linear-to-r from-gray-50 to-purple-50 p-6 text-center border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Restricted access. Only authorized personnel allowed.
            </p>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">SSL Secured</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1000"></div>
              <span className="text-xs text-gray-500">Encrypted</span>
            </div>
          </div>  */}
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm"
          >
            ← Back to Homepage
          </a>
        </div>
      </Motion.div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
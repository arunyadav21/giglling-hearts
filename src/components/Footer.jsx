import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-purple-700 to-pink-600 text-white pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Giglling Hearts</h2>
          <p className="text-white/80 leading-relaxed text-sm">
            A nurturing, joyful preschool environment where children learn, explore, and grow with love.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-yellow-300">About Us</Link></li>
            <li><Link to="/be-a-partner" className="hover:text-yellow-300">Be A Partner</Link></li>
            <li><Link to="/contact-us" className="hover:text-yellow-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* PROGRAMS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li><Link to="/programs/toddlers" className="hover:text-yellow-300">Toddlers</Link></li>
            <li><Link to="/programs/play-group" className="hover:text-yellow-300">Play Group</Link></li>
            <li><Link to="/programs/pre-nursery" className="hover:text-yellow-300">Pre-Nursery</Link></li>
            <li><Link to="/programs/nursery" className="hover:text-yellow-300">Nursery</Link></li>
            <li><Link to="/programs/kindergarten" className="hover:text-yellow-300">Kindergarten</Link></li>
            <li><Link to="/programs/daycare" className="hover:text-yellow-300">Daycare</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-white/90 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-300" /> +91 9876543210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-300" /> info@gigglingshearts.com
            </li>
            <li className="flex items-center gap-2">
              <FaLocationArrow className="text-yellow-300" /> Chandigarh, India
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-2xl mt-6">
            <FaFacebook className="hover:text-yellow-300 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-300 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-white/70 text-sm mt-10 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Giglling Hearts. All Rights Reserved.
      </div>
    </footer>
  );
}

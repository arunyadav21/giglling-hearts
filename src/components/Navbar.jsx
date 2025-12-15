import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const programs = [
    { name: "Toddlers Program", icon: "👶", link: "/programs/toddlers" },
    { name: "Play Group", icon: "🎨", link: "/programs/play-group" },
    { name: "Pre-Nursery", icon: "🌟", link: "/programs/pre-nursery" },
    { name: "Nursery", icon: "📚", link: "/programs/nursery" },
    { name: "Kindergarten", icon: "🎓", link: "/programs/kindergarten" },
    { name: "Daycare", icon: "🏠", link: "/programs/daycare" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">

        {/* LEFT DESKTOP - Preschool Button */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <button
              className="group px-5 py-2.5 rounded-xl bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              Preschool
              <span
                className={`transition-transform duration-200 ${
                  openDropdown ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {openDropdown && (
              <div className="absolute top-12 left-0 bg-white shadow-xl border border-gray-100 rounded-xl w-64 py-3 'z-[999]'">
                <div className="px-4 py-3 border-b border-gray-100 bg-linear-to-r from-purple-50 to-pink-50 rounded-t-xl">
                  <h3 className="text-sm font-bold text-purple-700">Our Programs</h3>
                </div>

                {programs.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 cursor-pointer border-b border-gray-50 last:border-b-0 group/item transition-all"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium flex-1">
                      {item.name}
                    </span>
                    <span className="text-purple-300 group-hover/item:text-purple-600 transition-all">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CENTER LOGO */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 cursor-pointer"
        >
          <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <div className="text-center hidden sm:block">
            <h1 className="text-2xl font-bold text-gray-800">Giglling Hearts</h1>
            <p className="text-xs text-purple-600 font-medium">
              Where Little Hearts Grow
            </p>
          </div>
        </Link>

        {/* RIGHT DESKTOP BUTTON */}
        <Link
          to="/be-a-partner"
          className="hidden md:flex ml-auto px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-xl font-semibold shadow-sm hover:bg-purple-50 hover:shadow-md transition-all duration-300 gap-2 hover:scale-105"
        >
          Be A Partner →
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl text-purple-600"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU SLIDE DOWN */}
      {openMenu && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 px-6 py-4 animate-slideDown">

          {/* Preschool Mobile Dropdown */}
          <div>
            <button
              className="w-full flex justify-between items-center bg-purple-600 text-white px-5 py-3 rounded-xl font-semibold"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              Preschool
              <span className={`${openDropdown && "rotate-180"} transition-all`}>
                ▼
              </span>
            </button>

            {/* Mobile Dropdown List */}
            {openDropdown && (
              <div className="mt-2 bg-white border rounded-xl shadow-md overflow-hidden">
                {programs.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    onClick={() => setOpenMenu(false)}
                    className="flex items-center gap-3 px-4 py-3 border-b last:border-b-0 hover:bg-purple-50"
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Partner Button */}
          <Link
            to="/be-a-partner"
            onClick={() => setOpenMenu(false)}
            className="block mt-4 w-full text-center py-3 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all"
          >
            Be A Partner →
          </Link>
        </div>
      )}
    </nav>
  );
}

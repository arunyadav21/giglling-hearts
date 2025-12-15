import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaChild, FaHeart, FaBookOpen, FaRunning, FaShieldAlt } from "react-icons/fa";

export default function Daycare() {
  return (
    <div className="min-h-screen bg-white pt-20">

      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-28 px-4"
        style={{ backgroundImage: "url('/daycare1.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-purple-800/80 via-purple-600/70 to-pink-500/70"></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold"
          >
            Daycare Services
          </Motion.h1>

          <p className="text-xl mt-4 opacity-90">
            For children of all ages — safe care, fun & learning
          </p>

          <p className="max-w-2xl mx-auto mt-6 text-lg opacity-95">
            A home-away-from-home environment where kids are nurtured,
            engaged, and cared for with love.
          </p>

          {/* REDIRECT BUTTON */}
          <Link to="/PreschoolForm">
            <Motion.button
              whileHover={{ scale: 1.08 }}
              className="mt-10 px-10 py-4 bg-white text-purple-600 font-bold
              text-lg rounded-2xl shadow-xl hover:bg-purple-50 transition-all
              flex items-center gap-3 mx-auto"
            >
              Enquire Now
            </Motion.button>
          </Link>
        </div>
      </section>

      {/* WHY DAYCARE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Our Daycare?</h2>
          <p className="text-lg text-gray-600">
            Safe, loving, and stimulating environment for your child.
          </p>
          <p className="text-lg text-gray-600">
            We combine play, learning, nutrition, and supervision
            for holistic development.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-4 bg-linear-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            { icon: <FaHome />, title: "Safe & Secure", desc: "Comfortable home-like care." },
            { icon: <FaShieldAlt />, title: "Trusted Hygiene", desc: "Sanitized & supervised." },
            { icon: <FaChild />, title: "All Ages Welcome", desc: "From toddlers to school-goers." },
            { icon: <FaBookOpen />, title: "Activity Learning", desc: "Stories, fun, & creativity." },
            { icon: <FaRunning />, title: "Outdoor Play", desc: "Motor skill development." },
            { icon: <FaHeart />, title: "Emotional Growth", desc: "Social skills & bonding." },
          ].map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center"
            >
              <div className="text-4xl text-purple-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </Motion.div>
          ))}

        </div>
      </section>

      {/* IMAGE */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <img
            src="/daycare2.jpg"
            alt="Daycare Class"
            className="w-full rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-linear-to-r from-purple-600 to-pink-500 text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Let Your Child Thrive with Us!</h2>
          <p className="text-lg opacity-90 mb-8">
            Ready for secure, engaging, and loving daycare care?
          </p>

          {/* CONTACT → PRESCHOOL FORM */}
          <Link to="/PreschoolForm">
            <Motion.button
              whileHover={{ scale: 1.07 }}
              className="px-10 py-4 bg-white text-purple-600 rounded-2xl font-bold shadow-xl hover:bg-gray-50 transition-all flex items-center gap-3 mx-auto"
            >
              Contact Us
            </Motion.button>
          </Link>
        </div>
      </section>

    </div>
  );
}

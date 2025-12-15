import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBook, FaPaintBrush, FaChild, FaStar, FaBrain, FaUsers, FaArrowRight } from "react-icons/fa";

export default function Kindergarten() {
  return (
    <div className="min-h-screen bg-white pt-20">

      {/* HERO SECTION with background image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-28 px-4"
        style={{ backgroundImage: "url('/kinder1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-purple-800/80 via-purple-600/70 to-pink-500/70"></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Kindergarten Program
          </Motion.h1>

          <p className="text-xl mt-4 font-medium opacity-90">For children aged 5 – 6 years</p>

          <p className="max-w-2xl mx-auto mt-6 text-lg opacity-95">
            A strong foundation for school and beyond — holistic development through academics, creativity, and values.
          </p>

          {/* Redirect to PreschoolForm */}
          <Link to="/PreschoolForm">
            <Motion.button
              whileHover={{ scale: 1.08 }}
              className="mt-10 px-10 py-4 bg-white text-purple-600 font-bold text-lg 
              rounded-2xl shadow-xl hover:bg-purple-50 transition-all flex items-center gap-3 mx-auto"
            >
              Enroll Now <FaArrowRight />
            </Motion.button>
          </Link>
        </div>
      </section>

      {/* WHY KINDERGARTEN */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Why Our Kindergarten?</h2>
          <p className="text-lg text-gray-600">
            Structured learning with nurture — focusing on academics, creativity, and emotional growth.
          </p>
          <p className="text-lg text-gray-600">
            Includes maths, language, reasoning, arts, music, play, and life skills.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-16 px-4 bg-linear-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            { icon: <FaBook />, title: "Academic Readiness", desc: "Maths, language, problem-solving basics." },
            { icon: <FaPaintBrush />, title: "Creative Arts", desc: "Art, craft, music & imagination building." },
            { icon: <FaChild />, title: "Physical & Life Skills", desc: "Outdoor play, motor development, life skills." },
            { icon: <FaBrain />, title: "Cognitive Development", desc: "Memory, reasoning, thinking activities." },
            { icon: <FaUsers />, title: "Social & Emotional Growth", desc: "Empathy, confidence, teamwork." },
            { icon: <FaStar />, title: "School Readiness", desc: "Fully prepared for formal schooling." },
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
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </Motion.div>
          ))}

        </div>
      </section>

      {/* GALLERY IMAGE */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <img
            src="/kinder3.jpg"
            alt="Kindergarten Classroom"
            className="w-full rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-linear-to-r from-purple-600 to-pink-500 text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready for the Big Step? Enroll Now!</h2>
          <p className="text-lg opacity-90 mb-8">
            Limited seats available. Secure your child's bright future.
          </p>

          {/* Redirect Button */}
          <Link to="/PreschoolForm">
            <Motion.button
              whileHover={{ scale: 1.07 }}
              className="px-10 py-4 bg-white text-purple-600 rounded-2xl font-bold 
              shadow-xl hover:bg-gray-50 transition-all flex items-center gap-3 mx-auto"
            >
              Book a Seat <FaArrowRight />
            </Motion.button>
          </Link>
        </div>
      </section>

    </div>
  );
}

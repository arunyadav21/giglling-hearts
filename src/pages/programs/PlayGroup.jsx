import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaPaintBrush, FaUsers, FaSmile, FaChild, FaArrowRight } from "react-icons/fa";

export default function PlayGroup() {
  return (
    <div className="min-h-screen bg-white pt-20">

      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-28 px-4"
        style={{ backgroundImage: "url('/pre school.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-purple-800/80 via-purple-600/70 to-pink-500/70"></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Play Group Program
          </Motion.h1>

          <p className="text-xl mt-4 font-medium opacity-90">
            For Children Aged <span className="font-bold">18 – 24 Months</span>
          </p>

          <p className="max-w-2xl mx-auto mt-6 text-lg opacity-95">
            A loving beginning where tiny steps turn into big achievements — 
            play, explore, smile & learn every day!
          </p>

          {/* Redirect → PreschoolForm */}
          <Link to="/PreschoolForm">
            <Motion.button
              whileHover={{ scale: 1.08 }}
              className="mt-10 px-10 py-4 bg-white text-purple-600 font-bold text-lg 
              rounded-2xl shadow-xl hover:bg-purple-50 transition-all flex items-center gap-3 mx-auto"
            >
              Enquire Now <FaArrowRight />
            </Motion.button>
          </Link>
        </div>
      </section>

      {/* PROGRAM DESCRIPTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Our Play Group?
          </h2>

          <p className="text-lg text-gray-600">
            The perfect first step to structured learning — our Play Group classroom
            helps toddlers grow emotionally, socially, and intellectually through
            guided play and exploration.
          </p>

          <p className="text-lg text-gray-600">
            Through circle time, sensory play, music, art, and hands-on activities,
            children build foundational skills that prepare them for preschool and beyond.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4 bg-linear-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            { icon: <FaShieldAlt />, title: "Safe & Secure", desc: "CCTV monitoring, sanitized spaces & child-safe interiors." },
            { icon: <FaChild />, title: "Play-Based Learning", desc: "Kids learn naturally while playing & discovering." },
            { icon: <FaPaintBrush />, title: "Creative Activities", desc: "Art, craft & sensory tasks to boost imagination." },
            { icon: <FaSmile />, title: "Emotional Growth", desc: "Positive social interactions build confidence." },
            { icon: <FaUsers />, title: "Small Groups", desc: "Individual attention to nurture every child’s growth." },
            { icon: <FaArrowRight />, title: "Nursery Ready", desc: "Smooth transition to structured schooling." },
          ].map((item, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-default text-center"
            >
              <div className="text-4xl text-purple-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </Motion.div>
          ))}

        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <img
            src="/Play-School.jpg"
            className="w-full rounded-3xl shadow-2xl object-cover"
            alt="Play Group Classroom"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-linear-to-r from-purple-600 to-pink-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Begin Their Learning Journey!</h2>

          <p className="text-lg opacity-90 mb-10">
            Limited seats available. Secure your child’s admission today.
          </p>

          {/* Redirect → PreschoolForm */}
          <Link to="/PreschoolForm">
            <Motion.button
              whileHover={{ scale: 1.07 }}
              className="px-10 py-4 bg-white text-purple-600 rounded-2xl font-bold 
              shadow-xl hover:bg-gray-50 transition-all mx-auto flex items-center gap-3"
            >
              Book a Visit <FaArrowRight />
            </Motion.button>
          </Link>

        </div>
      </section>

    </div>
  );
}

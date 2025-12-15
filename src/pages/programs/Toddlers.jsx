import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaCheckCircle, FaChild, FaHeart, FaBrain, FaHandsHelping, 
  FaMusic, FaPalette, FaBookOpen, FaPuzzlePiece, FaUsers, 
  FaGraduationCap, FaStar 
} from 'react-icons/fa';
import { GiJumpingRope, GiTeacher } from 'react-icons/gi';

export default function Toddlers() {
  return (
    <div className="pt-20 bg-linear-to-b from-white to-purple-50 min-h-screen">

      {/* HERO HEADER */}
      <section className="relative overflow-hidden bg-linear-to-r from-purple-600 via-pink-500 to-purple-700 text-white py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">👶</div>
          <div className="absolute top-20 right-20 text-6xl">🧸</div>
          <div className="absolute bottom-20 left-1/4 text-6xl">🎨</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">For Little Explorers</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Toddlers Program
            </h1>

            <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full mb-6">
              <FaChild className="text-lg" />
              <span className="text-lg font-semibold">
                Age Group: <span className="text-yellow-300">1.5 – 2.5 years</span>
              </span>
            </div>

            <p className="text-xl opacity-95 max-w-3xl mx-auto">
              Holistic development through playful learning, curiosity building, and emotional growth
            </p>
          </Motion.div>
        </div>
      </section>

      {/* PROGRAM INTRO WITH STATS */}
      <section className="py-16 relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-4xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "2:10", label: "Teacher Ratio", icon: "👩‍🏫" },
              { number: "85%", label: "Social Growth", icon: "👥" },
              { number: "95%", label: "Parent Satisfaction", icon: "⭐" },
              { number: "100%", label: "Safe Environment", icon: "🛡️" }
            ].map((stat, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl text-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-purple-600 mb-1">{stat.number}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </Motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* IMAGE */}
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://medlineplus.gov/images/ToddlerDevelopment_share.jpg"
                  alt="Toddler learning"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Motion.div>

            {/* CONTENT */}
            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm font-semibold">PROGRAM OVERVIEW</span>
              </div>

              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Nurturing Young <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">Minds</span>
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Toddlers learn through hands-on activities, sensory play and interactive exploration.
              </p>

              <div className="space-y-4">
                {[
                  "Early communication & vocabulary development",
                  "Social interaction & sharing habits",
                  "Motor skill coordination & balance",
                  "Recognition of colors, shapes & sounds",
                  "Confidence and emotional expression"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-purple-500 text-xl" />
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-10">What Children Learn</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <GiJumpingRope />, title: "Motor Skills", desc: "Movement & balance" },
              { icon: <GiTeacher />, title: "Speech", desc: "Early language" },
              { icon: <FaBrain />, title: "Sensory Play", desc: "Texture & sound" },
              { icon: <FaHeart />, title: "Emotions", desc: "Understanding feelings" },
              { icon: <FaPalette />, title: "Creativity", desc: "Art & imagination" },
              { icon: <FaPuzzlePiece />, title: "Problem Solving", desc: "Logic & reasoning" },
              { icon: <FaMusic />, title: "Music Time", desc: "Rhythm & songs" },
              { icon: <FaBookOpen />, title: "Storytelling", desc: "Drama & expression" }
            ].map((item, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-xl text-center hover:-translate-y-1 transition"
              >
                <div className="text-purple-500 text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-linear-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Start Your Toddler's Journey?
          </h3>

          <p className="text-lg opacity-90 mb-10">
            Limited seats available — enroll now!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* ENROLL BUTTON → Redirect */}
            <Link to="/PreschoolForm">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-xl flex items-center gap-3"
              >
                <FaChild /> Enroll Your Toddler Now
              </Motion.button>
            </Link>

            {/* FREE TRIAL BUTTON → Redirect */}
            <Link to="/PreschoolForm">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl"
              >
                Schedule a Free Trial
              </Motion.button>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}

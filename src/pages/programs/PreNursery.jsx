import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaPaintBrush, 
  FaMusic, 
  FaChild, 
  FaStar, 
  FaBookOpen, 
  FaPuzzlePiece,
  FaArrowRight
} from "react-icons/fa";

export default function PreNursery() {
  return (
    <div className="min-h-screen bg-white pt-20">

      {/* HERO SECTION with background image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-28 px-4"
        style={{ backgroundImage: "url('/pre school.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-purple-800/80 via-purple-600/70 to-pink-500/70"></div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Pre-Nursery Program
          </Motion.h1>

          <p className="text-xl mt-4 font-medium opacity-90">For children aged 3 to 4 years</p>

          <p className="max-w-2xl mx-auto mt-6 text-lg opacity-95">
            A nurturing environment where creativity, learning and curiosity bloom together.
          </p>

          {/* Redirect → PreschoolForm */}
          <Link to="/PreschoolForm">
            <Motion.button
              whileHover={{ scale: 1.08 }}
              className="mt-10 px-10 py-4 bg-white text-purple-600 font-bold text-lg 
              rounded-2xl shadow-xl hover:bg-purple-50 transition-all flex items-center gap-3 mx-auto"
            >
              Enrol Now <FaStar />
            </Motion.button>
          </Link>
        </div>
      </section>

      {/* ABOUT / DESCRIPTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Why Our Pre-Nursery?</h2>
          <p className="text-lg text-gray-600">
            At this crucial stage of early childhood, our Pre-Nursery program focuses on foundational skills 
            through play-based learning, creative expression, and a safe, loving environment.
          </p>
          <p className="text-lg text-gray-600">
            Through music, art, stories, group activities and structured learning, children build confidence, 
            social skills, and readiness for formal schooling.
          </p>
        </div>
      </section>

      {/* FEATURES / BENEFITS GRID */}
      <section className="py-16 px-4 bg-linear-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <FaChild />, title: "Individual Attention", desc: "Small groups ensure personalized care & learning." },
            { icon: <FaPaintBrush />, title: "Creative Arts", desc: "Arts & crafts encourage imagination & fine-motor skills." },
            { icon: <FaMusic />, title: "Music & Rhymes", desc: "Fun songs & rhymes help with memory & language skills." },
            { icon: <FaBookOpen />, title: "Intro to Basics", desc: "Gentle introduction to letters, numbers & shapes." },
            { icon: <FaPuzzlePiece />, title: "Learning Through Play", desc: "Hands-on play makes learning joyful and effective." },
            { icon: <FaStar />, title: "Ready for Nursery", desc: "Prepares children emotionally and socially for school transition." },
          ].map((item, idx) => (
            <Motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center"
            >
              <div className="text-purple-600 mb-4 text-4xl">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <img
            src="/be a partner4.jpg"
            alt="Pre-Nursery Classroom"
            className="w-full rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-linear-to-r from-purple-600 to-pink-500 text-white text-center px-4">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-4xl font-bold mb-4">Enroll Your Child Today!</h2>

          <p className="text-lg opacity-90 mb-8">
            Limited seats available. Give your child a joyful and strong start.
          </p>

          {/* Redirect → PreschoolForm */}
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

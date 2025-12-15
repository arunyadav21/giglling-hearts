import { motion as Motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  FaChild, 
  FaHeart, 
  FaBrain, 
  FaHandsHelping, 
  FaPaintBrush,
  FaMusic,
  FaGraduationCap,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaStar,
  FaSmile
} from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="bg-linear-to-b from-white to-purple-50 pt-20">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24 bg-linear-to-r from-purple-600 via-pink-500 to-purple-700 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">👶</div>
          <div className="absolute top-20 right-20 text-6xl">❤️</div>
          <div className="absolute bottom-20 left-1/4 text-6xl">🎨</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">WELCOME TO OUR FAMILY</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-orange-300">Giglings Hearts</span>
            </h1>
            
            <p className="text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto mb-10">
              Shaping confident, curious, and joyful learners through love, learning and exploration
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: "👶", label: "Age 1.5-6 Years" },
                { icon: "⭐", label: "15+ Years Experience" },
                { icon: "🏆", label: "50+ Centers" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* OUR TEAM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm font-semibold text-purple-700">OUR TEAM</span>
              </div>

              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Meet Our <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">Expert Team</span>
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <strong className="text-purple-600">Giglling Hearts</strong>, our little geniuses learn with the help of 
                caring early-childhood teachers. They understand child development deeply and are trained to 
                observe and guide each child's growth every day.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Parents are also actively involved in their child's learning journey. Our focus lies on:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <FaChild className="text-2xl" />, text: "Motor Skills Development" },
                  { icon: <FaBrain className="text-2xl" />, text: "Language & Communication" },
                  { icon: <FaPaintBrush className="text-2xl" />, text: "Creative Activities" },
                  { icon: <FaMusic className="text-2xl" />, text: "Music & Dance" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                    <div className="text-purple-500">{item.icon}</div>
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our aim is to help every child grow naturally and reach their full potential. Because of this approach, 
                children at Giglings Hearts are always well-prepared for school and lifelong learning.
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.thestatesman.com/wp-content/uploads/2022/01/play.jpg"
                  alt="Our Team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-linear-to-r from-purple-600 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
                <FaUsers className="text-4xl" />
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section className="py-20 bg-linear-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-semibold text-purple-700">TOP FACILITIES</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              World-Class <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">Facilities</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide everything possible to help children grow emotionally, physically, mentally, and socially
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaShieldAlt className="text-3xl" />, title: "Safe Campus", desc: "CCTV surveillance & secure environment" },
              { icon: "❄️", title: "AC Classrooms", desc: "Fully air-conditioned learning spaces" },
              { icon: "🚌", title: "Learning Trips", desc: "Educational outings and field trips" },
              { icon: "🎪", title: "Indoor Play Area", desc: "Themed play zones for fun learning" },
              { icon: <FaPaintBrush className="text-3xl" />, title: "Art Rooms", desc: "Creative spaces for artistic expression" },
              { icon: <FaGraduationCap className="text-3xl" />, title: "Trained Staff", desc: "Passionate and qualified teachers" }
            ].map((facility, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-purple-500 mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{facility.title}</h3>
                <p className="text-gray-600">{facility.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL LIFE EXERCISES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-semibold text-purple-700">LIFE SKILLS</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Exercises of <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">Practical Life</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Children love helping adults with their daily activities. When encouraged,
                they feel independent and confident. These exercises help build social skills,
                discipline, independence, and fine motor control.
              </p>

              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Introductory Activities",
                    desc: "Learn basics like rolling/unrolling a mat, placing a chair, and walking on a line."
                  },
                  {
                    number: "02",
                    title: "Self-care & Hygiene",
                    desc: "Washing hands, brushing teeth, opening lunch boxes, tying shoes, packing bags."
                  },
                  {
                    number: "03",
                    title: "Care of Environment",
                    desc: "Setting and cleaning a table, watering plants, handling spills responsibly."
                  },
                  {
                    number: "04",
                    title: "Social Courtesies",
                    desc: "Saying 'please' & 'thank you', shaking hands, polite conversation and manners."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-purple-50 rounded-xl">
                    <div className="'flex-shrink-0' w-12 h-12 bg-linear-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">{item.number}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2025/12/565242457/HN/OY/ZD/3221964/play-school-furniture-1000x1000.jpeg"
                  alt="Practical Life Exercises"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-linear-to-r from-pink-500 to-purple-500 text-white p-6 rounded-2xl shadow-xl">
                <FaHandsHelping className="text-4xl" />
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* SENSORY DEVELOPMENT */}
      <section className="py-20 bg-linear-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-semibold text-purple-700">SENSORY LEARNING</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Sensory <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">Development</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Enhancing learning through sight, touch, taste, smell & hearing
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {[
              { icon: "👁️", title: "Visual Sense", desc: "Understanding size, shapes & colors" },
              { icon: "👂", title: "Auditory Sense", desc: "Enhanced sensitivity to sound and music" },
              { icon: "👐", title: "Tactile Sense", desc: "Learning through textures, temperature & weight" },
              { icon: "👃", title: "Olfactory Sense", desc: "Recognizing smells and food experiences" },
              { icon: "👅", title: "Gustatory Sense", desc: "Identifying sweet, salty, sour & bitter" }
            ].map((sense, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{sense.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{sense.title}</h4>
                <p className="text-sm text-gray-600">{sense.desc}</p>
              </Motion.div>
            ))}
          </div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-purple-600 to-pink-500 p-8 rounded-3xl text-white"
          >
            <p className="text-xl text-center">
              Through sensory activities, children develop reading, writing and thinking readiness.
              They begin identifying alphabets through touch, sight, and sound—making learning meaningful
              and joyful.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* FINAL MISSION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 text-6xl text-purple-200">❝</div>
            <div className="absolute -bottom-6 -right-6 text-6xl text-purple-200">❞</div>
            
            <div className="relative z-10">
              <FaHeart className="text-5xl text-pink-500 mx-auto mb-6" />
              <h3 className="text-4xl font-bold mb-8 text-gray-900">
                Our <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">Mission</span>
              </h3>
              
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                To nurture young minds with love, creativity, and excellence—building a strong foundation 
                for lifelong learning and success.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                {[
                  { icon: <FaSmile className="text-3xl" />, text: "Happy Children" },
                  { icon: <FaStar className="text-3xl" />, text: "Quality Education" },
                  { icon: <FaLightbulb className="text-3xl" />, text: "Innovative Learning" },
                  { icon: <FaHeart className="text-3xl" />, text: "Loving Environment" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className="text-purple-500">{item.icon}</div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

    
    </div>
  );
}
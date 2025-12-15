import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaChild,
  FaHeart,
  FaMusic,
  FaRunning,
  FaUsers,
  FaHandsHelping,
  FaLightbulb,
  FaGraduationCap,
  FaStar,
  FaLeaf,
  FaPalette,
  FaBookOpen,
} from "react-icons/fa";
import { GiFairyWand, GiBrain } from "react-icons/gi";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-white via-purple-50/30 to-white pt-20">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT CONTENT */}
          <Motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-purple-700">
                India&apos;s #1 Preschool
              </span>
            </div>

            <h1 className="text-transparent bg-clip-text font-bold leading-tight mb-6 bg-linear-to-r from-purple-600 to-pink-500 ">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
                Giglling Hearts
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A happy, safe & nurturing preschool where children explore,
              imagine, and learn joyfully every day.
            </p>

            {/* UPDATED BUTTONS → preschool form */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/PreschoolForm">
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Book Your Seat Now
                </Motion.button>
              </Link>

              <Link to="/PreschoolForm">
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-xl shadow-lg hover:bg-purple-50 transition-all duration-300"
                >
                  Schedule a Visit
                </Motion.button>
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              {[
                { count: "50+", label: "Centers", color: "text-purple-600" },
                { count: "1000+", label: "Happy Kids", color: "text-pink-500" },
                { count: "15+", label: "Years Experience", color: "text-purple-400" },
              ].map((item, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`text-3xl font-bold mb-1 ${item.color}`}>
                    {item.count}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          {/* RIGHT HERO IMAGE */}
          <Motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/gallery4.jpg"
                alt="Happy children learning"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">A Joyful Start to Learning</h3>
                <p className="opacity-90">Where every day is full of curiosity & smiles</p>
              </div>
            </div>
          </Motion.div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-amber-300">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
                Giglling Hearts?
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We create the perfect environment for your child&apos;s growth and development.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart className="text-4xl" />,
                title: "Safe & Loving Care",
                desc: "Warm environment with certified, compassionate educators.",
              },
              {
                icon: <GiBrain className="text-4xl" />,
                title: "Smart Learning",
                desc: "Play-based curriculum that builds confidence and curiosity.",
              },
              {
                icon: <FaChild className="text-4xl" />,
                title: "Home-like Space",
                desc: "Comfortable, vibrant environment that children love.",
              },
            ].map((item, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-purple-500 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDATION LEARNING SECTION */}
      <section className="py-20 bg-linear-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <span className="text-sm font-semibold text-purple-700">OUR FOUNDATION</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
                Foundation Learning
              </span>
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              At Giglling Hearts, we provide everything children need to grow
              emotionally, physically, mentally and socially.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <GiFairyWand className="text-3xl" />,
                title: "Individualized Learning",
                desc: "Each child learns at their own pace in a supportive environment.",
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: "Social & Emotional Growth",
                desc: "Builds confidence and prepares for positive relationships.",
              },
              {
                icon: <FaLightbulb className="text-3xl" />,
                title: "Critical Skills Development",
                desc: "Develops problem-solving abilities through hands-on learning.",
              },
              {
                icon: <FaGraduationCap className="text-3xl" />,
                title: "Beyond Classroom",
                desc: "Enriching activities that make learning fun and comprehensive.",
              },
            ].map((item, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-purple-500 mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Motion.div>
            ))}
          </div>

          {/* Enrichment Activities */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
              Enrichment Activities
            </h3>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                  <FaMusic className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900">Music & Dance</h4>
                  <p className="text-gray-600">
                    Helps children be creative and express themselves.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-teal-400 rounded-xl flex items-center justify-center">
                  <FaRunning className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900">Physical Education</h4>
                  <p className="text-gray-600">
                    Develops important skills while keeping them active.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ALL DAY ACTIVITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <span className="text-sm font-semibold text-purple-700">DAILY ACTIVITIES</span>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-amber-700">
              All Day{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
                Activities
              </span>
            </h2>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[

              {
                icon: "🕒",
                title: "Circle Time",
                benefits: "Social interaction, listening skills, group participation.",
                activities: "Morning routine, calendar review.",
              },
              {
                icon: "🤝",
                title: "Good Manners",
                benefits: "Kindness, respect, interaction.",
                activities: "Sharing, polite communication.",
              },
              {
                icon: "🎵",
                title: "Music & Movement",
                benefits: "Coordination, rhythm, expression.",
                activities: "Songs, dance sessions.",
              },
              {
                icon: "📚",
                title: "Storytelling",
                benefits: "Language, imagination.",
                activities: "Books, group storytelling.",
              },
              {
                icon: "🎨",
                title: "Art & Craft",
                benefits: "Creativity, fine motor skills.",
                activities: "Painting, clay modeling.",
              },
              {
                icon: "🏃",
                title: "Outdoor Play",
                benefits: "Physical strength, teamwork.",
                activities: "Running, sports, sand play.",
              },

            ].map((activity, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{activity.title}</h4>

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-purple-600 mb-1">Benefits:</p>
                    <p className="text-gray-600">{activity.benefits}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-600 mb-1">Activities:</p>
                    <p className="text-gray-600">{activity.activities}</p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
          {/* More Activities */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <FaHandsHelping className="text-4xl" />,
                title: "Dramatic Play",
                points: [
                  "Use imagination to create stories.",
                  "Practice communication skills.",
                  "Role-playing real-life situations.",
                ],
              },
              {
                icon: <FaLeaf className="text-4xl" />,
                title: "Science Exploration",
                points: [
                  "Basic math & counting concepts.",
                  "Hands-on science experiments.",
                  "Nature exploration and observation.",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-purple-500 mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-20 bg-linear-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-blue-500">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
                Programs
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Age-appropriate programs designed for holistic development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Toddlers",
                age: "1.5–2.5 years",
                icon: "👶",
                color: "bg-pink-100",
                link: "/programs/toddlers",
              },
              {
                name: "Play Group",
                age: "2.5–3.5 years",
                icon: "🎨",
                color: "bg-purple-100",
                link: "/programs/play-group",
              },
              {
                name: "Pre-Nursery",
                age: "3–4 years",
                icon: "🌟",
                color: "bg-yellow-100",
                link: "/programs/pre-nursery",
              },
              {
                name: "Nursery",
                age: "4–5 years",
                icon: "📚",
                color: "bg-blue-100",
                link: "/programs/nursery",
              },
              {
                name: "Kindergarten",
                age: "5–6 years",
                icon: "🎓",
                color: "bg-green-100",
                link: "/programs/kindergarten",
              },
              {
                name: "Daycare",
                age: "All ages",
                icon: "🏠",
                color: "bg-orange-100",
                link: "/programs/daycare",
              },
            ].map((program, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <Link to={program.link} className="block">
                  <div
                    className={`h-32 ${program.color} flex items-center justify-center`}
                  >
                    <span className="text-6xl">{program.icon}</span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-1 text-gray-900">
                      {program.name}
                    </h4>
                    <p className="text-gray-600 mb-4">Age: {program.age}</p>
                    <div className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <span>→</span>
                    </div>
                  </div>
                </Link>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GIGGLING HEARTS PARTNERSHIP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-linear-to-r from-purple-600 to-pink-500 rounded-3xl p-12 shadow-2xl">
            <div className="text-center text-white mb-8">
              <FaStar className="text-4xl mx-auto mb-4 text-yellow-300" />
              <h3 className="text-3xl font-bold mb-4">
                Giglling Hearts Partnership
              </h3>
              <p className="text-lg opacity-95 max-w-3xl mx-auto">
                We believe in growing together with our partners. Our
                partnerships are open to everyone and designed for mutual
                success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              {[ 
                "Shared Vision & Goals",
                "Strong Earning Potential",
                "Complete Support System",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-linear-to-br from-purple-600 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl shadow-2xl"
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Begin Your Child&apos;s Journey?
            </h3>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Limited seats available. Book your visit today and give your child
              the best start.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/PreschoolForm">
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl hover:bg-gray-50 transition-all duration-300"
                >
                  Book Your Seat Now
                </Motion.button>
              </Link>

              <Link to="/PartnerForm">
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Become a Partner
                </Motion.button>
              </Link>
            </div>
          </Motion.div>

          {/* GALLERY SECTION */}
          <Gallery />
        </div>
      </section>
    </div>
  );
}

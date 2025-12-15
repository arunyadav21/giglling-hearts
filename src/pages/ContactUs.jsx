import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaPhone,
  FaComment
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

export default function ContactUs() {
  return (
    <div className="bg-linear-to-b from-white to-purple-50 min-h-screen pt-20">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24 bg-linear-to-r from-purple-600 via-pink-500 to-purple-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">📞</div>
          <div className="absolute top-20 right-20 text-6xl">📍</div>
          <div className="absolute bottom-20 left-1/4 text-6xl">✉️</div>
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
              <span className="text-sm font-semibold">GET IN TOUCH</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Contact <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-orange-300">Us</span>
            </h1>
            
            <p className="text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto mb-10">
              We are here to answer your questions and help you begin your child's journey into joyful learning.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: "⏰", label: "Mon-Sat: 9AM-7PM" },
                { icon: "📧", label: "24hr Response" },
                { icon: "🎯", label: "Free Consultation" }
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

      {/* CONTACT INFO + FORM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* CONTACT DETAILS */}
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm font-semibold text-purple-700">OUR CONTACTS</span>
                </div>

                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Get in <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">Touch</span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Have a question? Want to book a school tour? Feel free to reach out — we'd love to help!
                </p>
              </div>

              {/* CONTACT CARDS */}
              <div className="space-y-6">
                {[
                  {
                    icon: <FaPhoneAlt className="text-3xl" />,
                    title: "Call Us",
                    info: "+91 98765 43210",
                    subtext: "Mon-Sat, 9AM to 7PM",
                    color: "from-blue-500 to-blue-600",
                    bg: "bg-blue-50"
                  },
                  {
                    icon: <FaEnvelope className="text-3xl" />,
                    title: "Email Us",
                    info: "info@giglingshearts.com",
                    subtext: "Response within 24 hours",
                    color: "from-purple-500 to-purple-600",
                    bg: "bg-purple-50"
                  },
                  {
                    icon: <FaMapMarkerAlt className="text-3xl" />,
                    title: "Visit Us",
                    info: "Chandigarh, India",
                    subtext: "Head Office Location",
                    color: "from-pink-500 to-pink-600",
                    bg: "bg-pink-50"
                  },
                  {
                    icon: <FaClock className="text-3xl" />,
                    title: "Office Hours",
                    info: "Monday to Saturday",
                    subtext: "9:00 AM - 7:00 PM",
                    color: "from-green-500 to-green-600",
                    bg: "bg-green-50"
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`${item.bg} p-6 rounded-2xl shadow-lg hover:shadow-xl transition`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 bg-linear-to-r ${item.color} rounded-xl flex items-center justify-center`}>
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-1 text-gray-900">{item.title}</h4>
                        <p className="text-lg font-semibold text-gray-800 mb-1">{item.info}</p>
                        <p className="text-gray-600">{item.subtext}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Motion.div>
                        {/* FORM SECTION 
            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="sticky top-24">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-purple-100">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-linear-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaPaperPlane className="text-white text-2xl" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-gray-900">
                      Send Us a Message
                    </h3>
                    <p className="text-gray-600">
                      Fill the form below and we'll get back to you soon
                    </p>
                  </div>

                  
                  <form className="space-y-6">

                    
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <FaUser />
                      </div>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl 
                        focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all"
                      />
                    </div>

                    
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <FaEnvelope />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl 
                        focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all"
                      />
                    </div>

                    
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <FaPhone />
                      </div>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl 
                        focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all"
                      />
                    </div>

                    
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-gray-400">
                        <FaComment />
                      </div>
                      <textarea
                        rows={5}
                        placeholder="Your Message"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl 
                        focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all resize-none"
                      ></textarea>
                    </div>

                    
                    <Link to="/PreschoolForm">
                      <Motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        className="w-full py-4 bg-linear-to-r from-purple-600 to-pink-500 text-white 
                        font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                        flex items-center justify-center gap-3 group"
                      >
                        <span>Send Message</span>
                        <IoMdSend className="group-hover:translate-x-1 transition-transform" />
                      </Motion.button>
                    </Link>

                    <p className="text-center text-sm text-gray-500 mt-6">
                      Your information is secure. We don't share your details with anyone.
                    </p>

                  </form>
                   

                </div>
              </div>
            </Motion.div> */}
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-20 bg-linear-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-semibold text-purple-700">FIND US</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Visit Our <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">Campus</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-purple-100">
            <div className="grid lg:grid-cols-3">

              {/* MAP BOX */}
              <div className="lg:col-span-2 h-96 bg-linear-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-6xl text-purple-400 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Visit our beautiful campus in Chandigarh. Schedule a tour to experience our facilities firsthand.
                  </p>
                </div>
              </div>

              {/* RIGHT DETAILS BOX */}
              <div className="bg-linear-to-b from-purple-600 to-pink-500 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Campus Visit Details</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">Address</h4>
                    <p className="text-white/90">
                      Giglings Hearts Preschool <br />
                      Sector 15, Chandigarh <br />
                      Punjab, India - 160015
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Tour Timings</h4>
                    <p className="text-white/90">
                      Monday to Saturday <br />
                      10:00 AM - 5:00 PM <br />
                      By appointment only
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Parking</h4>
                    <p className="text-white/90">
                      Ample parking available <br />
                      Secure premises <br />
                      Wheelchair accessible
                    </p>
                  </div>
                </div>

                {/* CAMPUS TOUR BUTTON → REDIRECT */}
                <Link to="/PreschoolForm">
                  <Motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-8 py-3 bg-white text-purple-600 font-bold rounded-xl 
                    shadow-lg hover:shadow-xl transition-all"
                  >
                    Book Campus Tour
                  </Motion.button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Frequently <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">Asked Questions</span>
            </h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[ 
              {
                question: "What are the admission requirements?",
                answer: "We accept children aged 1.5-6 years. Requirements include birth certificate, health records, and parent ID."
              },
              {
                question: "What is the teacher-to-student ratio?",
                answer: "We maintain a 1:10 ratio to ensure each child gets personal attention."
              },
              {
                question: "Do you provide transportation?",
                answer: "Yes, we provide safe transportation with GPS tracking & female attendants."
              },
              {
                question: "What is the fee structure?",
                answer: "Fees differ by program. Contact us or submit an enquiry for details."
              }
            ].map((faq, idx) => (
              <div key={idx} 
                className="border border-purple-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                
                <details className="group">
                  <summary className="list-none p-6 cursor-pointer flex justify-between items-center bg-purple-50 hover:bg-purple-100">
                    <h4 className="font-bold text-gray-900 text-lg">{faq.question}</h4>
                    <span className="text-purple-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>

                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600">{faq.answer}</p>

                    {/* CTA INSIDE FAQ → REDIRECT */}
                    <Link to="/PreschoolForm">
                      <Motion.button
                        whileHover={{ scale: 1.03 }}
                        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700"
                      >
                        Contact for Details
                      </Motion.button>
                    </Link>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BEFORE FOOTER */}
      <section className="py-16 bg-linear-to-r from-purple-600 to-pink-500 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Want to Know More?</h2>
        <p className="text-lg opacity-90 mb-8">We’re always here to help parents make the right choice.</p>

        <Link to="/PreschoolForm">
          <Motion.button
            whileHover={{ scale: 1.06 }}
            className="px-10 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-xl hover:bg-gray-100 transition-all"
          >
            Send an Enquiry
          </Motion.button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}


import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  FaCheckCircle, 
  FaHandshake, 
  FaChartLine, 
  FaShieldAlt, 
  FaUsers, 
  FaGraduationCap,
  FaLightbulb,
  FaStar
} from 'react-icons/fa';
import { GiGrowth, GiTakeMyMoney } from 'react-icons/gi';

export default function BeAPartner() {

  return ( 
    <div className="min-h-screen bg-white pt-20">

      {/* HERO SECTION */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <img
          src="/Play-School.jpg"
          alt="Become a Partner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-purple-900/80 to-pink-900/60"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">FRANCHISE OPPORTUNITY</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Become A <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-orange-300">Partner</span>
            </h1>
            
            <p className="text-xl lg:text-2xl max-w-3xl mb-10">
              Join India's fastest growing preschool franchise network and build a successful business with our proven model.
            </p>

            {/* REDIRECT BUTTON */}
            <Link to="/PartnerForm">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-linear-to-r from-yellow-400 to-orange-400 text-purple-900 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg"
              >
                Start Your Franchise Journey
              </Motion.button>
            </Link>

          </Motion.div>
        </div>
      </section>


      {/* WHY CHOOSE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-semibold text-purple-700">WHY CHOOSE US</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">Giglling Hearts Franchise?</span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join 200+ successful partners across India with our comprehensive franchise support system
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FaChartLine className="text-5xl" />,
                title: "Proven Business Model",
                desc: "15+ years of successful preschool operations with high ROI",
                points: ["Quick break-even", "Low operational costs", "High profitability"]
              },
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Complete Support",
                desc: "End-to-end assistance from setup to operations",
                points: ["Training programs", "Marketing support", "Curriculum design"]
              },
              {
                icon: <FaUsers className="text-5xl" />,
                title: "Brand Recognition",
                desc: "Trusted preschool brand with nationwide presence",
                points: ["Established reputation", "Parent trust", "Quality assurance"]
              }
            ].map((item, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-purple-500 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <FaCheckCircle className="text-green-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Motion.div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[ "/be a partner 1.jpg", "/be a partner2.jpg", "/be a partner3.webp" ].map((src, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <img 
                  src={src} 
                  alt={`Franchise ${i + 1}`} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLID PARTNERSHIP SECTION */}
      <section className="py-20 bg-linear-to-r from-purple-600 to-pink-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <FaHandshake className="text-6xl text-white mb-6 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Solid Partnership, <span className="text-yellow-300">Solid Growth</span>
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              We believe in growing together with our partners. Our success is measured by your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <GiGrowth className="text-4xl" />, title: "Year-on-Year Growth", value: "40%+" },
              { icon: <FaStar className="text-4xl" />, title: "Partner Satisfaction", value: "95%" },
              { icon: <GiTakeMyMoney className="text-4xl" />, title: "ROI Period", value: "18-24 Months" },
              { icon: <FaLightbulb className="text-4xl" />, title: "Training Hours", value: "200+ Hours" }
            ].map((stat, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center text-white"
              >
                <div className="mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="font-medium">{stat.title}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FRANCHISE MODELS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-semibold text-purple-700">INVESTMENT OPTIONS</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Choose Your <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">Franchise Model</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Model",
                investment: "₹8L - ₹12L",
                area: "800 - 1200 sq.ft",
                features: ["Basic Setup", "Curriculum", "Teacher Training", "Marketing Kit"]
              },
              {
                title: "Premium Model",
                investment: "₹12L - ₹20L",
                area: "1200 - 2000 sq.ft",
                popular: true,
                features: ["Advanced Setup", "Full Marketing Support", "Software Access", "Events Package"]
              },
              {
                title: "Daycare + Preschool",
                investment: "₹15L+",
                area: "1500+ sq.ft",
                features: ["Dual Setup", "Extended Hours", "Meal Plans", "24/7 Support"]
              }
            ].map((model, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-linear-to-b from-white to-purple-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${model.popular ? 'border-2 border-purple-500' : 'border border-gray-200'}`}
              >
                {model.popular && (
                  <div className="absolute top-0 right-0 bg-linear-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-bl-lg font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{model.title}</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Investment</span>
                      <span className="text-2xl font-bold text-purple-600">{model.investment}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Area Required</span>
                      <span className="font-bold text-gray-900">{model.area}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                  <ul className="space-y-2 mb-8">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* REDIRECT BUTTON */}
                  <Link to="/PartnerForm">
                    <Motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 font-bold rounded-xl ${
                        model.popular 
                          ? 'bg-linear-to-r from-purple-600 to-pink-500 text-white' 
                          : 'bg-linear-to-r from-purple-100 to-pink-100 text-purple-700'
                      }`}
                    >
                      Get Details
                    </Motion.button>
                  </Link>

                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-linear-to-r from-purple-900 to-pink-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl shadow-2xl"
          >
            <FaGraduationCap className="text-5xl text-white mb-6 mx-auto" />
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Preschool Empire?
            </h3>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join 200+ successful partners and create a legacy in early childhood education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* APPLY FOR FRANCHISE – REDIRECT */}
              <Link to="/PartnerForm">
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl hover:bg-gray-50 transition-all duration-300"
                >
                  Apply for Franchise
                </Motion.button>
              </Link>
              <Link to="/PartnerForm">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Download Brochure
              </Motion.button>
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>

    </div>
  );
}

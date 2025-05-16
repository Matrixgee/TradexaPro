import { motion } from "framer-motion";
import { FaShieldAlt, FaChartLine, FaUserTie, FaGlobe } from "react-icons/fa";
import logo from "../../assets/tradexaprologo.png";

// import Logo from "../assets/dan 1.svg";

const AboutUs = () => {
  const values = [
    {
      icon: <FaShieldAlt className="text-3xl text-[#2541f2]" />,
      title: "Security",
      description:
        "We implement best-in-class security protocols to ensure your investments are protected at all times.",
    },
    {
      icon: <FaChartLine className="text-3xl text-[#2541f2]" />,
      title: "Performance",
      description:
        "Our investment strategies are designed to maximize returns while managing risk in volatile markets.",
    },
    {
      icon: <FaUserTie className="text-3xl text-[#2541f2]" />,
      title: "Expertise",
      description:
        "Our team consists of seasoned professionals with deep expertise in finance, technology, and blockchain.",
    },
    {
      icon: <FaGlobe className="text-3xl text-[#2541f2]" />,
      title: "Global Vision",
      description:
        "We operate with a global perspective, identifying opportunities across markets and regions.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a] text-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 w-[90%] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#1427a3] rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#646805] rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#233ff8] to-[#dfea0e] bg-clip-text text-transparent">
                About Tradexa Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Pioneering the future of investment through innovative blockchain
              technology and expert financial solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative w-[90%]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#2e48f3] to-[#7d8105] mb-8 rounded-full" />
              <p className="text-gray-300 w- mb-6">
                Founded in 2018, Tradexa Pro was established with a clear
                vision: to bridge the gap between traditional finance and the
                emerging world of cryptocurrency and blockchain technology.
              </p>
              <p className="text-gray-300 mb-6">
                In a rapidly evolving financial landscape, we recognized the
                need for a platform that could provide secure, accessible, and
                profitable investment opportunities in digital assets. Our team
                of financial experts and blockchain specialists came together to
                create a solution that would democratize access to these new
                markets.
              </p>
              <p className="text-gray-300">
                Today, we serve thousands of investors across the globe, helping
                them navigate the complexities of cryptocurrency investments
                with confidence and achieve their financial goals through our
                carefully designed investment plans.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-xl transform rotate-3" />
              <img
                src={logo}
                alt="Top logo"
                className="relative z-10 max-w-[400px] mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-900/50 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#2e48f3] to-[#7d8105] mx-auto mb-6 rounded-full" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do at Max Trade Signal, from
              how we build our platform to how we interact with our clients.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-4 md:grid-col-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#4f67ff] transition-all duration-300"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 w-full bg-gradient-to-b from-[#19225e] to-[#071571]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "$250M+", label: "Assets Under Management" },
              { value: "20K+", label: "Active Investors" },
              { value: "4", label: "Investment Plans" },
              { value: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#4a59ba] to-[#4459e3]  bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0f1858] to-[#3a3b04] rounded-2xl p-12 text-center max-w-4xl mx-auto border border-purple-500/20"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of investors who trust Tradexa Pro to guide their
              cryptocurrency investments.
            </p>
            <a
              href="/auth/register"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2e48f3] to-[#898e00] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#363c61]"
            >
              Create Your Account
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

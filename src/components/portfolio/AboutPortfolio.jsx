// import React from "react";
// import mamun from "../../assets/images/mamun.jpg";

// const AboutPortfolio = () => {
//   return (
//     <section id="about" className="bg-gray-900 text-white py-24 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* LEFT IMAGE */}
//         <div className="flex justify-center">
//           <img
//             src={mamun}
//             alt="Mamun Khan"
//             className="w-[350px] rounded-xl shadow-xl border border-gray-700"
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div>
//           <h2 className="text-4xl font-bold mb-6">
//             About <span className="text-blue-400">Me</span>
//           </h2>

//           <p className="text-gray-400 leading-relaxed mb-6">
//             I'm <span className="text-white font-semibold">Mamun Khan</span>, a
//             passionate MERN Stack Developer based in Uttara, Dhaka. I specialize
//             in building modern full-stack web applications using MongoDB,
//             Express.js, React and Node.js.
//           </p>

//           <p className="text-gray-400 leading-relaxed mb-6">
//             Along with web development, I also work in digital marketing,
//             managing Facebook Ads campaigns and helping businesses grow with
//             data-driven marketing strategies.
//           </p>

//           <p className="text-gray-400 leading-relaxed">
//             My focus is creating responsive UI, scalable backend systems and
//             delivering high-performance digital solutions that solve real
//             business problems.
//           </p>

//           {/* INFO */}
//           <div className="grid grid-cols-2 gap-4 mt-8 text-sm">
//             <div>
//               <span className="text-gray-500">Location:</span>
//               <p>Uttara, Dhaka</p>
//             </div>

//             <div>
//               <span className="text-gray-500">Email:</span>
//               <p>mamun180037@gmail.com</p>
//             </div>

//             <div>
//               <span className="text-gray-500">Role:</span>
//               <p>MERN Developer</p>
//             </div>

//             <div>
//               <span className="text-gray-500">Experience:</span>
//               <p>Full-Stack Projects</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutPortfolio;
import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Briefcase, 
  Calendar,
  Code2,
  Award,
  Target,
  Rocket,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Download,
  Sparkles,
  CheckCircle2,
  Users,
  Globe,
  Zap
} from "lucide-react";
import mamun from "../../assets/images/mamun.jpg";

const AboutPortfolio = () => {
  const stats = [
    { icon: <Briefcase className="w-4 h-4" />, value: "3+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
    { icon: <Code2 className="w-4 h-4" />, value: "50+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
    { icon: <Users className="w-4 h-4" />, value: "40+", label: "Happy Clients", color: "from-green-500 to-emerald-500" },
    { icon: <Award className="w-4 h-4" />, value: "100%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" },
  ];

  const expertise = [
    "MERN Stack Development",
    "Responsive UI Design",
    "RESTful APIs",
    "Performance Optimization",
    "Digital Marketing",
    "SEO Strategy"
  ];

  const personalInfo = [
    { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Uttara, Dhaka, Bangladesh" },
    { icon: <Mail className="w-4 h-4" />, label: "Email", value: "mamun180037@gmail.com" },
    { icon: <Briefcase className="w-4 h-4" />, label: "Role", value: "Senior MERN Stack Developer" },
    { icon: <Calendar className="w-4 h-4" />, label: "Experience", value: "3+ Years in Full-Stack" },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/mamunkhan", label: "GitHub", color: "hover:bg-gray-800" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/mamunkhan", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/mamunkhan", label: "Twitter", color: "hover:bg-blue-400" },
  ];

  return (
    <section id="about" className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Get to Know Me</span>
          </motion.div>
          
      
             <h2 className="text-4xl font-bold mb-6 text-white">
            About <span className="text-blue-400">Me</span>
          </h2>
       
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Image with Floating Badges */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-2">
                <img
                  src={mamun}
                  alt="Mamun Khan - MERN Stack Developer"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 shadow-xl"
              >
                <div className="bg-gray-900 rounded-xl px-4 py-2">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-xs text-blue-300">Years Experience</div>
                </div>
              </motion.div>

              {/* Floating Location Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="absolute -top-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 shadow-xl"
              >
                <div className="bg-gray-900 rounded-xl px-4 py-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-white">Uttara, Dhaka</span>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-10 mb-3`}>
                      <div className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">Mamun Khan</span>, 
                a passionate MERN Stack Developer based in Uttara, Dhaka. With over 3 years of experience in full-stack development,
                I specialize in building modern, scalable web applications that solve real business problems.
              </p>

              <p className="text-gray-400 leading-relaxed">
                My expertise extends beyond development into digital marketing, where I help businesses grow through 
                data-driven Facebook Ads campaigns and comprehensive marketing strategies. I believe in creating 
                solutions that not only look great but also deliver measurable results.
              </p>

              <p className="text-gray-400 leading-relaxed">
                I'm committed to writing clean, maintainable code and staying updated with the latest technologies 
                to deliver high-performance digital solutions. My approach combines technical excellence with 
                business acumen to create value for clients.
              </p>
            </div>

            {/* Expertise Tags */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-400" />
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="px-4 py-2 bg-gray-800/50 text-sm text-gray-300 rounded-full border border-gray-700/50 hover:border-blue-500/30 transition-all"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-blue-400">
                        {info.icon}
                      </div>
                      <span className="text-xs text-gray-500">{info.label}</span>
                    </div>
                    <p className="text-sm font-medium text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Download Resume */}
              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Download className="w-4 h-4" />
                <span className="text-sm font-semibold">Download Resume</span>
              </motion.a>

              {/* Hire Me */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 px-6 py-3 flex items-center gap-2 hover:border-blue-500/30 transition-all"
              >
                <Rocket className="w-4 h-4 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="text-sm font-semibold">Hire Me Now</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-500 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Find me on:
              </span>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`w-10 h-10 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center ${social.color} hover:border-transparent transition-all group`}
                    aria-label={social.label}
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-800/50">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Available for freelance</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Quick response</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ExternalLink className="w-4 h-4 text-blue-500" />
                <span>Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPortfolio;
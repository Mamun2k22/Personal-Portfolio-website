// import React from "react";
// import mamun from "../../assets/images/mamun.jpg";

// export default function HeroPortfolio() {
//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-20 overflow-hidden">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
//         <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-7xl">
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
//           {/* LEFT CONTENT */}
//           <div className="max-w-2xl">
//             <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
//               Available for Freelance
//             </span>

//             <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
//               Hi, I'm <span className="text-blue-400">Mamun Khan</span>
//             </h1>

//             <h2 className="mt-4 text-xl font-medium text-gray-300 sm:text-2xl lg:text-3xl">
//               MERN Stack Developer & Digital Marketing Specialist
//             </h2>

//             <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
//               I build modern, scalable and high-performance web applications
//               using MongoDB, Express.js, React and Node.js. I also help
//               businesses grow with performance-driven Facebook Ads campaigns
//               and digital marketing strategies.
//             </p>

//             {/* BUTTONS */}
//             <div className="mt-8 flex flex-wrap gap-4">
//               <a
//                 href="#projects"
//                 className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
//               >
//                 View Projects
//               </a>

//               <a
//                 href="/cv.pdf"
//                 className="rounded-xl border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
//               >
//                 Download CV
//               </a>

//               <a
//                 href="/contact"
//                 className="rounded-xl bg-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-600"
//               >
//                 Contact Me
//               </a>
//             </div>

//             {/* TECH STACK */}
//             <div className="mt-8 flex flex-wrap gap-3 text-sm">
//               <span className="rounded-lg border border-white/5 bg-gray-800/80 px-3 py-2">
//                 React
//               </span>
//               <span className="rounded-lg border border-white/5 bg-gray-800/80 px-3 py-2">
//                 Node.js
//               </span>
//               <span className="rounded-lg border border-white/5 bg-gray-800/80 px-3 py-2">
//                 MongoDB
//               </span>
//               <span className="rounded-lg border border-white/5 bg-gray-800/80 px-3 py-2">
//                 Tailwind
//               </span>
//               <span className="rounded-lg border border-white/5 bg-gray-800/80 px-3 py-2">
//                 Facebook Ads
//               </span>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative">
//               <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 blur-3xl opacity-30" />
//               <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl" />

//               <img
//                 src={mamun}
//                 alt="Mamun Khan"
//                 className="relative w-full max-w-[320px] rounded-[2rem] border border-white/10 object-cover shadow-2xl sm:max-w-[380px] lg:max-w-[460px]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import mamun from "../../assets/images/mamun.jpg";
import { 
  Code2, 
  Server, 
  Database, 
  Layout, 
  Megaphone, 
  Globe, 
  ChevronRight,
  Sparkles,
  Rocket,
  Zap,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

export default function HeroPortfolio() {
  const technologies = [
    { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-400" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-500" },
    { name: "Express", icon: "⚡", color: "from-gray-400 to-gray-600" },
    { name: "Tailwind", icon: "🎨", color: "from-cyan-400 to-blue-400" },
    { name: "Next.js", icon: "▲", color: "from-black to-gray-700" },
    { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500" },
    { name: "Facebook Ads", icon: "📱", color: "from-blue-600 to-indigo-600" },
  ];

  const services = [
    { icon: <Code2 className="w-5 h-5" />, label: "MERN Stack", color: "from-blue-500 to-cyan-500" },
    { icon: <Layout className="w-5 h-5" />, label: "Frontend Dev", color: "from-purple-500 to-pink-500" },
    { icon: <Server className="w-5 h-5" />, label: "Backend API", color: "from-indigo-500 to-blue-500" },
    { icon: <Database className="w-5 h-5" />, label: "Database", color: "from-orange-500 to-red-500" },
    { icon: <Megaphone className="w-5 h-5" />, label: "Digital Marketing", color: "from-green-500 to-emerald-500" },
    { icon: <Globe className="w-5 h-5" />, label: "SEO", color: "from-teal-500 to-green-500" },
  ];

  const stats = [
    { value: "50+", label: "Projects", icon: "🚀" },
    { value: "40+", label: "Clients", icon: "👥" },
    { value: "3+", label: "Years", icon: "📅" },
    { value: "24/7", label: "Support", icon: "⚡" },
  ];
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
              Available for Freelance
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-blue-400">Mamun Khan</span>
            </h1>

            <h2 className="mt-4 text-xl font-medium text-gray-300 sm:text-2xl lg:text-3xl">
              MERN Stack Developer & Digital Marketing Specialist
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              I build modern, scalable and high-performance web applications
              using MongoDB, Express.js, React and Node.js. I also help
              businesses grow with performance-driven Facebook Ads campaigns
              and digital marketing strategies.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                View Projects
              </a>

              <a
                href="/cv.pdf"
                className="rounded-xl border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
              >
                Download CV
              </a>

              <a
                href="/contact"
                className="rounded-xl bg-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-600"
              >
                Contact Me
              </a>
            </div>

            {/* TECH STACK */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-lg border border-white/5 bg-gray-800/80 px-3 py-2">
                React
              </span>
              <span className="rounded-lg border border-white/5 bg-gray-800/80 px-3 py-2">
                Node.js
              </span>
              <span className="rounded-lg border border-white/5 bg-gray-800/80 px-3 py-2">
                MongoDB
              </span>
              <span className="rounded-lg border border-white/5 bg-gray-800/80 px-3 py-2">
                Tailwind
              </span>
              <span className="rounded-lg border border-white/5 bg-gray-800/80 px-3 py-2">
                Facebook Ads
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          {/* <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 blur-3xl opacity-30" />
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl" />

              <img
                src={mamun}
                alt="Mamun Khan"
                className="relative w-full max-w-[320px] rounded-[2rem] border border-white/10 object-cover shadow-2xl sm:max-w-[380px] lg:max-w-[460px]"
              />
            </div>
          </div> */}
                  {/* RIGHT CONTENT - Technology Showcase */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              
              {/* Main Tech Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Tech Stack</h3>
                      <p className="text-xs text-gray-500">Modern & Scalable</p>
                    </div>
                  </div>

                  {/* Tech Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="group/tech relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-xl blur opacity-0 group-hover/tech:opacity-30 transition-opacity`}></div>
                        <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-transparent transition-all">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{tech.icon}</span>
                            <div>
                              <div className="text-sm font-semibold text-white">{tech.name}</div>
                              <div className="text-xs text-gray-500">Expert</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span>Full-Stack Ready</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Globe className="w-4 h-4 text-green-500" />
                        <span>24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-4 shadow-2xl animate-float-slow">
                <div className="bg-gray-900 rounded-xl p-3 text-center">
                  <Megaphone className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">Digital</div>
                  <div className="text-[10px] text-blue-300">Marketing</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 shadow-2xl animate-float-slow delay-1000">
                <div className="bg-gray-900 rounded-xl p-3 text-center">
                  <Database className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">Database</div>
                  <div className="text-[10px] text-green-300">MongoDB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
    
    {/* Add animations to global CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    
    </section>
  );
}
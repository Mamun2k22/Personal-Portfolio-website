// import React from "react";
// import {
//   Github,
//   Linkedin,
//   Facebook,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowUpRight,
// } from "lucide-react";

// export default function Footer() {
//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Projects", href: "/project" },
//     { name: "Services", href: "/services" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const services = [
//     "Business Website",
//     "E-commerce Store",
//     "Web Application",
//     "Facebook Ads",
//     "SEO Optimization",
//     "Mobile App WebView",
//   ];

//   return (
//     <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
//       {/* background glow */}
//       <div className="pointer-events-none absolute inset-0 opacity-30">
//         <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
//         <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
//           {/* Brand */}
//           <div>
//             <h3 className="text-2xl font-bold">
//               Mamun <span className="text-cyan-400">Khan</span>
//             </h3>
//             <p className="mt-3 text-sm leading-7 text-white/65">
//               MERN Stack Developer & Digital Marketing Specialist focused on
//               building modern web applications, business websites, and growth
//               driven digital solutions.
//             </p>

//             <div className="mt-5 flex items-center gap-3">
//               <a
//                 href="https://github.com/Mamun2k22"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/80 transition hover:border-cyan-400/30 hover:text-cyan-400"
//               >
//                 <Github className="h-5 w-5" />
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/md-mamun-khan"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/80 transition hover:border-cyan-400/30 hover:text-cyan-400"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </a>

//               <a
//                 href="https://www.facebook.com/Mamun2K21"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/80 transition hover:border-cyan-400/30 hover:text-cyan-400"
//               >
//                 <Facebook className="h-5 w-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold text-white">Quick Links</h4>
//             <ul className="mt-4 space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-cyan-400"
//                   >
//                     <ArrowUpRight className="h-4 w-4" />
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-semibold text-white">Services</h4>
//             <ul className="mt-4 space-y-3">
//               {services.map((service) => (
//                 <li
//                   key={service}
//                   className="text-sm text-white/65 transition hover:text-cyan-400"
//                 >
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold text-white">Contact Info</h4>

//             <div className="mt-4 space-y-4">
//               <div className="flex items-start gap-3 text-sm text-white/65">
//                 <Mail className="mt-0.5 h-4 w-4 text-cyan-400" />
//                 <span>mamun180037@gmail.com</span>
//               </div>

//               <div className="flex items-start gap-3 text-sm text-white/65">
//                 <Phone className="mt-0.5 h-4 w-4 text-cyan-400" />
//                 <span>+880 1316-889942</span>
//               </div>

//               <div className="flex items-start gap-3 text-sm text-white/65">
//                 <MapPin className="mt-0.5 h-4 w-4 text-cyan-400" />
//                 <span>Uttara, Dhaka, Bangladesh</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bottom bar */}
//         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
//           <p>© 2026 Mamun Khan. All rights reserved.</p>
//           <p>Built with React & Tailwind CSS</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from "react";
import { 
  Heart,
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Youtube,
  Send,
  ChevronUp,
  Code2,
  Sparkles,
  Rocket,
  Award,
  Clock,
  Shield,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/project" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/blog" },
  ];

  const services = [
    { label: "MERN Stack Development", icon: <Code2 className="w-3 h-3" /> },
    { label: "Frontend Development", icon: <Layout className="w-3 h-3" /> },
    { label: "Backend Development", icon: <Server className="w-3 h-3" /> },
    { label: "Digital Marketing", icon: <Megaphone className="w-3 h-3" /> },
    { label: "SEO Optimization", icon: <Search className="w-3 h-3" /> },
    { label: "Website Maintenance", icon: <Wrench className="w-3 h-3" /> },
  ];

  const contactInfo = [
    { icon: <Phone className="w-4 h-4" />, label: "+880 1316-889942", href: "tel:+8801316889942" },
    { icon: <Mail className="w-4 h-4" />, label: "mamun180037@gmail.com", href: "mailto:mamun180037@gmail.com" },
    { icon: <MapPin className="w-4 h-4" />, label: "Uttara, Dhaka, Bangladesh", href: "https://maps.google.com" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: <Github className="w-4 h-4" />, href: "#", label: "GitHub", color: "hover:bg-gray-800" },
    { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: <Youtube className="w-4 h-4" />, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white pt-20 pb-8 overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        


        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Mamun Khan</h4>
                <p className="text-xs text-gray-500">MERN Stack Developer</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Building scalable web applications and driving digital growth through 
              innovative solutions. Let's turn your ideas into reality.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Award className="w-4 h-4 text-yellow-500" />
              <span>3+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Rocket className="w-4 h-4 text-blue-500" />
              <span>50+ Projects Completed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-blue-500 group-hover:translate-x-1 transition-transform">
                      {service.icon}
                    </span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-3 group"
                  >
                    <span className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 group-hover:border-blue-500/30 transition-colors">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Follow Me</h5>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white ${social.color} hover:border-transparent transition-all`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 py-6 border-y border-gray-800/50">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4 text-green-500" />
            <span>100% Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Globe className="w-4 h-4 text-purple-500" />
            <span>Worldwide Service</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Heart className="w-4 h-4 text-red-500" />
            <span>100% Satisfaction</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {currentYear} Mamun Khan. All rights reserved. | 
            <span className="mx-2">•</span>
            Built with <Heart className="w-3 h-3 inline-block text-red-500 mx-1" /> in Bangladesh
          </p>
          
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/sitemap" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4 text-white group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Credit */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-600">
            Designed & Developed by Mamun Khan with <Sparkles className="w-3 h-3 inline-block text-yellow-500" /> passion
          </p>
        </div>
      </div>

      {/* Add Grid Pattern CSS */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </footer>
  );
}

// Missing imports - add these at the top
import { 
  Layout, 
  Server, 
  Megaphone, 
  Search, 
  Wrench 
} from "lucide-react";
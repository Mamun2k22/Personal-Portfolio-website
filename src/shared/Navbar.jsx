// import { Link, NavLink, useLocation } from "react-router-dom";
// import { useEffect, useMemo, useState } from "react";
// import useSiteSettings from "../hooks/useSiteSettings";
// import logo from "../../src/assets/images/logo.jpg";
// import { 
//   FaPhoneAlt, 
//   FaWhatsapp, 
//   FaBars, 
//   FaTimes,
//   FaEnvelope,
//   FaCalendarAlt 
// } from "react-icons/fa";
// import { 
//   HiOutlineHome, 
//   HiOutlineCog, 
//   HiOutlineFolder, 
//   HiOutlineUser, 
//   HiOutlineMail,
//   HiOutlineBriefcase
// } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";

// const navItems = [
//   { path: "/", label: "Home", icon: <HiOutlineHome className="w-4 h-4" /> },
//   { path: "/services", label: "Services", icon: <HiOutlineCog className="w-4 h-4" /> },
//   { path: "/project", label: "Projects", icon: <HiOutlineFolder className="w-4 h-4" /> },
//   { path: "/about", label: "About", icon: <HiOutlineUser className="w-4 h-4" /> },
//   { path: "/contact", label: "Contact", icon: <HiOutlineMail className="w-4 h-4" /> },
// ];

// const NavItem = ({ to, children, onClick, isMobile = false }) => {
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   if (isMobile) {
//     return (
//       <NavLink
//         to={to}
//         onClick={onClick}
//         className={({ isActive }) =>
//           `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
//             isActive
//               ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
//               : "text-gray-600 hover:bg-gray-100"
//           }`
//         }
//       >
//         {({ isActive }) => (
//           <>
//             <span className={`text-lg ${isActive ? 'text-white' : 'text-gray-400'}`}>
//               {navItems.find(item => item.path === to)?.icon}
//             </span>
//             <span>{children}</span>
//             {isActive && (
//               <motion.div
//                 layoutId="mobileActiveDot"
//                 className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
//               />
//             )}
//           </>
//         )}
//       </NavLink>
//     );
//   }

//   return (
//     <NavLink to={to} onClick={onClick} className="relative group">
//       {({ isActive }) => (
//         <div className="relative px-4 py-2">
//           <span
//             className={`
//               relative z-10 text-sm font-medium tracking-wide transition-colors duration-300
//               ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}
//             `}
//           >
//             {children}
//           </span>
          
//           {/* Active Indicator */}
//           {isActive && (
//             <motion.div
//               layoutId="activeNav"
//               className="absolute inset-0 bg-white/10 rounded-lg"
//               transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//             />
//           )}
          
//           {/* Hover Background */}
//           <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all duration-300" />
          
//           {/* Bottom Border on Hover */}
//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300" />
//         </div>
//       )}
//     </NavLink>
//   );
// };

// const DesktopNav = () => (
//   <nav className="hidden md:flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-2xl border border-white/10">
//     {navItems.map((item) => (
//       <NavItem key={item.path} to={item.path}>
//         {item.label}
//       </NavItem>
//     ))}
//   </nav>
// );

// const ContactButton = ({ waLink, phoneText, onClick }) => (
//   <div className="hidden lg:flex items-center gap-3">
//     {/* Phone Card */}
//     <a
//       href={`tel:${String(phoneText).replace(/\s/g, "")}`}
//       className="group relative overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
//       <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 flex items-center gap-3 group-hover:border-transparent transition-all">
//         <FaPhoneAlt className="w-3.5 h-3.5 text-green-400 group-hover:text-white transition-colors" />
//         <div className="text-left">
//           <div className="text-[10px] text-gray-400 group-hover:text-white/80">Call Now</div>
//           <div className="text-xs font-semibold text-white">{phoneText}</div>
//         </div>
//       </div>
//     </a>

//     {/* WhatsApp Card */}
//     <a
//       href={waLink}
//       target="_blank"
//       rel="noreferrer"
//       className="group relative overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
//       <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 flex items-center gap-3 group-hover:border-transparent transition-all">
//         <FaWhatsapp className="w-3.5 h-3.5 text-green-400 group-hover:text-white transition-colors" />
//         <div className="text-left">
//           <div className="text-[10px] text-gray-400 group-hover:text-white/80">WhatsApp</div>
//           <div className="text-xs font-semibold text-white">24/7 Support</div>
//         </div>
//       </div>
//     </a>

//     {/* Consultation Button */}
//     <button
//       onClick={onClick}
//       className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2"
//     >
//       <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
//       <div className="relative flex items-center gap-2 text-sm font-semibold text-white">
//         <FaCalendarAlt className="w-3.5 h-3.5" />
//         <span>Consultation</span>
//       </div>
//     </button>
//   </div>
// );

// const MobileMenuButton = ({ onClick, isOpen }) => (
//   <button
//     onClick={onClick}
//     className="md:hidden relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
//     aria-label="Toggle menu"
//   >
//     <div className="absolute inset-0 flex items-center justify-center">
//       {isOpen ? (
//         <FaTimes className="w-4 h-4 text-white" />
//       ) : (
//         <FaBars className="w-4 h-4 text-white" />
//       )}
//     </div>
//   </button>
// );

// const MobileDrawer = ({ isOpen, onClose, waLink, phoneText }) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
//           />

//           {/* Drawer */}
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//             className="fixed right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-gray-50 to-white shadow-2xl z-[101] overflow-y-auto"
//           >
//             {/* Header */}
//             <div className="sticky top-0 bg-white border-b border-gray-200 p-5 flex items-center justify-between">
//               <div>
//                 <h3 className="font-bold text-gray-900">Menu</h3>
//                 <p className="text-xs text-gray-500">Navigation</p>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
//               >
//                 <FaTimes className="w-4 h-4 text-gray-600" />
//               </button>
//             </div>

//             {/* Navigation Links */}
//             <div className="p-5 space-y-2">
//               {navItems.map((item) => (
//                 <NavItem key={item.path} to={item.path} onClick={onClose} isMobile>
//                   {item.label}
//                 </NavItem>
//               ))}
//             </div>

//             {/* Contact Section */}
//             <div className="p-5 border-t border-gray-200 space-y-4">
//               <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
//                 Contact Options
//               </h4>
              
//               {/* Phone */}
//               <a
//                 href={`tel:${String(phoneText).replace(/\s/g, "")}`}
//                 className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all group"
//               >
//                 <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
//                   <FaPhoneAlt className="w-4 h-4 text-white" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Call us</div>
//                   <div className="font-semibold text-gray-900">{phoneText}</div>
//                 </div>
//               </a>

//               {/* WhatsApp */}
//               <a
//                 href={waLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all group"
//               >
//                 <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
//                   <FaWhatsapp className="w-4 h-4 text-white" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">WhatsApp</div>
//                   <div className="font-semibold text-gray-900">24/7 Support</div>
//                 </div>
//               </a>

//               {/* Consultation Button */}
//               <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-4 font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-shadow">
//                 <FaCalendarAlt className="w-4 h-4" />
//                 <span>Schedule Free Consultation</span>
//               </button>
//             </div>

//             {/* Footer */}
//             <div className="p-5 text-center text-xs text-gray-400 border-t border-gray-200">
//               <p>© 2024 Web Defend IT. All rights reserved.</p>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default function Navbar() {
//   const s = useSiteSettings();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [openCalendly, setOpenCalendly] = useState(false);

//   const waLink = useMemo(() => {
//     const num = s?.whatsapp ? String(s.whatsapp).replace(/\D/g, "") : "";
//     return num ? `https://wa.me/${num}` : "https://wa.me/8801781977392";
//   }, [s?.whatsapp]);

//   const phoneText = s?.phone || s?.hotline || "+8801781977392";

//   useEffect(() => {
//     const onScroll = () => {
//       const scrollY = window.scrollY;
//       setScrolled(scrollY > 20);
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") setIsDrawerOpen(false);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <>
//       <header
//         className={`
//           fixed inset-x-0 top-0 z-50 transition-all duration-500
//           ${scrolled 
//             ? 'bg-gradient-to-r from-[#0A4F74] to-[#0B5C86] shadow-2xl backdrop-blur-none' 
//             : 'bg-transparent backdrop-blur-md'
//           }
//         `}
//       >
//         {/* Top Bar */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0B5C86] to-[#0A4F74] opacity-95" />
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
//             {/* Logo */}
//             <Link to="/" className="flex items-center gap-3 group">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <img
//                   src={logo}
//                   alt="logo"
//                   className="relative h-10 lg:h-12 w-auto rounded-xl shadow-lg"
//                   onError={(e) => (e.currentTarget.src = "/logo.webp")}
//                 />
//               </div>
//               <div className="hidden sm:block">
//                 <div className="text-white font-bold text-sm lg:text-base leading-tight">
//                   {s?.siteName || "Web Defend IT"}
//                 </div>
//                 <div className="text-[10px] lg:text-xs text-blue-200">
//                   Software Company
//                 </div>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <DesktopNav />

//             {/* Right Section */}
//             <div className="flex items-center gap-3">
//               <ContactButton 
//                 waLink={waLink} 
//                 phoneText={phoneText}
//                 onClick={() => setOpenCalendly(true)}
//               />
              
//               <MobileMenuButton 
//                 onClick={() => setIsDrawerOpen(true)}
//                 isOpen={isDrawerOpen}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <motion.div 
//           className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
//           initial={{ width: "0%" }}
//           animate={{ width: scrolled ? "30%" : "0%" }}
//           transition={{ duration: 0.3 }}
//         />
//       </header>

//       {/* Mobile Drawer */}
//       <MobileDrawer 
//         isOpen={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//         waLink={waLink}
//         phoneText={phoneText}
//       />

//       {/* Calendly Modal would go here */}
//       {openCalendly && (
//         <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
//           <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpenCalendly(false)} />
//           <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
//             {/* Calendly embed would go here */}
//             <button 
//               onClick={() => setOpenCalendly(false)}
//               className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
//             >
//               <FaTimes className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import { Link, NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import useSiteSettings from "../hooks/useSiteSettings";
import logo from "../../src/assets/images/logo.jpg";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const OraNavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      [
        "relative px-3 py-2 text-sm font-semibold transition duration-300",
        "text-white/70 hover:text-white",
        isActive ? "text-white" : "",
      ].join(" ")
    }
  >
    {({ isActive }) => (
      <span className="relative inline-block">
        {children}
        <span
          className={[
            "absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300",
            isActive
              ? "w-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
              : "w-0 bg-cyan-400 group-hover:w-full",
          ].join(" ")}
        />
      </span>
    )}
  </NavLink>
);

function DrawerItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block rounded-xl px-4 py-3 text-sm font-medium transition ${
          isActive
            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
            : "text-white/80 hover:bg-white/5 hover:text-white border border-transparent"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const s = useSiteSettings();
  const [openCalendly, setOpenCalendly] = useState(false);
  const [drawerMounted, setDrawerMounted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const waLink = useMemo(() => {
    const num = s?.whatsapp ? String(s.whatsapp).replace(/\D/g, "") : "";
    return num ? `https://wa.me/${num}` : "https://wa.me/8801781977392";
  }, [s?.whatsapp]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openDrawer = () => {
    setDrawerMounted(true);
    requestAnimationFrame(() => setDrawerOpen(true));
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => setDrawerMounted(false), 250);
  };

  const phoneText = s?.phone || s?.hotline || "+880 1781-977392";

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl bg-gray-950/80 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 min-w-[180px]">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg" />
              <img
                src={logo}
                alt="logo"
                className="relative h-11 w-11 rounded-full object-cover border border-white/10 shadow-lg"
                onError={(e) => (e.currentTarget.src = "/logo.webp")}
              />
            </div>

            <div className="leading-tight">
              <div className="text-white font-bold text-sm sm:text-base tracking-wide">
                {s?.siteName || "Mamun Khan"}
              </div>
              <div className="text-xs text-white/50">
                MERN Stack Developer
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
            <OraNavItem to="/">Home</OraNavItem>
            <OraNavItem to="/services">Services</OraNavItem>
            <OraNavItem to="/project">Projects</OraNavItem>
         <OraNavItem to="/package">Package</OraNavItem>

            <OraNavItem to="/about">About</OraNavItem>
            <OraNavItem to="/contact">Contact</OraNavItem>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <a
              href={`tel:${String(phoneText).replace(/\s/g, "")}`}
              className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            >
              <FaPhoneAlt className="text-cyan-400" />
              <span>{phoneText}</span>
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            {/* Mobile Actions */}
            <a
              href={`tel:${String(phoneText).replace(/\s/g, "")}`}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/90 backdrop-blur-md transition hover:bg-white/10"
              aria-label="Call"
            >
              <FaPhoneAlt />
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/90 backdrop-blur-md transition hover:bg-white/10"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <button
              onClick={openDrawer}
              className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/10"
              aria-label="Open menu"
              type="button"
            >
              <HiOutlineMenuAlt3 className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {drawerMounted && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div
            onClick={closeDrawer}
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              drawerOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-white/10 bg-gray-950/95 backdrop-blur-2xl shadow-2xl transition-transform duration-300 ${
              drawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="logo"
                  className="h-10 w-10 rounded-full object-cover border border-white/10"
                  onError={(e) => (e.currentTarget.src = "/logo.webp")}
                />
                <div>
                  <div className="text-sm font-bold text-white">
                    {s?.siteName || "Mamun Khan"}
                  </div>
                  <div className="text-xs text-white/50">
                    Portfolio Navigation
                  </div>
                </div>
              </div>

              <button
                onClick={closeDrawer}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Close menu"
                type="button"
              >
                <HiOutlineX className="text-xl" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="space-y-3 p-5">
              <DrawerItem to="/" onClick={closeDrawer}>
                Home
              </DrawerItem>
              <DrawerItem to="/services" onClick={closeDrawer}>
                Services
              </DrawerItem>
              <DrawerItem to="/project" onClick={closeDrawer}>
                Projects
              </DrawerItem>
               <OraNavItem to="/package">Package</OraNavItem>
              <DrawerItem to="/about" onClick={closeDrawer}>
                About
              </DrawerItem>
              <DrawerItem to="/contact" onClick={closeDrawer}>
                Contact
              </DrawerItem>
            </div>

            {/* Drawer Footer */}
            <div className="border-t border-white/10 p-5 space-y-3">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01]"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>

              <a
                href={`tel:${String(phoneText).replace(/\s/g, "")}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                <FaPhoneAlt className="text-cyan-400" />
                {phoneText}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
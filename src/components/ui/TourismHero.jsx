import React from "react";
import { Code2, Server, Smartphone, Megaphone, Cloud, Database } from "lucide-react";

export default function TechServicesSection() {

  // rotating tech image
  const ROTATE_IMG =
    "https://cdn-icons-png.flaticon.com/512/2721/2721620.png"; // tech globe

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20">

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="bg-gray-900/40 border border-gray-800 backdrop-blur rounded-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center px-10 py-16">

            {/* LEFT SERVICES */}
            <div>

              <h2 className="text-3xl font-bold text-white leading-tight">
                Modern Web Development <br/>
                Solutions
              </h2>

              <p className="mt-4 text-gray-400 text-sm">
                Building scalable web applications and digital platforms using modern technologies.
              </p>

              <div className="mt-4 h-[2px] w-12 bg-cyan-400"/>

              <ul className="mt-8 space-y-4 text-gray-300 text-sm">

                <li className="flex items-center gap-3">
                  <Code2 className="text-cyan-400 w-5 h-5"/>
                  MERN Stack Web Applications
                </li>

                <li className="flex items-center gap-3">
                  <Server className="text-cyan-400 w-5 h-5"/>
                  Backend API Development
                </li>

                <li className="flex items-center gap-3">
                  <Smartphone className="text-cyan-400 w-5 h-5"/>
                  Web App to Mobile App (WebView)
                </li>

              </ul>

              <button className="mt-8 inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold tracking-widest text-xs uppercase hover:bg-cyan-400 hover:text-black transition">
                View Services
              </button>

            </div>

            {/* CENTER ROTATING TECH */}
            <div className="flex flex-col items-center text-center">

              <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px]">

                <img
                  src={ROTATE_IMG}
                  alt="Tech"
                  className="w-full h-full object-contain animate-spin-slow"
                />

              </div>

              <p className="mt-4 text-lg font-bold text-cyan-400">
                Building With Modern
              </p>

              <h1 className="text-5xl md:text-7xl font-black text-white">
                TECHNOLOGY
              </h1>

              <p className="mt-3 text-xs tracking-[0.4em] text-gray-400">
                DEVELOPMENT STACK
              </p>

            </div>

            {/* RIGHT TECHNOLOGY */}
            <div>

              <h3 className="text-2xl font-bold text-white">
                Technologies I Use
              </h3>

              <p className="mt-4 text-gray-400 text-sm">
                Leveraging modern technologies to build scalable, secure and high performance applications.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <TechBadge icon={<Code2 />} label="React / Next.js"/>
                <TechBadge icon={<Server />} label="Node / Express"/>
                <TechBadge icon={<Database />} label="MongoDB / SQL"/>
                <TechBadge icon={<Cloud />} label="AWS / Firebase"/>
                <TechBadge icon={<Megaphone />} label="Facebook Ads"/>
                <TechBadge icon={<Smartphone />} label="Mobile WebView"/>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

function TechBadge({icon,label}) {
  return(
    <div className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 hover:border-cyan-400 transition">

      <div className="text-cyan-400">
        {icon}
      </div>

      <span className="text-gray-300 text-sm">
        {label}
      </span>

    </div>
  )
}
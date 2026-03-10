import React from "react";
import {
  Code2,
  Smartphone,
  Layout,
  Server,
  Megaphone,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building scalable full-stack web applications using the MERN stack with modern UI, secure APIs, and high performance.",
    icon: <Code2 className="w-6 h-6 text-white" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Responsive Frontend Design",
    description:
      "Creating clean, responsive, and modern UI using React, Tailwind CSS, and best UI/UX practices.",
    icon: <Layout className="w-6 h-6 text-white" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend & API Development",
    description:
      "Developing secure REST APIs, authentication systems, and scalable backend services with Node.js and Express.",
    icon: <Server className="w-6 h-6 text-white" />,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Web App to Mobile App (WebView)",
    description:
      "Convert your web application into Android or iOS mobile apps using WebView for fast and cost-effective deployment.",
    icon: <Smartphone className="w-6 h-6 text-white" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Facebook Ads & Digital Marketing",
    description:
      "Managing Facebook ad campaigns, audience targeting, optimization, and performance tracking to grow businesses.",
    icon: <Megaphone className="w-6 h-6 text-white" />,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Website Maintenance",
    description:
      "Providing continuous support, performance optimization, updates, and bug fixing for existing websites.",
    icon: <Wrench className="w-6 h-6 text-white" />,
    color: "from-pink-500 to-rose-500",
  },
];

export default function ServicesPortfolio() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-gray-400 mt-4">
            I help businesses build modern web applications and grow online with
            development and digital marketing solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-transparent transition duration-300"
            >
              {/* Hover Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition duration-300`}
                style={{ padding: "1px" }}
              >
                <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
              </div>

              <div className="relative z-10">

                {/* Icon */}
                <div className="mb-4 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} blur-xl opacity-40`}
                  ></div>

                  <div
                    className={`relative p-4 rounded-xl bg-gradient-to-r ${service.color} w-fit`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
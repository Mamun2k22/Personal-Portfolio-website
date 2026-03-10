import React from "react";
import {
  Briefcase,
  Code2,
  Megaphone,
  Globe,
  CalendarDays,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Freelance & Personal Projects",
    duration: "2023 - Present",
    location: "Dhaka, Bangladesh",
    icon: <Code2 className="w-5 h-5 text-white" />,
    color: "from-blue-500 to-cyan-500",
    description:
      "Building modern full-stack applications using MongoDB, Express, React and Node.js with focus on scalability and performance.",
  },
  {
    title: "Web Developer",
    company: "Client Projects",
    duration: "2022 - Present",
    location: "Remote",
    icon: <Globe className="w-5 h-5 text-white" />,
    color: "from-purple-500 to-pink-500",
    description:
      "Developed business, academy, and e-commerce websites with modern UI and responsive design for multiple clients.",
  },
  {
    title: "Digital Marketing Specialist",
    company: "Facebook Ads Management",
    duration: "2022 - Present",
    location: "Dhaka, Bangladesh",
    icon: <Megaphone className="w-5 h-5 text-white" />,
    color: "from-orange-500 to-red-500",
    description:
      "Managing Facebook Ads campaigns including targeting, optimization, and performance tracking to drive business growth.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-sm text-gray-300 bg-white/5 backdrop-blur">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            Professional Journey
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            My professional experience in full-stack web development and digital
            marketing solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-40"></div>

          <div className="space-y-16">

            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >

                  {/* Card */}
                  <div className="md:w-1/2">
                    <div className="group relative bg-gray-800/40 border border-gray-700 rounded-2xl p-6 backdrop-blur transition hover:border-transparent">

                      {/* Hover border */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100`}
                        style={{ padding: "1px" }}
                      >
                        <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
                      </div>

                      <div className="relative z-10">

                        {/* Icon */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color}`}>
                            {exp.icon}
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-cyan-400 text-sm">{exp.company}</p>
                          </div>
                        </div>

                        {/* Meta */}
                        <div className="flex gap-4 text-gray-400 text-sm mb-4">
                          <span className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            {exp.duration}
                          </span>

                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex justify-center md:w-[80px] relative">
                    <div
                      className={`h-12 w-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg`}
                    >
                      {exp.icon}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
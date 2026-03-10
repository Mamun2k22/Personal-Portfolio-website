import React from "react";
import { ExternalLink, Github, FolderKanban, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Osonkho",
    category: "E-commerce",
    description:
      "A modern e-commerce platform focused on smooth product browsing, responsive shopping experience, and scalable storefront functionality for online customers.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    live: "https://osonkho.com",
    github: "https://github.com/Mamun2k22",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "ShoukhinShop",
    category: "E-commerce",
    description:
      "A stylish online shopping website designed to showcase products with a clean UI, modern product sections, and customer-friendly navigation.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    live: "https://shoukhinshop.com",
    github: "https://github.com/Mamun2k22",
    tech: ["React", "Express.js", "MongoDB", "CSS"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "BholaMart",
    category: "E-commerce",
    description:
      "A responsive marketplace-style e-commerce solution built to support product discovery, customer engagement, and easy browsing across devices.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    live: "https://bholamart.shop",
    github: "https://github.com/Mamun2k22",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Arshi Global",
    category: "Tour & Travel",
    description:
      "A professional travel and visa service website with service-focused sections, brand presentation, and user-friendly information architecture.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    live: "https://arshiglobal.com",
    github: "https://github.com/Mamun2k22",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    color: "from-teal-500 to-green-500",
  },
  {
    title: "Nerd Academy",
    category: "Learning Academy",
    description:
      "An educational platform built to present courses, academy information, and student-focused learning content with a clean and engaging interface.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    live: "https://nerd-academy-79ce8.web.app",
    github: "https://github.com/Mamun2k22",
    tech: ["React", "Firebase", "Tailwind CSS"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "All Star Academy",
    category: "School Management",
    description:
      "A school and academy management website designed to organize information, improve communication, and provide a polished digital presence for education services.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    live: "https://www.allstaracademy.org",
    github: "https://github.com/Mamun2k22",
    tech: ["React", "Node.js", "MongoDB", "Responsive UI"],
    color: "from-indigo-500 to-blue-500",
  },
];

export default function ProjectsPortfolio() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-16 top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-16 right-16 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            Featured Work
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            My Recent{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-gray-400">
            A selection of web applications and business-focused solutions I have
            designed and developed across e-commerce, education, travel, and
            digital platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-transparent"
            >
              {/* Hover Border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                style={{ padding: "1px" }}
              >
                <div className="h-full w-full rounded-3xl bg-gray-900" />
              </div>

              {/* Glow */}
              <div
                className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${project.color} opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-20`}
              />

              <div className="relative z-10">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${project.color} px-3 py-1 text-xs font-medium text-white shadow-lg`}
                    >
                      <FolderKanban className="h-3.5 w-3.5" />
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-gray-700 bg-gray-800/80 px-3 py-1 text-xs text-gray-300 transition-all duration-200 hover:border-cyan-500/30 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${project.color} px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-transform duration-200 hover:scale-105`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Preview
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800/80 px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:border-white/20 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import {
  Code2,
  Database,
  Cloud,
  Palette,
  Globe2,
  Megaphone,
  Braces,
  GitBranch,
  Award,
  CheckCircle,
  Cpu,
  Users,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6 text-white" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: <Braces className="w-6 h-6 text-white" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    items: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "JWT",
      "OAuth",
      "API Security",
      "Microservices",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-white" />,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    items: [
      "AWS (EC2, S3)",
      "Firebase",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    title: "Database & Hosting",
    icon: <Database className="w-6 h-6 text-white" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "AWS",
      "Vercel",
      "Netlify",
      "cPanel",
      "Domain Management",
    ],
  },
  {
    title: "Design Tools",
    icon: <Palette className="w-6 h-6 text-white" />,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    items: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    title: "SEO & Optimization",
    icon: <Globe2 className="w-6 h-6 text-white" />,
    color: "from-teal-500 to-green-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    items: [
      "SEO Optimization",
      "Google Analytics",
      "Keyword Research",
      "Meta Tags",
      "Performance Optimization",
      "Core Web Vitals",
    ],
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="w-6 h-6 text-white" />,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    items: [
      "Facebook Ads",
      "Google Ads",
      "Campaign Management",
      "Audience Targeting",
      "Ad Optimization",
      "ROI Analysis",
    ],
  },
  {
    title: "Tools & Version Control",
    icon: <GitBranch className="w-6 h-6 text-white" />,
    color: "from-gray-400 to-gray-600",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/20",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "VS Code",
      "Postman",
      "npm/yarn",
      "Webpack",
      "ESLint",
    ],
  },
];

const stats = [
  {
    label: "Projects Completed",
    value: "50+",
    icon: <Code2 className="w-5 h-5 text-white" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "Technologies",
    value: "30+",
    icon: <Cpu className="w-5 h-5 text-white" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Happy Clients",
    value: "40+",
    icon: <Users className="w-5 h-5 text-white" />,
    color: "from-orange-500 to-red-500",
  },
];

export default function SkillsPortfolio() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-40 left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-40 right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            My Technical Expertise
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            A powerful blend of full-stack development, cloud tools, design
            systems, and digital marketing expertise that helps me build modern,
            scalable, and business-focused digital solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-gray-600/70"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10`}
                />
              </div>

              <div className="relative z-10">
                <div className="mb-3 flex justify-center">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-40 blur-lg`}
                    />
                    <div
                      className={`relative rounded-xl bg-gradient-to-r ${stat.color} p-2.5 shadow-lg`}
                    >
                      {stat.icon}
                    </div>
                  </div>
                </div>

                <div
                  className={`bg-gradient-to-r ${stat.color} bg-clip-text text-2xl font-bold text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent"
            >
              {/* Gradient Border on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                style={{ padding: "1px" }}
              >
                <div className="h-full w-full rounded-2xl bg-gray-900" />
              </div>

              {/* Card Glow */}
              <div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-20`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-5 flex items-start justify-between">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 scale-125 rounded-2xl bg-gradient-to-r ${skill.color} opacity-40 blur-2xl transition-all duration-300 group-hover:opacity-70`}
                    />
                    <div
                      className={`relative rounded-2xl bg-gradient-to-br ${skill.color} p-4 shadow-lg border border-white/10`}
                    >
                      {skill.icon}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-gray-800/80 px-2.5 py-1 text-xs">
                    <Award className="h-3 w-3 text-yellow-500" />
                    <span className="text-gray-400">Expert</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {skill.title}
                </h3>

                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-full border border-gray-700 bg-gray-800/80 px-3 py-1 text-xs text-gray-300 transition-all duration-200 hover:border-blue-500/30 hover:bg-gray-800"
                    >
                      <CheckCircle className="h-3 w-3 text-gray-600 transition-colors duration-200 group-hover:text-blue-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
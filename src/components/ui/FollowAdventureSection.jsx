import React from "react";
import {
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Smartphone,
  Megaphone,
  Search,
  Gauge,
  Layers3,
  Rocket,
} from "lucide-react";

export default function FollowAdventureSection() {
  const BG =
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80";

  const items = [
    {
      title: "BUSINESS WEBSITE",
      sub: "Modern responsive websites for brands and businesses",
      icon: <Globe className="h-7 w-7" />,
    },
    {
      title: "E-COMMERCE STORE",
      sub: "Online stores with product, cart and order systems",
      icon: <ShoppingCart className="h-7 w-7" />,
    },
    {
      title: "WEB APPLICATION",
      sub: "Custom dashboards, admin panels and SaaS-style tools",
      icon: <LayoutDashboard className="h-7 w-7" />,
    },
    {
      title: "MOBILE APP WEBVIEW",
      sub: "Convert your website into Android or app-like experience",
      icon: <Smartphone className="h-7 w-7" />,
    },
    {
      title: "FACEBOOK ADS",
      sub: "Lead generation, campaign setup and ad optimization",
      icon: <Megaphone className="h-7 w-7" />,
    },
    {
      title: "SEO OPTIMIZATION",
      sub: "Improve ranking, visibility and organic search reach",
      icon: <Search className="h-7 w-7" />,
    },
    {
      title: "WEBSITE SPEED",
      sub: "Performance tuning and Core Web Vitals improvement",
      icon: <Gauge className="h-7 w-7" />,
    },
    {
      title: "LANDING PAGE DESIGN",
      sub: "High-converting pages for marketing and product campaigns",
      icon: <Layers3 className="h-7 w-7" />,
    },
    {
      title: "DIGITAL GROWTH PACKAGE",
      sub: "Website, SEO and marketing support within budget",
      icon: <Rocket className="h-7 w-7" />,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={BG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#06101f]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081425]/80 via-[#0a1322]/90 to-[#050b16]/95" />
      </div>

      {/* glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <Rocket className="h-4 w-4 text-cyan-400" />
            Affordable Solutions for Modern Businesses
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            All-in-One{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Services
            </span>
          </h2>

          <p className="mt-4 text-sm font-medium leading-7 text-white/75 sm:text-base">
            I provide complete digital solutions including website development,
            web applications, Facebook Ads, SEO, landing pages, and business
            growth support — all within a reasonable budget.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((it, idx) => (
            <Card key={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, sub, icon }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07] hover:shadow-[0_10px_40px_rgba(34,211,238,0.12)]">
      {/* left glow strip */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500 opacity-70" />

      {/* hover glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
      </div>

      <div className="relative flex items-start gap-4 px-6 py-6">
        {/* Icon box */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
            {icon}
          </div>
        </div>

        {/* text */}
        <div className="min-w-0">
          <h3 className="text-sm font-extrabold tracking-[0.16em] text-white sm:text-[15px]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/65">{sub}</p>

          <div className="mt-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
            Reasonable Price
          </div>
        </div>
      </div>
    </div>
  );
}
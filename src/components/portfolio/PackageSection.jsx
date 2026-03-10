import React from "react";
import { 
  Code2, 
  Smartphone, 
  Globe2, 
  Megaphone, 
  Rocket, 
  Zap,
  Settings,
  BarChart3,
  Users,
  Target,
  Shield,
  Clock,
  CheckCircle2,
  Star,
  Sparkles,
  Gift,
  TrendingUp,
  Bot,
  Palette,
  ShoppingCart,
  Search,
  Mail,
  FileText,
  Wrench,
  Database,
  Server,
  Layout,
  ExternalLink
} from "lucide-react";
import { FaMeta } from "react-icons/fa6";

export default function PackageSection() {
  const BG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  const packages = [
    {
      title: "BASIC WEBSITE",
      sub: "For Startups & Small Business",
      icon: <Layout className="w-6 h-6" />,
      price: "৳10,000",
      originalPrice: "৳25,000",
      discount: "40% OFF",
      features: [
        "3 Pages Responsive Website",
        "React / HTML5 / CSS3",
        "Mobile Friendly Design",
        "Contact Form Integration",
        "Basic SEO Setup",
        "1 Month Free Support"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      title: "BUSINESS PRO",
      sub: "For Growing Companies",
      icon: <Rocket className="w-6 h-6" />,
      price: "৳15,000",
      originalPrice: "৳55,000",
      discount: "35% OFF",
      features: [
        "Full MERN Stack Website",
        "5-7 Dynamic Pages",
        "Admin Dashboard",
        "Database Integration",
        "Payment Gateway",
        "SEO Optimization",
        "Facebook Ads Setup",
        "3 Months Free Support"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true,
      badge: "MOST POPULAR"
    },
    {
      title: "DIGITAL GROWTH",
      sub: "Complete Marketing Package",
      icon: <TrendingUp className="w-6 h-6" />,
      price: "৳25,000",
      originalPrice: "৳75,000",
      discount: "40% OFF",
      features: [
        "E-commerce / Business Website",
        "Advanced Facebook Ads",
        "Instagram Marketing",
        "Google My Business",
        "Email Marketing Setup",
        "Monthly Analytics Report",
        "SEO + Content Writing",
        "6 Months Free Support"
      ],
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ];

  const specialOffers = [
    {
      title: "Web + Marketing Combo",
      description: "Get website + 3 months marketing FREE",
      icon: <Gift className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "24/7 Priority Support",
      description: "Whatsapp & Phone support anytime",
      icon: <Clock className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Money Back Guarantee",
      description: "30-day satisfaction guarantee",
      icon: <Shield className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const addons = [
    { icon: <Bot className="w-4 h-4" />, label: "Chatbot Integration", price: "2,000" },
    { icon: <Palette className="w-4 h-4" />, label: "Logo Design", price: "3,000" },
    { icon: <ShoppingCart className="w-4 h-4" />, label: "E-commerce Setup", price: "10,000" },
    { icon: <Search className="w-4 h-4" />, label: "Advanced SEO", price: "4,000" },
    { icon: <FaMeta className="w-4 h-4" />, label: "Meta Ads", price: "3,000" },
    { icon: <FileText className="w-4 h-4" />, label: "Content Writing", price: "2,000" },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={BG} alt="Tech Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Header Section */}
        <div className="text-center text-white mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Special Launch Offers</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Developer + Marketer = Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Growth Partner
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Get complete digital solutions under one roof. From website development to marketing,
            we handle everything at affordable prices.
          </p>
        </div>

        {/* USP Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {specialOffers.map((offer, idx) => (
            <div key={idx} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${offer.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${offer.color} bg-opacity-10`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${offer.color}`}>
                    {offer.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{offer.title}</h3>
                  <p className="text-sm text-gray-400">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`group relative ${pkg.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-white" />
                    {pkg.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="relative h-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-transparent transition-all duration-500 hover:-translate-y-2">
                
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-gray-900 rounded-3xl"></div>
                </div>

                <div className="relative z-10">
                  
                  {/* Icon & Discount */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${pkg.color} bg-opacity-10 border border-${pkg.color.split(' ')[1]}/20`}>
                      <div className={`text-transparent bg-clip-text bg-gradient-to-r ${pkg.color}`}>
                        {pkg.icon}
                      </div>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                      {pkg.discount}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.sub}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">{pkg.price}</span>
                      <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-xs text-green-400 mt-1">One-time payment • No hidden fees</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${pkg.color}`} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-xl bg-gradient-to-r ${pkg.color} text-white font-bold hover:shadow-lg hover:shadow-${pkg.color.split(' ')[1]}/25 transition-all flex items-center justify-center gap-2 group/btn`}>
                    <span>Get Started</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Popular Add-ons
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {addons.map((addon, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:border-transparent transition-all">
                  <div className="text-blue-400 mb-2 flex justify-center">
                    {addon.icon}
                  </div>
                  <div className="text-xs font-semibold text-white mb-1">{addon.label}</div>
                  <div className="text-xs text-gray-500">+৳{addon.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-gray-700/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Choose This Combo?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-gray-300"><span className="font-bold text-white">Developer + Marketer:</span> One team for both development and marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-gray-300"><span className="font-bold text-white">Cost Effective:</span> Save 40% compared to hiring separate agencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-gray-300"><span className="font-bold text-white">Faster Results:</span> Integrated approach for faster time-to-market</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-gray-300"><span className="font-bold text-white">Long-term Support:</span> Free maintenance and monthly reviews</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Limited Time Offer</h4>
              <p className="text-gray-400 mb-4">First 5 clients get free domain + hosting for 1 year</p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all">
                Claim Your Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { NavLink } from "react-router-dom";
import logo from "../../assets/images.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-neutral-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 lg:px-0 py-20 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Brand Section */}
          <aside className="space-y-6 lg:col-span-2">
            <div className="relative group">
              <img src={logo} className="w-44 h-12 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" alt="CourtReserve Logo" />
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
            </div>
            
            <p className="text-base leading-7 text-gray-300 bg-gradient-to-r from-gray-200 bg-[length:0px_10px] bg-bottom bg-no-repeat hover:bg-[length:100px_10px] transition-all duration-700">
              <span className="text-primary font-bold text-xl">CourtReserve</span> — Smart sports club management. 
              Handle bookings, events, payments — all in one place.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl border border-white/20 transition-all duration-300">
                <i className="fa-brands fa-x-twitter text-xl group-hover:text-primary"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl border border-white/20 transition-all duration-300">
                <i className="fa-brands fa-youtube text-xl group-hover:text-primary"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl border border-white/20 transition-all duration-300">
                <i className="fa-brands fa-facebook text-xl group-hover:text-primary"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
            </div>
          </aside>

          {/* Quick Links */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/courts", label: "Courts" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact-us", label: "Contact Us" },
                { to: "/support", label: "Support" }
              ].map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `group relative text-lg font-semibold block py-2 px-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "text-primary bg-gradient-to-r from-primary/20 to-blue-500/20 shadow-lg translate-x-2"
                          : "text-gray-300 hover:text-primary hover:bg-white/10 hover:translate-x-3 hover:shadow-xl"
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Resources
            </h2>
            {["Dashboard", "FAQ", "Support", "Contact"].map((item, idx) => (
              <a key={idx} href={`/${item.toLowerCase()}`} 
                 className="block py-2 text-gray-300 hover:text-emerald-400 font-medium hover:translate-x-2 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-400 after:to-teal-500 after:transition-all after:duration-300 hover:after:w-full">
                {item}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Legal
            </h2>
            {["Terms of Use", "Privacy Policy", "Cookie Policy"].map((item, idx) => (
              <a key={idx} href={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                 className="block py-2 text-gray-300 hover:text-orange-400 font-medium hover:translate-x-2 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-orange-400 after:to-red-500 after:transition-all after:duration-300 hover:after:w-full">
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contact Info
            </h2>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="group">
                <a href="mailto:support@courtreserve.com" className="hover:text-cyan-400 font-medium transition-colors">support@courtreserve.com</a>
              </div>
              <div className="group">
                <a href="tel:+916123456789" className="hover:text-cyan-400 font-medium transition-colors">+91 6123456789</a>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                <p className="text-xs">Jodhpur, Rajasthan<br/>India - 342001</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-black/50 to-slate-900/50 backdrop-blur-md border-t border-white/5 py-6">
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-0 gap-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">
              CR
            </span>
            <p className="font-semibold"><span className="text-primary text-lg font-black">CourtReserve</span> — Manage. Play. Excel.</p>
          </div>
          <p className="text-gray-400 font-medium tracking-wide">© 2026 CourtReserve. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

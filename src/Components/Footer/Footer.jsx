import { NavLink } from "react-router-dom";
import logo from "../../assets/images.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-neutral-900 text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} className="w-40 h-10" alt="CourtReserve" />
            <p className="text-sm text-gray-300">
  Smart sports club management. Book courts, manage events, 
  handle payments — all in one place. Play smarter, win bigger.
</p>

            <div className="flex gap-2">
              {/* <a href="#" className="w-10 h-10 bg-white text-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-100">
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </a> */}
              <a href="#" className="w-10 h-10 bg-white text-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-100">
                <i className="fa-brands fa-youtube text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white text-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-100">
                <i className="fa-brands fa-facebook text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white text-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-100">
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/" className="text-gray-300 hover:text-white">Home</NavLink></li>
              <li><NavLink to="/courts" className="text-gray-300 hover:text-white">Courts</NavLink></li>
              <li><NavLink to="/faq" className="text-gray-300 hover:text-white">FAQ</NavLink></li>
              <li><NavLink to="/contact-us" className="text-gray-300 hover:text-white">Contact</NavLink></li>
              <li><NavLink to="/support" className="text-gray-300 hover:text-white">Support</NavLink></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">Dashboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>support@courtreserve.com</p>
              <p>+91 6123456789</p>
              <p>Jodhpur, Rajasthan<br/>India - 342001</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 mt-8 text-center text-sm text-gray-400">
          <p>© 2026 CourtReserve. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

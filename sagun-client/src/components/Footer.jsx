import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Sign In', to: '/auth/signin' },
];

const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 bg-blue-900 px-4 py-8 text-zinc-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[1.35fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="BulldogEx"
                className="h-10 w-10 rounded-full border-2 border-zinc-100 bg-zinc-50 object-contain"
              />
              <h3 className="text-xl font-bold text-zinc-50">BulldogEx Shop</h3>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-blue-100">
              Campus essentials, official merch, and student-ready picks in one easy storefront.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-200">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-blue-100 transition hover:text-zinc-50"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-200">
              Store Info
            </p>
            <ul className="mt-3 space-y-2 text-sm text-blue-100">
              <li>Pickup: Mon-Fri, 9:00 AM to 5:00 PM</li>
              <li>Location: NU Bulldogs Exchange</li>
              <li>Support: help@bulldogex.shop</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-700 pt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
            Copyright {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

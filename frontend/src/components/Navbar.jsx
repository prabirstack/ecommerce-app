import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="forever" className="w-36" />
      </Link>

      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="uppercase">Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="uppercase">Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="uppercase">About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="uppercase">Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />

        <div className="relative group">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          <div className="absolute right-0 hidden pt-4 group-hover:block dropdown-menu">
            <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100">
              <p className=" hover:text-black">My Profile</p>
              <p className=" hover:text-black">Orders</p>
              <p className=" hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Side bar menu for mobile */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="dropdown icon"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="py-2 pl-6 uppercase border"
            onClick={() => setVisible(false)}
          >
            home
          </NavLink>
          <NavLink
            to="/collction"
            className="py-2 pl-6 uppercase border"
            onClick={() => setVisible(false)}
          >
            collection
          </NavLink>
          <NavLink
            to="/about"
            className="py-2 pl-6 uppercase border"
            onClick={() => setVisible(false)}
          >
            about
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 pl-6 uppercase border"
            onClick={() => setVisible(false)}
          >
            contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

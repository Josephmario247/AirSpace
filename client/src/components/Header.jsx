import { useEffect, useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { MdOutlineShoppingCart, MdPersonOutline } from "react-icons/md";
import { useSelector } from "react-redux";

export default function Header() {
  const [navShow, setNavShow] = useState(false);
  const location = useLocation();
  const cartState = useSelector((state) => state.cart)

  useEffect(() => {
    return () => {
      setNavShow(false);
    };
  }, [location.pathname]);

  return (
    <header className="bg-white relative px-4">
      <div className="container mx-auto relative py-4 flex justify-between gap-4 items-center bg-white">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 md:h-8 md:w-8 rounded-full bg-orange-500 flex-shrink-0"></div>
          <h1 className="text-gray-600 font-semibold text-sm md:text-lg">
            AirSpace
          </h1>
        </div>
        <nav
          className={`flex flex-col md:flex-row md:gap-4 md:justify-center absolute md:static ${
            navShow ? "left-0" : "left-[100vw]"
          } top-full w-full bg-orange-100 md:bg-transparent z-50`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              className="text-gray-600 text-sm sm:text-base py-2 px-4 hover:bg-orange-500 hover:text-white md:border-b-2 md:border-transparent md:hover:border-orange-500 md:hover:bg-transparent md:hover:text-gray-600"
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3 items-center">
          <div className="flex p-1.5 border  border-gray-50 hover:bg-orange-50 rounded-md cursor-pointer relative">
            <Link
              to={"/cart"}
            >
              <span className="absolute -top-3 -right-1 h-4 w-4 rounded-full text-white bg-orange-500 grid place-items-center text-xs">
                {cartState.length}
              </span>
            </Link>
            <MdOutlineShoppingCart className="text-orange-600 font-bold text-lg" />
            
          </div>
          <div className="flex relative p-1.5 border border-gray-50 hover:bg-orange-50 rounded-md cursor-pointer">
            <Link
              to={"/Account"}
              
            >
              <MdPersonOutline className="text-orange-600 font-bold text-xl" />
            </Link>
          </div>
          <div
            onClick={() => setNavShow(!navShow)}
            className="flex p-2 border border-gray-200 hover:bg-gray-200 md:hidden rounded-md cursor-pointer"
          >
            <HiMiniBars2 className="text-gray-600 font-bold text-lg" />
          </div>
        </div>
      </div>
    </header>
  );
}

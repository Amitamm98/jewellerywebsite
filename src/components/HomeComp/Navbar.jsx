import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo6.png";

const Navbar = () => {
  return (
    <>
      <nav className="w-full sticky top-0 left-0 z-50">
        <div className="flex justify-between bg-[#F5DEB3] py-0 mainPadding items-center">
          <img src={Logo} className="w-[250px]" alt="logo" />

          <div className="flex gap-4">
            <FaCartShopping
              size={40}
              className="text-black hover:text-[#B99126] cursor-pointer"
            />
          </div>
        </div>
        {/* first part */}

        <div className="py-3 bg-wheat mainPadding shadow-md flex justify-between bg-[#F5DEB3] gap-3 items-center ">
          <ul className="m-0 list-none flex gap-12">
            <li>
              <Link
                to="/"
                className="hover:text-[#DEB133] text-[#5D5D5D] font-semibold"
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                to="/bags"
                className="hover:text-[#DEB133] text-[#5D5D5D] font-semibold"
              >
                STONES
              </Link>
            </li>

            <li>
              <Link
                to="/carpets"
                className="hover:text-[#DEB133] text-[#5D5D5D] font-semibold"
              >
              GOLD WITH DIAMONDS
              </Link>
            </li>

            <li>
              <Link
                to="/jewellery"
                className="hover:text-[#DEB133] text-[#5D5D5D] font-semibold"
              >
              OUR TRENDING
              </Link>
            </li>

            <li>
              <Link
                to="/pashminas"
                className="hover:text-[#DEB133] text-[#5D5D5D] font-semibold"
              >
                MENS JEWELLERYS
              </Link>
            </li>

            <li>
              <Link
                to="/statue"
                className="hover:text-[#DEB133] text-[#5D5D5D] font-semibold"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/About us"
                className="hover:text-[#DEB133] text-[#5D5D5D] font-semibold"
              >
              
                CONTACT US
              </Link>
            </li>
          </ul>

          <input
            type="text"
            placeholder="Search.. "  
            className="w-70  hover:text-[#ffffff] focus:outline-none shadow  bg-[#CA8606] text-lg px-2 py-1 rounded placeholder:text-white"
            
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

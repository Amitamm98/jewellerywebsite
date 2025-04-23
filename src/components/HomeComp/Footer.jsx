import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import Facebook from "../../assets/footer/facebook.png";
import Instagram from "../../assets/footer/instagram.png";
import Payment from "../../assets/footer/payment.png";
import Twitter from "../../assets/footer/twiiter.png";

import FooterLogo from "../../assets/logo2.jpg";

const Footer = () => {
  return (
    <>
      <footer className="mainPadding bg-[#231E19] text-white py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <img src={FooterLogo} className="w-[200px]" alt="footer image" />

          <div>
            <div className="flex gap-2 items-center my-4">
              <span className="size-8 flex flex-col justify-center items-center border-[2px] border-[#BEBDBD] rounded-full">
                <IoLocation className="size-5 text-[#dfdfdf]" />
              </span>
              <p className="text-[#BEBDBD] text-[13px]">
                Shop Address-Bhaniyawala,Dehradun,Uttrakhand(2301470)
              </p>
            </div>

            <div className="flex gap-2 items-center my-4">
              <span className="size-8 flex flex-col justify-center items-center border-[2px] border-[#BEBDBD] rounded-full">
                <FaPhoneAlt className="size-4 text-[#dfdfdf]" />
              </span>
              <p className="text-[#BEBDBD] text-[13px]">8393897890</p>
            </div>

            <div className="flex gap-2 items-center mt-4">
              <span className="size-8 flex flex-col justify-center items-center border-[2px] border-[#BEBDBD] rounded-full">
                <FaEnvelope className="size-4 text-[#dfdfdf]" />
              </span>
              <p className="text-[#BEBDBD] text-[13px]">
                namit8928@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/* first footer part */}

        <div>
          <h4 className="font-bold text-lg mb-4">LINKS</h4>

          <div className="flex gap-3 ">
            <ul className="m-0 list-none flex flex-col gap-1 ">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#DEB133] text-[#bababa] text-[13px] font-semibold"
                >
                  HOME
                </Link>
              </li>

              <li>
                <Link
                  to="/bags"
                  className="hover:text-[#DEB133] text-[#bababa] text-[13px] font-semibold"
                >
                  STONES
                </Link>
              </li>

              <li>
                <Link
                  to="/carpets"
                  className="hover:text-[#DEB133] text-[#bababa] text-[13px] font-semibold"
                >
                  GOLD WITH DIAMOND
                </Link>
              </li>

              <li>
                <Link
                  to="/jewellery"
                  className="hover:text-[#DEB133] text-[#bababa] text-[13px] font-semibold"
                >
                OUR TRENDING
                </Link>
              </li>

              <li>
                <Link
                  to="/pashminas"
                  className="hover:text-[#DEB133] text-[#bababa] text-[13px] font-semibold"
                >
                  MENS JEWELLERYS
                </Link>
              </li>
            </ul>

            <ul className="m-0 list-none flex flex-col gap-1 ">
              <li>
                <Link
                  to="/statue"
                  className="hover:text-[#DEB133] text-[#bababa] text-[13px] font-semibold"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/thangkas"
                  className="hover:text-[#DEB133] text-[#bababa] text-[13px] font-semibold"
                >
                 CONTACT US 
              
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* second footer part */}

        <div>
          <h4 className="font-bold text-lg mb-4">FOLLOW US</h4>

          <div className="flex items-center gap-2">
            <Link to="https://www.facebook.com/" target="_blank">
              <img src={Facebook} alt="facebook" className="size-10" />
            </Link>

            <Link to="https://www.instagram.com/" target="_blank">
              <img src={Instagram} alt="instagram" className="size-10" />
            </Link>

            <Link to="https://x.com/?mx=2" target="_blank">
              <img src={Twitter} alt="twitter" className="size-10" />
            </Link>
          </div>

          <h3 className="font-bold text-lg mt-6 mb-3">WE ACCEPT</h3>

          <Link to="https://usa.visa.com/" target="_blank">
            <img src={Payment} alt="payment" className="w-[80%]" />
          </Link>
        </div>
        {/* third footer part */}
      </footer>
      <div className="bg-[#000000] text-white mainPadding py-3">
        <p>® 2025 True Stone Jewellery. All Right Reserved</p>
      </div>
    </>
  );
};

export default Footer;

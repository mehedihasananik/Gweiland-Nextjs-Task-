import React from "react";
import logo from "../../../public/images/Artboard_1.png";
import tiktok from "../../../public/images/tiktok.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      {/* navbar for desktop */}
      <div
        style={{ padding: "0 4%" }}
        className="hidden  md:navbar z-50 bg-[#212122] text-white "
      >
        <div className="navbar-start ">
          <div className="">
            <ul className="relative menu menu-horizontal px-1 font-bold bg-[#212122] text-white z-50 text-[16px]">
              <li className="group" tabIndex={0}>
                <summary className="hover:text-[#EDD35A] rounded-none   hover:border-b-2 hover:border-b-[#EDD35A] ">
                  brands <KeyboardArrowDownIcon />
                </summary>
                <ul className="absolute top-14 w-[200px] left-[-10px] p-2 hidden group-hover:block bg-[#29292A] text-white  duration-500 ">
                  <li>
                    <a>All Brands</a>
                  </li>
                  <li class="" role="none">
                    <a href="/collections/hosky" title="$HOSKY" role="menuitem">
                      $HOSKY
                    </a>
                  </li>
                  <li class="" role="none">
                    <a title="BitFins" role="menuitem">
                      BitFins
                    </a>
                  </li>
                  <li class="" role="none">
                    <a>Cardano Stonerz Club</a>
                  </li>
                  <li class="" role="none">
                    <a>CryptoRaggies</a>
                  </li>
                  <li class="" role="none">
                    <a>Danketsu</a>
                  </li>
                  <li class="" role="none">
                    <a>Future Fest</a>
                  </li>
                  <li class="" role="none">
                    <a>Pendulum</a>
                  </li>
                  <li class="" role="none">
                    <a>Vudu Brigada</a>
                  </li>
                </ul>
              </li>

              <li className="group" tabIndex={0}>
                <summary className="hover:text-[#EDD35A] rounded-none   hover:border-b-2 hover:border-b-[#EDD35A] ">
                  shop <KeyboardArrowDownIcon />
                </summary>
                <ul
                  style={{ overflow: "hidden" }}
                  className="absolute top-8 w-[100vw] overflow-hidden -left-56  hidden group-hover:block bg-[#29292A] text-white  duration-500 p-16 mt-4 "
                >
                  <div className="flex justify-between">
                    <div>
                      {" "}
                      <li>
                        <a>All Brands</a>
                      </li>
                      <li class="" role="none">
                        <a
                          href="/collections/hosky"
                          title="$HOSKY"
                          role="menuitem"
                        >
                          $HOSKY
                        </a>
                      </li>
                      <li class="" role="none">
                        <a title="BitFins" role="menuitem">
                          BitFins
                        </a>
                      </li>
                      <li class="" role="none">
                        <a>Cardano Stonerz Club</a>
                      </li>
                      <li class="" role="none">
                        <a>CryptoRaggies</a>
                      </li>
                      <li class="" role="none">
                        <a>Danketsu</a>
                      </li>
                      <li class="" role="none">
                        <a>Future Fest</a>
                      </li>
                      <li class="" role="none">
                        <a>Pendulum</a>
                      </li>
                      <li class="" role="none">
                        <a>Vudu Brigada</a>
                      </li>
                    </div>
                    <div>
                      {" "}
                      <li>
                        <a>All Brands</a>
                      </li>
                      <li class="" role="none">
                        <a
                          href="/collections/hosky"
                          title="$HOSKY"
                          role="menuitem"
                        >
                          $HOSKY
                        </a>
                      </li>
                      <li class="" role="none">
                        <a title="BitFins" role="menuitem">
                          BitFins
                        </a>
                      </li>
                      <li class="" role="none">
                        <a>Cardano Stonerz Club</a>
                      </li>
                      <li class="" role="none">
                        <a>CryptoRaggies</a>
                      </li>
                      <li class="" role="none">
                        <a>Danketsu</a>
                      </li>
                      <li class="" role="none">
                        <a>Future Fest</a>
                      </li>
                      <li class="" role="none">
                        <a>Pendulum</a>
                      </li>
                      <li class="" role="none">
                        <a>Vudu Brigada</a>
                      </li>
                    </div>
                    <div></div>
                  </div>
                </ul>
              </li>
              <li className="hover:text-[#EDD35A] rounded-none   hover:border-b-2 hover:border-b-[#EDD35A] ">
                <a>premium</a>
              </li>
              <li className="hover:text-[#EDD35A] rounded-none   hover:border-b-2 hover:border-b-[#EDD35A] ">
                <a>gift cards</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Image className="w-24 h-14" src={logo} alt="" />
          </ul>
        </div>
        <div className="navbar-end ">
          <ul className="menu menu-horizontal  items-center  gap-x-3">
            <li className="text-[16px] font-bold">
              <a className="hover:text-[#EDD35A] rounded-none   hover:border-b-2 hover:border-b-[#EDD35A] ">
                Become an affiliate
              </a>
            </li>
            <li className="hover:text-[#EDD35A]">
              <a className="p-0 m-0">
                <TwitterIcon />
              </a>
            </li>
            <li className="hover:text-[#EDD35A]">
              <a className="p-0 m-0 hover:text-[#EDD35A] ">
                <Image className="w-8 h-8" src={tiktok} alt="" />
              </a>
            </li>
            <li className="hover:text-[#EDD35A]">
              <a className="p-0 m-0">
                <InstagramIcon />
              </a>
            </li>
            <li className="hover:text-[#EDD35A]">
              <a className="p-0 m-0">
                <PersonIcon />
              </a>
            </li>
            <li className="hover:text-[#EDD35A]">
              <a className="p-0 m-0">
                <SearchIcon />
              </a>
            </li>
            <li className="hover:text-[#EDD35A]">
              <a className="p-0 m-0">
                <ShoppingBagOutlinedIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* navbar for mobile */}
      <div className="flex items-center h-16 bg-[#212122] justify-between md:hidden">
        <div>
          <details className="dropdown z-40">
            <summary className=" ">
              <span className="text-white">
                {" "}
                <MenuIcon />
              </span>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#212122] text-white  w-[100vw] h-[100vh] text-[1.5rem] gap-y-6 pt-14">
              <li>
                <a>Brands</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>Premium</a>
              </li>
              <li>
                <a>Gift shop</a>
              </li>
              <li>
                <a>Become a affiliate</a>
              </li>

              <li>
                <div className="flex">
                  <TwitterIcon />
                  <li>
                    <a className="p-0 m-0">
                      <Image className="w-8 h-8" src={tiktok} alt="" />
                    </a>
                  </li>
                  <InstagramIcon />
                </div>
              </li>
            </ul>
          </details>
        </div>

        <div>
          {" "}
          <Image className="w-24 h-14" src={logo} alt="" />
        </div>

        <div className="text-white">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>
                <SearchIcon />
              </a>
            </li>
            <li>
              <a>
                <ShoppingBagOutlinedIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

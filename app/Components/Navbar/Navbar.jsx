import React from "react";
import logo from "../../../public/images/Artboard_1.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar bg-[#212122] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-[#212122] text-white"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="relative menu menu-horizontal px-1 font-bold bg-[#212122] text-white">
            <li className="group" tabIndex={0}>
              <summary>brands</summary>
              <ul className="absolute top-8 w-[200px] left-[-10px] p-2 hidden group-hover:block bg-[#29292A] text-white  duration-500">
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
              <summary>shop</summary>
              <ul className="absolute top-8 w-[90vw] left-[-10px] p-2 hidden group-hover:block bg-[#29292A] text-white  duration-500">
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
            <li>
              <a>premium</a>
            </li>
            <li>
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
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Become an affiliate</a>
          </li>

          <li>
            <a>
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a>
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a>
              <PersonIcon />
            </a>
          </li>
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
  );
};

export default Navbar;

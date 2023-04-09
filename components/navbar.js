import React from "react";
import Image from "next/image";
import {
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";
import { FaFacebookF, FaBitbucket, FaPhone, FaSearch } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header className="absolute bg-black/40 w-full py-[0.7rem] z-50">
        <div className="flex flex-row justify-center gap-5 lg:ml-5">
          <div className="flex">
            <Image
              height={500}
              width={500}
              src="/logo.png"
              className="w-[7.1rem] h-[7.1rem]"
            />
          </div>
          <div className="flex flex-col items-center justify-center -translate-y-1">
            {/* Top Nav  */}
            <div className="">
              <div className="flex items-center gap-16">
                <ul className="flex gap-12">
                  <li>
                    <a
                      className="text-gray-100 transition flex items-center gap-2 top-nav text-[0.8rem] hover:text-[#ECC834]"
                      href="/"
                    >
                      <span>
                        <FaPhone className="text-[1rem] font-thin" />
                      </span>
                      +91 44-26254152
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-100 transition flex items-center gap-2 top-nav text-[0.8rem] hover:text-[#ECC834]"
                      href="/"
                    >
                      <span>
                        <MdEmail className="text-[1rem] font-thin" />
                      </span>
                      sales@royalanchors.com
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-100 transition flex items-center gap-2 top-nav text-[0.8rem] hover:text-[#ECC834]"
                      href="/"
                    >
                      <span>
                        <MdLocationOn className="text-[1rem] font-thin" />
                      </span>
                      Plot No 5 & 6, 8th Street Tass Industrial Estate Ambattur
                      Chennai - 98
                    </a>
                  </li>
                </ul>

                <ul className="flex gap-1 ">
                  <li className="">
                    <a className="text-gray-100 transition" href="/">
                      <FaFacebookF className="text-[2.1rem] p-2 hover:bg-[#ECC834] rounded-sm transition-all ease-in-out duration-300" />
                    </a>
                  </li>

                  <li className="">
                    <a className="text-gray-100 transition" href="/">
                      <AiOutlineTwitter className="text-[2.1rem] p-2 hover:bg-[#ECC834] rounded-sm transition-all ease-in-out duration-300" />
                    </a>
                  </li>

                  <li className="">
                    <a className="text-gray-100 transition" href="/">
                      <AiFillGithub className="text-[2.1rem] p-2 hover:bg-[#ECC834] rounded-sm transition-all ease-in-out duration-300" />
                    </a>
                  </li>

                  <li className="">
                    <a className="text-gray-100 transition" href="/">
                      <FaBitbucket className="text-[2.1rem] p-2 hover:bg-[#ECC834] rounded-sm transition-all ease-in-out duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Top Nav  */}
            <div className="bg-white w-full h-[0.07px] my-3 mb-5"></div>
            {/* Bottom Nav  */}
            <div className="text-white">
              <ul className="flex items-center text-sm px-8">
                <li className="">
                  <a
                    className="text-[#ECC834] bg-[#54595F] p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] font-bold tracking-wide"
                    href="/"
                  >
                    HOME
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide "
                    href="/"
                  >
                    ABOUT US
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="/"
                  >
                    SERVICES
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="/"
                  >
                    OUR PRODUCTS
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="/"
                  >
                    TECHNICAL SPECIFICATION
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="/"
                  >
                    INDUSTRIES WE SERVE
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="/"
                  >
                    MANUFACTURING CAPABILITIES
                  </a>
                </li>
              </ul>
            </div>
            {/* Bottom Nav  */}
          </div>
          {/* Search Modal  */}
          <div className="flex justify-center items-center text-white translate-x-8">
            <a href="">
              <FaSearch className="text-lg font-bold" />
            </a>
          </div>
          {/* Search Modal  */}
        </div>
      </header>
    </>
  );
};

export default Navbar;

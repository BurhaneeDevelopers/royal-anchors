import React from "react";
import Image from "next/image";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookF, FaBitbucket, FaPhone, FaSearch } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header
        className="absolute bg-white md:bg-black/40 xl:py-[0.7rem] z-50 w-full"
        data-te-navbar-ref
      >
        <div className="flex flex-row justify-between items-center md:justify-center md:gap-5 lg:ml-5 p-2 md:pt-10 md:px-10">
          <div className="flex">
            <Image
              height={500}
              width={500}
              src="/logo.png"
              className="w-[13rem] md:w-[7.5rem] md:h-[4.8rem] xl:w-[7.1rem] xl:h-[7.1rem]"
            />
          </div>
          <div className="flex flex-col -translate-y-1">
            {/* Top Nav  */}
            <div className="hidden md:flex">
              <div className="flex gap-2 xl:gap-16">
                <ul className="flex flex-wrap gap-5 xl:gap-12 text-center items-center justify-center">
                  <li>
                    <a
                      className="text-gray-100 transition flex items-center gap-2 top-nav text-[0.8rem] hover:text-[#ECC834]"
                      href="#"
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
                      href="#"
                    >
                      <span>
                        <MdEmail className="text-[1rem] font-thin" />
                      </span>
                      sales@royalanchors.com
                    </a>
                  </li>

                  <li className="w-[21rem]">
                    <a
                      className="text-gray-100 transition flex items-center gap-2 top-nav text-[0.8rem] hover:text-[#ECC834]"
                      href="#"
                    >
                      <span className="">
                        <MdLocationOn className="text-[1rem] font-thin" />
                      </span>
                      Plot No 5 & 6, 8th Street Tass Industrial Estate Ambattur
                      Chennai - 98
                    </a>
                  </li>
                </ul>

                <ul className="flex gap-1 ">
                  <li className="">
                    <a className="text-gray-100 transition" href="#">
                      <FaFacebookF className="text-[2.1rem] p-2 hover:bg-[#ECC834] rounded-sm transition-all ease-in-out duration-300" />
                    </a>
                  </li>

                  <li className="">
                    <a className="text-gray-100 transition" href="#">
                      <AiOutlineTwitter className="text-[2.1rem] p-2 hover:bg-[#ECC834] rounded-sm transition-all ease-in-out duration-300" />
                    </a>
                  </li>

                  <li className="">
                    <a className="text-gray-100 transition" href="#">
                      <AiFillGithub className="text-[2.1rem] p-2 hover:bg-[#ECC834] rounded-sm transition-all ease-in-out duration-300" />
                    </a>
                  </li>

                  <li className="hidden lg:flex">
                    <a className="text-gray-100 transition" href="#">
                      <FaBitbucket className="text-[2.1rem] p-2 hover:bg-[#ECC834] rounded-sm transition-all ease-in-out duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Top Nav  */}
            <div className="bg-white w-full h-[0.07px] my-3 lg:mb-5 hidden md:flex"></div>
            {/* Bottom Nav  */}
            <div className="text-white">
              <div className="">
                <button
                  class="flex lg:hidden border-0 bg-transparent px-2.5 py-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0"
                  type="button"
                  data-te-collapse-init
                  data-te-target="#navbarSupportedContent3"
                  aria-controls="navbarSupportedContent3"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  {/* <!-- Hamburger icon --> */}
                  {/* <span class="w-7 text-gray-900 md:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-7 w-7"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span> */}
                  <GiHamburgerMenu className="text-2xl md:text-xl text-gray-900 md:text-whit"/>
                </button>
              </div>

              <ul className="hidden lg:flex justify-center items-center flex-wrap xl:flex-nowrap text-center text-sm space-y-2 px-8">
                <li className="">
                  <a
                    className="text-[#ECC834] bg-[#54595F] p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] font-bold tracking-wide"
                    href="#"
                  >
                    HOME
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide "
                    href="#"
                  >
                    ABOUT US
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="#"
                  >
                    SERVICES
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="#"
                  >
                    OUR PRODUCTS
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="#"
                  >
                    TECHNICAL SPECIFICATION
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="#"
                  >
                    INDUSTRIES WE SERVE
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white hover:text-[#ECC834] nav-el p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="#"
                  >
                    MANUFACTURING CAPABILITIES
                  </a>
                </li>
              </ul>
            </div>
            {/* Bottom Nav  */}
          </div>
          {/* Search Modal  */}
          <div className="hidden md:flex justify-center items-center text-white translate-x-0 2xl:translate-x-8">
            <a href="">
              <FaSearch className="text-lg font-bold" />
            </a>
          </div>
          {/* Search Modal  */}
        </div>

        {/* <!-- Collapsible navbar container --> */}
        <div
          class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto bg-white"
          id="navbarSupportedContent3"
          data-te-collapse-item
        >
          <ul
            class="list-style-none mx-auto flex flex-col pl-0 lg:flex-row text-center space-y-5 py-2"
            data-te-navbar-nav-ref
          >
            <li class="lg:px-2" data-te-nav-item-ref>
              <a
                class="active lg:px-2 [&.active]:text-black/90 headings font-thin text-xl"
                aria-current="page"
                href="#"
                data-te-nav-link-ref
              >
                Home
              </a>
            </li>
            <li class="lg:pr-2" data-te-nav-item-ref>
              <a
                class="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:px-2 [&.active]:text-black/90 headings font-[200] text-xl"
                href="#"
                data-te-nav-link-ref
              >
                Features
              </a>
            </li>
            <li class="lg:pr-2" data-te-nav-item-ref>
              <a
                class="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:px-2 [&.active]:text-black/90 headings font-[200] text-xl"
                href="#"
                data-te-nav-link-ref
              >
                Pricing
              </a>
            </li>
            <li class="lg:pr-2" data-te-nav-link-ref>
              <a class="text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Collapsible navbar container --> */}
      </header>
    </>
  );
};

export default Navbar;

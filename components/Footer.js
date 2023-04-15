import React from "react";
// Icons
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <footer className="bg-[#2e2d2d]">
        <div className="container flex flex-col items-center justify-around p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <p className="text-gray-100 flex flex-col text-center sm:text-start">
            <span className="text-xl headings text-[#d6d6d6]">
              {" "}
              © 2021 Royal Anchors. All Rights Reserved.
            </span>{" "}
            <span className="headings text-[#d6d6d6]">Powered By Studio53</span>
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className=" text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Reddit"
            >
              <AiOutlineTwitter className="text-white text-lg" />
            </a>

            <a
              href="#"
              className=" text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>

            <a
              href="#"
              className=" text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Github"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>

            <a
              href="#"
              className=" text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Github"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const BackToTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var scroll = document.querySelector(".scrollTop");
      scroll.classList.toggle("active", window.scrollY > 500);
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll back to the top of the page
  };

  return (
    <>
      <div
        className="fixed  bg-[#ce9e51] p-4 right-10 bottom-[800px] z-50 rounded-full scrollTop invisible opacity-0 transition-all duration-500 cursor-pointer animate-pulse"
        onClick={handleClick}
      >
        <AiOutlineArrowUp className="text-white text-xl" />
      </div>
    </>
  );
};

export default BackToTop;

import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { useState } from "react";

const Action = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      {isVisible && (
        <div className="">
          <div
            className="fixed bg-[#49E670] p-3 left-10 bottom-40 z-50 rounded-full transition-all duration-500 cursor-pointer tooltip tooltip-right"
            data-tip="Whatsapp"
          >
            <BsWhatsapp className="text-white text-3xl font-bold" />
          </div>
          {/* <ToolTip text="This is a tooltip!"> */}
            <div className="fixed bg-[#03E78B] p-3 left-10 bottom-[100px] z-50 rounded-full transition-all duration-500 cursor-pointer tooltip tooltip-right" data-tip="Whatsapp">
              <FaPhoneAlt className="text-white text-3xl font-bold" />
            </div>
          {/* </ToolTip> */}
        </div>
      )}
      <div
        className="fixed bg-[#A886CD] p-3 flex justify-center items-center text-center left-10 bottom-10 z-50 rounded-full transition-all duration-500 cursor-pointer tooltip tooltip-right"
        data-tip="Open/Hide"
        onClick={handleButtonClick}
      >
        <HiChatBubbleBottomCenterText className="text-white text-3xl font-bold my-auto" />
      </div>
    </>
  );
};

export default Action;

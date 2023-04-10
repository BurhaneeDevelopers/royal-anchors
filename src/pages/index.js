import Head from "next/head";
import Image from "next/image";
import {
  BsFillArrowRightCircleFill,
  BsPerson,
  BsPhone,
  BsChatText,
  BsChat,
} from "react-icons/bs";
import {
  FaAddressBook,
  FaPhoneSquare,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect } from "react";
import AnimateOnScroll from "../../components/animateOnScroll";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Home - Royal Anchors</title>
        <meta name="description" content="Royal Anchor Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <section className="w-full">
        <div
          id="carouselDarkVariant"
          className="relative"
          data-te-carousel-init
          data-te-carousel-slide
        >
          {/* <!-- Inner --> */}
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {/* <!-- Single item --> */}
            <div
              className="relative float-left -mr-[100%] w-full !transform-none  transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-fade
              data-te-carousel-item
              data-te-carousel-active
            >
              <div className="absolute text-[18px] text-white z-30 right-10 bottom-5">
                1&nbsp;/ <span className="text-[14px] content"> 2</span>
              </div>
              <div className="w-full h-full flex justify-center items-center flex-col overflow-hidden">
                <div
                  className="block h-screen w-full bg-[url('/banners/banner-img-1.jpg')] bg-no-repeat bg-cover carousel-image"
                  alt=""
                ></div>
                {/* <div className="bg-black/40 absolute inset-0 slide-down"></div> */}
                <div className="absolute py-4 text-center text-black md:flex flex-col justify-center items-center bg-black/40 inset-0 slide-down">
                  <span className="relative top-[37vh] 2xs:top-[25vh] md:top-0">
                    <h5 className="text-[30px] xxs:text-[35px] sm:text-[45px] lg:text-[50px] xl:text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug text-rise-animation lg:mt-20 xl:mt-0">
                      <span style={{ "--i": ".01s" }}>W</span>
                      <span style={{ "--i": ".02s" }} className="mr-5">
                        e
                      </span>
                      <span style={{ "--i": ".3s" }}>M</span>
                      <span style={{ "--i": ".4s" }}>a</span>
                      <span style={{ "--i": ".5s" }}>n</span>
                      <span style={{ "--i": ".6s" }}>u</span>
                      <span style={{ "--i": ".7s" }}>f</span>
                      <span style={{ "--i": ".8s" }}>a</span>
                      <span style={{ "--i": ".9s" }}>c</span>
                      <span style={{ "--i": "1s" }}>t</span>
                      <span style={{ "--i": "1.1s" }}>u</span>
                      <span style={{ "--i": "1.2s" }}>r</span>
                      <span style={{ "--i": "1.3s" }}>e</span>
                    </h5>
                    <h5 className="text-[30px] xxs:text-[35px] sm:text-[45px] lg:text-[50px] xl:text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug text-shadow text-rise-animation">
                      {/* Locally */}
                      <span style={{ "--i": "1.4s" }}>L</span>
                      <span style={{ "--i": "1.5s" }}>o</span>
                      <span style={{ "--i": "1.6s" }}>c</span>
                      <span style={{ "--i": "1.7s" }}>a</span>
                      <span style={{ "--i": "1.8s" }}>l</span>
                      <span style={{ "--i": "1.9s" }}>l</span>
                      <span style={{ "--i": "2s" }}>y</span>
                    </h5>
                    <h5 className="text-[30px] xxs:text-[35px] sm:text-[45px] lg:text-[50px] xl:text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug text-rise-animation">
                      <span style={{ "--i": "2.1s" }}>S</span>
                      <span style={{ "--i": "2.2s" }}>e</span>
                      <span style={{ "--i": "2.3s" }}>l</span>
                      <span style={{ "--i": "2.4s" }}>l</span>{" "}
                      <span className="text-shadow">
                        <span style={{ "--i": "2.5s" }}>G</span>
                        <span style={{ "--i": "2.6s" }}>l</span>
                        <span style={{ "--i": "2.7s" }}>o</span>
                        <span style={{ "--i": "2.8s" }}>b</span>
                        <span style={{ "--i": "2.9s" }}>a</span>
                        <span style={{ "--i": "3s" }}>l</span>
                        <span style={{ "--i": "3.1s" }}>l</span>
                        <span style={{ "--i": "3.2s" }}>y</span>
                      </span>
                    </h5>

                    <div className="text-rise-animation">
                      <span style={{ "--i": "3.4s" }}>
                        <button className="px-[1.8rem] py-[0.6rem] border-2 border-[#e3be23] text-white mt-10 content tracking-widest text-sm font-thin hover:border-white">
                          GET A QUOTE
                        </button>
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Single item --> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-fade
              data-te-carousel-item
            >
              <div className="absolute text-[18px] text-white z-30 right-10 bottom-5">
                2&nbsp;/ <span className="text-[14px] content"> 2</span>
              </div>
              <div className="w-screen h-screen">
                <div
                  className="block h-screen w-screen bg-[url('/banners/banner-img-2.jpg')] bg-no-repeat bg-cover carousel-image"
                  alt=""
                ></div>
                {/* <div className="bg-black/40 z-10 absolute inset-0 slide-down"></div> */}
                <div className="absolute py-4 text-center text-black md:flex flex-col justify-center items-center bg-black/40 inset-0 slide-down">
                  <span className="relative top-[37vh] 2xs:top-[25vh] md:top-0">
                    <h5 className="text-[30px] xxs:text-[35px] sm:text-[45px] lg:text-[50px] xl:text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug text-rise-animation lg:mt-20 xl:mt-0">
                      <span style={{ "--i": ".01s" }}>W</span>
                      <span style={{ "--i": ".02s" }} className="mr-5">
                        e
                      </span>
                      <span style={{ "--i": ".3s" }}>M</span>
                      <span style={{ "--i": ".4s" }}>a</span>
                      <span style={{ "--i": ".5s" }}>n</span>
                      <span style={{ "--i": ".6s" }}>u</span>
                      <span style={{ "--i": ".7s" }}>f</span>
                      <span style={{ "--i": ".8s" }}>a</span>
                      <span style={{ "--i": ".9s" }}>c</span>
                      <span style={{ "--i": "1s" }}>t</span>
                      <span style={{ "--i": "1.1s" }}>u</span>
                      <span style={{ "--i": "1.2s" }}>r</span>
                      <span style={{ "--i": "1.3s" }}>e</span>
                    </h5>
                    <h5 className="text-[30px] xxs:text-[35px] sm:text-[45px] lg:text-[50px] xl:text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug text-shadow text-rise-animation">
                      {/* Locally */}
                      <span style={{ "--i": "1.4s" }}>L</span>
                      <span style={{ "--i": "1.5s" }}>o</span>
                      <span style={{ "--i": "1.6s" }}>c</span>
                      <span style={{ "--i": "1.7s" }}>a</span>
                      <span style={{ "--i": "1.8s" }}>l</span>
                      <span style={{ "--i": "1.9s" }}>l</span>
                      <span style={{ "--i": "2s" }}>y</span>
                    </h5>
                    <h5 className="text-[30px] xxs:text-[35px] sm:text-[45px] lg:text-[50px] xl:text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug text-rise-animation">
                      <span style={{ "--i": "2.1s" }}>S</span>
                      <span style={{ "--i": "2.2s" }}>e</span>
                      <span style={{ "--i": "2.3s" }}>l</span>
                      <span style={{ "--i": "2.4s" }}>l</span>{" "}
                      <span className="text-shadow">
                        <span style={{ "--i": "2.5s" }}>G</span>
                        <span style={{ "--i": "2.6s" }}>l</span>
                        <span style={{ "--i": "2.7s" }}>o</span>
                        <span style={{ "--i": "2.8s" }}>b</span>
                        <span style={{ "--i": "2.9s" }}>a</span>
                        <span style={{ "--i": "3s" }}>l</span>
                        <span style={{ "--i": "3.1s" }}>l</span>
                        <span style={{ "--i": "3.2s" }}>y</span>
                      </span>
                    </h5>

                    <div className="text-rise-animation">
                      <span style={{ "--i": "3.4s" }}>
                        <button className="px-[1.8rem] py-[0.6rem] border-2 border-[#e3be23] text-white mt-10 content tracking-widest text-sm font-thin hover:border-white">
                          GET A QUOTE
                        </button>
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Single item --> */}
          </div>
          {/* <!-- Inner -->
          <!-- Controls --> */}
          <button
            className="absolute top-[46.7%] left-5 z-10 flex justify-center items-center h-[3.1rem] w-[3.1rem] border border-gray-400 hover:border-white rounded-full bg-none text-center hover:-translate-x-1 transition-all duration-300 ease-in-out"
            type="button"
            data-te-target="#carouselDarkVariant"
            data-te-slide="prev"
          >
            <GoChevronLeft className="text-sm text-gray-400 font-bold hover:text-white" />
          </button>
          <button
            className="absolute top-[46.7%] right-5 z-10 flex justify-center items-center h-[3.1rem] w-[3.1rem] border border-gray-400 hover:border-white rounded-full bg-none text-center hover:translate-x-1 transition-all duration-300 ease-in-out"
            type="button"
            data-te-target="#carouselDarkVariant"
            data-te-slide="next"
          >
            <GoChevronRight className="text-sm text-gray-400 font-bold hover:text-white" />
          </button>
        </div>
      </section>
      {/* About  */}
      <section className="bg-[url('/about-bg-img.jpg')] bg-right bg-cover bg-no-repeat">
        <div className="flex justify-around items-center flex-wrap bg-white/90 py-5 md:p-0">
          <div className="w-1/2">
            <h2 className="text-[#7f4497] text-xl xxs:text-[32px] headings my-3 font-semibold text-center md:text-start">
              About Us
            </h2>
            <p className="max-w-xl content text-sm my-5 text-center md:text-start">
              Royal Anchors From its humble beginning in 2012, Has grown to
              become one of the leading Anchor bolt and nonstandard construction
              fastener manufacturers in South India.
            </p>
            <button className="bg-[#e3be23] hover:bg-transparent hover:text-[#ce9e51] transition-all duration-300 p-2 text-sm xxs:text-md xxs:p-2.5 xxs:px-10 text-white content flex items-center gap-3 mx-auto md:mx-0">
              More About Us{" "}
              <span>
                <BsFillArrowRightCircleFill />
              </span>
            </button>
          </div>
          <div className="py-3 xl:-translate-x-20 hidden md:flex">
            <Image
              width={500}
              height={500}
              src="/about-img.png"
              className="md:w-[300px] md:h-[320px] lg:w-[350px] lg:h-[380px]"
            />
          </div>
        </div>
      </section>
      {/* About  */}
      <section className="bg-gray-100 p-10 xs:p-20">
        <div className="flex flex-col lg:flex-row justify-around items-center space-y-5 lg:space-y-0">
          <AnimateOnScroll>
            <h3 className="text-[#7f4497] text-xl xs:text-2xl 2xs:text-[35px]  font-semibold headings">
              <span style={{ "--i": ".04s" }}>O</span>
              <span style={{ "--i": ".08s" }}>u</span>
              <span style={{ "--i": ".12s" }} className="mr-3">
                r
              </span>
              <span style={{ "--i": ".16s" }}>P</span>
              <span style={{ "--i": ".2s" }}>r</span>
              <span style={{ "--i": ".24s" }}>o</span>
              <span style={{ "--i": ".28s" }}>d</span>
              <span style={{ "--i": ".32s" }}>u</span>
              <span style={{ "--i": ".36s" }}>c</span>
              <span style={{ "--i": ".4s" }}>t</span>
              <span style={{ "--i": ".44s" }}>s</span>
            </h3>
          </AnimateOnScroll>
          <div className="max-w-sm xl:max-w-lg">
            <p className="content text-[#666666] xl:text-lg lg:text-[1rem] text-center lg:text-">
              Royal Anchors provides anchor bolts and construction fasteners
              direct to end-users including contractors, fabricators, erectors,
              government agencies, original equipment manufacturers, and other
              construction-related companies
            </p>
          </div>
          <div className="">
            <button className="bg-[#e3be23] hover:bg-transparent hover:text-[#e3be23] transition-all duration-300 p-3 xl:p-4 px-8 xl:px-10 rounded-full text-white content flex items-center gap-3 hover:font-bold">
              View All Products
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col pt-20">
          <div className="flex flex-wrap flex-col space-y-20 sm:space-y-0 sm:flex-row justify-around pt-10">
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/products/prod-1.png"
                alt="Products"
                className="h-56 md:h-auto"
              />
              <h3 className="headings text-[#7f4497] text-2xl sm:text-lg md:text-[28px] mt-5">
                T Shape
              </h3>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/products/prod-2.png"
                alt="Products"
                className="h-56 md:h-auto"
              />
              <h3 className="headings text-[#7f4497] text-2xl sm:text-lg md:text-[28px] mt-5">
                J Shape
              </h3>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/products/prod-3.png"
                alt="Products"
                className="h-56 md:h-auto"
              />
              <h3 className="headings text-[#7f4497] text-2xl sm:text-lg md:text-[28px] mt-5">
                L Shape
              </h3>
            </span>
          </div>
          <div className="flex flex-wrap flex-col space-y-20 sm:space-y-0 sm:flex-row justify-around pt-24">
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/products/prod-4.png"
                alt="Products"
                className="h-56 md:h-auto"
              />
              <h3 className="headings text-[#7f4497] text-2xl sm:text-lg md:text-[28px] mt-5">
                Plate Shape
              </h3>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/products/prod-5.png"
                alt="Products"
                className="h-56 md:h-auto"
              />
              <h3 className="headings text-[#7f4497] text-2xl sm:text-lg md:text-[28px] mt-5">
                Brace Rod
              </h3>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/products/prod-6.png"
                alt="Products"
                className="h-56 md:h-auto"
              />
              <h3 className="headings text-[#7f4497] text-2xl sm:text-lg md:text-[28px] mt-5">
                V Shape Rod
              </h3>
            </span>
          </div>
        </div>
        {/* Products */}
      </section>
      {/* Industries  */}
      <section className="bg-[#182431] p-10 xs:p-20">
        <div className="flex flex-col sm:flex-row justify-around items-center space-y-5 sm:space-y-0">
          <div className="lg:-ml-10">
            <AnimateOnScroll>
              <h3 className="text-white text-xl sm:text-[42px] font-semibold headings">
                {/* INDUSTRIES WE SERVE */}
                <span style={{ "--i": ".04s" }}>I</span>
                <span style={{ "--i": ".08s" }}>N</span>
                <span style={{ "--i": ".12s" }}>D</span>
                <span style={{ "--i": ".16s" }}>U</span>
                <span style={{ "--i": ".2s" }}>S</span>
                <span style={{ "--i": ".24s" }}>T</span>
                <span style={{ "--i": ".28s" }}>R</span>
                <span style={{ "--i": ".32s" }}>I</span>
                <span style={{ "--i": ".36s" }}>E</span>
                <span style={{ "--i": ".4s" }} className="mr-3">
                  S
                </span>
                <span style={{ "--i": ".44s" }}>W</span>
                <span style={{ "--i": ".48s" }} className="mr-3">
                  E
                </span>
                <span style={{ "--i": ".52s" }}>S</span>
                <span style={{ "--i": ".56s" }}>E</span>
                <span style={{ "--i": ".60s" }}>R</span>
                <span style={{ "--i": ".64s" }}>V</span>
                <span style={{ "--i": ".68s" }}>E</span>
              </h3>
            </AnimateOnScroll>
          </div>
          <div className="">
            <button className="bg-[#e3be23] hover:bg-transparent hover:text-[#e3be23] transition-all duration-300 p-2 px-6 xs:p-4 xs:px-10 rounded-full text-white content flex items-center gap-3 hover:font-bold">
              View All Products
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col pt-10">
          <div className="flex justify-center pt-10 gap-5 flex-wrap">
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/Industries/img-1.png"
                alt="Products"
                className="h-[15rem] w-[18rem] 2xs:h-[25rem] 2xs:w-[23rem]"
              />
              <span className="w-48 h-32 2xs:w-64 2xs:h-48 bg-white relative bottom-[10%]">
                <h3 className="font-bold text-black text-lg 2xs:text-[22px] pt-5 headings">
                  Pre Engineered Buildings System
                </h3>{" "}
                <span className="flex justify-center relative top-[20%] text-[#ce9e51]">
                  ---------
                </span>
              </span>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/Industries/img-2.png"
                alt="Products"
                className="h-[15rem] w-[18rem] 2xs:h-[25rem] 2xs:w-[23rem]"
              />
              <span className="w-48 h-32 2xs:w-64 2xs:h-48 bg-white relative bottom-[10%]">
                <h3 className="font-bold text-black text-lg 2xs:text-[22px] pt-5 headings">
                  Precast Concrete Structures
                </h3>{" "}
                <span className="flex justify-center relative top-[20%] text-[#ce9e51]">
                  ---------
                </span>
              </span>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/Industries/img-3.png"
                alt="Products"
                className="h-[15rem] w-[18rem] 2xs:h-[25rem] 2xs:w-[23rem]"
              />
              <span className="w-48 h-32 2xs:w-64 2xs:h-48 bg-white relative bottom-[10%]">
                <h3 className="font-bold text-black text-lg 2xs:text-[22px] pt-5 headings px-2">
                  Street & Domestic Lamp Post Foundation Bolts
                </h3>{" "}
                <span className="flex justify-center relative top-[20%] text-[#ce9e51]">
                  ---------
                </span>
              </span>
            </span>
          </div>
          <div className="flex justify-center pt-24 gap-5 flex-wrap">
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/Industries/img-4.png"
                alt="Products"
                className="h-[15rem] w-[18rem] 2xs:h-[25rem] 2xs:w-[23rem]"
              />
              <span className="w-48 h-32 2xs:w-64 2xs:h-48 bg-white relative bottom-[10%]">
                <h3 className="font-bold text-black text-lg 2xs:text-[22px] pt-5 headings">
                  Beam Crash Barrier Foundation Bolts
                </h3>{" "}
                <span className="flex justify-center relative top-[20%] text-[#ce9e51]">
                  ---------
                </span>
              </span>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/Industries/img-5.png"
                alt="Products"
                className="h-[15rem] w-[18rem] 2xs:h-[25rem] 2xs:w-[23rem]"
              />
              <span className="w-48 h-32 2xs:w-64 2xs:h-48 bg-white relative bottom-[10%]">
                <h3 className="font-bold text-black text-lg 2xs:text-[22px] pt-5 headings">
                  Industrial Heavy Duty Fan
                </h3>{" "}
                <span className="flex justify-center relative top-[20%] text-[#ce9e51]">
                  ---------
                </span>
              </span>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/Industries/img-6.png"
                alt="Products"
                className="h-[15rem] w-[18rem] 2xs:h-[25rem] 2xs:w-[23rem]"
              />
              <span className="w-48 h-32 2xs:w-64 2xs:h-48 bg-white relative bottom-[10%]">
                <h3 className="font-bold text-black text-lg 2xs:text-[22px] pt-5 headings px-2">
                  Heavy Metal Fabrication
                </h3>{" "}
                <span className="flex justify-center relative top-[20%] text-[#ce9e51]">
                  ---------
                </span>
              </span>
            </span>
          </div>
        </div>
        {/* Products */}
      </section>
      {/* Industries  */}
      {/* CTA  */}
      <section className="bg-[url('/Cta-img.png')] bg-cover bg-center hidden md:block">
        <div className="p-40 flex flex-col justify-center items-center w-full inset-0 bg-black/50">
          <h2 className="flex items-center justify-center headings text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl w-full font-bold">
            We are Leaders in &nbsp;
            <p
              className="text-[#ecc834] font-bold typewriter w-1/2"
              id="typewriter"
            >
              INDUSTRIAL MARKETS
            </p>
          </h2>
          <p className="text-2xl text-white pt-5 headings">
            Watch Our Intro Video
          </p>
        </div>
      </section>
      {/* CTA  */}
      {/* <!-- Contact  --> */}
      <section className="bg-[#e3be23] py-24 px-3 sm:px-44">
        <div className="flex flex-col items-center text-center justify-center mb-10">
          <h2 className="text-[20px] text-white headings mb-6">Contact Us</h2>
          <AnimateOnScroll>
            <h3 className="text-3xl headings text-[#7f4497] capitalize lg:text-[42px] font-semibold">
              {/* INDUSTRIES WE SERVE */}
              <span style={{ "--i": ".04s" }}>K</span>
              <span style={{ "--i": ".08s" }}>E</span>
              <span style={{ "--i": ".12s" }}>E</span>
              <span style={{ "--i": ".16s" }} className="mr-3">
                P
              </span>
              <span style={{ "--i": ".2s" }}>I</span>
              <span style={{ "--i": ".24s" }} className="mr-3">
                N
              </span>
              <span style={{ "--i": ".28s" }}>T</span>
              <span style={{ "--i": ".32s" }}>O</span>
              <span style={{ "--i": ".36s" }}>U</span>
              <span style={{ "--i": ".4s" }}>C</span>
              <span style={{ "--i": ".44s" }}>H</span>
            </h3>
          </AnimateOnScroll>
        </div>
        <div className="flex flex-col mx-auto overflow-hidden bg-white shadow-lg md:flex-row">
          <div className="md:flex md:flex-col md:items-center md:justify-center bg-[#3f321a] w-full md:w-1/2">
            <div className="flex gap-3 mb-1 p-5">
              <div className="text-5xl text-[#ce9e51]">
                <FaAddressBook />
              </div>
              <div className="flex flex-col w-full">
                <h3 className="text-[19px] text-white font-bold headings xl:-mt-5 xl:mb-1 w-full">
                  HEAD OFFICE & FACTORY
                </h3>
                <h4 className="text-white font-semibold content mb-1 text-[14px]">
                  {" "}
                  ROYAL ANCHORS
                </h4>
                <p className="w-44 sm:w-48 text-[#cccccc] mb-1 text-[14px]">
                  Plot No 5 & 6, 8th Street Tass Industrial Estate Ambattur ,
                  Chennai - 98
                </p>
                <p className="w-48 text-[#cccccc] font-bold mb-1 text-[14px]">
                  Ph : +91 44-26254152
                </p>
                <p className="w-48 text-[#cccccc] font-bold mb-1 text-[14px]">
                  Mob : +91 9884251521
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-2 p-5">
              <div className="text-5xl text-[#ce9e51] xl:-ml-5">
                <FaPhoneSquare />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[19px] text-white font-semibold headings xl:mb-1">
                  Sales Correspondence
                </h3>
                <h4 className="text-[#cccccc] font-semibold content mb-1 text-[14px]">
                  {" "}
                  Mr. Francis
                </h4>
                <p className="w-48 text-[#cccccc] mb-1 font-bold text-[14px]">
                  Ph : +91 98408 51521
                </p>
                <p className="w-48 text-[#cccccc] font-bold mb-1 text-[14px]">
                  E-mail : sales@royalanchors.com
                </p>
                <p className="w-48 text-[#cccccc] font-bold mb-1 flex gap-5 mt-5">
                  <span>
                    <AiOutlineTwitter className="text-white text-xl" />
                  </span>
                  <span>
                    <FaFacebookF className="text-white text-xl" />
                  </span>
                  <span>
                    <FaLinkedinIn className="text-white text-xl" />
                  </span>
                  <span>
                    <FaInstagram className="text-white text-xl" />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:px-12 w-full">
            <form action="" className="px-5">
              <div className="flex justify-evenly xl:gap-10 flex-wrap xl:flex-nowrap">
                <div className="relative mt-8 w-full">
                  <input
                    className="appearance-none border pl-8 border-gray-300 text-[#888888] placeholder:text-gray-400/70 text-sm focus:shadow-[0_0_25px_0px_rgba(0,0,0,0.1)] transition-all ease-in-out duration-300 w-full py-[0.58rem] content font-thin focus:outline-none"
                    type="text"
                    placeholder="Your Name..."
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <BsPerson className="text-lg text-[#CE9E51] ml-2" />
                  </div>
                </div>

                <div className="relative mt-8 w-full">
                  <input
                    className="appearance-none border pl-8 border-gray-300 text-[#888888] placeholder:text-gray-400/70 text-sm focus:shadow-[0_0_25px_0px_rgba(0,0,0,0.1)] transition-all ease-in-out duration-300 w-full py-[0.58rem] content font-thin focus:outline-none"
                    type="text"
                    placeholder="Cell Phone..."
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <BsPhone className="text-lg text-[#CE9E51] ml-2" />
                  </div>
                </div>
              </div>

              <div className="flex justify-evenly xl:gap-10 flex-wrap xl:flex-nowrap ">
                <div className="relative mt-8 w-full">
                  <input
                    className="appearance-none border pl-8 border-gray-300 text-[#888888] placeholder:text-gray-400/70 text-sm focus:shadow-[0_0_25px_0px_rgba(0,0,0,0.1)] transition-all ease-in-out duration-300 w-full py-[0.58rem] content font-thin focus:outline-none"
                    type="email"
                    placeholder="Email Address..."
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <HiOutlineMail className="text-lg content font-thin text-[#CE9E51] ml-2" />
                  </div>
                </div>

                <div className="relative mt-8 w-full">
                  <input
                    className="appearance-none border pl-8 border-gray-300 text-[#888888] placeholder:text-gray-400/70 text-sm focus:shadow-[0_0_25px_0px_rgba(0,0,0,0.1)] transition-all ease-in-out duration-300 w-full py-[0.58rem] content font-thin focus:outline-none"
                    type="text"
                    placeholder="Subject..."
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <BsChatText className="text-lg text-[#CE9E51] ml-2" />
                  </div>
                </div>
              </div>

              <div className="relative mt-5">
                <textarea
                  // className="w-full text-[#888888] border border-gray-300 p-3 text-sm focus:outline-none focus:shadow-[0_0_25px_0px_rgba(0,0,0,0.1)]"
                  className="appearance-none border py-[0.65rem] pl-8 border-gray-300 text-[#888888] placeholder:text-gray-400/70 text-sm focus:shadow-[0_0_25px_0px_rgba(0,0,0,0.1)] transition-all ease-in-out duration-300 w-full focus:outline-none"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
                <div className="absolute left-0 top-3 flex items-center">
                  <BsChat className="text-md text-[#CE9E51] ml-2" />
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block border border-[#CE9E51] w-full rounded-full bg-transparent px-3 sm:px-6 py-1 sm:w-auto text-[#e3be23] content hover:bg-[#e3be23] hover:text-white transition-all ease-in-out duration-1000"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- Contact  --> */}

      {/* footer */}
      <section className="bg-[url('/contact-bg.png')] bg-center bg-cover">
        <div className="flex justify-evenly flex-wrap items-center bg-gray-600/20 w-full h-full py-20 px-5 sm:px-24 space-y-10 sm:space-y-0">
          <div className="sm:ml-32">
            <Image
              width={500}
              height={500}
              className="w-[20rem] hover:scale-110 transition-all ease-in-out duration-200"
              src="/logo.png"
            />
          </div>
          <div className="sm:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497396.16226288007!2d80.160409!3d13.105045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263beed4919e5%3A0xb1d3879af3611e4f!2sTass%20Industrial%20Estate%2C%20Sidco%20Industrial%20Estate%2C%20Ambattur%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1681005982272!5m2!1sen!2sus"
              className="border-none w-full h-[20rem]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      {/* footer */}

      <footer class="bg-[#2e2d2d]">
        <div class="container flex flex-col items-center justify-around p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <p class="text-gray-100 flex flex-col text-center sm:text-start">
            <span className="text-xl headings text-[#d6d6d6]">
              {" "}
              © 2021 Royal Anchors. All Rights Reserved.
            </span>{" "}
            <span className="headings text-[#d6d6d6]">Powered By Studio53</span>
          </p>

          <div class="flex gap-8">
            <a
              href="#"
              class=" text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Reddit"
            >
              <AiOutlineTwitter className="text-white text-lg" />
            </a>

            <a
              href="#"
              class=" text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>

            <a
              href="#"
              class=" text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Github"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>

            <a
              href="#"
              class=" text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Github"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

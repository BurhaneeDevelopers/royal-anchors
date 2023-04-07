import Head from "next/head";
import Image from "next/image";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaFacebookF, FaBitbucket, FaPhone, FaSearch } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".fade-up");

    function checkScroll() {
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementPosition < viewportHeight) {
          element.classList.add("animated");
        }
      });
    }

    window.addEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Royal Anchor Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                    className="text-white-100 hover:bg-[#54595F] p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="/"
                  >
                    ABOUT US
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white-100 hover:bg-[#54595F] p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="/"
                  >
                    SERVICES
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white-100 hover:bg-[#54595F] p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="/"
                  >
                    OUR PRODUCTS
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white-100 hover:bg-[#54595F] p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="/"
                  >
                    TECHNICAL SPECIFICATION
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white-100 hover:bg-[#54595F] p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
                    href="/"
                  >
                    INDUSTRIES WE SERVE
                  </a>
                </li>

                <li className="">
                  <a
                    className="text-white-100 hover:bg-[#54595F] p-[1.39rem] px-8 bottom-nav capitalize text-[0.59rem] transition-all ease-in-out duration-500 font-bold tracking-wide"
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

      <section>
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
              <div className="w-screen h-screen">
                <div
                  className="block h-screen w-screen bg-[url('/banners/banner-img-1.jpg')] bg-no-repeat bg-cover carousel-image"
                  alt=""
                ></div>
                <div className="bg-black/40 z-10 absolute inset-0 slide-down"></div>
              </div>
              <div className="absolute left-[29.5%] top-[25.5%] hidden py-4 text-center text-black md:block z-10">
                <h5 className="text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug">
                  We Manufacture
                </h5>
                <h5 className="text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug text-shadow">
                  Locally
                </h5>
                <h5 className="text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug">
                  Sell <span className="text-shadow">Globally</span>
                </h5>
              </div>
            </div>
            {/* <!-- Single item --> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-fade
              data-te-carousel-item
            >
              <div className="w-screen h-screen">
                <div
                  className="block h-screen w-screen bg-[url('/banners/banner-img-2.jpg')] bg-no-repeat bg-cover carousel-image"
                  alt=""
                ></div>
                <div className="bg-black/40 z-10 absolute inset-0 slide-down"></div>
              </div>
              <div className="absolute left-[29.5%] top-[25.5%] hidden py-4 text-center text-black md:block z-10 font-bold">
                <h5 className="text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug">
                  We Manufacture
                </h5>
                <h5 className="text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug text-shadow">
                  Locally
                </h5>
                <h5 className="text-[65px] bounce-up text-white hero-text tracking-[4px] leading-snug">
                  Sell <span className="text-shadow">Globally</span>
                </h5>
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
        <div className="flex justify-around items-center flex-wrap bg-gray-100/90">
          <div className="w-1/2">
            <h2 className="text-[#7f4497] text-[32px] headings my-3">
              About Us
            </h2>
            <p className="max-w-xl content text-sm my-5">
              Royal Anchors From its humble beginning in 2012, Has grown to
              become one of the leading Anchor bolt and nonstandard construction
              fastener manufacturers in South India.
            </p>
            <button className="bg-[#e3be23] hover:bg-transparent hover:text-[#ce9e51] transition-all duration-300 p-2.5 px-10 text-white content flex items-center gap-3">
              More About Us{" "}
              <span>
                <BsFillArrowRightCircleFill />
              </span>
            </button>
          </div>
          <div className="py-3 xl:-translate-x-20">
            <Image
              width={500}
              height={500}
              src="/about-img.png"
              className="w-[350px] h-[365px]"
            />
          </div>
        </div>
      </section>
      {/* About  */}

      <section className="bg-gray-100 p-20">
        <div className="flex justify-around items-center">
          <div className="">
            <h3
              className="text-[#7f4497] text-[35px] font-bold headings fade-up"
              // data-aos="fade-up"
            >
              {/* Our Products */}
              <span Style="--i:1">O</span>
              <span Style="--i:2">u</span>
              <span Style="--i:3">r</span>
              <span Style="--i:4">P</span>
              <span Style="--i:5">r</span>
              <span Style="--i:6">o</span>
              <span Style="--i:7">d</span>
              <span Style="--i:8">u</span>
              <span Style="--i:9">c</span>
              <span Style="--i:10">t</span>
              <span Style="--i:11">s</span>
              {/* <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="100">O</span>
              <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="300">u</span>
              <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">r</span>
              <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">P</span>
              <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">r</span>
              <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">o</span>
              <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1300">d</span>
              <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">u</span>
              <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2700">c</span>
              <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2900">t</span>
              <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="3100">s</span> */}
            </h3>
          </div>
          <div className="max-w-lg">
            <p className="content text-[#666666] text-lg">
              Royal Anchors provides anchor bolts and construction fasteners
              direct to end-users including contractors, fabricators, erectors,
              government agencies, original equipment manufacturers, and other
              construction-related companies
            </p>
          </div>
          <div className="">
            <button className="bg-[#e3be23] hover:bg-transparent hover:text-[#e3be23] transition-all duration-300 p-4 px-10 rounded-full text-white content flex items-center gap-3 hover:font-bold">
              View All Products
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col pt-20">
          <div className="flex justify-around pt-10">
            <span className="flex flex-col items-center justify-center text-center">
              <img src="/products/prod-1.png" alt="Products" />
              <h3 className="headings text-[#7f4497] text-[28px] mt-5">
                T Shape
              </h3>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img src="/products/prod-2.png" alt="Products" />
              <h3 className="headings text-[#7f4497] text-[28px] mt-5">
                J Shape
              </h3>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img src="/products/prod-3.png" alt="Products" />
              <h3 className="headings text-[#7f4497] text-[28px] mt-5">
                L Shape
              </h3>
            </span>
          </div>
          <div className="flex justify-around pt-24">
            <span className="flex flex-col items-center justify-center text-center">
              <img src="/products/prod-4.png" alt="Products" />
              <h3 className="headings text-[#7f4497] text-[28px] mt-5">
                Plate Shape
              </h3>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img src="/products/prod-5.png" alt="Products" />
              <h3 className="headings text-[#7f4497] text-[28px] mt-5">
                Brace Rod
              </h3>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img src="/products/prod-6.png" alt="Products" />
              <h3 className="headings text-[#7f4497] text-[28px] mt-5">
                V Shape Rod
              </h3>
            </span>
          </div>
        </div>
        {/* Products */}
      </section>

      <section className="bg-[#182431] p-20">
        <div className="flex justify-around items-center">
          <div className="lg:-ml-10">
            <h3 className="text-white text-[42px] font-bold headings">
              INDUSTRIES WE SERVE
            </h3>
          </div>
          <div className="">
            <button className="bg-[#e3be23] hover:bg-transparent hover:text-[#e3be23] transition-all duration-300 p-4 px-10 rounded-full text-white content flex items-center gap-3 hover:font-bold">
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
                class="h-[25rem] w-[23rem]"
              />
              <span className="w-64 h-48 bg-white relative bottom-[10%]">
                <h3 className="heading font-bold text-black text-[22px] pt-5">
                  Lorem, ipsum dolor.
                </h3>{" "}
                <span className="flex justify-center relative top-[20%]">
                  ---------
                </span>
              </span>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/Industries/img-2.png"
                alt="Products"
                class="h-[25rem] w-[23rem]"
              />
              <span className="w-64 h-48 bg-white relative bottom-[10%]">
                <h3 className="heading font-bold text-black text-[22px] pt-5">
                  Lorem, ipsum dolor.
                </h3>{" "}
                <span className="flex justify-center relative top-[20%]">
                  ---------
                </span>
              </span>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/Industries/img-3.png"
                alt="Products"
                class="h-[25rem] w-[23rem]"
              />
              <span className="w-64 h-48 bg-white relative bottom-[10%]">
                <h3 className="heading font-bold text-black text-[22px] pt-5">
                  Lorem, ipsum dolor.
                </h3>{" "}
                <span className="flex justify-center relative top-[20%]">
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
                class="h-[25rem] w-[23rem]"
              />
              <span className="w-64 h-48 bg-white relative bottom-[10%]">
                <h3 className="heading font-bold text-black text-[22px] pt-5">
                  Lorem, ipsum dolor.
                </h3>{" "}
                <span className="flex justify-center relative top-[20%]">
                  ---------
                </span>
              </span>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/Industries/img-5.png"
                alt="Products"
                class="h-[25rem] w-[23rem]"
              />
              <span className="w-64 h-48 bg-white relative bottom-[10%]">
                <h3 className="heading font-bold text-black text-[22px] pt-5">
                  Lorem, ipsum dolor.
                </h3>{" "}
                <span className="flex justify-center relative top-[20%]">
                  ---------
                </span>
              </span>
            </span>
            <span className="flex flex-col items-center justify-center text-center">
              <img
                src="/Industries/img-6.png"
                alt="Products"
                class="h-[25rem] w-[23rem]"
              />
              <span className="w-64 h-48 bg-white relative bottom-[10%]">
                <h3 className="heading font-bold text-black text-[22px] pt-5">
                  Lorem, ipsum dolor.
                </h3>{" "}
                <span className="flex justify-center relative top-[20%]">
                  ---------
                </span>
              </span>
            </span>
          </div>
        </div>
        {/* Products */}
      </section>
    </>
  );
}

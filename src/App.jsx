import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState, useEffect } from "react";
import SliderFirst from "./SliderFirst";
import SliderSecond from "./SliderSecond";

function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);
  const slides = [
    {
      imageUrl: "https://i.ibb.co/74C6WYV/Change-Image-Here-1.png",
      title: "Woman Vintage T-Shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam morbi montes sed varius feugiat tellus vitae elit enim. Ut sollicitudin.",
      price: "$2,400.00 - $2,600.00",
    },
    {
      imageUrl: "https://i.ibb.co/8cwnJCQ/Change-Image-Here-2.png",
      title: "Crossback Helter Dress",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam morbi montes sed varius feugiat tellus vitae elit enim. Ut sollicitudin.",
      price: "$2,400.00 - $2,600.00",
    },
    {
      imageUrl: "https://i.ibb.co/vzhx7Z6/Change-Image-Here-3.png",
      title: "Crossback Helter Dress",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam morbi montes sed varius feugiat tellus vitae elit enim. Ut sollicitudin.",
      price: "$2,400.00 - $2,600.00",
    },
    {
      imageUrl: "https://i.ibb.co/74C6WYV/Change-Image-Here-1.png",
      title: "Woman Vintage T-Shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam morbi montes sed varius feugiat tellus vitae elit enim. Ut sollicitudin.",
      price: "$2,400.00 - $2,600.00",
    },
    {
      imageUrl: "https://i.ibb.co/8cwnJCQ/Change-Image-Here-2.png",
      title: "Crossback Helter Dress",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam morbi montes sed varius feugiat tellus vitae elit enim. Ut sollicitudin.",
      price: "$2,400.00 - $2,600.00",
    },
    {
      imageUrl: "https://i.ibb.co/vzhx7Z6/Change-Image-Here-3.png",
      title: "Crossback Helter Dress",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam morbi montes sed varius feugiat tellus vitae elit enim. Ut sollicitudin.",
      price: "$2,400.00 - $2,600.00",
    },
  ];

  // Function to advance the slide
  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Automatically change slide every second
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#fcf7f1]">
      {/* navbar section */}
      <section>
        <div className="px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto">
          <div className="navbar flex justify-between items-center">
            <div className="flex items-center">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
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
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Our Services</a>
                  </li>
                  <li>
                    <a>Collection</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
              <a className="text-2xl md:text-4xl font-semibold uppercase ml-2">
                <span className="text-[#e08cff]">Eª</span>Romee
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-base font-bold lg:ml-[50px] xl:ml-[70px] 2xl:ml-[160px]">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Our Services</a>
                </li>
                <li>
                  <a>Collection</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end flex gap-4 items-center">
              <button className="bg-[#e08cff] py-2 px-4 rounded-full text-base font-bold hover:bg-[#d17ee8]">
                Get a Quote
              </button>
              <p className="hidden md:inline text-base font-bold">
                Phone 123 456 789
              </p>
            </div>
          </div>
        </div>
        <hr className="border border-black mt-4" />
      </section>

      {/* banner section */}
      <section className="px-4 sm:px-8 md:px-16 mt-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-[620px] w-full text-center lg:text-left">
            <h4 className="text-xl font-bold">🔥 New Arrival Collection</h4>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-5">
              New Summer <br />
              Collection <br />
              2023
            </h2>
            <p className="py-8 text-base font-normal text-[#535353] w-[440px] text-justify">
              Lorem ipsum dolor sit amet consectetur. At ultrices libero et
              congue mauris sed nisl. Eu ac congue arcu urna lorem pellentesque
              nulla quam. Nunc est ornare at tincidunt velit. Elit viverra
              feugiat volutpat lorem vulputate dui enim ultricies.
            </p>
            <button className="bg-[#e08cff] py-2 px-6 rounded-full flex items-center gap-3 text-base font-bold hover:bg-[#d17ee8] mx-auto lg:mx-0">
              SHOP NOW
              <span>
                <img src="https://i.ibb.co/TqZxXLb/Vector-6.png" alt="" />
              </span>
            </button>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-[537.77px] lg:h-[746px] w-full h-auto">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/6vPgbJZ/Change-Image-Here.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* HIGH QUALITY Section  */}
      <section className="py-12">
        <div className="text-center">
          <hr className="border border-black mt-4" />
          <h2 className="my-8 uppercase text-sm sm:text-base md:text-[15px] lg:text-[15px] font-bold">
            HIGH QUALITY COTTON - 24/7 SUPPORT - MONEY BACK GUARANTEE - FREE
            DELIVERY - HIGH QUALITY COTTON - 24/7 SUPPORT - MONEY BACK GUARANTEE
            - FREE DELIVERY -
          </h2>
          <hr className="border border-black mb-4" />
        </div>
      </section>

      {/* BIG SALE section */}
      <section className="max-w-[1440px] mx-auto">
        <div>
          <h2 className="text-center text-6xl font-bold uppercase">BIG SALE</h2>
          <div className="flex justify-center items-center gap-10 text-base font-bold uppercase mt-5">
            <h2 className="text-[#E08CFF] cursor-pointer">WOMEN</h2>
            <h2 className="cursor-pointer hover:text-[#E08CFF]">MEN</h2>
            <h2 className="cursor-pointer hover:text-[#E08CFF]">KIDS</h2>
            <h2 className="cursor-pointer hover:text-[#E08CFF]">ACCESSORIES</h2>
          </div>
        </div>

        {/* card section */}
        <div className="mt-10 lg:px-16 xl:px-16 md:px-10 px-5">
          <Swiper
            ref={swiperRef}
            loop={true} // Enable looping
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              325: { slidesPerView: 1 },
              424: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="card bg-base-100 shadow-xl border border-black">
                  <figure>
                    <img className="h-[480px]" src={slide.imageUrl} alt="pic" />
                  </figure>
                  <div className="card-body">
                    <div className="flex gap-3">
                      <span className="bg-[#E08CFF] w-[25px] h-[25px] rounded-full"></span>
                      <span className="bg-[#E3B895] w-[25px] h-[25px] rounded-full"></span>
                      <span className="bg-[#FF9F4C] w-[25px] h-[25px] rounded-full"></span>
                    </div>
                    <h2 className="text-2xl font-bold">{slide.title}</h2>
                    <p>{slide.description}</p>
                    <div className="mt-4">
                      <p className="font-semibold">{slide.price}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-2 mb-10 mt-5">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-[12px] h-[12px] rounded-full ${
                activeSlideIndex === index
                  ? "bg-[#e08cff] w-[40px] h-[12px]"
                  : "bg-[#939393]"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Summer Collection section */}
      <section className="py-10 px-5 md:px-0 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-5 md:flex-row md:gap-0">
          <div className="relative flex-1">
            <img
              src="https://i.ibb.co/jZyrhC9/Change-Image-Here-4.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 left-0 text-center flex flex-col items-center justify-center h-full">
              <h2
                className="uppercase mt-7 text-sm font-normal tracking-widest text-white"
                style={{ letterSpacing: 4 }}
              >
                T-Shirt
              </h2>
              <h2 className="mt-12 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Summer <br /> Collection
              </h2>
              <p
                className="mt-16 text-sm font-normal text-white"
                style={{ letterSpacing: 4 }}
              >
                shop now
              </p>
            </div>
          </div>
          <div className="relative flex-1">
            <img
              src="https://i.ibb.co/jgsDLGq/Change-Image-Here-5.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 left-0 text-center flex flex-col items-center justify-center h-full">
              <h2
                className="uppercase mt-7 text-sm font-normal tracking-widest text-white"
                style={{ letterSpacing: 4 }}
              >
                T-Shirt
              </h2>
              <h2 className="mt-12 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                12% Spring <br /> Collection
              </h2>
              <p
                className="mt-16 text-sm font-normal text-white"
                style={{ letterSpacing: 4 }}
              >
                shop now
              </p>
            </div>
          </div>
          <div className="relative flex-1">
            <img
              src="https://i.ibb.co/d6SQ3Nc/Change-Image-Here-6.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 left-0 text-center flex flex-col items-center justify-center h-full">
              <h2
                className="uppercase mt-7 text-sm font-normal tracking-widest text-white"
                style={{ letterSpacing: 4 }}
              >
                T-Shirt
              </h2>
              <h2 className="mt-12 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Premium <br /> Suits
              </h2>
              <p
                className="mt-16 text-sm font-normal text-white"
                style={{ letterSpacing: 4 }}
              >
                shop now
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMER COLLECTION section */}
      <section>
        <div className=" py-10">
          <h2 className=" text-center uppercase text-2xl font-bold">
            SUMMER COLLECTION
          </h2>
          <h2 className=" text-center text-6xl font-bold mt-3">
            What they’re saying
          </h2>

          <div className=" mt-16 max-w-[1440px] mx-auto">
            <SliderFirst></SliderFirst>
          </div>

          <div className=" mt-10 max-w-[1440px] mx-auto">
            <SliderSecond></SliderSecond>
          </div>
        </div>
      </section>

      {/* Stay Tuned section */}
      <section className="px-4 md:px-16 mt-10 md:mt-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            className="w-full max-w-[590px] h-auto"
            src="https://i.ibb.co/L8rgcSR/Change-Image-Here-7.png"
            alt=""
          />
          <div className="text-center lg:text-left">
            <h4 className="text-xl md:text-2xl font-bold">Stay Tuned</h4>
            <h2 className="text-4xl md:text-6xl font-bold mt-3">
              Sign Up to Get <br />
              Newsletter
            </h2>
            <p className="text-sm md:text-base font-normal py-5">
              Lorem ipsum dolor sit amet consectetur. Ut sapien nunc sit
              facilisis vel dictum libero feugiat. Pellentesque fames tristique
              amet venenatis et non laoreet. Condimentum placerat id tristique
              et sed feugiat lacinia arcu. Sit dui sit donec nunc mauris aliquam
              pulvinar egestas.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#e08cff] py-2 px-6 rounded-full flex items-center gap-3 text-sm md:text-base font-bold hover:bg-[#d17ee8] mt-8">
                GO TO SHOP
                <span>
                  <img src="https://i.ibb.co/TqZxXLb/Vector-6.png" alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <section className="mt-20">
        <div className="bg-[#1F1F1F]">
          <footer className="footer p-10 text-base-content lg:px-16 max-w-[1440px] mx-auto">
            <div>
              <h2 className="uppercase text-4xl font-bold text-[#fdfdfd]">
                <span className="text-[#e08cff]">Eª</span>Romee
              </h2>
              <p className="text-sm font-normal text-[#555555] mt-1 max-w-[310px]">
                Lorem ipsum dolor sit amet consectetur. Purus ac penatibus vitae{" "}
                <br /> aliquet ligula. Pulvinar egestas aliquam
              </p>

              <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row items-center gap-4 mt-6">
                <label className="input input-bordered flex items-center gap-2 rounded-full w-full md:w-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter Your Email"
                  />
                </label>

                <button className="bg-[#e08cff] py-3 px-8 rounded-full flex items-center gap-3 text-base font-bold hover:bg-[#d17ee8] w-full md:w-auto">
                  Subscribe
                  <span>
                    <img src="https://i.ibb.co/TqZxXLb/Vector-6.png" alt="" />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:gap-20 gap-10 md:gap-8 xl:gap-24 2xl:gap-44 md:text-sm xl:text-base 2xl:text-xl mt-6">
              <div className="flex md:flex-row flex-row lg:gap-20 gap-20 md:gap-8 xl:gap-24 2xl:gap-44  md:text-sm xl:text-base 2xl:text-xl">
                <nav className="flex flex-col mb-4 lg:mb-0 lg:mr-4">
                  <h6 className="text-[#FDFDFD] text-xl font-semibold">
                    Information
                  </h6>
                  <a className="link link-hover text-[#555555] text-base font-semibold">
                    About Us
                  </a>
                  <a className="link link-hover text-[#555555] text-base font-semibold">
                    Privacy Policy
                  </a>
                  <a className="link link-hover text-[#555555] text-base font-semibold">
                    Shipping Policy
                  </a>
                  <a className="link link-hover text-[#555555] text-base font-semibold">
                    Dropshipping
                  </a>
                </nav>
                <nav className="flex flex-col mb-4 lg:mb-0 lg:mr-4">
                  <h6 className="text-[#FDFDFD] text-xl font-semibold">
                    Account
                  </h6>
                  <a className="link link-hover text-[#555555] text-base font-semibold">
                    Dashboard
                  </a>
                  <a className="link link-hover text-[#555555] text-base font-semibold">
                    My Orders
                  </a>
                  <a className="link link-hover text-[#555555] text-base font-semibold">
                    My Wishlist
                  </a>
                  <a className="link link-hover text-[#555555] text-base font-semibold">
                    Track My Orders
                  </a>
                </nav>
              </div>

              <nav className="flex flex-col mb-4 lg:mb-0 lg:mr-4">
                <h6 className="text-[#FDFDFD] text-xl font-semibold">
                  Category
                </h6>
                <a className="link link-hover text-[#555555] text-base font-semibold">
                  Women
                </a>
                <a className="link link-hover text-[#555555] text-base font-semibold">
                  Mens
                </a>
                <a className="link link-hover text-[#555555] text-base font-semibold">
                  Bags
                </a>
                <a className="link link-hover text-[#555555] text-base font-semibold">
                  Outwear
                </a>
              </nav>
            </div>
          </footer>

          <div className="px-10 lg:px-16">
            <hr className="border border-[#FFFFFF] mt-8" />
            <p className="text-center text-[#FFFFFF] text-base font-semibold mt-5 pb-10">
              2023 Annora Studio - All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

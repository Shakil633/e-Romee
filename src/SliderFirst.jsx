import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const SliderFirst = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [spaceBetween, setSpaceBetween] = useState(20);

  useEffect(() => {
    const updateSlideSettings = () => {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(3.5);
        setSpaceBetween(390);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(3.5);
        setSpaceBetween(430);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
        setSpaceBetween(30);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(1.5);
        setSpaceBetween(25);
      } else {
        setSlidesPerView(1);
        setSpaceBetween(20);
      }
    };

    updateSlideSettings();

    window.addEventListener("resize", updateSlideSettings);
    return () => window.removeEventListener("resize", updateSlideSettings);
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        centeredSlides={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        loop={true}
        loopAdditionalSlides={1}
        initialSlide={0}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" border border-black rounded-2xl w-[420px] lg:w-[450px] md:w-[380px] xl:w-[450px] h-[184px] bg-[#ffffff] px-5">
            <div className=" flex justify-between items-center mt-5">
              <div className=" flex items-center gap-2">
                <img src="https://i.ibb.co/g6QkPbX/Image.png" alt="" />

                <div>
                  <h2 className=" text-base font-semibold">
                    Adeline Palmerston
                  </h2>
                  <p className=" text-sm font-normal text-[#535353]">
                    Customer
                  </p>
                </div>
              </div>

              <img src="https://i.ibb.co/ZchsZp9/Quote.png" alt="" />
            </div>

            <p className=" mt-4 text-sm font-normal text-[#535353]">
              Lorem ipsum dolor sit amet consectetur. Ut sapien nunc sit
              facilisis vel dictum libero feugiat. Pellentesque fames tristique
              amet venenatis et non laoreet. Condimentum pla
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border border-black rounded-2xl w-[420px] lg:w-[450px] md:w-[380px] xl:w-[450px] h-[184px] bg-[#ffffff] px-5">
            <div className=" flex justify-between items-center mt-5">
              <div className=" flex items-center gap-2">
                <img src="https://i.ibb.co/rQ97qc4/Image-1.png" alt="" />

                <div>
                  <h2 className=" text-base font-semibold">
                    Adeline Palmerston
                  </h2>
                  <p className=" text-sm font-normal text-[#535353]">
                    Customer
                  </p>
                </div>
              </div>

              <img src="https://i.ibb.co/ZchsZp9/Quote.png" alt="" />
            </div>

            <p className=" mt-4 text-sm font-normal text-[#535353]">
              Lorem ipsum dolor sit amet consectetur. Ut sapien nunc sit
              facilisis vel dictum libero feugiat. Pellentesque fames tristique
              amet venenatis et non laoreet. Condimentum pla
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border border-black rounded-2xl w-[420px] lg:w-[450px] md:w-[380px] xl:w-[450px] h-[184px] bg-[#ffffff] px-5">
            <div className=" flex justify-between items-center mt-5">
              <div className=" flex items-center gap-2">
                <img src="https://i.ibb.co/Kh06FMf/Image-2.png" alt="" />

                <div>
                  <h2 className=" text-base font-semibold">
                    Adeline Palmerston
                  </h2>
                  <p className=" text-sm font-normal text-[#535353]">
                    Customer
                  </p>
                </div>
              </div>

              <img src="https://i.ibb.co/ZchsZp9/Quote.png" alt="" />
            </div>

            <p className=" mt-4 text-sm font-normal text-[#535353]">
              Lorem ipsum dolor sit amet consectetur. Ut sapien nunc sit
              facilisis vel dictum libero feugiat. Pellentesque fames tristique
              amet venenatis et non laoreet. Condimentum pla
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border border-black rounded-2xl w-[420px] lg:w-[450px] md:w-[380px] xl:w-[450px] h-[184px] bg-[#ffffff] px-5">
            <div className=" flex justify-between items-center mt-5">
              <div className=" flex items-center gap-2">
                <img src="https://i.ibb.co/g6QkPbX/Image.png" alt="" />

                <div>
                  <h2 className=" text-base font-semibold">
                    Adeline Palmerston
                  </h2>
                  <p className=" text-sm font-normal text-[#535353]">
                    Customer
                  </p>
                </div>
              </div>

              <img src="https://i.ibb.co/ZchsZp9/Quote.png" alt="" />
            </div>

            <p className=" mt-4 text-sm font-normal text-[#535353]">
              Lorem ipsum dolor sit amet consectetur. Ut sapien nunc sit
              facilisis vel dictum libero feugiat. Pellentesque fames tristique
              amet venenatis et non laoreet. Condimentum pla
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border border-black rounded-2xl w-[420px] lg:w-[450px] md:w-[380px] xl:w-[450px] h-[184px] bg-[#ffffff] px-5">
            <div className=" flex justify-between items-center mt-5">
              <div className=" flex items-center gap-2">
                <img src="https://i.ibb.co/rQ97qc4/Image-1.png" alt="" />

                <div>
                  <h2 className=" text-base font-semibold">
                    Adeline Palmerston
                  </h2>
                  <p className=" text-sm font-normal text-[#535353]">
                    Customer
                  </p>
                </div>
              </div>

              <img src="https://i.ibb.co/ZchsZp9/Quote.png" alt="" />
            </div>

            <p className=" mt-4 text-sm font-normal text-[#535353]">
              Lorem ipsum dolor sit amet consectetur. Ut sapien nunc sit
              facilisis vel dictum libero feugiat. Pellentesque fames tristique
              amet venenatis et non laoreet. Condimentum pla
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border border-black rounded-2xl w-[420px] lg:w-[450px] md:w-[380px] xl:w-[450px] h-[184px] bg-[#ffffff] px-5">
            <div className=" flex justify-between items-center mt-5">
              <div className=" flex items-center gap-2">
                <img src="https://i.ibb.co/Kh06FMf/Image-2.png" alt="" />

                <div>
                  <h2 className=" text-base font-semibold">
                    Adeline Palmerston
                  </h2>
                  <p className=" text-sm font-normal text-[#535353]">
                    Customer
                  </p>
                </div>
              </div>

              <img src="https://i.ibb.co/ZchsZp9/Quote.png" alt="" />
            </div>

            <p className=" mt-4 text-sm font-normal text-[#535353]">
              Lorem ipsum dolor sit amet consectetur. Ut sapien nunc sit
              facilisis vel dictum libero feugiat. Pellentesque fames tristique
              amet venenatis et non laoreet. Condimentum pla
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderFirst;

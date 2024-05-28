import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import required modules
import { Pagination } from "swiper/modules";

const SliderSecond = () => {
  return (
    <div>
      <div>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={270}
          centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          loopAdditionalSlides={1}
          initialSlide={0}
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 2.5,
              spaceBetween: 270,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" border border-black rounded-2xl w-[420px] lg:w-[480px] md:w-[380px] xl:w-[500px] h-[184px] bg-[#ffffff] px-5">
              <div className=" flex justify-between items-center mt-5">
                <div className=" flex items-center gap-2">
                  <img src="https://i.ibb.co/WkFNHSQ/Image-3.png" alt="" />

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
                facilisis vel dictum libero feugiat. Pellentesque fames
                tristique amet venenatis et non laoreet. Condimentum pla
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border border-black rounded-2xl w-[420px] lg:w-[480px] md:w-[380px] xl:w-[500px] h-[184px] bg-[#ffffff] px-5">
              <div className=" flex justify-between items-center mt-5">
                <div className=" flex items-center gap-2">
                  <img src="https://i.ibb.co/tc6TCHx/Image-4.png" alt="" />

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
                facilisis vel dictum libero feugiat. Pellentesque fames
                tristique amet venenatis et non laoreet. Condimentum pla
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border border-black rounded-2xl w-[420px] lg:w-[480px] md:w-[380px] xl:w-[500px] h-[184px] bg-[#ffffff] px-5">
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
                facilisis vel dictum libero feugiat. Pellentesque fames
                tristique amet venenatis et non laoreet. Condimentum pla
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border border-black rounded-2xl w-[420px] lg:w-[480px] md:w-[380px] xl:w-[500px] h-[184px] bg-[#ffffff] px-5">
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
                facilisis vel dictum libero feugiat. Pellentesque fames
                tristique amet venenatis et non laoreet. Condimentum pla
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border border-black rounded-2xl w-[420px] lg:w-[480px] md:w-[380px] xl:w-[500px] h-[184px] bg-[#ffffff] px-5">
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
                facilisis vel dictum libero feugiat. Pellentesque fames
                tristique amet venenatis et non laoreet. Condimentum pla
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border border-black rounded-2xl w-[420px] lg:w-[480px] md:w-[380px] xl:w-[500px] h-[184px] bg-[#ffffff] px-5">
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
                facilisis vel dictum libero feugiat. Pellentesque fames
                tristique amet venenatis et non laoreet. Condimentum pla
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderSecond;

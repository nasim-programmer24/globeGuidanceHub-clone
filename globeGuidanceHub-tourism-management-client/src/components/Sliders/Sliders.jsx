import slide1 from "../../assets/sliderImg/img1.jpg";
import slide2 from "../../assets/sliderImg/img2.jpg";
import slide3 from "../../assets/sliderImg/img3.jpg";
import slide4 from "../../assets/sliderImg/img4.jpg";
import slide5 from "../../assets/sliderImg/img5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Sliders = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                className="mySwiper">
                <SwiperSlide>
                    <div
                        className="hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16"
                        style={{
                            backgroundImage: `url(${slide1})`,
                        }}>
                        <div className="hero-overlay rounded-xl md:rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div>
                                <h1 className="mb-5  text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                                Discover Your Next Adventure: Explore Our Top Destinations!
                                </h1>
                                <p className="mb-5 font-medium text-white ">
                                Immerse yourself in a world of breathtaking landscapes and vibrant cultures. Let our expertly curated selection of top destinations ignite your wanderlust and inspire your next unforgettable journey.
                                </p>
                                <Link className="btn btn-ghost btn-outline text-white text-lg font-bold ">
                                    See Our All Tourists Spot
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16"
                        style={{
                            backgroundImage: `url(${slide2})`,
                        }}>
                        <div className="hero-overlay rounded-xl md:rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div>
                                <h1 className="mb-5  text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                                Unlock Hidden Gems: Off-the-Beaten-Path Escapes Await!
                                </h1>
                                <p className="mb-5 font-medium text-white ">
                                Venture beyond the ordinary and uncover the extraordinary. Embark on a journey of discovery as you explore hidden gems, secluded retreats, and secret paradises that promise unforgettable experiences and cherished memories.
                                </p>
                                <Link className="btn btn-ghost btn-outline text-white text-lg font-bold ">
                                    See Our All Tourists Spot
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16"
                        style={{
                            backgroundImage: `url(${slide3})`,
                        }}>
                        <div className="hero-overlay rounded-xl md:rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div>
                                <h1 className="mb-5  text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                                Plan Your Perfect Getaway: Tailored Travel Experiences Await!
                                </h1>
                                <p className="mb-5 font-medium text-white ">
                                From luxurious resorts to adventurous expeditions, tailor your dream vacation with our personalized travel experiences. Whether you seek relaxation, adventure, or cultural immersion, we&apos;re here to make your travel dreams a reality.
                                </p>
                                <Link className="btn btn-ghost btn-outline text-white text-lg font-bold ">
                                    See Our All Tourists Spot
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16"
                        style={{
                            backgroundImage: `url(${slide4})`,
                        }}>
                        <div className="hero-overlay rounded-xl md:rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div>
                                <h1 className="mb-5  text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                                Experience the Extraordinary: Dive into Unique Cultural Encounters!
                                </h1>
                                <p className="mb-5 font-medium text-white ">
                                Immerse yourself in the rich tapestry of global cultures and traditions. From culinary delights to ancient rituals, embark on a transformative journey filled with authentic experiences that celebrate the diversity of our world.
                                </p>
                                <Link className="btn btn-ghost btn-outline text-white text-lg font-bold ">
                                    See Our All Tourists Spot
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16"
                        style={{
                            backgroundImage: `url(${slide5})`,
                        }}>
                        <div className="hero-overlay rounded-xl md:rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div>
                                <h1 className="mb-5  text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                                Go Beyond the Ordinary: Elevate Your Travel Experience!
                                </h1>
                                <p className="mb-5 font-medium text-white ">
                                Break free from the ordinary and elevate your travel experience to new heights. Whether you crave adrenaline-pumping adventures or serene retreats, let us guide you towards extraordinary moments that redefine the art of travel.
                                </p>
                                <Link className="btn btn-ghost btn-outline text-white text-lg font-bold ">
                                    See Our All Tourists Spot
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Sliders;

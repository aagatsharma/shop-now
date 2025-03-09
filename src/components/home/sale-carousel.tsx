import Slider, { Settings } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import { sales } from "@/data/products";
import { Link } from "react-router";

const SaleCarousel = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const sliderRef = useRef<Slider | null>(null);

  return (
    <section className="w-full relative">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 dark:bg-gray-600 cursor-pointer rounded-full ml-2"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <FaChevronLeft className="text-white" />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 dark:bg-gray-600 cursor-pointer rounded-full mr-2"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <FaChevronRight className="text-white" />
      </button>
      <Slider ref={sliderRef} {...settings}>
        {sales.map((sale, index) => (
          <Link
            to={"#"}
            className="h-80 bg-red-500 px-12 rounded-sm"
            key={index}
          >
            <div className="flex h-full items-center flex-wrap max-sm:justify-center justify-between text-white">
              <div className="space-y-2">
                <h1 className="font-bold text-3xl">FLASH SALE</h1>
                <h1 className="text-2xl">{sale.name}</h1>
              </div>

              <div>
                <img src={sale.image} className="h-40 w-full object-cover" />
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default SaleCarousel;

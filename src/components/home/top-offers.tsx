import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../shared/product/product-card";
import SectionTitle from "../shared/section-title";
import { products } from "@/data/products";
import { useRef } from "react";
import Slider, { Settings } from "react-slick";

const TopOffers = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col gap-6 overflow-hidden">
      <div className="flex items-center justify-between">
        <SectionTitle title="Top Offers of the Month" />
        <div className="flex items-center gap-4">
          <button
            className="border border-gray-200 dark:border-gray-600 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
            onClick={() => sliderRef?.current?.slickPrev()}
          >
            <FaChevronLeft />
          </button>
          <button
            className="border border-gray-200 dark:border-gray-600 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
            onClick={() => sliderRef?.current?.slickNext()}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {products.map((product, index) => (
          <div key={index} className="pr-4">
            <ProductCard
              image={product.image}
              price={product.price}
              previousPrice={product.previousPrice}
              rating={product.rating}
              name={product.name}
              discountPercent={product.discountPercent}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TopOffers;

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from "../shared/section-title";
import { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import Avatar from "../shared/user/avatar";
import AvatarSkeleton from "../shared/user/avatar-skeleton";
import { UserResponse } from "@/types/user.types";

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
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [users, setUsers] = useState<UserResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <section className="flex flex-col gap-6 overflow-hidden">
      <div className="flex items-center justify-between">
        <SectionTitle title="Top Members of the Month" />
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

      {loading ? (
        <div className="flex gap-6">
          <AvatarSkeleton />
          <AvatarSkeleton />
          <AvatarSkeleton />
        </div>
      ) : (
        <Slider ref={sliderRef} {...settings}>
          {users.map((user, index) => (
            <Avatar
              key={index}
              image={user.picture.large}
              name={`${user.name.first} ${user.name.last}`}
            />
          ))}
        </Slider>
      )}
    </section>
  );
};

export default TopOffers;

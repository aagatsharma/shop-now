import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const ProductCard = ({
  discountPercent,
  name,
  rating,
  price,
  previousPrice,
  image,
  largeImg = false,
}: {
  discountPercent?: number;
  name: string;
  rating: number;
  price: number;
  previousPrice?: number;
  image: string;
  largeImg?: boolean;
}) => {
  const filledStars = Math.floor(rating);
  const remainingStars = 5 - filledStars;
  return (
    <div className="rounded border border-gray-200 dark:border-gray-600 p-3 mb-2">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className={`w-full ${largeImg ? "h-96" : "h-48"} object-cover`}
        />

        <div className="flex items-center justify-between absolute top-0 w-full">
          <div>
            {discountPercent && (
              <button className="bg-red-500 text-white p-1 rounded-sm">
                {discountPercent}% OFF
              </button>
            )}
          </div>
          <button className="cursor-pointer">
            <FaRegHeart className="text-xl text-black dark:text-white" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h1 className="font-semibold line-clamp-2 hover:underline">{name}</h1>
        <div className="flex items-center gap-1 ">
          {[...Array(filledStars)].map((_, index) => (
            <FaStar key={index} color="gold" />
          ))}
          {[...Array(remainingStars)].map((_, index) => (
            <FaRegStar key={index} color="gold" />
          ))}

          <p>({rating})</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-blue-500 font-bold text-lg">${price}</h3>
            {previousPrice && (
              <h2 className="line-through text-gray-600">${previousPrice}</h2>
            )}
          </div>
          <div>
            <button className="rounded-full bg-blue-600 p-2 cursor-pointer">
              <FaCartShopping className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import { useTheme } from "@/provider/theme-provider";
import {
  IoSearch,
  IoMoonOutline,
  IoNotificationsOutline,
  IoCartOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { Link } from "react-router";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="border-b border-gray-200 dark:border-gray-600 shadow p-4 sticky top-0 bg-white dark:bg-gray-800 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to={"/"}
          className="font-extrabold text-blue-500 dark:text-gray-400 text-xl"
        >
          ShopNow
        </Link>
        <div className="flex max-md:hidden items-center gap-6 font-medium text-base">
          <Link to="#">Showcase</Link>
          <Link to="#">Product</Link>
          <Link to="#">Offer</Link>
          <Link to="#">Brand</Link>
          <Link to="#">Job</Link>
        </div>

        <div className="flex items-center gap-5 text-xl">
          <IoSearch />
          {theme === "dark" ? (
            <button onClick={() => setTheme("light")}>
              <IoMoonOutline />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")}>
              <IoSunnyOutline />
            </button>
          )}
          <IoNotificationsOutline />
          <IoCartOutline />
        </div>
      </div>
    </div>
  );
};

export default Header;

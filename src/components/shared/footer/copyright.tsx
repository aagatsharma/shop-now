import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Copyright = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex w-full items-center justify-between flex-wrap gap-3 max-sm:justify-center">
      <p className="text-base flex items-center">
        &copy; {year} ShopNow. All rights reserved.
      </p>
      <div className="flex items-center gap-6 text-xl">
        <FiFacebook className="cursor-pointer" />
        <FiTwitter className="cursor-pointer" />
        <FiInstagram className="cursor-pointer" />
        <FiLinkedin className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Copyright;

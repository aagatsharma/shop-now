import { Link } from "react-router";
import SectionTitle from "../shared/section-title";

const Platforms = () => {
  const platforms = [
    "digital-marketing",
    "e-commerce",
    "social-media",
    "digital-marketing",
    "e-commerce",
    "social-media",
  ];
  return (
    <section className="flex flex-col gap-6">
      <SectionTitle title="Platforms" />

      <div className="grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {platforms.map((platform, index) => (
          <Link
            to={`/platforms/${platform}`}
            key={index}
            className="flex items-center border p-3 rounded-sm border-gray-200 dark:border-gray-600 bg-blue-50"
          >
            <img
              src={`/src/assets/platforms/${platform}.jpg`}
              className="w-full object-cover h-40"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Platforms;

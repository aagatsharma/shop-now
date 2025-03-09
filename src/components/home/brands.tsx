import { Link } from "react-router";
import SectionTitle from "../shared/section-title";

const Brands = () => {
  const brand = ["adidas", "dell", "louis-vuitton", "nike", "puma", "samsung"];
  return (
    <section className="flex flex-col gap-6">
      <SectionTitle title="Top Franchise of the Month" />

      <div className="grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {brand.map((brand) => (
          <Link
            to={`/brand/${brand}`}
            key={brand}
            className="flex items-center border p-8 rounded-sm border-gray-200 dark:border-gray-600"
          >
            <img
              src={`/brands/${brand}.png`}
              className="w-full object-contain max-h-40"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Brands;

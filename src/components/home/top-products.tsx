import ProductCard from "../shared/product/product-card";
import SectionTitle from "../shared/section-title";

const TopProducts = () => {
  return (
    <section className="flex flex-col gap-6">
      <SectionTitle title="Top Product of the Month" hideBorder />

      <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5">
        <ProductCard
          largeImg
          image="/src/assets/products/phone.png"
          price={22.41}
          previousPrice={20.41}
          rating={4.1}
          name="Mens Casual Premium Slim Fit T-Shirts"
          discountPercent={22}
        />
        <ProductCard
          largeImg
          image="/src/assets/products/watch.png"
          price={22.41}
          previousPrice={20.41}
          rating={4.1}
          name="Mens Casual Premium Slim Fit T-Shirts"
        />
        <div className="grid sm:grid-cols-2 gap-5 max-xl:col-span-full">
          <ProductCard
            image="/src/assets/products/laptop.png"
            price={22.41}
            previousPrice={20.41}
            rating={4.1}
            name="Mens Casual"
            discountPercent={22}
          />
          <ProductCard
            image="/src/assets/products/phone.png"
            price={22.41}
            previousPrice={20.41}
            rating={4.1}
            name="Mens Casual Premium Slim Fit T-Shirts"
            discountPercent={22}
          />
          <ProductCard
            image="/src/assets/products/watch.png"
            price={22.41}
            rating={4.1}
            name="Mens Casual Premium Slim Fit T-Shirts"
          />
          <ProductCard
            image="/src/assets/products/laptop.png"
            price={22.41}
            rating={4.1}
            previousPrice={20.41}
            name="Mens Casual Premium Slim Fit T-Shirts"
            discountPercent={22}
          />
        </div>
      </div>
    </section>
  );
};

export default TopProducts;

import Brands from "@/components/home/brands";
import Events from "@/components/home/events.";
import Hero from "@/components/home/hero";
import LuckyDrawWinners from "@/components/home/lucky-draw-winners";
import People from "@/components/home/people";
import Platforms from "@/components/home/platforms";
import SaleCarousel from "@/components/home/sale-carousel";
import TopMembers from "@/components/home/top-members";
import TopOffers from "@/components/home/top-offers";
import TopPatterns from "@/components/home/top-patterns";
import TopProducts from "@/components/home/top-products";

const HomePage = () => {
  return (
    <section className="container mx-auto flex flex-col gap-20 my-10 px-4">
      <Hero />
      <People />
      <Platforms />
      <TopOffers />
      <TopProducts />
      <SaleCarousel />
      <TopPatterns />
      <Events />
      <Brands />
      <TopMembers />
      <LuckyDrawWinners />
    </section>
  );
};

export default HomePage;

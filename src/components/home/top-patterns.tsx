import { Link } from "react-router";
import SectionTitle from "../shared/section-title";

const TopPatterns = () => {
  const patterns = [
    { name: "Modern Minimalist", image: "modern-minimalistic.jpg", href: "#" },
    { name: "Vintage Classic", image: "vintage-classic.jpg", href: "#" },
    { name: "Bold Geometric", image: "bold-geometric.jpeg", href: "#" },
    { name: "Natural Organic", image: "natural-organic.jpg", href: "#" },
    { name: "Tech Futuristic", image: "tech-futuristic.jpg", href: "#" },
    { name: "Elegant Luxury", image: "elegant-luxury.jpg", href: "#" },
  ];
  return (
    <section className="flex flex-col gap-6">
      <SectionTitle title="Top Patterns of the Month" />

      <div className="grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-10">
        {patterns.map((pattern) => (
          <Link
            to={pattern.href}
            key={pattern.name}
            className="flex flex-col gap-3 group"
          >
            <img
              src={`/src/assets/patterns/${pattern.image}`}
              className="w-full object-cover h-60 rounded-lg"
            />
            <h1 className="text-lg group-hover:underline">{pattern.name}</h1>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopPatterns;

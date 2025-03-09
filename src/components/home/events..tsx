import { Link } from "react-router";
import SectionTitle from "../shared/section-title";

const Events = () => {
  const events = [
    {
      name: "Summer Tech Expo",
      image: "tech-expo.jpeg",
      href: "#",
      date: "June 15-20, 2024",
    },
    {
      name: "Annual Gaming Convention",
      image: "gaming-convention.jpg",
      href: "#",
      date: "July 8-12, 2024",
    },
    {
      name: "Smart Home Summit",
      image: "home-summit.jpeg",
      href: "#",
      date: "August 3-5, 2024",
    },
    {
      name: "Digital Photography Workshop",
      image: "photograph.jpeg",
      href: "#",
      date: "September 18-20, 2024",
    },
  ];
  return (
    <section className="flex flex-col gap-6">
      <SectionTitle title="Events of the Month" />

      <div className="grid xl:grid-cols-4 sm:grid-cols-2 sm:gap-6 gap-10">
        {events.map((event) => (
          <Link
            to={event.href}
            key={event.name}
            className="flex flex-col gap-3 group relative"
          >
            <img
              src={`/src/assets/events/${event.image}`}
              className="w-full object-cover h-60 rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white flex flex-col gap-1">
              <h1 className="text-lg group-hover:underline font-bold">
                {event.name}
              </h1>
              <h3 className="text-base text-white/90">{event.date}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Events;

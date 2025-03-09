import banner from "/home/banner.jpeg";

const Hero = () => {
  return (
    <section className="w-full rounded md:p-20 p-10 bg-orange-500 grid lg:grid-cols-2 items-center gap-10 text-white">
      <div className="flex flex-col gap-4">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-semibold">
          Lorem Ipsum is simply dummy
        </h1>
        <p className="md:text-lg text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          possimus inventore ipsa dolore adipisci quaerat obcaecati natus,
          dolores quam accusamus, perspiciatis architecto consequatur nihil
          quidem a.
        </p>
        <div>
          <button className="rounded text-blue-500 bg-white p-2 px-4 cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <img src={banner} className="h-96 object-cover" alt="Banner Image" />
      </div>
    </section>
  );
};

export default Hero;

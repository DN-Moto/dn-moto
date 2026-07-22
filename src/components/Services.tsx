const services = [
  {
    title: "Oil Changes",
    description: "Keep your engine protected with fresh oil and quality service.",
  },
  {
    title: "Air Filter Cleaning",
    description: "Improve performance and engine life with a clean filter.",
  },
  {
    title: "Carburetor Cleaning",
    description: "Restore crisp throttle response and reliable starting.",
  },
  {
    title: "Chain Service",
    description: "Cleaning, lubrication, and adjustment for maximum lifespan.",
  },
  {
    title: "Brake Service",
    description: "Brake pad replacement and brake system inspection.",
  },
  {
    title: "Pressure Washing",
    description: "Professional cleaning to keep your bike looking its best.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#111315] py-28">
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-5xl font-bold text-white">
          Services
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          Affordable maintenance for dirt bikes under 250cc.
          Honest work. Fair pricing. Rider-owned.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-700 bg-[#181C20] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
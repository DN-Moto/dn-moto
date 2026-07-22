export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/15" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8">

        <div className="max-w-xl">

          <h1 className="text-6xl md:text-8xl font-black tracking-wide text-white">
            DN MOTO
          </h1>

          <p className="mt-6 text-2xl md:text-3xl text-blue-400 font-medium">
            Built for the Next Ride.
          </p>

          <p className="mt-6 text-lg md:text-xl leading-8 text-gray-200">
            Professional maintenance and repairs for dirt bikes under 250cc.
            Rider-owned. Honest pricing. Attention to detail.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500">
              Request Service
            </button>

            <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-black">
              View Services
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
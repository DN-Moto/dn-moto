import Link from "next/link";

export default function FeaturedProject() {

  return (
    <section
  id="projects"
  className="bg-[#0d0f11] py-28"
>
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">

<div className="mt-10">
  <Link
    href="/builds"
    className="inline-flex rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30"
  >
    View Build Journal →
  </Link>
</div>

        <div className="overflow-hidden rounded-2xl border border-gray-800">
          <img
            src="/images/hero.jpg"
            alt="2015 Yamaha TTR125LE"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div>

          <p className="text-blue-400 font-semibold tracking-[0.25em] uppercase">
            Featured Project
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            2015 Yamaha TTR125LE
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            The bike that started DN Moto.
            Every repair, maintenance task, and upgrade has helped build the
            experience behind this business.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-gray-700 p-5">
              <h3 className="text-blue-400 font-semibold">
                Maintenance
              </h3>

              <p className="mt-2 text-gray-400">
                Oil changes, chain service, air filter cleaning
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 p-5">
              <h3 className="text-blue-400 font-semibold">
                Carburetor
              </h3>

              <p className="mt-2 text-gray-400">
                Jet tuning and cleaning for improved performance
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 p-5">
              <h3 className="text-blue-400 font-semibold">
                Troubleshooting
              </h3>

              <p className="mt-2 text-gray-400">
                Diagnosed starting, idle, and fuel system issues
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 p-5">
              <h3 className="text-blue-400 font-semibold">
                Future Upgrades
              </h3>

              <p className="mt-2 text-gray-400">
                Suspension improvements and performance modifications
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

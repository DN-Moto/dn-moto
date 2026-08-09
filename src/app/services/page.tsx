import Link from "next/link";
import {
  Wrench,
  Settings,
  Bike,
  Search,
} from "lucide-react";

import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};
const services = [
  {
    icon: Wrench,
    title: "Basic Maintenance",
    price: "Starting at $35",
    time: "30–45 minutes",
    includes: [
      "Oil change",
      "Air filter cleaning",
      "Chain adjustment & lubrication",
      "Tire pressure check",
      "General safety inspection",
    ],
    why:
      "Routine maintenance keeps your bike reliable and helps prevent expensive repairs.",
  },
  {
    icon: Settings,
    title: "Carburetor Service",
    price: "Starting at $45",
    time: "45–90 minutes",
    includes: [
      "Carb cleaning",
      "Jet inspection",
      "Idle adjustment",
      "Fuel system inspection",
      "Performance tuning",
    ],
    why:
      "Improves starting, throttle response, fuel economy, and overall rideability.",
  },
  {
    icon: Bike,
    title: "Brake & Drive Service",
    price: "Starting at $30",
    time: "30–60 minutes",
    includes: [
      "Brake adjustment",
      "Chain inspection",
      "Sprocket inspection",
      "Cable adjustment",
      "Control lubrication",
    ],
    why:
      "These components directly affect rider safety and power delivery.",
  },
  {
    icon: Search,
    title: "Diagnostics",
    price: "Contact for Quote",
    time: "Varies",
    includes: [
      "Performance diagnosis",
      "Electrical troubleshooting",
      "Starting issues",
      "Noise investigation",
      "Repair recommendations",
    ],
    why:
      "Every issue is different, so diagnostics begin with a thorough inspection.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0b0d0f] text-white">
      <section className="mx-auto max-w-6xl px-8 py-24">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            SERVICES & PRICING
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Complete Service Menu
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-400">
            Clear pricing, honest recommendations, and maintenance focused on dirt bikes under 250cc.
          </p>
          <div className="mx-auto mt-10 max-w-4xl">

  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

  <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-300">

    <span>Up to 250cc Specialists</span>

    <span className="hidden sm:block text-blue-400">•</span>

    <span>Rider-Owned</span>

    <span className="hidden sm:block text-blue-400">•</span>

    <span>Quality Work</span>

    <span className="hidden sm:block text-blue-400">•</span>

    <span>Transparent Pricing</span>

  </div>

  <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

</div>
          </div>

        <div className="mt-16 grid gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/10"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                      <Icon size={28} className="text-blue-400" />
                    </div>

                    <div>
  <h2 className="text-2xl font-bold">
    {service.title}
  </h2>

  <p className="mt-4 font-semibold text-blue-400">
    Estimated Time
  </p>

  <p className="mb-5 text-gray-300">
    {service.time}
  </p>

  <div className="space-y-2">
    {service.includes.map((item) => (
      <div
        key={item}
        className="flex items-center gap-3 text-gray-300"
      >
        <span className="text-blue-400">✓</span>
        {item}
      </div>
    ))}
  </div>
</div>
                  </div>

                  <div className="md:text-right">
                    <div className="text-2xl font-bold text-blue-400">
                      {service.price}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="font-semibold text-white">Why this service matters</h3>
                  <p className="mt-2 leading-7 text-gray-300">
                    {service.why}
                  </p>
                </div>
                <div className="mt-8">
  <Link
    href="/#contact"
    className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
  >
    Request This Service →
  </Link>
</div>
              </div>
            );
          })}
        </div>

        <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h2 className="text-3xl font-black">Why DN Moto prices are different</h2>

          <p className="mt-4 leading-8 text-gray-300">
            DN Moto specializes in dirt bikes up to 250cc and operates with low overhead. By focusing on a specific type of motorcycle and keeping the business lean, I can offer competitive pricing without cutting corners.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            Every recommendation is based on what your bike actually needs. If I notice a potential issue during service, I&apos;ll explain it clearly before any additional work is performed.
          </p>
        </section>

        {/* Service Policies */}

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <h2 className="text-3xl font-black">Service Policies</h2>

          <div className="mt-8 space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-blue-400">
                Parts & Replacement Components
              </h3>
              <p className="mt-3 leading-8 text-gray-300">
                If your motorcycle requires replacement parts during service,
                You will always be notified of the part cost and asked for approval before any parts are ordered or installed.
                No additional parts will be ordered or installed without your approval.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h3 className="text-xl font-semibold text-blue-400">
                Priority Scheduling
              </h3>
              <p className="mt-3 leading-8 text-gray-300">
                Standard appointments are scheduled in the order they are received.
                If my schedule allows, same-day or next-day priority service may be available
                for an additional priority scheduling fee. Availability depends on current
                workload and cannot be guaranteed.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h3 className="text-xl font-semibold text-blue-400">
                Bike Condition
              </h3>
              <p className="mt-3 leading-8 text-gray-300">
                Normal trail dust, mud, and everyday riding wear are expected.
                However, motorcycles that are excessively dirty or heavily caked in mud,
                grease, or debris may require additional cleaning before accurate inspection
                and repair can begin. Because DN Moto also offers power washing services,
                a cleaning service can be added to the appointment if needed.
              </p>
            </div>

          </div>

        </section>


        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/#contact"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
          >
            Request Service
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
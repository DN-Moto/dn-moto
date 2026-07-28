"use client";

import ServiceCard from "./ServiceCard";
import {
  Wrench,
  Settings,
  Bike,
  Search,
} from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#111315] py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            SERVICES
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Professional Dirt Bike Maintenance
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-400">
            Honest pricing. Quality workmanship.
            Maintenance focused on keeping your bike reliable and ready for the next ride.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <ServiceCard
            icon={Wrench}
            title="Basic Maintenance"
            description="Oil changes, air filter cleaning, chain adjustment, lubrication, and complete inspections."
            price="Starting at $35"
          />

          <ServiceCard
            icon={Settings}
            title="Carburetor Service"
            description="Carb cleaning, rejetting, tuning, idle adjustment, and troubleshooting."
            price="Starting at $45"
          />

          <ServiceCard
            icon={Bike}
            title="Brake & Drive"
            description="Brake adjustments, chain replacement, sprockets, cables, and controls."
            price="Starting at $30"
          />

          <ServiceCard
            icon={Search}
            title="Diagnostics"
            description="Starting issues, poor performance, strange noises, and general troubleshooting."
            price="Contact for Quote"
          />

        </div>

      </div>
    </section>
  );
}
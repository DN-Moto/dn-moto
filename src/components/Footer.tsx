import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090b0d]">

      <div className="mx-auto max-w-7xl px-8 py-24">

        {/* Logo */}

        <div className="text-center">

          <h2 className="text-4xl font-black tracking-[0.25em] text-white">
  DN MOTO
</h2>

          <p className="mt-5 text-xl text-blue-400">
            Built for the Next Ride.
          </p>

        </div>

        {/* Divider */}

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Links */}

        <div className="grid gap-12 text-center md:grid-cols-3">

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Navigation
            </h3>

            <div className="space-y-3">

              <Link href="/" className="block text-gray-400 hover:text-blue-400 transition">
                Home
              </Link>

              <Link href="/services" className="block text-gray-400 hover:text-blue-400 transition">
                Services
              </Link>

              <Link href="/#Gallery" className="block text-gray-400 hover:text-blue-400 transition">
                Gallery
              </Link>

              <Link href="/#contact" className="block text-gray-400 hover:text-blue-400 transition">
                Contact
              </Link>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Services
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Maintenance</p>

              <p>Carburetors</p>

              <p>Diagnostics</p>

              <p>Brake & Drive</p>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-3">

              <a
                href="mailto:contact.dnmotorsports@gmail.com"
                className="text-gray-400 transition hover:text-blue-400"
              >
                contact.dnmotorsports@gmail.com
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-gray-500">

  <p>© 2026 DN Moto Repair. All rights reserved.</p>

  <p className="mt-2">
    Built for the Next Ride.
  </p>

  <p className="mt-2">
    Serving riders one bike at a time.
  </p>

</div>

<div className="mt-12 border-t border-white/10 pt-8 text-center text-sm leading-7 text-gray-500">

  <p>
    DN Moto Repair is committed to providing professional service, clear communication, and quality workmanship. 
    Customers will be informed of recommended repairs and any additional costs before additional work is performed.
    DN Moto Repair cannot guarantee the performance, reliability, or lifespan of customer-supplied parts or pre-existing components that were not replaced or repaired during the authorized service.
  </p>

  <p className="mt-4">
    Motorcycle riding involves inherent risks, and customers are responsible for inspecting their motorcycle before each ride and operating it safely. 
    DN Moto Repair is responsible only for the services specifically authorized and performed. 
    We are not responsible for accidents, injuries, property damage, or mechanical failures occurring after service except to the extent they are directly caused by negligent workmanship or an error in the repairs performed by DN Moto Repair.
     Nothing in this statement limits any rights or remedies that cannot be disclaimed under applicable law.
  </p>

</div>

        </div>

      </footer>
  );
}
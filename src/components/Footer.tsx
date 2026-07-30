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
    DN Moto Repair is committed to transparency and quality workmanship.
    Customers will be informed of recommended repairs and additional costs
    before work is performed.
  </p>

  <p className="mt-4">
    Motorcycle riding involves risks. Customers are responsible
    for the safe operation and inspection of their motorcycle before each
    ride. DN Moto Repair is not responsible for any accidents, injuries, or
    damages occurring after service unless directly caused by poor
    workmanship or an incorrect repair.
  </p>

</div>

        </div>

      </footer>
  );
}
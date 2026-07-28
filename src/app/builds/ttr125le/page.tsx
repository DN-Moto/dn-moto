import Link from "next/link";
import Footer from "../../../components/Footer";

export default function TTRBuildPage() {
  return (
    <main className="min-h-screen bg-[#0b0d0f] text-white">

      <section className="mx-auto max-w-5xl px-8 py-24">

        <img
          src="/images/gallery/ttr-right.jpeg"
          alt="2015 Yamaha TT-R125LE"
          className="h-[450px] w-full rounded-3xl object-cover"
        />

        <p className="mt-10 uppercase tracking-[0.35em] text-blue-400">
          BUILD JOURNAL
        </p>

        <h1 className="mt-4 text-5xl font-black">
          2015 Yamaha TT-R125LE
        </h1>

        <p className="mt-8 text-xl leading-9 text-gray-300">
          The motorcycle that inspired DN Moto.
          Every repair, maintenance task,
          and tuning decision contributed to the knowledge
          that eventually became this business.
        </p>

        {/* Overview */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold">
            Overview
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Purchased as a project bike,
            this TT-R125LE became a long-term learning platform.
            Through maintenance, troubleshooting,
            carburetor tuning, and testing,
            it gradually became a dependable trail motorcycle.
          </p>

        </section>

        {/* Your Story */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold">
            My Story
          </h2>

          <div className="mt-8 rounded-3xl border border-dashed border-blue-500/40 p-8">

            <p className="leading-8 text-gray-400">

              Throughout my childhood, I was always interested in riding motorcycles, but I never had the opportunity until I found this 2015 Yamaha TT-R125LE about a year ago.
When I bought the bike, it wouldn&apos;t start. The rear wheel needed a full set of new spokes, the front brake and clutch barely functioned, and the electrical system was completely unresponsive.
Most people would have seen an old dirt bike ready to be scrapped. I saw an opportunity—not only to own my first motorcycle, but also to learn how these machines really worked.
I began by carefully diagnosing every issue and making a plan to repair them one by one. Over the next year, I spent countless hours cleaning, tuning, replacing worn parts, and learning from every problem I encountered. Each repair taught me something new and gave me more confidence to take on the next challenge.
Today, the bike starts reliably, runs exactly how I want it to, and has been upgraded with modifications that I installed myself to better suit the trails I enjoy riding. More importantly, the experience taught me how to diagnose problems, perform quality repairs, and understand the importance of doing a job correctly.
That journey is what inspired DN Moto.
My goal is simple: to provide honest, affordable maintenance and repairs while helping every rider enjoy the same confidence in their motorcycle that I found through rebuilding my own.


            </p>

          </div>

        </section>

        {/* Timeline */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold">
            Maintenance Timeline
          </h2>

          <ul className="mt-8 space-y-4 text-gray-300">

            <li>✓ Oil & Filter Service</li>

            <li>✓ Carburetor Cleaning</li>

            <li>✓ Idle Adjustment</li>

            <li>✓ Main & Pilot Jet Changes</li>

            <li>✓ Snorkel Testing</li>

            <li>✓ FMF Exhaust Setup</li>

            <li>□ Suspension Upgrades (Future)</li>

          </ul>

        </section>

        {/* Lessons */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold">
            Lessons Learned
          </h2>

          <ul className="mt-8 space-y-4 text-gray-300">

            <li>• Diagnose before replacing parts.</li>

            <li>• Small maintenance items matter.</li>

            <li>• Test every modification individually.</li>

            <li>• Reliability comes before horsepower.</li>

          </ul>

        </section>

        {/* Buttons */}

        <div className="mt-24 flex flex-wrap gap-5">

          <Link
            href="/#contact"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold"
          >
            Request Service
          </Link>

          <Link
            href="/builds"
            className="rounded-xl border border-white/20 px-8 py-4"
          >
            Back to Build Journal
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-white/20 px-8 py-4"
          >
            Home
          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}
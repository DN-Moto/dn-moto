import Link from "next/link";
import Footer from "../../components/Footer";

export default function BuildsPage() {
  return (
    <main className="min-h-screen bg-[#0b0d0f] text-white">

      <section className="mx-auto max-w-6xl px-8 py-24">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            BUILD JOURNAL
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Real Bikes. Real Work.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-400">
            Every motorcycle featured here has been serviced,
            repaired, or improved by DN Moto.
            Each project documents the work performed,
            the reasoning behind it,
            and the final result.
          </p>

        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-blue-500/30">

          <img
            src="/images/Gallery/ttr-right.jpeg"
            alt="2015 Yamaha TT-R125LE"
            className="h-80 w-full rounded-2xl object-cover"
          />

          <div className="mt-8">

            <p className="uppercase tracking-[0.3em] text-blue-400">
              PROJECT 001
            </p>

            <h2 className="mt-3 text-4xl font-black">
              2015 Yamaha TT-R125LE
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              The motorcycle that inspired DN Moto.
              Purchased as a project bike and gradually transformed
              into a dependable trail machine through careful
              diagnosis, maintenance, tuning, and testing.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
                Oil Service
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
                Carburetor Cleaning
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
                Re-Jetted
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
                FMF Exhaust
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
                Intake Testing
              </span>

            </div>

            <Link
              href="/builds/ttr125le"
              className="mt-10 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
            >
              Read Full Build →
            </Link>

          </div>

        </div>

      </section>

      <Footer/>

    </main>
  );
}
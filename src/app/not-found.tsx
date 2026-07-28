import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] px-8 text-white">
      <div className="max-w-2xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          404
        </p>

        <h1 className="mt-6 text-5xl font-black md:text-7xl">
          Looks like this trail ends here.
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist, may have been moved,
          or the link may be incorrect.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500"
          >
            Return Home
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-black"
          >
            View Services
          </Link>

        </div>

      </div>
    </main>
  );
}
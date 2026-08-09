export default function Hero() {
  return (
    <section className="pt-28 pb-8 px-6 text-center">

      <h1 className="text-5xl md:text-7xl font-black text-white">
        MasterChef SG
      </h1>

      <p className="mt-3 text-yellow-400 text-xl font-semibold">
        Season 4 Voting Portal
      </p>

      <p className="mt-5 text-gray-200 max-w-md mx-auto">
        Vote for your favourite contestant and help decide who becomes the next MasterChef SG Champion.
      </p>

      <div className="mt-8 mx-auto max-w-xs rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 p-6">

        <p className="text-yellow-400 font-bold tracking-wider">
          🔥 LIVE VOTES
        </p>

        <h2 className="text-5xl font-black mt-2">
          4,670
        </h2>

        <p className="mt-5 text-gray-300">
          Voting closes in
        </p>

        <h3 className="text-xl font-bold mt-2 text-yellow-300">
          11 HOURS
        </h3>

      </div>

    </section>
  );
}
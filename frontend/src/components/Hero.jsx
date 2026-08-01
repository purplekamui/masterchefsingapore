import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-6xl font-black text-gray-900">
          MasterChef SG
        </h2>

        <p className="mt-4 text-2xl text-yellow-600 font-semibold">
          Season 15 Voting Portal
        </p>

        <p className="mt-8 text-gray-700 text-lg max-w-2xl">
          Vote for your favourite contestant and help decide who becomes
          the next MasterChef SG Champion.
        </p>

        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8">

          <h3 className="text-yellow-500 text-xl font-bold">
            LIVE VOTES
          </h3>

          <h1 className="text-6xl font-black mt-3">
            1,248,972
          </h1>

          <p className="mt-5 text-gray-500">
            Voting closes in
          </p>

          <h2 className="text-2xl font-bold mt-2">
            12 Days 18 Hours 44 Minutes
          </h2>

        </div>

      </section>
    </>
  );
}
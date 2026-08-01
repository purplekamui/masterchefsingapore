export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <h1 className="text-3xl font-extrabold text-yellow-500 tracking-wide">
          MasterChef SG
        </h1>

        <div className="hidden md:flex gap-10 text-gray-800 font-medium">

          <a href="#" className="hover:text-yellow-500 duration-300">
            Home
          </a>

          <a href="#" className="hover:text-yellow-500 duration-300">
            Contestants
          </a>

          <a href="#" className="hover:text-yellow-500 duration-300">
            Leaderboard
          </a>

          <a href="#" className="hover:text-yellow-500 duration-300">
            How To Vote
          </a>

        </div>

      </div>
    </nav>
  );
}
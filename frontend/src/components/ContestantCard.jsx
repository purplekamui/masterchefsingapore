export default function ContestantCard({
  contestants,
  current,
  setCurrent,
}) {
  const contestant = contestants[current];

  function next() {
    setCurrent((current + 1) % contestants.length);
  }

  function prev() {
    setCurrent((current - 1 + contestants.length) % contestants.length);
  }

  return (
    <section className="pb-8 px-5">

      <div className="max-w-sm mx-auto flex items-center justify-between">

        <button
          onClick={prev}
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20"
        >
          ←
        </button>

        <div className="text-center">

         

          <h2 className="mt-5 text-3xl font-bold">
            {contestant.name}
          </h2>

          <p className="text-gray-300">
            Age {contestant.age}
          </p>

          <p className="mt-2 text-yellow-400 font-bold text-lg">
            🔥 {contestant.votes} Votes
          </p>

        </div>

        <button
          onClick={next}
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20"
        >
          →
        </button>

      </div>

    </section>
  );
}
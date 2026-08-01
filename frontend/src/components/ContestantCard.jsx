import { useState } from "react";

const contestants = [
  {
    name: "Yip Pin Xiu",
    age: 32,
    votes: "127,451",
    image: "/contestants/yip-pin-xiu.jpg",
  },
  {
    name: "Ning Cai",
    age: 30,
    votes: "112,638",
    image: "/contestants/ning-cai.jpg",
  },
  {
    name: "Maurice Baker",
    age: 37,
    votes: "98,421",
    image: "/contestants/maurice-baker.jpg",
  },
  {
    name: "Ben Yeo",
    age: 53,
    votes: "87,564",
    image: "/contestants/ben-yeo.jpg",
  },
  {
    name: "Anthony Chen",
    age: 46,
    votes: "75,410",
    image: "/contestants/anthony-chen.jpg",
  },
];

export default function ContestantCard() {
  const [current, setCurrent] = useState(0);

  const contestant = contestants[current];

  const next = () =>
    setCurrent((current + 1) % contestants.length);

  const prev = () =>
    setCurrent((current - 1 + contestants.length) % contestants.length);

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

          <img
            src={contestant.image}
            alt={contestant.name}
            className="w-44 h-44 object-cover rounded-3xl shadow-2xl border-4 border-white/20"
          />

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
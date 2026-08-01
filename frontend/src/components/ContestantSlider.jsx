import { useState } from "react";
import contestants from "../data/contestants";

export default function ContestantSlider() {
  const [current, setCurrent] = useState(0);
  const [showPlatforms, setShowPlatforms] = useState(false);

  const contestant = contestants[current];

  const next = () => {
    setCurrent((current + 1) % contestants.length);
    setShowPlatforms(false);
  };

  const prev = () => {
    setCurrent((current - 1 + contestants.length) % contestants.length);
    setShowPlatforms(false);
  };

  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "40px",
        background: "#fff",
        borderRadius: "25px",
        boxShadow: "0 15px 40px rgba(0,0,0,.08)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button onClick={prev}>⬅️</button>

        <img
          src={contestant.image}
          alt={contestant.name}
          style={{
            width: "320px",
            height: "320px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        <button onClick={next}>➡️</button>
      </div>

      <h2>{contestant.name}</h2>

      <p>Age {contestant.age}</p>

      <h3>🔥 {contestant.votes.toLocaleString()} Votes</h3>

      <button
        onClick={() => setShowPlatforms(!showPlatforms)}
        style={{
          marginTop: "20px",
          padding: "15px 40px",
          background: "#D4AF37",
          color: "#fff",
          border: "none",
          borderRadius: "15px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Vote Now
      </button>

      {showPlatforms && (
        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gap: "15px",
            maxWidth: "350px",
            marginInline: "auto",
          }}
        >
          <button>📸 Instagram</button>
          <button>📘 Facebook</button>
          <button>🎵 TikTok</button>
          <button>🐦 X</button>
          <button>▶️ YouTube</button>
        </div>
      )}
    </section>
  );
}
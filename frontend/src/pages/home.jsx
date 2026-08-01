export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "40px",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: "10px"
        }}
      >
        MasterChef SG
      </h1>

      <p
        style={{
          color: "#cccccc",
          fontSize: "1.2rem",
          marginBottom: "40px"
        }}
      >
        Vote for your favourite contestant
      </p>

      <h2
        style={{
          fontSize: "4rem",
          color: "#ffb000"
        }}
      >
        124,859
      </h2>

      <p>Live Votes</p>
    </main>
  );
}
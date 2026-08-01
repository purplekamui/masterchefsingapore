import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContestantCard from "./components/ContestantCard";
import PlatformCards from "./components/PlatformCards";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedLocation = localStorage.getItem("voteLocation");

    if (savedLocation) {
      setLocation(savedLocation);
      setSaved(true);
    }
  }, []);

  function saveLocation() {
    if (!location) {
      alert("Please select your location.");
      return;
    }

    localStorage.setItem("voteLocation", location);
    setSaved(true);
  }

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.85)), url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      <Hero />

      <div className="flex justify-center px-5 mt-4">
        <div className="w-full max-w-sm bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10">

          <h3 className="text-center font-semibold mb-3">
            Select Your Location
          </h3>

          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setSaved(false);
            }}
            className="w-full h-11 rounded-xl bg-[#1d1f25] border border-gray-700 px-3 text-white outline-none"
          >
            <option value="">Choose your country</option>
            <option>singapore</option>
            <option>china</option>
            <option>thailand</option>
            <option>india</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>United States</option>
            <option>Germany</option>
            <option>France</option>
            <option>netherland</option>
            <option>japan</option>
            <option>vietnam</option>
            <option>nepal</option>
            <option>laos</option>
            <option>malaysia</option>
            <option>pakistan</option>
            <option>Other</option>
          </select>

          <button
            onClick={saveLocation}
            className={`w-full mt-3 h-11 rounded-xl font-semibold transition ${
              saved
                ? "bg-green-600"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {saved ? "✅ Saved" : "Save Location"}
          </button>
        </div>
      </div>

      <ContestantCard />
      <PlatformCards />
      <HowItWorks />
      <Footer />
    </div>
  );
}
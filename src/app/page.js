"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  const hoverSound = useRef(null);
  const bgMusic = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  // Load saved mute state from localStorage and attempt autoplay
  useEffect(() => {
    const savedMute = localStorage.getItem("bg-muted");
    // If no preference is saved, default to UNMUTED (false)
    const muted = savedMute === "true";
    setIsMuted(muted);

    const startPlayback = () => {
      if (bgMusic.current) {
        bgMusic.current.muted = muted;
        bgMusic.current.volume = 0.6;
        bgMusic.current.play().catch((err) => {
          console.log("Autoplay prevented, waiting for interaction", err);
        });
      }
    };

    startPlayback();

    // Fallback: Start playback on first user interaction if it was blocked
    const handleFirstInteraction = () => {
      if (bgMusic.current && bgMusic.current.paused && !muted) {
        bgMusic.current.play().catch(err => console.log("Playback failed on interaction:", err));
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  // Play hover sound
  const playHoverSound = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play();
    }
  };

  // Toggle mute/unmute for background music
  const toggleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);

    if (bgMusic.current) {
      bgMusic.current.muted = newMuteState;
      if (!newMuteState) {
        // Play only after user clicks unmute
        bgMusic.current
          .play()
          .catch((err) => console.log("Playback blocked:", err));
      }
    }

    localStorage.setItem("bg-muted", newMuteState);
  };

  return (
    <div
      className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{
        cursor: "url('/assets/cursor1-1.cur'), auto",
      }}

    >
      {/* Background Music */}
      <audio ref={bgMusic} loop>
        <source src="/assets/BGloop2.mp3" type="audio/mpeg" />
      </audio>

      {/* Hover Sound */}
      <audio ref={hoverSound} src="/assets/hover1.mp3" preload="auto" />

      {/* ❄️ Snow Effect Overlay */}
      <div className="snow-overlay pointer-events-none absolute inset-0 z-30"></div>

      {/* Diagonal Crack Divider */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-transparent">
          <div className="absolute inset-0 w-full h-full diagonal-crack"></div>
        </div>
      </div>

      {/* Left Side – Enid Innovations */}
      <div
        onMouseEnter={playHoverSound}
        onClick={() => router.push("/innovations")}
        className="relative z-20 group flex-1 flex items-center justify-center cursor-pointer transition-all duration-700 transform hover:scale-[1.03] overflow-hidden"
        style={{ cursor: "url('/assets/cursor1-1.cur'), auto" }}
      >
        <Image
          src="/assets/B1.jpg"
          alt="Enid Innovations background"
          fill
          className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-700"
          priority
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 text-shadow">
            Enid Innovations
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 text-shadow">
            Smart BPO & IT Solutions
          </p>
        </div>
      </div>

      {/* Right Side – Enid Studio */}
      <div
        onMouseEnter={playHoverSound}
        onClick={() => router.push("/studio")}
        className="relative z-20 group flex-1 flex items-center justify-center cursor-pointer transition-all duration-700 transform hover:scale-[1.03] overflow-hidden"
        style={{ cursor: "url('/assets/cursor1-1.cur'), auto" }}
      >
        <Image
          src="/assets/B2.jpg"
          alt="Enid Studio background"
          fill
          className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-700"
          priority
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 text-shadow">
            Enid Studio
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 text-shadow">
            Creative & Visual Production
          </p>
        </div>
      </div>

      {/* 🔈 Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-5 right-5 z-50 cursor-pointer bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>


      {/* CSS Styles */}
      <style jsx>{`
        .snow-overlay {
          background-image: url("/assets/snow2.gif");
          background-repeat: repeat;
          background-size: 400px;
          opacity: 0.25;
          animation: snowDrift 45s linear infinite;
        }

        @keyframes snowDrift {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: -100px 1000px;
          }
        }

        .text-shadow {
          text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.6);
        }

        .diagonal-crack {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            transparent 48%,
            #ffffff 49%,
            #ff0033 50%,
            #00a86b 51%,
            transparent 52%
          );
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
          clip-path: polygon(
            50% 0%,
            52% 10%,
            48% 25%,
            53% 40%,
            47% 60%,
            52% 80%,
            50% 100%
          );
          mix-blend-mode: screen;
          opacity: 0.9;
          animation: flicker 4s infinite ease-in-out;
        }

        @keyframes flicker {
          0%,
          95%,
          100% {
            opacity: 0.9;
            filter: brightness(1);
          }
          96% {
            opacity: 1;
            filter: brightness(2);
          }
          97% {
            opacity: 0.7;
            filter: brightness(1.5);
          }
          98% {
            opacity: 1;
            filter: brightness(2.2);
          }
        }
      `}</style>

    </div>
  );
}

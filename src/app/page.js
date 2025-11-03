"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-center bg-no-repeat bg-cover bg-fixed bg-[/assets/spider-web]">
      {/* Overlay to darken or adjust visibility if needed */}
      <div className="absolute inset-0 bg-white/10 z-0"></div>

      {/* Diagonal Crack Divider */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-transparent">
          <div className="absolute inset-0 w-full h-full diagonal-crack"></div>
        </div>
      </div>

      {/* Left Side – Enid Studio */}
      <div
        onClick={() => router.push("/innovations")}
        className="z-20 group flex-1 flex items-center justify-center bg-gradient-to-br from-[#00A86B] via-[#FF4B2B] to-[#00995E] cursor-pointer relative transition-all duration-700 transform hover:scale-[1.03]"
      >
        <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-700" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3">Enid Innovations</h1>
          <p className="text-lg md:text-xl font-light opacity-90">
            Smart BPO & IT Solutions
          </p>
        </div>
      </div>

      {/* Right Side – Enid Innovations */}
      <div
        onClick={() => router.push("/studio")}
        className="z-20 group flex-1 flex items-center justify-center bg-[#3a3a3a] cursor-pointer relative transition-all duration-700 transform hover:scale-[1.03]"
      >
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-700" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3">Enid Studio</h1>
          <p className="text-lg md:text-xl font-light opacity-90">
            Creative & Visual Production
          </p>
        </div>
      </div>

      {/* CSS styles */}
      <style jsx>{`
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
          clip-path: polygon(50% 0%, 52% 10%, 48% 25%, 53% 40%, 47% 60%, 52% 80%, 50% 100%);
          mix-blend-mode: screen;
          opacity: 0.9;
          animation: flicker 4s infinite ease-in-out;
        }

        @keyframes flicker {
          0%, 95%, 100% { opacity: 0.9; filter: brightness(1); }
          96% { opacity: 1; filter: brightness(2); }
          97% { opacity: 0.7; filter: brightness(1.5); }
          98% { opacity: 1; filter: brightness(2.2); }
        }
      `}</style>
    </div>
  );
}

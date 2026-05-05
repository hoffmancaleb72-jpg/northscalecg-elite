"use client";

import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import MountainMark from "@/components/MountainMark";

const appearance = {
  variables: {
    colorPrimary: "#f59e0b",
    colorBackground: "#1a1d27",
    colorText: "#f5f5f5",
    colorTextSecondary: "#8b8fa8",
    colorInputBackground: "#0f1117",
    colorInputText: "#f5f5f5",
    colorNeutral: "#2a2d3a",
    borderRadius: "6px",
    fontFamily: "Inter, sans-serif",
  },
};

const MOUNTAIN_STRIP = "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1920&q=75";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ns-bg">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="flex flex-col items-center gap-4 mb-8">
          <Link href="/" className="text-ns-gold">
            <MountainMark />
          </Link>
          <h1 className="text-2xl font-black text-ns-text" style={{ letterSpacing: "-0.03em" }}>
            Welcome back.
          </h1>
        </div>
        <SignIn
          appearance={appearance}
          signUpUrl="/signup"
          fallbackRedirectUrl="/dashboard"
        />
        <p className="text-sm text-ns-muted mt-6">
          Not a NorthScale client?{" "}
          <a
            href="https://northscalecg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ns-gold hover:text-ns-gold-hover transition-colors"
          >
            northscalecg.com ↗
          </a>
        </p>
      </div>

      {/* Mountain strip */}
      <div className="relative overflow-hidden shrink-0" style={{ height: "180px" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${MOUNTAIN_STRIP}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(8,10,18,0.88)" }} />
      </div>
    </div>
  );
}

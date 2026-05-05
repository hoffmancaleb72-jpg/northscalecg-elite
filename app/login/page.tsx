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

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-ns-bg">
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
  );
}

"use client";

import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
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

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-ns-bg">
      <div className="flex flex-col items-center gap-4 mb-8">
        <Link href="/" className="text-ns-gold">
          <MountainMark />
        </Link>
        <div className="text-center">
          <h1 className="text-2xl font-black text-ns-text" style={{ letterSpacing: "-0.03em" }}>
            Activate your account.
          </h1>
          <p className="text-sm text-ns-muted mt-1">
            Available exclusively to NorthScale clients.
          </p>
        </div>
      </div>
      <SignUp
        appearance={appearance}
        signInUrl="/login"
        fallbackRedirectUrl="/dashboard"
      />
    </div>
  );
}

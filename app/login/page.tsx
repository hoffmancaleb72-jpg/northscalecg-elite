"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import MountainMark from "@/components/MountainMark";
import Button from "@/components/Button";
import Input from "@/components/Input";

const MOUNTAIN_STRIP =
  "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1920&q=75";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ns-bg">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="flex flex-col items-center gap-4 mb-8">
          <Link href="/" className="text-ns-gold">
            <MountainMark />
          </Link>
          <h1
            className="text-2xl font-black text-ns-text"
            style={{ letterSpacing: "-0.03em" }}
          >
            Welcome back.
          </h1>
        </div>

        <div className="w-full max-w-sm rounded-lg border border-ns-border bg-ns-surface p-8">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              required
              placeholder="jake@acmeroofing.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
            <Button type="submit" className="w-full mt-2 py-3">
              {loading ? "Signing in..." : "Sign in →"}
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-ns-muted mt-6">
          Need an account?{" "}
          <Link
            href="/signup"
            className="text-ns-gold hover:text-ns-gold-hover transition-colors"
          >
            Activate your portal
          </Link>
        </p>
        <p className="text-center text-sm text-ns-muted mt-2">
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

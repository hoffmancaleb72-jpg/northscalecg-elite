"use client";

import { useState } from "react";
import Link from "next/link";
import MountainMark from "@/components/MountainMark";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-ns-bg">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-6 mb-10">
          <Link href="/" className="text-ns-gold">
            <MountainMark />
          </Link>
          <h1 className="text-2xl font-black text-ns-text" style={{ letterSpacing: "-0.03em" }}>
            Welcome back.
          </h1>
        </div>

        <div className="rounded-lg border border-ns-border bg-ns-surface p-8">
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              required
              placeholder="jake@acmeroofing.com"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
            />
            <Button type="submit" className="w-full mt-2 py-3">
              Sign in →
            </Button>
          </form>
          <div className="mt-4 text-center">
            <button className="text-sm text-ns-muted hover:text-ns-text transition-colors cursor-pointer">
              Forgot your password?
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-ns-muted mt-6">
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
    </div>
  );
}

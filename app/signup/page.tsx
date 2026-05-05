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

type Step = 1 | 2;

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    businessName: "",
    trade: "",
    yearsInBusiness: "",
    monthlyRevenue: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.fullName,
          business_name: form.businessName,
          trade: form.trade,
          years_in_business: form.yearsInBusiness,
          monthly_revenue: form.monthlyRevenue,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  const selectClass =
    "w-full rounded bg-ns-bg border border-ns-border px-3.5 py-2.5 text-sm text-ns-text focus:outline-none focus:ring-2 focus:ring-ns-gold transition-colors appearance-none";

  return (
    <div className="min-h-screen flex flex-col bg-ns-bg">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="flex flex-col items-center gap-6 mb-8">
          <Link href="/" className="text-ns-gold">
            <MountainMark />
          </Link>
          <div className="text-center">
            <h1
              className="text-2xl font-black text-ns-text"
              style={{ letterSpacing: "-0.03em" }}
            >
              {step === 1 ? "Activate your account." : "Tell us about your business."}
            </h1>
            {step === 1 && (
              <p className="text-sm text-ns-muted mt-1">
                Available exclusively to NorthScale clients.
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <div className={`h-1 w-12 rounded-full transition-colors ${step >= 1 ? "bg-ns-gold" : "bg-ns-border"}`} />
            <div className={`h-1 w-12 rounded-full transition-colors ${step >= 2 ? "bg-ns-gold" : "bg-ns-border"}`} />
          </div>
        </div>

        <div className="w-full max-w-sm rounded-lg border border-ns-border bg-ns-surface p-8">
          {step === 1 ? (
            <form className="flex flex-col gap-5" onSubmit={handleStep1}>
              <Input
                label="Full name"
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Jake Morrison"
                value={form.fullName}
                onChange={handleChange}
              />
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
                Continue →
              </Button>
            </form>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleStep2}>
              <Input
                label="Business name"
                id="businessName"
                name="businessName"
                type="text"
                required
                placeholder="Acme Roofing"
                value={form.businessName}
                onChange={handleChange}
              />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="trade" className="text-sm font-medium text-ns-muted">Trade</label>
                <select id="trade" name="trade" required value={form.trade} onChange={handleChange} className={selectClass}>
                  <option value="">Select your trade</option>
                  <option value="roofing">Roofing</option>
                  <option value="hvac">HVAC</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="general">General Contracting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="yearsInBusiness" className="text-sm font-medium text-ns-muted">Years in business</label>
                <select id="yearsInBusiness" name="yearsInBusiness" required value={form.yearsInBusiness} onChange={handleChange} className={selectClass}>
                  <option value="">Select range</option>
                  <option value="under-2">Under 2</option>
                  <option value="2-5">2–5</option>
                  <option value="5-10">5–10</option>
                  <option value="10+">10+</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="monthlyRevenue" className="text-sm font-medium text-ns-muted">Monthly revenue</label>
                <select id="monthlyRevenue" name="monthlyRevenue" required value={form.monthlyRevenue} onChange={handleChange} className={selectClass}>
                  <option value="">Select range</option>
                  <option value="under-50k">Under $50K</option>
                  <option value="50k-150k">$50K–$150K</option>
                  <option value="150k-500k">$150K–$500K</option>
                  <option value="500k+">$500K+</option>
                </select>
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <div className="flex flex-col gap-3 mt-2">
                <Button type="submit" className="w-full py-3">
                  {loading ? "Activating..." : "Activate portal →"}
                </Button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-ns-muted hover:text-ns-text transition-colors"
                >
                  ← Back
                </button>
              </div>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-ns-muted mt-6">
          Already have access?{" "}
          <Link href="/login" className="text-ns-gold hover:text-ns-gold-hover transition-colors">
            Sign in
          </Link>
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

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import MountainMark from "@/components/MountainMark";
import Footer from "@/components/Footer";
import SignOutButton from "@/components/SignOutButton";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const meta = user.user_metadata as {
    full_name?: string;
    business_name?: string;
    trade?: string;
  };

  return (
    <>
      <nav className="border-b border-ns-border bg-ns-bg">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-ns-gold">
            <MountainMark />
            <span className="text-ns-text font-semibold tracking-tight text-sm">
              Consulting<span className="text-ns-gold">·</span>Elite
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-ns-muted">
              {meta?.full_name ?? user.email}
              {meta?.business_name ? ` · ${meta.business_name}` : ""}
            </span>
            <SignOutButton />
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-2 mb-12">
          <h1
            className="text-3xl font-black text-ns-text"
            style={{ letterSpacing: "-0.03em" }}
          >
            Your portal.
          </h1>
          <p className="text-ns-muted">
            {meta?.business_name
              ? `Everything NorthScale built for ${meta.business_name}.`
              : "Everything NorthScale built for your business."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Pipeline", desc: "Your active deals and follow-ups." },
            { label: "Client Records", desc: "Every system we installed." },
            { label: "Communication Log", desc: "Your history with NorthScale." },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-ns-border bg-ns-surface p-8 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold tracking-widest uppercase text-ns-gold">
                  {item.label}
                </h2>
                <span className="text-xs text-ns-muted border border-ns-border rounded px-2 py-0.5">
                  Coming soon
                </span>
              </div>
              <p className="text-sm text-ns-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

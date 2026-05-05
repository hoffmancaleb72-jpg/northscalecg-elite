import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="mx-auto max-w-4xl text-center flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl sm:text-7xl font-black leading-[1.05]" style={{ letterSpacing: "-0.03em" }}>
              Every job. Every follow-up.{" "}
              <span className="text-ns-gold">Every system we built for you.</span>
            </h1>
            <p className="text-lg text-ns-muted max-w-xl mx-auto">
              Your NorthScale engagement, in one place.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/signup" className="text-base px-8 py-3.5">
              Activate your portal →
            </Button>
            <Button href="#features" variant="ghost" className="text-base px-8 py-3.5">
              See what&apos;s inside
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6" style={{ backgroundColor: "rgba(26,29,39,0.3)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              number="01"
              title="Pipeline"
              headline="Every deal at a glance."
              body="Track every quote, follow-up, and close. Know exactly where every job stands — without calling anyone."
            />
            <FeatureCard
              number="02"
              title="Client Records"
              headline="The full picture of your business."
              body="Every system NorthScale installed. Every note, every implementation, every commitment — searchable and yours."
            />
            <FeatureCard
              number="03"
              title="Access Gating"
              headline="Your portal. Your terms."
              body="Included with your NorthScale retainer. If your subscription lapses, access is automatically suspended. No grey area."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="text-center flex flex-col gap-3 mb-12">
            <h2 className="text-3xl font-black text-ns-text" style={{ letterSpacing: "-0.03em" }}>
              Included with your NorthScale engagement.
            </h2>
            <p className="text-ns-muted">
              No extra cost. No separate login. Part of the system.
            </p>
          </div>
          <div className="rounded-lg border bg-ns-surface p-8 flex flex-col gap-6" style={{ borderColor: "rgba(245,158,11,0.3)" }}>
            <span className="text-xs font-semibold tracking-widest uppercase text-ns-gold">
              NorthScale Client Access — Complimentary
            </span>
            <ul className="flex flex-col gap-3">
              {[
                "Job pipeline & deal tracking",
                "Full implementation history",
                "NorthScale communication log",
                "Stripe-gated access",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ns-text">
                  <span className="w-1.5 h-1.5 rounded-full bg-ns-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-ns-border">
              <Button href="/signup" className="w-full text-base py-3.5">
                Activate your portal →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="py-20 px-6 bg-ns-surface border-y border-ns-border">
        <div className="mx-auto max-w-4xl text-center flex flex-col gap-8">
          <h2 className="text-3xl sm:text-5xl font-black text-ns-text" style={{ letterSpacing: "-0.03em" }}>
            Built for contractors who close jobs,{" "}
            <span className="text-ns-gold">not decks.</span>
          </h2>
          <div>
            <Button href="/signup" className="text-base px-10 py-4">
              Activate your portal →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

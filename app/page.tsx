import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";

const HERO_BG = "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1920&q=85";
const QUOTE_BG = "https://images.unsplash.com/photo-1484302564-55209eb33b49?auto=format&fit=crop&w=1920&q=80";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero — Alps photo full bleed */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 pt-16"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,10,18,0.45) 0%, rgba(8,10,18,0.15) 35%, rgba(8,10,18,0.80) 78%, #0c0e14 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1
              className="text-5xl sm:text-7xl font-black leading-[1.05] text-ns-text"
              style={{ letterSpacing: "-0.03em" }}
            >
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
      <section
        id="features"
        className="py-24 px-6"
        style={{ backgroundColor: "#0c0e14" }}
      >
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

      {/* Quote band — Dolomites photo */}
      <section className="relative overflow-hidden" style={{ height: "220px" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${QUOTE_BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 55%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0c0e14 0%, rgba(12,14,20,0.3) 30%, rgba(12,14,20,0.3) 70%, #0c0e14 100%)",
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <p
            className="text-xl sm:text-2xl font-black text-center text-ns-text max-w-2xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Every deal tracked. Every job accounted for.{" "}
            <span className="text-ns-gold">Every system documented.</span>
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0c0e14" }}>
        <div className="mx-auto max-w-2xl">
          <div className="text-center flex flex-col gap-3 mb-12">
            <h2
              className="text-3xl font-black text-ns-text"
              style={{ letterSpacing: "-0.03em" }}
            >
              Included with your NorthScale engagement.
            </h2>
            <p className="text-ns-muted">
              No extra cost. No separate login. Part of the system.
            </p>
          </div>
          <div
            className="rounded-lg border bg-ns-surface p-8 flex flex-col gap-6"
            style={{ borderColor: "rgba(245,158,11,0.3)" }}
          >
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
          <h2
            className="text-3xl sm:text-5xl font-black text-ns-text"
            style={{ letterSpacing: "-0.03em" }}
          >
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

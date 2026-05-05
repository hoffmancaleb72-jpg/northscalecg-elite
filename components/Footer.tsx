import Link from "next/link";
import MountainMark from "./MountainMark";

export default function Footer() {
  return (
    <footer className="border-t border-ns-border bg-ns-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5 text-ns-gold">
            <MountainMark />
            <span className="text-ns-text font-semibold tracking-tight text-sm">
              Consulting<span className="text-ns-gold">·</span>Elite
            </span>
          </div>
          <div className="text-sm text-ns-muted flex flex-col gap-1 sm:text-right">
            <span>
              NorthScale · Northern Illinois ·{" "}
              <a
                href="mailto:info@northscalecg.com"
                className="hover:text-ns-gold transition-colors"
              >
                info@northscalecg.com
              </a>{" "}
              · 2026
            </span>
            <Link
              href="https://northscalecg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ns-gold transition-colors"
            >
              northscalecg.com ↗
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-ns-border text-center text-xs text-ns-muted">
          Built for contractors. Not consultants.
        </div>
      </div>
    </footer>
  );
}

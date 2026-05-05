import Link from "next/link";
import MountainMark from "./MountainMark";
import Button from "./Button";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-ns-border bg-ns-bg/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-ns-gold">
          <MountainMark />
          <span className="text-ns-text font-semibold tracking-tight text-sm">
            Consulting<span className="text-ns-gold">·</span>Elite
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Button href="/login" variant="ghost">
            Sign in
          </Button>
          <Button href="/signup">Activate your portal →</Button>
        </div>
      </div>
    </nav>
  );
}

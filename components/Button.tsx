import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "gold" | "ghost";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({
  href,
  variant = "gold",
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded text-sm font-semibold tracking-tight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ns-gold cursor-pointer";

  const variants = {
    gold: "bg-ns-gold text-ns-bg hover:bg-ns-gold-hover",
    ghost: "border border-ns-border text-ns-text hover:border-ns-muted",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

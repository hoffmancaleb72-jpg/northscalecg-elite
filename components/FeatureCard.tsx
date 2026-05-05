type FeatureCardProps = {
  number: string;
  title: string;
  headline: string;
  body: string;
};

export default function FeatureCard({ number, title, headline, body }: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-ns-border bg-ns-surface p-8 flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <span className="text-xs font-mono text-ns-gold opacity-60 mt-1 shrink-0">{number}</span>
        <div className="flex flex-col gap-1">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-ns-gold">
            {title}
          </h3>
          <p className="text-lg font-bold tracking-tight text-ns-text">{headline}</p>
        </div>
      </div>
      <p className="text-sm text-ns-muted leading-relaxed pl-8">{body}</p>
    </div>
  );
}

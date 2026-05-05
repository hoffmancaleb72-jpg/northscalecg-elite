type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ns-muted">
        {label}
      </label>
      <input
        id={id}
        className="w-full rounded bg-ns-bg border border-ns-border px-3.5 py-2.5 text-sm text-ns-text placeholder:text-ns-muted focus:outline-none focus:ring-2 focus:ring-ns-gold transition-colors"
        {...props}
      />
    </div>
  );
}

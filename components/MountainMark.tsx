export default function MountainMark({ className = "w-10 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 26"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon points="0,26 12,6 24,26" />
      <polygon points="16,26 28,2 40,26" />
    </svg>
  );
}

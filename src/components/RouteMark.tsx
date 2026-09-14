export function RouteMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 72"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 36h42l18-18h48l16 32h40l18-14h22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="36" r="3.5" fill="currentColor" />
      <circle cx="68" cy="18" r="3.5" fill="currentColor" />
      <circle cx="132" cy="50" r="3.5" fill="currentColor" />
      <circle cx="212" cy="36" r="3.5" fill="currentColor" />
    </svg>
  );
}
